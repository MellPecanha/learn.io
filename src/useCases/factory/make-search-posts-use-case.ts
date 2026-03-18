import { PostsRepository } from '@/repositories/typeorm/posts.repository'
import { SearchPostsUseCase } from '../search-posts'

export function makeSearchPostsUseCase() {
  const postsRepository = new PostsRepository()
  const searchPostsUseCase = new SearchPostsUseCase(postsRepository)
  return searchPostsUseCase
}
