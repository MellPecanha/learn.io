import { makeCreateAddressUseCase } from '@/useCases/factory/make-create-address-use-case'
import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'

export async function create(request: FastifyRequest, reply: FastifyReply) {
  const registerBodySchema = z.object({
    street: z.string(),
    city: z.string(),
    state: z.string(),
    zip_code: z.string(),
    person_id: z.coerce.number(),
  })

  const { street, city, state, zip_code, person_id } = registerBodySchema.parse(
    request.body,
  )

  const createAddressUseCase = makeCreateAddressUseCase()

  const address = await createAddressUseCase.execute({
    street,
    city,
    state,
    zip_code,
    person_id,
  })

  reply.status(201).send(address)
}
