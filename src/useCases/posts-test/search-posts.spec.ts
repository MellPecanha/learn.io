import { expect, describe, it, beforeEach } from 'vitest'
import { SearchPostsUseCase } from '../search-posts'
import { InMemoryPostsRepository } from '@/repositories/in-memory/in-memory-posts-repository'
import { UserRole } from '@/entities/enums/user-role'

describe('Search Posts Use Case', () => {
  let postsRepository: InMemoryPostsRepository
  let sut: SearchPostsUseCase

  beforeEach(async () => {
    postsRepository = new InMemoryPostsRepository()
    sut = new SearchPostsUseCase(postsRepository)

    await postsRepository.create({
      title: 'JavaScript Avançado',
      content: 'Conteúdo JS',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as any)
  })

  it('deve ser possível pesquisar posts como ALUNO', async () => {
    const posts = await sut.execute('JavaScript', UserRole.ALUNO)

    expect(posts).toHaveLength(1)
    expect(posts[0].title).toBe('JavaScript Avançado')
  })

  it('deve retornar uma lista vazia se o termo de busca não for encontrado', async () => {
    const posts = await sut.execute('termo_inexistente', UserRole.ALUNO)

    expect(posts).toHaveLength(0)
    expect(posts).toEqual([])
  })
})
