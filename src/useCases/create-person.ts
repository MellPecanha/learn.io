import { Person } from '@/entities/person.entity'
import { IPersonRepository } from '@/repositories/person.repository.interface'
import { DuplicateResourceError } from '@/useCases/errors/duplicate-resource-error'

export class CreatePersonUseCase {
  constructor(private personRepository: IPersonRepository) {}

  async execute(person: Person) {
    const existingPerson = await this.personRepository.findByCpf(person.cpf)

    if (existingPerson) {
      throw new DuplicateResourceError()
    }

    return this.personRepository.create(person)
  }
}
