import { makeFindWithPersonUseCase } from '@/useCases/factory/make-find-with-person'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function findUser(req: FastifyRequest, reply: FastifyReply) {
  const registerParamsSchema = z.object({
    id: z.coerce.number(),
  })

  const { id } = registerParamsSchema.parse(req.params)

  const findWithPersonUseCase = makeFindWithPersonUseCase()

  const user = await findWithPersonUseCase.execute(id)

  return reply.status(200).send(user)
}
