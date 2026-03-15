import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import { IUser } from './models/user.interface'
import { Person } from './person.entity'
import { UserRole } from './enums/user-role'

@Entity({ name: 'user' })
export class User implements IUser {
  @PrimaryGeneratedColumn('increment', { name: 'id' })
  id?: number | undefined

  @Column({ name: 'username', type: 'varchar' })
  username: string

  @Column({ name: 'password', type: 'varchar' })
  password: string

  @Column({
    name: 'role',
    type: 'enum',
    enum: UserRole,
    default: UserRole.ALUNO,
  })
  role: UserRole

  @OneToOne(() => Person, (person) => person.user_id)
  person?: Person
}
