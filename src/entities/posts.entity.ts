import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { IPosts } from './models/posts.interface'

@Entity({ name: 'posts' })
export class Posts implements IPosts {
  @PrimaryGeneratedColumn('increment', { name: 'id' })
  id?: number | undefined

  @Column({ name: 'title', type: 'varchar' })
  title: string

  @Column({ name: 'content', type: 'varchar' })
  content: string

  @Column({ name: 'image_url', type: 'varchar' })
  image_url: string

  @Column({ name: 'author_id', type: 'int' })
  author_id?: number

  @Column({
    name: 'created_at',
    type: 'timestamp without time zone',
    default: () => 'CURRENT_TIMESTAMP',
  })
  created_at?: Date

  @Column({
    name: 'updated_at',
    type: 'timestamp without time zone',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updated_at?: Date
}
