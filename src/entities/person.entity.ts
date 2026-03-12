import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm'
import { IPerson } from './models/person.interface'
import { User } from './user.entity'

@Entity({ name: 'person' })
export class Person implements IPerson {
  @PrimaryGeneratedColumn('increment', { name: 'id' })
  id?: number

  @Column({ name: 'cpf', type: 'varchar' })
  cpf: string

  @Column({ name: 'name', type: 'varchar' })
  name: string

  @Column({ name: 'birth', type: 'date' })
  birth: Date

  @Column({ name: 'email', type: 'varchar' })
  email: string

  @OneToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user_id?: number
}
