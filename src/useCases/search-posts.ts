import { UserRole } from '@/entities/enums/user-role'
import { IPostsRepository } from '@/repositories/posts.repository.interface'
import { UnauthorizedError } from './errors/UnauthorizedError'

export class SearchPostsUseCase {
  constructor(private postsRepository: IPostsRepository) {}

  async execute(query: string, role: string) {
    if (!query) {
      return []
    }

    if (role !== UserRole.PROFESSOR && role !== UserRole.ALUNO) {
      throw new UnauthorizedError()
    }

    const posts = await this.postsRepository.search(query)
    return posts
  }
}
