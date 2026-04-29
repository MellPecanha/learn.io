import { Person } from '@/entities/person.entity'
import { Posts } from '@/entities/posts.entity'
import { User } from '@/entities/user.entity'
import { env } from '@/env'
import { DataSource } from 'typeorm'
import { UserAddRole1773452300096 } from './migrations/1773452300096-UserAddRole'
import { Address } from '@/entities/address'
import { UpdateUserRoleToUppercase1773790761895 } from './migrations/1773790761895-UpdateUserRoleToUppercase'
import { AlterTablePersonUniqueCpf1777408444519 } from './migrations/1777408444519-AlterTablePersonUniqueCpf'
import { AlterTablePostsAddAuthorForeignKey1777421308811 } from './migrations/1777421308811-AlterTablePostsAddAuthorForeignKey'

export const appDataSource = new DataSource({
  type: 'postgres',
  host: env.DATABASE_HOST,
  port: env.DATABASE_PORT,
  username: env.DATABASE_USER,
  password: env.DATABASE_PASSWORD,
  database: env.DATABASE_NAME,
  entities: [Posts, User, Person, Address],
  migrations: [
    UserAddRole1773452300096,
    UpdateUserRoleToUppercase1773790761895,
    AlterTablePersonUniqueCpf1777408444519,
    AlterTablePostsAddAuthorForeignKey1777421308811,
  ],
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
