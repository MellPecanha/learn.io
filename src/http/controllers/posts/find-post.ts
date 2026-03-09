import { makeFindPostsUseCase } from '@/useCases/factory/make-find-posts'
import { FastifyRequest, FastifyReply } from 'fastify'
import z from 'zod'

export async function findPost(request: FastifyRequest, reply: FastifyReply) {
  const findPostParamsSchema = z.object({
    id: z.coerce.number(),
  })

  const { id } = findPostParamsSchema.parse(request.params)

  const findPostUseCase = makeFindPostsUseCase()

  const post = await findPostUseCase.execute(id)

  return reply.status(200).send(post)
}
