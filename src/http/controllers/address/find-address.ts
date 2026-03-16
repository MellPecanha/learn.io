import { makeFindAddressByPersonUseCase } from '@/useCases/factory/make-find-address-by-person-use-case'
import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'

export async function findAddress(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const registerParamsSchema = z.object({
    personId: z.coerce.number(),
  })

  const registerQuerySchema = z.object({
    page: z.coerce.number().default(1),
    limit: z.coerce.number().default(10),
  })

  const { personId } = registerParamsSchema.parse(request.params)

  const { page = 1, limit = 10 } = registerQuerySchema.parse(request.query)

  const findAddressByPersonIdUseCase = makeFindAddressByPersonUseCase()

  const address = await findAddressByPersonIdUseCase.execute(
    personId,
    page,
    limit,
  )

  return reply.status(200).send(address)
}
