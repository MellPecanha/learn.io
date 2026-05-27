import { FastifyRequest, FastifyReply } from 'fastify'
import { appDataSource } from '@/lib/typeorm/typeorm'
import { Person } from '@/entities/person.entity'

export async function findPersonByUser(request: FastifyRequest, reply: FastifyReply) {
  const user = request.user as { role?: string; sub?: string }
  const userId = user?.sub ? Number(user.sub) : undefined

  if (!userId) {
    return reply.status(400).send({ message: 'Usuário inválido' })
  }

  const personRepo = appDataSource.getRepository(Person)
  const person = await personRepo.findOne({ where: { user_id: userId } })

  if (!person) {
    return reply.status(404).send({ message: 'Person not found' })
  }

  return reply.status(200).send(person)
}
