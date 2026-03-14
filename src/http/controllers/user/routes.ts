import { FastifyInstance } from 'fastify'
import { createUserController } from './create'
import { findUser } from './find-user'

export async function userRoutes(app: FastifyInstance) {
  app.post('/users', createUserController)
  app.get('/users/:id', findUser)
}
