import { expect, describe, it, beforeEach } from 'vitest'
import { UpdatePostsUseCase } from '../update-posts'
import { InMemoryPostsRepository } from '@/repositories/in-memory/in-memory-posts-repository'
import { UserRole } from '@/entities/enums/user-role'

describe('Update Post Use Case', () => {
  let postsRepository: InMemoryPostsRepository
  let sut: UpdatePostsUseCase

  beforeEach(async () => {
    postsRepository = new InMemoryPostsRepository()
    sut = new UpdatePostsUseCase(postsRepository)

    await postsRepository.create({
      title: 'Original',
      content: 'Original',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as any)
  })

  it('deve ser possível atualizar um post existente como PROFESSOR', async () => {
    const updated = await sut.execute(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      { id: 1, title: 'Novo Título' } as any,
      UserRole.PROFESSOR,
    )

    expect(updated.title).toBe('Novo Título')
    expect(postsRepository.items[0].title).toBe('Novo Título')
  })

  it('não deve ser possível atualizar um post como ALUNO', async () => {
    await expect(() =>
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      sut.execute({ id: 1, title: 'Novo' } as any, UserRole.ALUNO),
    ).rejects.toThrow()
  })
})
