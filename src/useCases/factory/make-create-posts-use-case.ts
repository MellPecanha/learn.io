import { PostsRepository } from '@/repositories/typeorm/posts.repository'
import { CreatePostsUseCase } from '../create-posts'

export function makeCreatePostsUseCase() {
  const postsRepository = new PostsRepository()
  const createPostsUseCase = new CreatePostsUseCase(postsRepository)
  return createPostsUseCase
}
