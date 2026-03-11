import { IPosts } from '@/entities/models/posts.interface'
import { IPostsRepository } from '@/repositories/posts.repository.interface'
import { ResourceNotFoundError } from './errors/resource-not-found-error'

export class UpdatePostsUseCase {
  constructor(private postsRepository: IPostsRepository) {}

  async execute(posts: IPosts): Promise<IPosts> {
    if (!posts.id) {
      throw new ResourceNotFoundError()
    }

    const post = await this.postsRepository.findById(posts.id)

    if (!post) {
      throw new ResourceNotFoundError()
    }

    return this.postsRepository.update(posts)
  }
}
