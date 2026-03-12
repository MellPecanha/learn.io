import { makeDeletePostUseCase } from '@/useCases/factory/make-delete-posts'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function deletePost(req: FastifyRequest, res: FastifyReply) {
  const registerParamsSchema = z.object({
    id: z.coerce.number(),
  })

  const { id } = registerParamsSchema.parse(req.params)

  const deletepostUseCase = makeDeletePostUseCase()

  await deletepostUseCase.execute(id)

  return res.status(204).send()
}
