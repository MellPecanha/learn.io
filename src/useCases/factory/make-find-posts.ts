import { PostsRepository } from '@/repositories/typeorm/posts.repository'
import { FindPostsUseCase } from '../find-posts'

export function makeFindPostsUseCase() {
  const postsRepository = new PostsRepository()
  const findPostsUseCase = new FindPostsUseCase(postsRepository)
  return findPostsUseCase
}
