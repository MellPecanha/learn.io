import { InvalidCredentialsError } from '@/useCases/errors/invalid-credencials-error'
import { makeSigninUseCase } from '@/useCases/factory/make-signin-use-case'
import { compare } from 'bcryptjs'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function signin(req: FastifyRequest, reply: FastifyReply) {
  const registerBodySchema = z.object({
    username: z.string(),
    password: z.string(),
  })

  const { username, password } = registerBodySchema.parse(req.body)

  const signinUseCase = makeSigninUseCase()
  const user = await signinUseCase.execute(username)

  const doesPasswordMatch = await compare(password, user.password)

  if (!doesPasswordMatch) {
    throw new InvalidCredentialsError()
  }

  const token = await reply.jwtSign(
    {
      role: user.role,
    },
    {
      sign: {
        sub: String(user.id),
      },
    },
  )

  return reply.status(200).send({
    token,
  })
}
