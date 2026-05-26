import { env } from './env'
import { app } from './app'
import cors from '@fastify/cors'

app
  .listen({
    host: '0.0.0.0',
    port: env.PORT,
  })
  .then(() => {
    console.log(`Server is running on port ${env.PORT}`)
  })

app.register(cors, {
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
})
