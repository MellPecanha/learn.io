import { IPerson } from '@/entities/models/person.interface'
import { Person } from '@/entities/person.entity'
import { appDataSource } from '@/lib/typeorm/typeorm'
import { Repository } from 'typeorm'
import { IPersonRepository } from '../person.repository.interface'

export class PersonRepository implements IPersonRepository {
  private repository: Repository<Person>

  constructor() {
    this.repository = appDataSource.getRepository(Person)
  }

  async create(person: IPerson): Promise<IPerson | undefined> {
    return this.repository.save(person)
  }
}
