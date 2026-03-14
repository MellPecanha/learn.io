import { Person } from '@/entities/person.entity'
import { User } from '@/entities/user.entity'
import { IUserRepository } from '@/repositories/user.repository.interface'
import { ResourceNotFoundError } from './errors/resource-not-found-error'

export class FindWithPersonUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(userId: number): Promise<(User & Person) | undefined> {
    const user = await this.userRepository.findWithPerson(userId)
    if (!user) throw new ResourceNotFoundError()
    return user
  }
}
