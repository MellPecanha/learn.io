import { FastifyInstance } from 'fastify'
import { create } from './create'
import { findUser } from './find-user'
import { signin } from './signin'

export async function userRoutes(app: FastifyInstance) {
  app.post(
    '/user',
    {
      schema: {
        tags: ['User'],
        description: 'Cria um novo usuário',
        body: {
          type: 'object',
          properties: {
            name: { type: 'string' },
            email: { type: 'string', format: 'email' },
            password: { type: 'string' },
            role: { type: 'string', enum: ['PROFESSOR', 'ALUNO'] },
          },
          required: ['name', 'email', 'password', 'role'],
        },
        response: {
          201: {
            description: 'Usuário criado com sucesso',
            type: 'object',
            properties: {
              id: { type: 'string' },
              name: { type: 'string' },
              email: { type: 'string' },
              role: { type: 'string' },
            },
          },
        },
      },
    },
    create,
  )
  app.get(
    '/user/:id',
    {
      schema: {
        tags: ['User'],
        description: 'Busca um usuário pelo ID',
        params: {
          type: 'object',
          properties: {
            id: { type: 'string' },
          },
        },
        response: {
          200: {
            description: 'Usuário encontrado',
            type: 'object',
            properties: {
              id: { type: 'string' },
              name: { type: 'string' },
              email: { type: 'string' },
              role: { type: 'string' },
            },
          },
        },
      },
    },
    findUser,
  )
  app.post(
    '/user/signin',
    {
      schema: {
        tags: ['User'],
        description: 'Autenticação de usuário',
        body: {
          type: 'object',
          properties: {
            email: { type: 'string', format: 'email' },
            password: { type: 'string' },
          },
          required: ['email', 'password'],
        },
        response: {
          200: {
            description: 'Login realizado com sucesso',
            type: 'object',
            properties: {
              token: { type: 'string' },
            },
          },
        },
      },
    },
    signin,
  )
}
