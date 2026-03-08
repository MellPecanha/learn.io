import { Posts } from '@/entities/posts.entity'
import { env } from '@/env'
import { DataSource } from 'typeorm'

export const appDataSource = new DataSource({
  type: 'postgres',
  host: env.DATABASE_HOST,
  port: env.DATABASE_PORT,
  username: env.DATABASE_USER,
  password: env.DATABASE_PASSWORD,
  database: env.DATABASE_NAME,
  entities: [Posts],
  migrations: [],
  logging: env.NODE_ENV === 'development',
})

appDataSource
  .initialize()
  .then(() => {
    console.log('Database with typeorm connected!')
  })
  .catch((err) => {
    console.error('Error connecting to database with typeorm', err)
  })
