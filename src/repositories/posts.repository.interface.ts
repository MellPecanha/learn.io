import { IPosts } from '@/entities/models/posts.interface'

export interface IPostsRepository {
  findAll(page: number, limit: number): Promise<IPosts[]>
  findById(id: number): Promise<IPosts | null>
  create(posts: IPosts): Promise<IPosts>
  update(posts: IPosts): Promise<IPosts>
  delete(id: number): Promise<void>
}
