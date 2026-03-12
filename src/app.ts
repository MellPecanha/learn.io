import 'reflect-metadata'
import '@/lib/typeorm/typeorm'
import fastify from 'fastify'
import { globalErrorHandler } from './utils/global-error-handler'
import { postsRoutes } from './http/controllers/posts/routes'
import { userRoutes } from './http/controllers/user/routes'
import { personRoutes } from './http/controllers/person/routes'

export const app = fastify()

app.register(postsRoutes)
app.register(userRoutes)
app.register(personRoutes)

app.setErrorHandler(globalErrorHandler)
