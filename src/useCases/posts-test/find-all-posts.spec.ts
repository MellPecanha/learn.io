import { expect, describe, it, beforeEach } from 'vitest'
import { FindAllPostsUseCase } from '../find-all-posts'
import { InMemoryPostsRepository } from '@/repositories/in-memory/in-memory-posts-repository'
import { UserRole } from '@/entities/enums/user-role'

describe('Find All Posts Use Case', () => {
  let postsRepository: InMemoryPostsRepository
  let sut: FindAllPostsUseCase

  beforeEach(async () => {
    postsRepository = new InMemoryPostsRepository()
    sut = new FindAllPostsUseCase(postsRepository)

    for (let i = 1; i <= 3; i++) {
      await postsRepository.create({
        title: `Post ${i}`,
        content: `Conteúdo ${i}`,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } as any)
    }
  })

  it('deve ser possível listar todos os posts como ALUNO', async () => {
    const posts = await sut.execute(1, 2, UserRole.ALUNO)

    expect(posts).toHaveLength(2)
  })

  it('deve ser possível listar todos os posts como PROFESSOR', async () => {
    const posts = await sut.execute(1, 10, UserRole.PROFESSOR)

    expect(posts).toHaveLength(3)
  })

  it('não deve ser possível listar posts sem um role válido', async () => {
    await expect(() => sut.execute(1, 10, 'ROLE_INVALIDA')).rejects.toThrow()
  })
})
