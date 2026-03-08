import { IPosts } from '@/entities/models/posts.interface'
import { IPostsRepository } from '../posts.repository.interface'
import { Posts } from '@/entities/posts.entity'
import { Repository } from 'typeorm'
import { appDataSource } from '@/lib/typeorm/typeorm'

export class PostsRepository implements IPostsRepository {
  private repository: Repository<Posts>

  constructor() {
    this.repository = appDataSource.getRepository(Posts)
  }

  async findAll(page: number, limit: number): Promise<IPosts[]> {
    return this.repository.find({
      skip: (page - 1) * limit,
      take: limit,
    })
  }

  async findById(id: number): Promise<IPosts | null> {
    return this.repository.findOne({
      where: {
        id,
      },
    })
  }

  async create(posts: IPosts): Promise<IPosts> {
    return this.repository.save(posts)
  }

  async update(posts: IPosts): Promise<IPosts> {
    return this.repository.save(posts)
  }

  async delete(id: number): Promise<void> {
    await this.repository.delete(id)
  }
}
