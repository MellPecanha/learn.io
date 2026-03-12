import { UserRepository } from '@/repositories/typeorm/user.repository'
import { CreateUserUseCase } from '../create-user'

export function makeCreateUserUseCase() {
  const usersRepository = new UserRepository()
  const createUserUseCase = new CreateUserUseCase(usersRepository)
  return createUserUseCase
}
