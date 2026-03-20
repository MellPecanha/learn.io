import { FastifyReply, FastifyRequest } from 'fastify'

export async function validateJwt(req: FastifyRequest, reply: FastifyReply) {
  try {
    if (req.url.startsWith('/docs')) return

    const routeFreeList = ['POST-/user', 'POST-/user/signin']
    const validateRoute = `${req.method}-${req.routeOptions.url}`

    if (routeFreeList.includes(validateRoute)) return

    await req.jwtVerify()
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    reply.status(401).send({ message: 'Unauthorized' })
  }
}
