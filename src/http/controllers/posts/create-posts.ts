import { makeCreatePostsUseCase } from '@/useCases/factory/make-create-posts-use-case'
import { FastifyRequest, FastifyReply } from 'fastify'
import z from 'zod'

export async function createPost(request: FastifyRequest, reply: FastifyReply) {
  const registerPostBodySchema = z.object({
    title: z.string(),
    content: z.string(),
    image_url: z.string(),
    author_id: z.number(),
  })

  const { title, content, image_url, author_id } = registerPostBodySchema.parse(
    request.body,
  )

  const createPostUseCase = makeCreatePostsUseCase()

  const post = await createPostUseCase.execute({
    title,
    content,
    image_url,
    author_id,
  })

  return reply.status(201).send(post)
}
