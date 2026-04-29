import { IPosts } from '@/entities/models/posts.interface'
import { IPostsRepository } from '@/repositories/posts.repository.interface'
import { ResourceNotFoundError } from './errors/resource-not-found-error'
import { UserRole } from '@/entities/enums/user-role'
import { UnauthorizedError } from './errors/UnauthorizedError'
import { Repository } from 'typeorm'

export class UpdatePostsUseCase {
  constructor(private postsRepository: IPostsRepository) {}
  private repository: Repository<IPosts>

  async execute(posts: IPosts, role: string): Promise<IPosts> {
    if (!posts.id) {
      throw new ResourceNotFoundError()
    }

    const post = await this.postsRepository.findById(posts.id)

    if (!post) {
      throw new ResourceNotFoundError()
    }

    if (role !== UserRole.PROFESSOR) {
      throw new UnauthorizedError()
    }

    return this.postsRepository.update(posts)
  }
}
