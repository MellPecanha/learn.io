import { FastifyInstance } from 'fastify'
import { findAllPosts } from './find-all-posts'
import { createPost } from './create-posts'

export async function postsRoutes(app: FastifyInstance) {
  app.get('/posts', findAllPosts)
  app.post('/posts', createPost)
}
