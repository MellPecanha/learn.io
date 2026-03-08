import { FastifyInstance } from 'fastify'
import { findAllPosts } from './find-all-posts'

export async function postsRoutes(app: FastifyInstance) {
  app.get('/posts', findAllPosts)
}
