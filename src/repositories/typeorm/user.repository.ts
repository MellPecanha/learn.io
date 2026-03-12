import { IUser } from '@/entities/models/user.interface'
import { IUserRepository } from '../user.repository.interface'
import { User } from '@/entities/user.entity'
import { appDataSource } from '@/lib/typeorm/typeorm'
import { Repository } from 'typeorm'

export class UserRepository implements IUserRepository {
  private repository: Repository<User>

  constructor() {
    this.repository = appDataSource.getRepository(User)
  }

  async create(user: IUser): Promise<IUser | undefined> {
    return this.repository.save(user)
  }
}
