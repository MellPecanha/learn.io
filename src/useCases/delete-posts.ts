import { IPostsRepository } from '@/repositories/posts.repository.interface'
import { ResourceNotFoundError } from './errors/resource-not-found-error'

export class DeletePostsUseCase {
  constructor(private postsRepository: IPostsRepository) {}

  async execute(id: number): Promise<void> {
    const post = await this.postsRepository.findById(id)

    if (!post) {
      throw new ResourceNotFoundError()
    }

    return this.postsRepository.delete(id)
  }
}
