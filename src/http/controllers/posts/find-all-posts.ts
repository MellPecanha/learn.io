import { makeFindAllPostsUseCase } from '@/useCases/factory/make-find-all-posts'
import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'

export async function findAllPosts(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const registerQuerySchema = z.object({
    page: z.coerce.number().default(1),
    limit: z.coerce.number().default(10),
  })

  const { page, limit } = registerQuerySchema.parse(request.query)

  const findAllPostsUseCase = makeFindAllPostsUseCase()
  const posts = await findAllPostsUseCase.execute(page, limit)
  return reply.status(200).send(posts)
}
