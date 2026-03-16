import { PostsRepository } from '@/repositories/typeorm/posts.repository'
import { FindAllPostsUseCase } from '../find-all-posts'

export function makeFindAllPostsUseCase() {
  const postsRepository = new PostsRepository()
  const findAllPostsUseCase = new FindAllPostsUseCase(postsRepository)
  return findAllPostsUseCase
}
