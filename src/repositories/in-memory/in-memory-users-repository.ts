import { IPerson } from '@/entities/models/person.interface'
import { IUser } from '@/entities/models/user.interface'
import { IUserRepository } from '../user.repository.interface'

export class InMemoryUsersRepository implements IUserRepository {
  public items: IUser[] = []

  async create(user: IUser): Promise<IUser> {
    const newUser: IUser = {
      id: this.items.length + 1,
      username: user.username,
      password: user.password,
      role: user.role,
    }

    this.items.push(newUser)
    return newUser
  }

  async findWithPerson(userId: number): Promise<(IUser & IPerson) | undefined> {
    const user = this.items.find((item) => item.id === userId)

    if (!user) {
      return undefined
    }

    return {
      ...user,
      id: user.id!,
      name: 'Fake User Name',
      email: 'fake@email.com',
      cpf: '123.456.789-00',
      birth: new Date(),
    } as IUser & IPerson
  }

  async findByUsername(username: string): Promise<IUser | undefined> {
    const user = this.items.find((item) => item.username === username)
    return user
  }
}
