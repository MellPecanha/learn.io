import { UserRole } from '@/entities/enums/user-role'
import { IPosts } from '@/entities/models/posts.interface'
import { IPostsRepository } from '@/repositories/posts.repository.interface'
import { UnauthorizedError } from './errors/UnauthorizedError'

export class FindAllPostsUseCase {
  constructor(private postsRepository: IPostsRepository) {}

  async execute(page: number, limit: number, role: string): Promise<IPosts[]> {
    if (role !== UserRole.PROFESSOR && role !== UserRole.ALUNO) {
      throw new UnauthorizedError()
    }
    return this.postsRepository.findAll(page, limit)
  }
}
