import { makeUpdatePostsUseCase } from '@/useCases/factory/make-update-posts'
import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'

export async function updatePosts(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const registerParamsSchema = z.object({
    id: z.coerce.number(),
  })

  const { id } = registerParamsSchema.parse(request.params)

  const registerBodySchema = z.object({
    title: z.string(),
    content: z.string(),
    image_url: z.string(),
    author_id: z.number().optional(),
  })

  const { title, content, image_url, author_id } = registerBodySchema.parse(
    request.body,
  )

  const updatePostsUseCase = makeUpdatePostsUseCase()

  const posts = await updatePostsUseCase.execute({
    id,
    title,
    content,
    image_url,
    author_id,
  })

  return reply.status(200).send(posts)
}
