import { PostsRepository } from '@/repositories/typeorm/posts.repository'
import { UpdatePostsUseCase } from '../update-posts'

export function makeUpdatePostsUseCase() {
  const postsRepository = new PostsRepository()
  const updatePostsUseCase = new UpdatePostsUseCase(postsRepository)
  return updatePostsUseCase
}
