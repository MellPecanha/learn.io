import { FastifyInstance } from 'fastify'
import { create } from './create'
import { findAddress } from './find-address'

export async function addressRoutes(app: FastifyInstance) {
  app.post(
    '/address',
    {
      schema: {
        tags: ['Address'],
        description: 'Cria um novo endereço para uma pessoa',
        body: {
          type: 'object',
          properties: {
            street: { type: 'string' },
            city: { type: 'string' },
            state: { type: 'string', minLength: 2, maxLength: 2 },
            zip_code: { type: 'string' },
            person_id: { type: 'number' },
          },
          required: ['street', 'city', 'state', 'zip_code', 'person_id'],
        },
        response: {
          201: {
            description: 'Endereço criado com sucesso',
            type: 'object',
            properties: {
              id: { type: 'number' },
              street: { type: 'string' },
              city: { type: 'string' },
            },
          },
        },
      },
    },
    create,
  )
  app.get(
    '/address/person/:personId',
    {
      schema: {
        tags: ['Address'],
        description: 'Busca o endereço de uma pessoa pelo ID da pessoa',
        params: {
          type: 'object',
          properties: {
            personId: { type: 'string' },
          },
        },
        response: {
          200: {
            description: 'Endereço encontrado',
            type: 'array',
            items: {
              type: 'object',
              properties: {
                id: { type: 'number' },
                street: { type: 'string' },
                city: { type: 'string' },
                state: { type: 'string' },
                zip_code: { type: 'string' },
              },
            },
          },
        },
      },
    },
    findAddress,
  )
}
