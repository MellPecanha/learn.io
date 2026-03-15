import { UserRole } from '@/entities/enums/user-role'
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
    role: z.enum(['aluno', 'professor']).default('aluno'),
  })

  const { username, password, role } = registerBodySchema.parse(req.body)

  const createUserUseCase = makeCreateUserUseCase()

  const user = await createUserUseCase.execute({
    username,
    password,
    role: role as UserRole,
  })

  return reply.status(201).send({ id: user?.id, username: user?.username })
}
