import { FastifyInstance } from 'fastify'
import { create } from './create-person'

export async function personRoutes(app: FastifyInstance) {
  app.post(
    '/person',
    {
      schema: {
        tags: ['Person'],
        description: 'Criar uma nova pessoa',
        body: {
          type: 'object',
          properties: {
            name: { type: 'string' },
            email: { type: 'string', format: 'email' },
            cpf: { type: 'string' },
            birth_date: { type: 'string', format: 'date' },
          },
          required: ['name', 'email'],
        },
        response: {
          201: {
            description: 'Pessoa criada com sucesso',
            type: 'object',
            properties: {
              id: { type: 'string' },
              name: { type: 'string' },
              email: { type: 'string' },
            },
          },
        },
      },
    },
    create,
  )
}
