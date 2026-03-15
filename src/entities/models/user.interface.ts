import { UserRole } from '../enums/user-role'

export interface IUser {
  id?: number
  username: string
  password: string
  role: UserRole
}
