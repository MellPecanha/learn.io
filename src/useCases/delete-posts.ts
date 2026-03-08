import { IPostsRepository } from '@/repositories/posts.repository.interface'

export class DeletePostsUseCase {
  constructor(private postsRepository: IPostsRepository) {}

  async execute(id: number): Promise<void> {
    return this.postsRepository.delete(id)
  }
}
