import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm'
import { IAddress } from './models/address.interface'
import { Person } from './person.entity'

@Entity({ name: 'address' })
export class Address implements IAddress {
  @PrimaryGeneratedColumn('increment', { name: 'id' })
  id?: number

  @Column({ name: 'street', type: 'varchar' })
  street: string

  @Column({ name: 'city', type: 'varchar' })
  city: string

  @Column({ name: 'state', type: 'varchar' })
  state: string

  @Column({ name: 'zip_code', type: 'varchar' })
  zip_code: string

  @Column({ name: 'person_id', type: 'int' })
  person_id: number

  @ManyToOne(() => Person, (person) => person.address)
  @JoinColumn({ name: 'person_id' })
  person?: Person
}
