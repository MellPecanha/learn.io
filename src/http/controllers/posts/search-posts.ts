import { makeSearchPostsUseCase } from '@/useCases/factory/make-search-posts-use-case'
import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'

export async function searchPosts(req: FastifyRequest, reply: FastifyReply) {
  const searchQuerySchema = z.object({
    q: z.string(),
  })

  const { q } = searchQuerySchema.parse(req.query)

  const user = req.user as { role: string }

  const searchPostsUseCase = makeSearchPostsUseCase()
  const posts = await searchPostsUseCase.execute(q, user.role)

  return reply.status(200).send(posts)
}
