import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { IUser } from './models/user.interface'

@Entity({ name: 'user' })
export class User implements IUser {
  @PrimaryGeneratedColumn('increment', { name: 'id' })
  id?: number | undefined

  @Column({ name: 'username', type: 'varchar' })
  username: string

  @Column({ name: 'password', type: 'varchar' })
  password: string

  constructor(username: string, password: string) {
    this.username = username
    this.password = password
  }
}
