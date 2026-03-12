import { User } from '@/entities/user.entity'
import { IUserRepository } from '@/repositories/user.repository.interface'

export class CreateUserUseCase {
  constructor(private usersRepository: IUserRepository) {}

  async execute(user: User): Promise<User | undefined> {
    return this.usersRepository.create(user)
  }
}
