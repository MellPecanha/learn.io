import { IPosts } from '@/entities/models/posts.interface'
import { IPostsRepository } from '@/repositories/posts.repository.interface'

export class CreatePostsUseCase {
  constructor(private postsRepository: IPostsRepository) {}

  async execute(posts: IPosts): Promise<IPosts> {
    return this.postsRepository.create(posts)
  }
}
