import 'reflect-metadata'
import '@/lib/typeorm/typeorm'
import fastify from 'fastify'
import { globalErrorHandler } from './utils/global-error-handler'
import { postsRoutes } from './http/controllers/posts/routes'

export const app = fastify()

app.register(postsRoutes)

app.setErrorHandler(globalErrorHandler)
