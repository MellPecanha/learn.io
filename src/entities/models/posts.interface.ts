import { IPerson } from './person.interface'

export interface IPosts {
  id?: number
  title: string
  content: string
  image_url?: string
  author_id?: IPerson
  created_at?: Date
  updated_at?: Date
}
