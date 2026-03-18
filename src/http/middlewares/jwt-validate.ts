import { FastifyReply, FastifyRequest } from 'fastify'

export async function validateJwt(req: FastifyRequest, reply: FastifyReply) {
  try {
    const routeFreeList = ['POST-/user', 'POST-/user/signin']
    const validateRoute = `${req.method}-${req.routeOptions.url}`

    if (routeFreeList.includes(validateRoute)) return

    await req.jwtVerify()
  } catch (error) {
    reply.status(401).send({ message: 'Unauthorized' })
  }
}
