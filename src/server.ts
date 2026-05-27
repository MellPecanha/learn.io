import { env } from './env'
import { app } from './app'
import cors from '@fastify/cors'
import { appDataSource } from './lib/typeorm/typeorm'

const start = async () => {
  try {
    await app.register(cors, {
      origin: 'http://localhost:3000',
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      credentials: true,
    })

    await app.listen({
      host: '0.0.0.0',
      port: env.PORT,
    })

    console.log(`Server is running on port ${env.PORT}`)
  } catch (err) {
    console.error('Server failed to start', err)
    process.exit(1)
  }
}

const shutdown = async () => {
  try {
    await app.close()
    if (appDataSource.isInitialized) {
      await appDataSource.destroy()
    }
    console.log('Server shutdown complete')
  } catch (err) {
    console.error('Error during shutdown', err)
  } finally {
    process.exit(0)
  }
}

process.on('SIGINT', shutdown)
process.on('SIGTERM', shutdown)

start()
