import { expect, describe, it, beforeEach } from 'vitest'
import { FindWithPersonUseCase } from '../find-with-person'
import { InMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository'
import { UserRole } from '@/entities/enums/user-role'
import { ResourceNotFoundError } from '../errors/resource-not-found-error'

describe('Find With Person Use Case', () => {
  let usersRepository: InMemoryUsersRepository
  let sut: FindWithPersonUseCase

  beforeEach(async () => {
    usersRepository = new InMemoryUsersRepository()
    sut = new FindWithPersonUseCase(usersRepository)
    await usersRepository.create({
      username: 'teste',
      password: '123',
      role: UserRole.ALUNO,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as any)
  })

  it('deve ser possível buscar um usuário com seus dados de pessoa', async () => {
    const result = await sut.execute(1) // ID 1 criado no beforeEach
    expect(result).toHaveProperty('cpf')
    expect(result?.name).toBe('Fake User Name')
  })

  it('deve lançar erro ao buscar um usuário inexistente', async () => {
    // Agora o teste espera que a promessa seja rejeitada com o erro ResourceNotFoundError
    await expect(() => sut.execute(999)).rejects.toBeInstanceOf(
      ResourceNotFoundError,
    )
  })
})
