import { makeCreateUserUseCase } from '@/useCases/factory/make-create-user-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function createUserController(
  req: FastifyRequest,
  reply: FastifyReply,
) {
  const registerBodySchema = z.object({
    username: z.string(),
    password: z.string(),
  })

  const { username, password } = registerBodySchema.parse(req.body)

  const createUserUseCase = makeCreateUserUseCase()

  const user = await createUserUseCase.execute({
    username,
    password,
  })

  return reply.status(201).send({ id: user?.id, username: user?.username })
}
