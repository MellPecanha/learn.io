import { IPostsRepository } from '@/repositories/posts.repository.interface'
import { ResourceNotFoundError } from './errors/resource-not-found-error'

export class FindPostsUseCase {
  constructor(private postsRepository: IPostsRepository) {}

  async execute(id: number) {
    const post = await this.postsRepository.findById(id)

    if (!post) throw new ResourceNotFoundError()

    return post
  }
}
