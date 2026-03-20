import { FastifyInstance } from 'fastify'
import { findAllPosts } from './find-all-posts'
import { createPost } from './create-posts'
import { findPost } from './find-post'
import { updatePosts } from './update-posts'
import { deletePost } from './delete-posts'
import { validateJwt } from '@/http/middlewares/jwt-validate'
import { searchPosts } from './search-posts'

export async function postsRoutes(app: FastifyInstance) {
  app.get(
    '/posts',
    {
      preHandler: [validateJwt],
      schema: {
        tags: ['Posts'],
        description: 'Lista todos os posts',
        security: [{ bearerAuth: [] }],
        response: {
          200: {
            description: 'Lista de posts retornada com sucesso',
            type: 'array',
            items: {
              type: 'object',
              properties: {
                id: { type: 'string' },
                title: { type: 'string' },
                content: { type: 'string' },
                created_at: { type: 'string', format: 'date-time' },
              },
            },
          },
        },
      },
    },
    findAllPosts,
  )
  app.get(
    '/posts/:id',
    {
      schema: {
        tags: ['Posts'],
        description: 'Busca um post pelo ID',
        params: {
          type: 'object',
          properties: {
            id: { type: 'string' },
          },
        },
        response: {
          200: {
            description: 'Post encontrado',
            type: 'object',
            properties: {
              id: { type: 'string' },
              title: { type: 'string' },
              content: { type: 'string' },
            },
          },
        },
      },
    },
    findPost,
  )
  app.get(
    '/posts/search',
    {
      schema: {
        tags: ['Posts'],
        description: 'Pesquisa posts por título ou conteúdo',
        querystring: {
          type: 'object',
          properties: {
            query: { type: 'string' },
          },
        },
      },
    },
    searchPosts,
  )
  app.post(
    '/posts',
    {
      schema: {
        tags: ['Posts'],
        description: 'Cria um novo post',
        security: [{ bearerAuth: [] }],
        body: {
          type: 'object',
          properties: {
            title: { type: 'string' },
            content: { type: 'string' },
          },
          required: ['title', 'content'],
        },
      },
    },
    createPost,
  )
  app.put(
    '/posts/:id',
    {
      schema: {
        tags: ['Posts'],
        description: 'Atualiza um post existente',
        security: [{ bearerAuth: [] }],
        params: {
          type: 'object',
          properties: {
            id: { type: 'string' },
          },
        },
        body: {
          type: 'object',
          properties: {
            title: { type: 'string' },
            content: { type: 'string' },
          },
        },
      },
    },
    updatePosts,
  )
  app.delete(
    '/posts/:id',
    {
      schema: {
        tags: ['Posts'],
        description: 'Remove um post',
        security: [{ bearerAuth: [] }],
        params: {
          type: 'object',
          properties: {
            id: { type: 'string' },
          },
        },
      },
    },
    deletePost,
  )
}
