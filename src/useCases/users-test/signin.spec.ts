import { expect, describe, it, beforeEach } from 'vitest'
import { InMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository'
import { UserRole } from '@/entities/enums/user-role'
import { SigninUseCase } from '../signin'
import { InvalidCredentialsError } from '../errors/invalid-credencials-error'

describe('Signin Use Case', () => {
  let usersRepository: InMemoryUsersRepository
  let sut: SigninUseCase

  beforeEach(async () => {
    usersRepository = new InMemoryUsersRepository()
    sut = new SigninUseCase(usersRepository)

    await usersRepository.create({
      username: 'professor_teste',
      password: 'hashed_password', // No seu Use Case atual, a senha não é validada
      role: UserRole.PROFESSOR,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as any)
  })

  it('deve ser possível autenticar com um username válido', async () => {
    const user = await sut.execute('professor_teste')

    expect(user.id).toEqual(expect.any(Number))
    expect(user.username).toBe('professor_teste')
  })

  it('não deve ser possível autenticar com um username inexistente', async () => {
    await expect(() =>
      sut.execute('usuario_inexistente'),
    ).rejects.toBeInstanceOf(InvalidCredentialsError)
  })
})
