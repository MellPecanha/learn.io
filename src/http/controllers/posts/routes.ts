import { FastifyInstance } from 'fastify'
import { findAllPosts } from './find-all-posts'
import { createPost } from './create-posts'
import { findPost } from './find-post'
import { updatePosts } from './update-posts'
import { deletePost } from './delete-posts'

export async function postsRoutes(app: FastifyInstance) {
  app.get('/posts', findAllPosts)
  app.get('/posts/:id', findPost)
  app.post('/posts', createPost)
  app.put('/posts/:id', updatePosts)
  app.delete('/posts/:id', deletePost)
}
