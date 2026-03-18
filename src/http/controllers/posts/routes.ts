import { FastifyInstance } from 'fastify'
import { findAllPosts } from './find-all-posts'
import { createPost } from './create-posts'
import { findPost } from './find-post'
import { updatePosts } from './update-posts'
import { deletePost } from './delete-posts'
import { validateJwt } from '@/http/middlewares/jwt-validate'
import { searchPosts } from './search-posts'

export async function postsRoutes(app: FastifyInstance) {
  app.get('/posts', { preHandler: [validateJwt] }, findAllPosts)
  app.get('/posts/:id', findPost)
  app.get('/posts/search', searchPosts)
  app.post('/posts', createPost)
  app.put('/posts/:id', updatePosts)
  app.delete('/posts/:id', deletePost)
}
