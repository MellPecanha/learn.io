import { expect, describe, it, beforeEach } from 'vitest'
import { InMemoryPostsRepository } from '@/repositories/in-memory/in-memory-posts-repository'
import { DeletePostsUseCase } from '../delete-posts'
import { UserRole } from '@/entities/enums/user-role'
import { UnauthorizedError } from '../errors/UnauthorizedError'
import { ResourceNotFoundError } from '../errors/resource-not-found-error'

describe('Delete Post Use Case', () => {
  let postsRepository: InMemoryPostsRepository
  let sut: DeletePostsUseCase

  beforeEach(async () => {
    postsRepository = new InMemoryPostsRepository()
    sut = new DeletePostsUseCase(postsRepository)

    await postsRepository.create({
      title: 'Post para Deletar',
      content: 'Conteúdo',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as any)
  })

  it('deve ser possível deletar um post existente como PROFESSOR', async () => {
    await sut.execute(1, UserRole.PROFESSOR)

    expect(postsRepository.items).toHaveLength(0)
  })

  it('não deve ser possível deletar um post como ALUNO', async () => {
    await expect(() => sut.execute(1, UserRole.ALUNO)).rejects.toBeInstanceOf(
      UnauthorizedError,
    )
  })

  it('não deve ser possível deletar um post inexistente', async () => {
    await expect(() =>
      sut.execute(999, UserRole.PROFESSOR),
    ).rejects.toBeInstanceOf(ResourceNotFoundError)
  })
})
