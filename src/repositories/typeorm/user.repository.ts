import { IUser } from '@/entities/models/user.interface'
import { IUserRepository } from '../user.repository.interface'
import { User } from '@/entities/user.entity'
import { appDataSource } from '@/lib/typeorm/typeorm'
import { Repository } from 'typeorm'
import { IPerson } from '@/entities/models/person.interface'

export class UserRepository implements IUserRepository {
  private repository: Repository<IUser>

  constructor() {
    this.repository = appDataSource.getRepository(User)
  }

  async create(user: IUser): Promise<IUser | undefined> {
    return this.repository.save(user)
  }

  async findWithPerson(userId: number): Promise<(IUser & IPerson) | undefined> {
    const user = await this.repository.findOne({
      where: { id: userId },
      relations: ['person'],
    })
    return (user as IUser & IPerson) ?? undefined
  }
}
