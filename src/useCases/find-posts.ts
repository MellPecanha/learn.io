import { IPosts } from '@/entities/models/posts.interface'
import { IPostsRepository } from '@/repositories/posts.repository.interface'

export class FindPostsUseCase {
  constructor(private postsRepository: IPostsRepository) {}

  async execute(id: number): Promise<IPosts | null> {
    return this.postsRepository.findById(id)
  }
}
