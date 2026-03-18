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

export const app = fastify()

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
