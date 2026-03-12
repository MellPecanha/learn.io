import { PostsRepository } from '@/repositories/typeorm/posts.repository'
import { DeletePostsUseCase } from '../delete-posts'

export function makeDeletePostUseCase() {
  const postsRepository = new PostsRepository()
  const deletePostsUseCase = new DeletePostsUseCase(postsRepository)
  return deletePostsUseCase
}
