import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import { IUser } from './models/user.interface'
import { Person } from './person.entity'

@Entity({ name: 'user' })
export class User implements IUser {
  @PrimaryGeneratedColumn('increment', { name: 'id' })
  id?: number | undefined

  @Column({ name: 'username', type: 'varchar' })
  username: string

  @Column({ name: 'password', type: 'varchar' })
  password: string

  @OneToOne(() => Person, (person) => person.user_id)
  person?: Person
}
