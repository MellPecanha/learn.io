import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'
import { IPosts } from './models/posts.interface'
import { Person } from './person.entity'

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
  @ManyToOne(() => Person, (person) => person.posts)
  @JoinColumn({ name: 'author_id' })
  author_id?: Person

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp without time zone',
    default: () => 'CURRENT_TIMESTAMP',
  })
  created_at?: Date

  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamp without time zone',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updated_at?: Date
}
