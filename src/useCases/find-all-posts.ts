import { IPosts } from '@/entities/models/posts.interface'
import { IPostsRepository } from '@/repositories/posts.repository.interface'

export class FindAllPostsUseCase {
  constructor(private postsRepository: IPostsRepository) {}

  async execute(page: number, limit: number): Promise<IPosts[]> {
    return this.postsRepository.findAll(page, limit)
  }
}
