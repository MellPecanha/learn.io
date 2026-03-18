import { UserRole } from '@/entities/enums/user-role'
import { IPosts } from '@/entities/models/posts.interface'
import { IPostsRepository } from '@/repositories/posts.repository.interface'

export class FindAllPostsUseCase {
  constructor(private postsRepository: IPostsRepository) {}

  async execute(page: number, limit: number, role: string): Promise<IPosts[]> {
    if (role !== UserRole.PROFESSOR && role !== UserRole.ALUNO) {
      throw new Error('Unauthorized')
    }
    return this.postsRepository.findAll(page, limit)
  }
}
