import { IPosts } from '@/entities/models/posts.interface'
import { IPostsRepository } from '../posts.repository.interface'
import { Posts } from '@/entities/posts.entity'
import { Person } from '@/entities/person.entity'
import { ILike, Repository } from 'typeorm'
import { appDataSource } from '@/lib/typeorm/typeorm'
import { InvalidRelationError } from '@/useCases/errors/invalid-relation-error'

export class PostsRepository implements IPostsRepository {
  private repository: Repository<Posts>
  private personRepository: Repository<Person>

  constructor() {
    this.repository = appDataSource.getRepository(Posts)
    this.personRepository = appDataSource.getRepository(Person)
  }

  private getAuthorId(author: IPosts['author_id']): number | undefined {
    if (!author) return undefined

    if (typeof author === 'number') {
      return author
    }

    return author.id
  }

  private async validateAuthorExists(
    author: IPosts['author_id'],
  ): Promise<number | undefined> {
    const authorId = this.getAuthorId(author)

    if (!authorId) return undefined

    const existingAuthor = await this.personRepository.findOne({
      where: { id: authorId },
    })

    if (!existingAuthor) {
      throw new InvalidRelationError()
    }

    return authorId
  }

  async findAll(page: number, limit: number): Promise<IPosts[]> {
    return this.repository.find({
      relations: ['author_id'],
      skip: (page - 1) * limit,
      take: limit,
    })
  }

  async findById(id: number): Promise<IPosts | null> {
    return this.repository.findOne({
      relations: ['author_id'],
      where: {
        id,
      },
    })
  }

  async search(query: string): Promise<IPosts[]> {
    return this.repository.find({
      relations: ['author_id'],
      where: [
        { title: ILike(`%${query}%`) }, // Busca no título
        { content: ILike(`%${query}%`) }, // Busca no conteúdo
      ],
    })
  }

  async create(posts: IPosts): Promise<IPosts> {
    const authorId = await this.validateAuthorExists(posts.author_id)

    return await this.repository.save({
      ...posts,
      author_id: authorId as never,
    })
  }

  async update(posts: IPosts): Promise<IPosts> {
    const post = await this.findById(posts.id!)
    const updatedPost = this.repository.merge(post!, posts)
    const authorId = await this.validateAuthorExists(updatedPost.author_id)

    return await this.repository.save({
      ...updatedPost,
      author_id: authorId as never,
    })
  }

  async delete(id: number): Promise<void> {
    await this.repository.delete(id)
  }
}
