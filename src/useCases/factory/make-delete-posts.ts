import { PostsRepository } from '@/repositories/typeorm/posts.repository'
import { DeletePostsUseCase } from '../delete-posts'

export function makeDeletePostsUseCase() {
  const postsRepository = new PostsRepository()
  const deletePostsUseCase = new DeletePostsUseCase(postsRepository)
  return deletePostsUseCase
}
