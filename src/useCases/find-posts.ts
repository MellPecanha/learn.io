import { IPostsRepository } from '@/repositories/posts.repository.interface'
import { ResourceNotFoundError } from './errors/resource-not-found-error'
import { UserRole } from '@/entities/enums/user-role'
import { UnauthorizedError } from './errors/UnauthorizedError'

export class FindPostsUseCase {
  constructor(private postsRepository: IPostsRepository) {}

  async execute(id: number, role: string) {
    const post = await this.postsRepository.findById(id)

    if (!post) throw new ResourceNotFoundError()

    if (role !== UserRole.PROFESSOR && role !== UserRole.ALUNO) {
      throw new UnauthorizedError()
    }

    return post
  }
}
