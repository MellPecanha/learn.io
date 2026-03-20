import { IPosts } from '@/entities/models/posts.interface'
import { IPostsRepository } from '../posts.repository.interface'

export class InMemoryPostsRepository implements IPostsRepository {
  public items: IPosts[] = []

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async create(data: any): Promise<IPosts> {
    const post: IPosts = {
      id: this.items.length + 1,
      title: data.title,
      content: data.content,
      image_url: data.image_url || '',
      author_id: data.author_id || 1,
      created_at: new Date(),
      updated_at: new Date(),
    }

    this.items.push(post)
    return post
  }

  async findById(id: number): Promise<IPosts | null> {
    const post = this.items.find((item) => item.id === id)
    return post || null
  }

  async findAll(page: number, limit: number): Promise<IPosts[]> {
    return this.items.slice((page - 1) * limit, page * limit)
  }

  async search(query: string): Promise<IPosts[]> {
    return this.items.filter(
      (item) => item.title.includes(query) || item.content.includes(query),
    )
  }

  async update(post: IPosts): Promise<IPosts> {
    const itemIndex = this.items.findIndex((item) => item.id === post.id)

    if (itemIndex >= 0) {
      this.items[itemIndex] = post
    }

    return post
  }

  async save(post: IPosts): Promise<IPosts> {
    return this.update(post)
  }

  async delete(id: number): Promise<void> {
    const itemIndex = this.items.findIndex((item) => item.id === id)
    if (itemIndex >= 0) {
      this.items.splice(itemIndex, 1)
    }
  }
}
