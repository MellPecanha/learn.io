import { expect, describe, it, beforeEach } from 'vitest'
import { CreatePostsUseCase } from '../create-posts' // Ajuste o caminho se necessário
import { InMemoryPostsRepository } from '@/repositories/in-memory/in-memory-posts-repository'
import { UserRole } from '@/entities/enums/user-role'

describe('Create Posts Use Case', () => {
  let postsRepository: InMemoryPostsRepository
  let sut: CreatePostsUseCase

  beforeEach(() => {
    postsRepository = new InMemoryPostsRepository()
    sut = new CreatePostsUseCase(postsRepository)
  })

  it('deve ser possível criar um post como PROFESSOR', async () => {
    const postData = {
      title: 'Título de Teste',
      content: 'Conteúdo do post de teste',
      image_url: 'http://imagem.com/teste.jpg',
      author_id: 1,
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const post = await sut.execute(postData as any, UserRole.PROFESSOR)

    expect(post.id).toEqual(expect.any(Number))
    expect(post.title).toBe('Título de Teste')
    expect(postsRepository.items).toHaveLength(1)
  })

  it('não deve ser possível criar um post como ALUNO', async () => {
    const postData = {
      title: 'Título de Teste',
      content: 'Conteúdo',
    }

    await expect(() =>
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      sut.execute(postData as any, UserRole.ALUNO),
    ).rejects.toThrow()
  })
})
