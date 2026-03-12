import { FastifyInstance } from 'fastify'
import { create } from './create-person'

export async function personRoutes(app: FastifyInstance) {
  app.post('/person', create)
}
