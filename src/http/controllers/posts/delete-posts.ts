import { makeDeletePostUseCase } from '@/useCases/factory/make-delete-posts-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function deletePost(req: FastifyRequest, reply: FastifyReply) {
  const registerParamsSchema = z.object({
    id: z.coerce.number(),
  })

  const { id } = registerParamsSchema.parse(req.params)

  const user = req.user as { role: string }

  const deletepostUseCase = makeDeletePostUseCase()

  await deletepostUseCase.execute(id, user.role)

  return reply.status(204).send()
}
