import { UserRole } from '@/entities/enums/user-role'
import { makeCreateUserUseCase } from '@/useCases/factory/make-create-user-use-case'
import { hash } from 'bcryptjs'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function create(req: FastifyRequest, reply: FastifyReply) {
  const registerBodySchema = z.object({
    username: z.string(),
    password: z.string(),
    role: z
      .enum([UserRole.ALUNO, UserRole.PROFESSOR, 'aluno', 'professor'])
      .default(UserRole.ALUNO)
      .transform((role) => role.toUpperCase()),
  })

  const { username, password, role } = registerBodySchema.parse(req.body)

  const hashPassword = await hash(password, 8)

  const createUserUseCase = makeCreateUserUseCase()

  const userWithHashPassword = {
    username,
    password: hashPassword,
    role: role as UserRole,
  }

  const user = await createUserUseCase.execute(userWithHashPassword)

  return reply.status(201).send({ id: user?.id, username: user?.username })
}
