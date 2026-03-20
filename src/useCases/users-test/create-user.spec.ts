import { expect, describe, it, beforeEach } from 'vitest'
import { CreateUserUseCase } from '../create-user'
import { InMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository'
import { UserRole } from '@/entities/enums/user-role'

describe('Create User Use Case', () => {
  let usersRepository: InMemoryUsersRepository
  let sut: CreateUserUseCase

  beforeEach(() => {
    usersRepository = new InMemoryUsersRepository()
    sut = new CreateUserUseCase(usersRepository)
  })

  it('deve ser possível cadastrar um novo usuário', async () => {
    const user = await sut.execute({
      username: 'novo_usuario',
      password: 'password123',
      role: UserRole.ALUNO,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as any)

    expect(user?.id).toEqual(expect.any(Number))
    expect(user?.username).toBe('novo_usuario')
    expect(usersRepository.items).toHaveLength(1)
  })

  it('deve cadastrar o usuário com o role correto', async () => {
    const user = await sut.execute({
      username: 'professor_user',
      password: 'password123',
      role: UserRole.PROFESSOR,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as any)

    expect(user?.role).toBe(UserRole.PROFESSOR)
  })
})
