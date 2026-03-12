import { FastifyInstance } from 'fastify'
import { createUserController } from './create'

export async function userRoutes(app: FastifyInstance) {
  app.post('/users', createUserController)
}
