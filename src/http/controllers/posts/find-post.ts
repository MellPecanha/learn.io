import { makeFindPostsUseCase } from '@/useCases/factory/make-find-posts-use-case'
import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'

export async function findPost(request: FastifyRequest, reply: FastifyReply) {
  const findPostParamsSchema = z.object({
    id: z.coerce.number(),
  })

  const { id } = findPostParamsSchema.parse(request.params)

  const user = request.user as { role: string }

  const findPostUseCase = makeFindPostsUseCase()

  const post = await findPostUseCase.execute(id, user.role)

  // include author_name for frontend convenience
  const mapped = post
    ? { ...post, author_name: (post.author_id as any)?.name ?? undefined }
    : post

  return reply.status(200).send(mapped)
}
