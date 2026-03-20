import 'reflect-metadata'
import '@/lib/typeorm/typeorm'
import fastify from 'fastify'
import { globalErrorHandler } from './utils/global-error-handler'
import { postsRoutes } from './http/controllers/posts/routes'
import { userRoutes } from './http/controllers/user/routes'
import { personRoutes } from './http/controllers/person/routes'
import { addressRoutes } from './http/controllers/address/routes'
import fastifyJwt from '@fastify/jwt'
import { env } from './env'
import { validateJwt } from './http/middlewares/jwt-validate'
import fastifySwagger from '@fastify/swagger'
import fastifySwaggerUi from '@fastify/swagger-ui'

export const app = fastify()

app.register(fastifySwagger, {
  swagger: {
    info: {
      title: 'Learn-io',
      description: 'API para gerenciamento de cursos e posts no Learn-io',
      version: '1.0.0',
    },
    host: 'localhost:3000',
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json'],
    securityDefinitions: {
      bearerAuth: {
        type: 'apiKey',
        name: 'Authorization',
        in: 'header',
        description: 'Digite o token no formato: Bearer [token]',
      },
    },
  },
})

app.register(fastifySwaggerUi, {
  routePrefix: '/docs',
})

app.register(fastifyJwt, {
  secret: env.JWT_SECRET,
  sign: {
    expiresIn: '1h',
  },
})

app.addHook('preHandler', validateJwt)

app.register(postsRoutes)
app.register(userRoutes)
app.register(personRoutes)
app.register(addressRoutes)

app.setErrorHandler(globalErrorHandler)
