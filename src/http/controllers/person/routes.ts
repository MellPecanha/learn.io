import { FastifyInstance } from 'fastify'
import { create } from './create-person'
import { findPersonByUser } from './find-person-by-user'
import { validateJwt } from '@/http/middlewares/jwt-validate'

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

  app.get(
    '/person/me',
    {
      preHandler: [validateJwt],
      schema: {
        tags: ['Person'],
        description: 'Retorna a Person vinculada ao usuário autenticado',
      },
    },
    findPersonByUser,
  )
}
