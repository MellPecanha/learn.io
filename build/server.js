"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp(target, key, result);
  return result;
};

// src/env/index.ts
var import_config = require("dotenv/config");
var import_zod = require("zod");
var envSchema = import_zod.z.object({
  PORT: import_zod.z.coerce.number().default(3e3),
  NODE_ENV: import_zod.z.enum(["development", "production"]).default("development"),
  DATABASE_USER: import_zod.z.string(),
  DATABASE_HOST: import_zod.z.string(),
  DATABASE_NAME: import_zod.z.string(),
  DATABASE_PASSWORD: import_zod.z.string(),
  DATABASE_PORT: import_zod.z.coerce.number(),
  JWT_SECRET: import_zod.z.string()
});
var _env = envSchema.safeParse(process.env);
if (!_env.success) {
  console.error("Invalid environment variables", _env.error.format());
  throw new Error("Invalid environment variables");
}
var env = _env.data;

// src/app.ts
var import_reflect_metadata = require("reflect-metadata");

// src/entities/person.entity.ts
var import_typeorm4 = require("typeorm");

// src/entities/user.entity.ts
var import_typeorm = require("typeorm");

// src/entities/enums/user-role.ts
var UserRole = /* @__PURE__ */ ((UserRole2) => {
  UserRole2["PROFESSOR"] = "PROFESSOR";
  UserRole2["ALUNO"] = "ALUNO";
  return UserRole2;
})(UserRole || {});

// src/entities/user.entity.ts
var User = class {
};
__decorateClass([
  (0, import_typeorm.PrimaryGeneratedColumn)("increment", { name: "id" })
], User.prototype, "id", 2);
__decorateClass([
  (0, import_typeorm.Column)({ name: "username", type: "varchar" })
], User.prototype, "username", 2);
__decorateClass([
  (0, import_typeorm.Column)({ name: "password", type: "varchar" })
], User.prototype, "password", 2);
__decorateClass([
  (0, import_typeorm.Column)({
    name: "role",
    type: "enum",
    enum: UserRole,
    default: "ALUNO" /* ALUNO */
  })
], User.prototype, "role", 2);
__decorateClass([
  (0, import_typeorm.OneToOne)(() => Person, (person) => person.user_id)
], User.prototype, "person", 2);
User = __decorateClass([
  (0, import_typeorm.Entity)({ name: "user" })
], User);

// src/entities/address.ts
var import_typeorm2 = require("typeorm");
var Address = class {
};
__decorateClass([
  (0, import_typeorm2.PrimaryGeneratedColumn)("increment", { name: "id" })
], Address.prototype, "id", 2);
__decorateClass([
  (0, import_typeorm2.Column)({ name: "street", type: "varchar" })
], Address.prototype, "street", 2);
__decorateClass([
  (0, import_typeorm2.Column)({ name: "city", type: "varchar" })
], Address.prototype, "city", 2);
__decorateClass([
  (0, import_typeorm2.Column)({ name: "state", type: "varchar" })
], Address.prototype, "state", 2);
__decorateClass([
  (0, import_typeorm2.Column)({ name: "zip_code", type: "varchar" })
], Address.prototype, "zip_code", 2);
__decorateClass([
  (0, import_typeorm2.Column)({ name: "person_id", type: "int" })
], Address.prototype, "person_id", 2);
__decorateClass([
  (0, import_typeorm2.ManyToOne)(() => Person, (person) => person.address),
  (0, import_typeorm2.JoinColumn)({ name: "person_id" })
], Address.prototype, "person", 2);
Address = __decorateClass([
  (0, import_typeorm2.Entity)({ name: "address" })
], Address);

// src/entities/posts.entity.ts
var import_typeorm3 = require("typeorm");
var Posts = class {
};
__decorateClass([
  (0, import_typeorm3.PrimaryGeneratedColumn)("increment", { name: "id" })
], Posts.prototype, "id", 2);
__decorateClass([
  (0, import_typeorm3.Column)({ name: "title", type: "varchar" })
], Posts.prototype, "title", 2);
__decorateClass([
  (0, import_typeorm3.Column)({ name: "content", type: "varchar" })
], Posts.prototype, "content", 2);
__decorateClass([
  (0, import_typeorm3.Column)({ name: "image_url", type: "varchar" })
], Posts.prototype, "image_url", 2);
__decorateClass([
  (0, import_typeorm3.Column)({ name: "author_id", type: "int" }),
  (0, import_typeorm3.ManyToOne)(() => Person, (person) => person.posts),
  (0, import_typeorm3.JoinColumn)({ name: "author_id" })
], Posts.prototype, "author_id", 2);
__decorateClass([
  (0, import_typeorm3.CreateDateColumn)({
    name: "created_at",
    type: "timestamp without time zone",
    default: () => "CURRENT_TIMESTAMP"
  })
], Posts.prototype, "created_at", 2);
__decorateClass([
  (0, import_typeorm3.UpdateDateColumn)({
    name: "updated_at",
    type: "timestamp without time zone",
    default: () => "CURRENT_TIMESTAMP"
  })
], Posts.prototype, "updated_at", 2);
Posts = __decorateClass([
  (0, import_typeorm3.Entity)({ name: "posts" })
], Posts);

// src/entities/person.entity.ts
var Person = class {
};
__decorateClass([
  (0, import_typeorm4.PrimaryGeneratedColumn)("increment", { name: "id" })
], Person.prototype, "id", 2);
__decorateClass([
  (0, import_typeorm4.Column)({ name: "cpf", type: "varchar" })
], Person.prototype, "cpf", 2);
__decorateClass([
  (0, import_typeorm4.Column)({ name: "name", type: "varchar" })
], Person.prototype, "name", 2);
__decorateClass([
  (0, import_typeorm4.Column)({ name: "birth", type: "date" })
], Person.prototype, "birth", 2);
__decorateClass([
  (0, import_typeorm4.Column)({ name: "email", type: "varchar" })
], Person.prototype, "email", 2);
__decorateClass([
  (0, import_typeorm4.OneToOne)(() => User, (user) => user.person),
  (0, import_typeorm4.JoinColumn)({ name: "user_id" })
], Person.prototype, "user_id", 2);
__decorateClass([
  (0, import_typeorm4.OneToMany)(() => Address, (address) => address.person)
], Person.prototype, "address", 2);
__decorateClass([
  (0, import_typeorm4.OneToMany)(() => Posts, (posts) => posts.author_id)
], Person.prototype, "posts", 2);
Person = __decorateClass([
  (0, import_typeorm4.Entity)({ name: "person" })
], Person);

// src/lib/typeorm/typeorm.ts
var import_typeorm5 = require("typeorm");

// src/lib/typeorm/migrations/1773452300096-UserAddRole.ts
var UserAddRole1773452300096 = class {
  async up(queryRunner) {
    await queryRunner.query(
      `CREATE TYPE "user_role_enum" AS ENUM('professor', 'aluno')`
    );
    await queryRunner.query(`
            ALTER TABLE "user" 
            ADD COLUMN "role" "user_role_enum" NOT NULL DEFAULT 'aluno'
        `);
  }
  async down(queryRunner) {
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "role"`);
    await queryRunner.query(`DROP TYPE "user_role_enum"`);
  }
};

// src/lib/typeorm/migrations/1773790761895-UpdateUserRoleToUppercase.ts
var UpdateUserRoleToUppercase1773790761895 = class {
  async up(queryRunner) {
    await queryRunner.query(
      `ALTER TABLE "user" ALTER COLUMN "role" DROP DEFAULT`
    );
    await queryRunner.query(
      `ALTER TYPE "user_role_enum" RENAME TO "user_role_enum_old"`
    );
    await queryRunner.query(
      `CREATE TYPE "user_role_enum" AS ENUM('PROFESSOR', 'ALUNO')`
    );
    await queryRunner.query(`
            ALTER TABLE "user" 
            ALTER COLUMN "role" TYPE "user_role_enum" 
            USING UPPER("role"::text)::user_role_enum
        `);
    await queryRunner.query(
      `ALTER TABLE "user" ALTER COLUMN "role" SET DEFAULT 'ALUNO'`
    );
    await queryRunner.query(`DROP TYPE "user_role_enum_old"`);
  }
  async down(queryRunner) {
    await queryRunner.query(
      `ALTER TABLE "user" ALTER COLUMN "role" DROP DEFAULT`
    );
    await queryRunner.query(
      `ALTER TYPE "user_role_enum" RENAME TO "user_role_enum_new"`
    );
    await queryRunner.query(
      `CREATE TYPE "user_role_enum" AS ENUM('professor', 'aluno')`
    );
    await queryRunner.query(`
            ALTER TABLE "user" 
            ALTER COLUMN "role" TYPE "user_role_enum" 
            USING LOWER("role"::text)::user_role_enum
        `);
    await queryRunner.query(
      `ALTER TABLE "user" ALTER COLUMN "role" SET DEFAULT 'aluno'`
    );
    await queryRunner.query(`DROP TYPE "user_role_enum_new"`);
  }
};

// src/lib/typeorm/migrations/1777408444519-AlterTablePersonUniqueCpf.ts
var AlterTablePersonUniqueCpf1777408444519 = class {
  async up(queryRunner) {
    await queryRunner.query(
      `ALTER TABLE person 
        ADD CONSTRAINT person_unique_cpf UNIQUE (cpf)`
    );
  }
  async down(queryRunner) {
    await queryRunner.query(
      `ALTER TABLE person
        DROP CONSTRAINT IF EXISTS person_unique_cpf
        `
    );
  }
};

// src/lib/typeorm/migrations/1777421308811-AlterTablePostsAddAuthorForeignKey.ts
var AlterTablePostsAddAuthorForeignKey1777421308811 = class {
  async up(queryRunner) {
    await queryRunner.query(`ALTER TABLE posts
            ADD CONSTRAINT fk_posts_author
            FOREIGN KEY (author_id)
            REFERENCES person(id)
            ON DELETE RESTRICT
            ON UPDATE CASCADE`);
  }
  async down(queryRunner) {
    await queryRunner.query(`
      ALTER TABLE posts
      DROP CONSTRAINT IF EXISTS fk_posts_author
    `);
  }
};

// src/lib/typeorm/typeorm.ts
var appDataSource = new import_typeorm5.DataSource({
  type: "postgres",
  host: env.DATABASE_HOST,
  port: env.DATABASE_PORT,
  username: env.DATABASE_USER,
  password: env.DATABASE_PASSWORD,
  database: env.DATABASE_NAME,
  entities: [Posts, User, Person, Address],
  migrations: [
    UserAddRole1773452300096,
    UpdateUserRoleToUppercase1773790761895,
    AlterTablePersonUniqueCpf1777408444519,
    AlterTablePostsAddAuthorForeignKey1777421308811
  ],
  logging: env.NODE_ENV === "development"
});
appDataSource.initialize().then(() => {
  console.log("Database with typeorm connected!");
}).catch((err) => {
  console.error("Error connecting to database with typeorm", err);
});

// src/app.ts
var import_fastify = __toESM(require("fastify"));

// src/utils/global-error-handler.ts
var import_zod2 = require("zod");
var errorHandlerMap = {
  ZodError: (error, _, reply) => {
    return reply.status(400).send({
      message: "Validation error",
      ...error instanceof import_zod2.ZodError && { error: error.format() }
    });
  },
  ResourceNotFoundError: (error, _, reply) => {
    return reply.status(404).send({
      message: error.message
    });
  },
  InvalidCredentialsError: (error, _, reply) => {
    return reply.status(404).send({
      message: error.message
    });
  },
  UnauthorizedError: (error, _, reply) => {
    return reply.status(403).send({
      message: error.message
    });
  },
  DuplicateResourceError: (error, _, reply) => {
    return reply.status(409).send({
      message: error.message
    });
  }
};
var globalErrorHandler = (error, _, reply) => {
  if (env.NODE_ENV === "development") {
    console.error(error);
  }
  const handler = errorHandlerMap[error.constructor.name];
  if (handler) return handler(error, _, reply);
  return reply.status(500).send({
    message: "Internal server error"
  });
};

// src/repositories/typeorm/posts.repository.ts
var import_typeorm6 = require("typeorm");
var PostsRepository = class {
  constructor() {
    this.repository = appDataSource.getRepository(Posts);
  }
  async findAll(page, limit) {
    return this.repository.find({
      relations: ["author_id"],
      skip: (page - 1) * limit,
      take: limit
    });
  }
  async findById(id) {
    return this.repository.findOne({
      relations: ["author_id"],
      where: {
        id
      }
    });
  }
  async search(query) {
    return this.repository.find({
      relations: ["author_id"],
      where: [
        { title: (0, import_typeorm6.ILike)(`%${query}%`) },
        // Busca no título
        { content: (0, import_typeorm6.ILike)(`%${query}%`) }
        // Busca no conteúdo
      ]
    });
  }
  async create(posts) {
    return this.repository.save(posts);
  }
  async update(posts) {
    const post = await this.findById(posts.id);
    const updatedPost = this.repository.merge(post, posts);
    return this.repository.save(updatedPost);
  }
  async delete(id) {
    await this.repository.delete(id);
  }
};

// src/useCases/errors/UnauthorizedError.ts
var UnauthorizedError = class extends Error {
  constructor() {
    super("Unauthorized");
  }
};

// src/useCases/find-all-posts.ts
var FindAllPostsUseCase = class {
  constructor(postsRepository) {
    this.postsRepository = postsRepository;
  }
  async execute(page, limit, role) {
    if (role !== "PROFESSOR" /* PROFESSOR */ && role !== "ALUNO" /* ALUNO */) {
      throw new UnauthorizedError();
    }
    return this.postsRepository.findAll(page, limit);
  }
};

// src/useCases/factory/make-find-all-posts-use-case.ts
function makeFindAllPostsUseCase() {
  const postsRepository = new PostsRepository();
  const findAllPostsUseCase = new FindAllPostsUseCase(postsRepository);
  return findAllPostsUseCase;
}

// src/http/controllers/posts/find-all-posts.ts
var import_zod3 = require("zod");
async function findAllPosts(request, reply) {
  const registerQuerySchema = import_zod3.z.object({
    page: import_zod3.z.coerce.number().default(1),
    limit: import_zod3.z.coerce.number().default(10)
  });
  const { page, limit } = registerQuerySchema.parse(request.query);
  const user = request.user;
  const findAllPostsUseCase = makeFindAllPostsUseCase();
  const posts = await findAllPostsUseCase.execute(page, limit, user.role);
  return reply.status(200).send(posts);
}

// src/useCases/create-posts.ts
var CreatePostsUseCase = class {
  constructor(postsRepository) {
    this.postsRepository = postsRepository;
  }
  async execute(posts, role) {
    if (role !== "PROFESSOR" /* PROFESSOR */) {
      throw new UnauthorizedError();
    }
    return this.postsRepository.create(posts);
  }
};

// src/useCases/factory/make-create-posts-use-case.ts
function makeCreatePostsUseCase() {
  const postsRepository = new PostsRepository();
  const createPostsUseCase = new CreatePostsUseCase(postsRepository);
  return createPostsUseCase;
}

// src/http/controllers/posts/create-posts.ts
var import_zod4 = __toESM(require("zod"));
async function createPost(request, reply) {
  const registerPostBodySchema = import_zod4.default.object({
    title: import_zod4.default.string(),
    content: import_zod4.default.string(),
    image_url: import_zod4.default.string(),
    author_id: import_zod4.default.number()
  });
  const { title, content, image_url, author_id } = registerPostBodySchema.parse(
    request.body
  );
  const user = request.user;
  const createPostUseCase = makeCreatePostsUseCase();
  const post = await createPostUseCase.execute(
    {
      title,
      content,
      image_url,
      author_id
    },
    user.role
  );
  return reply.status(201).send(post);
}

// src/useCases/errors/resource-not-found-error.ts
var ResourceNotFoundError = class extends Error {
  constructor() {
    super("Resource not found");
  }
};

// src/useCases/find-posts.ts
var FindPostsUseCase = class {
  constructor(postsRepository) {
    this.postsRepository = postsRepository;
  }
  async execute(id, role) {
    const post = await this.postsRepository.findById(id);
    if (!post) throw new ResourceNotFoundError();
    if (role !== "PROFESSOR" /* PROFESSOR */ && role !== "ALUNO" /* ALUNO */) {
      throw new UnauthorizedError();
    }
    return post;
  }
};

// src/useCases/factory/make-find-posts-use-case.ts
function makeFindPostsUseCase() {
  const postsRepository = new PostsRepository();
  const findPostsUseCase = new FindPostsUseCase(postsRepository);
  return findPostsUseCase;
}

// src/http/controllers/posts/find-post.ts
var import_zod5 = require("zod");
async function findPost(request, reply) {
  const findPostParamsSchema = import_zod5.z.object({
    id: import_zod5.z.coerce.number()
  });
  const { id } = findPostParamsSchema.parse(request.params);
  const user = request.user;
  const findPostUseCase = makeFindPostsUseCase();
  const post = await findPostUseCase.execute(id, user.role);
  return reply.status(200).send(post);
}

// src/useCases/update-posts.ts
var UpdatePostsUseCase = class {
  constructor(postsRepository) {
    this.postsRepository = postsRepository;
  }
  async execute(posts, role) {
    if (!posts.id) {
      throw new ResourceNotFoundError();
    }
    const post = await this.postsRepository.findById(posts.id);
    if (!post) {
      throw new ResourceNotFoundError();
    }
    if (role !== "PROFESSOR" /* PROFESSOR */) {
      throw new UnauthorizedError();
    }
    return this.postsRepository.update(posts);
  }
};

// src/useCases/factory/make-update-posts-use-case.ts
function makeUpdatePostsUseCase() {
  const postsRepository = new PostsRepository();
  const updatePostsUseCase = new UpdatePostsUseCase(postsRepository);
  return updatePostsUseCase;
}

// src/http/controllers/posts/update-posts.ts
var import_zod6 = require("zod");
async function updatePosts(request, reply) {
  const registerParamsSchema = import_zod6.z.object({
    id: import_zod6.z.coerce.number()
  });
  const { id } = registerParamsSchema.parse(request.params);
  const registerBodySchema = import_zod6.z.object({
    title: import_zod6.z.string(),
    content: import_zod6.z.string(),
    image_url: import_zod6.z.string(),
    author_id: import_zod6.z.number().optional()
  });
  const { title, content, image_url, author_id } = registerBodySchema.parse(
    request.body
  );
  const user = request.user;
  const updatePostsUseCase = makeUpdatePostsUseCase();
  const posts = await updatePostsUseCase.execute(
    {
      id,
      title,
      content,
      image_url,
      author_id
    },
    user.role
  );
  return reply.status(200).send(posts);
}

// src/useCases/delete-posts.ts
var DeletePostsUseCase = class {
  constructor(postsRepository) {
    this.postsRepository = postsRepository;
  }
  async execute(id, role) {
    const post = await this.postsRepository.findById(id);
    if (!post) {
      throw new ResourceNotFoundError();
    }
    if (role !== "PROFESSOR" /* PROFESSOR */) {
      throw new UnauthorizedError();
    }
    return this.postsRepository.delete(id);
  }
};

// src/useCases/factory/make-delete-posts-use-case.ts
function makeDeletePostUseCase() {
  const postsRepository = new PostsRepository();
  const deletePostsUseCase = new DeletePostsUseCase(postsRepository);
  return deletePostsUseCase;
}

// src/http/controllers/posts/delete-posts.ts
var import_zod7 = require("zod");
async function deletePost(req, reply) {
  const registerParamsSchema = import_zod7.z.object({
    id: import_zod7.z.coerce.number()
  });
  const { id } = registerParamsSchema.parse(req.params);
  const user = req.user;
  const deletepostUseCase = makeDeletePostUseCase();
  await deletepostUseCase.execute(id, user.role);
  return reply.status(204).send();
}

// src/http/middlewares/jwt-validate.ts
async function validateJwt(req, reply) {
  try {
    if (req.url.startsWith("/docs")) return;
    const routeFreeList = ["POST-/user", "POST-/user/signin"];
    const validateRoute = `${req.method}-${req.routeOptions.url}`;
    if (routeFreeList.includes(validateRoute)) return;
    await req.jwtVerify();
  } catch (error) {
    reply.status(401).send({ message: "Unauthorized" });
  }
}

// src/useCases/search-posts.ts
var SearchPostsUseCase = class {
  constructor(postsRepository) {
    this.postsRepository = postsRepository;
  }
  async execute(query, role) {
    if (!query) {
      return [];
    }
    if (role !== "PROFESSOR" /* PROFESSOR */ && role !== "ALUNO" /* ALUNO */) {
      throw new UnauthorizedError();
    }
    const posts = await this.postsRepository.search(query);
    return posts;
  }
};

// src/useCases/factory/make-search-posts-use-case.ts
function makeSearchPostsUseCase() {
  const postsRepository = new PostsRepository();
  const searchPostsUseCase = new SearchPostsUseCase(postsRepository);
  return searchPostsUseCase;
}

// src/http/controllers/posts/search-posts.ts
var import_zod8 = require("zod");
async function searchPosts(req, reply) {
  const searchQuerySchema = import_zod8.z.object({
    q: import_zod8.z.string()
  });
  const { q } = searchQuerySchema.parse(req.query);
  const user = req.user;
  const searchPostsUseCase = makeSearchPostsUseCase();
  const posts = await searchPostsUseCase.execute(q, user.role);
  return reply.status(200).send(posts);
}

// src/http/controllers/posts/routes.ts
async function postsRoutes(app2) {
  app2.get(
    "/posts",
    {
      preHandler: [validateJwt],
      schema: {
        tags: ["Posts"],
        description: "Lista todos os posts",
        security: [{ bearerAuth: [] }],
        response: {
          200: {
            description: "Lista de posts retornada com sucesso",
            type: "array",
            items: {
              type: "object",
              properties: {
                id: { type: "string" },
                title: { type: "string" },
                content: { type: "string" },
                created_at: { type: "string", format: "date-time" }
              }
            }
          }
        }
      }
    },
    findAllPosts
  );
  app2.get(
    "/posts/:id",
    {
      schema: {
        tags: ["Posts"],
        description: "Busca um post pelo ID",
        params: {
          type: "object",
          properties: {
            id: { type: "string" }
          }
        },
        response: {
          200: {
            description: "Post encontrado",
            type: "object",
            properties: {
              id: { type: "string" },
              title: { type: "string" },
              content: { type: "string" }
            }
          }
        }
      }
    },
    findPost
  );
  app2.get(
    "/posts/search",
    {
      schema: {
        tags: ["Posts"],
        description: "Pesquisa posts por t\xEDtulo ou conte\xFAdo",
        querystring: {
          type: "object",
          properties: {
            query: { type: "string" }
          }
        }
      }
    },
    searchPosts
  );
  app2.post(
    "/posts",
    {
      schema: {
        tags: ["Posts"],
        description: "Cria um novo post",
        security: [{ bearerAuth: [] }],
        body: {
          type: "object",
          properties: {
            title: { type: "string" },
            content: { type: "string" }
          },
          required: ["title", "content"]
        }
      }
    },
    createPost
  );
  app2.put(
    "/posts/:id",
    {
      schema: {
        tags: ["Posts"],
        description: "Atualiza um post existente",
        security: [{ bearerAuth: [] }],
        params: {
          type: "object",
          properties: {
            id: { type: "string" }
          }
        },
        body: {
          type: "object",
          properties: {
            title: { type: "string" },
            content: { type: "string" }
          }
        }
      }
    },
    updatePosts
  );
  app2.delete(
    "/posts/:id",
    {
      schema: {
        tags: ["Posts"],
        description: "Remove um post",
        security: [{ bearerAuth: [] }],
        params: {
          type: "object",
          properties: {
            id: { type: "string" }
          }
        }
      }
    },
    deletePost
  );
}

// src/repositories/typeorm/user.repository.ts
var UserRepository = class {
  constructor() {
    this.repository = appDataSource.getRepository(User);
  }
  async create(user) {
    return this.repository.save(user);
  }
  async findWithPerson(userId) {
    const user = await this.repository.findOne({
      where: { id: userId },
      relations: ["person"]
    });
    return user ?? void 0;
  }
  async findByUsername(username) {
    const result = await this.repository.findOne({
      where: { username }
    });
    return result ?? void 0;
  }
};

// src/useCases/create-user.ts
var CreateUserUseCase = class {
  constructor(usersRepository) {
    this.usersRepository = usersRepository;
  }
  async execute(user) {
    return this.usersRepository.create(user);
  }
};

// src/useCases/factory/make-create-user-use-case.ts
function makeCreateUserUseCase() {
  const usersRepository = new UserRepository();
  const createUserUseCase = new CreateUserUseCase(usersRepository);
  return createUserUseCase;
}

// src/http/controllers/user/create.ts
var import_bcryptjs = require("bcryptjs");
var import_zod9 = require("zod");
async function create(req, reply) {
  const registerBodySchema = import_zod9.z.object({
    username: import_zod9.z.string(),
    password: import_zod9.z.string(),
    role: import_zod9.z.enum(["ALUNO" /* ALUNO */, "PROFESSOR" /* PROFESSOR */]).default("ALUNO" /* ALUNO */).transform((role2) => role2.toUpperCase())
  });
  const { username, password, role } = registerBodySchema.parse(req.body);
  const hashPassword = await (0, import_bcryptjs.hash)(password, 8);
  const createUserUseCase = makeCreateUserUseCase();
  const userWithHashPassword = {
    username,
    password: hashPassword,
    role
  };
  const user = await createUserUseCase.execute(userWithHashPassword);
  return reply.status(201).send({ id: user?.id, username: user?.username });
}

// src/useCases/find-with-person.ts
var FindWithPersonUseCase = class {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }
  async execute(userId) {
    const user = await this.userRepository.findWithPerson(userId);
    if (!user) throw new ResourceNotFoundError();
    return user;
  }
};

// src/useCases/factory/make-find-with-person-use-case.ts
function makeFindWithPersonUseCase() {
  const userRepository = new UserRepository();
  const findWithPersonUseCase = new FindWithPersonUseCase(userRepository);
  return findWithPersonUseCase;
}

// src/http/controllers/user/find-user.ts
var import_zod10 = require("zod");
async function findUser(req, reply) {
  const registerParamsSchema = import_zod10.z.object({
    id: import_zod10.z.coerce.number()
  });
  const { id } = registerParamsSchema.parse(req.params);
  const findWithPersonUseCase = makeFindWithPersonUseCase();
  const user = await findWithPersonUseCase.execute(id);
  return reply.status(200).send(user);
}

// src/useCases/errors/invalid-credencials-error.ts
var InvalidCredentialsError = class extends Error {
  constructor() {
    super("Username or password invalid");
  }
};

// src/useCases/signin.ts
var SigninUseCase = class {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }
  async execute(username) {
    const user = await this.userRepository.findByUsername(username);
    if (!user) throw new InvalidCredentialsError();
    return user;
  }
};

// src/useCases/factory/make-signin-use-case.ts
function makeSigninUseCase() {
  const userRepository = new UserRepository();
  const signinUseCase = new SigninUseCase(userRepository);
  return signinUseCase;
}

// src/http/controllers/user/signin.ts
var import_bcryptjs2 = require("bcryptjs");
var import_zod11 = require("zod");
async function signin(req, reply) {
  const registerBodySchema = import_zod11.z.object({
    username: import_zod11.z.string(),
    password: import_zod11.z.string()
  });
  const { username, password } = registerBodySchema.parse(req.body);
  const signinUseCase = makeSigninUseCase();
  const user = await signinUseCase.execute(username);
  const doesPasswordMatch = await (0, import_bcryptjs2.compare)(password, user.password);
  if (!doesPasswordMatch) {
    throw new InvalidCredentialsError();
  }
  const token = await reply.jwtSign(
    {
      role: user.role
    },
    {
      sign: {
        sub: String(user.id)
      }
    }
  );
  return reply.status(200).send({
    token
  });
}

// src/http/controllers/user/routes.ts
async function userRoutes(app2) {
  app2.post(
    "/user",
    {
      schema: {
        tags: ["User"],
        description: "Cria um novo usu\xE1rio",
        body: {
          type: "object",
          properties: {
            username: { type: "string" },
            password: { type: "string" },
            role: { type: "string", enum: ["PROFESSOR", "ALUNO"] }
          },
          required: ["usename", "password", "role"]
        },
        response: {
          201: {
            description: "Usu\xE1rio criado com sucesso",
            type: "object",
            properties: {
              id: { type: "string" },
              username: { type: "string" },
              role: { type: "string" }
            }
          }
        }
      }
    },
    create
  );
  app2.get(
    "/user/:id",
    {
      schema: {
        tags: ["User"],
        description: "Busca um usu\xE1rio pelo ID",
        params: {
          type: "object",
          properties: {
            id: { type: "string" }
          }
        },
        response: {
          200: {
            description: "Usu\xE1rio encontrado",
            type: "object",
            properties: {
              id: { type: "string" },
              username: { type: "string" },
              role: { type: "string" }
            }
          }
        }
      }
    },
    findUser
  );
  app2.post(
    "/user/signin",
    {
      schema: {
        tags: ["User"],
        description: "Autentica\xE7\xE3o de usu\xE1rio",
        body: {
          type: "object",
          properties: {
            username: { type: "string" },
            password: { type: "string" }
          },
          required: ["username", "password"]
        },
        response: {
          200: {
            description: "Login realizado com sucesso",
            type: "object",
            properties: {
              token: { type: "string" }
            }
          }
        }
      }
    },
    signin
  );
}

// src/repositories/typeorm/person.repository.ts
var PersonRepository = class {
  constructor() {
    this.repository = appDataSource.getRepository(Person);
  }
  async create(person) {
    return this.repository.save(person);
  }
  async findByCpf(cpf) {
    return await this.repository.findOne({ where: { cpf } });
  }
};

// src/useCases/errors/duplicate-resource-error.ts
var DuplicateResourceError = class extends Error {
  constructor() {
    super("CPF j\xE1 cadastrado");
  }
};

// src/useCases/create-person.ts
var CreatePersonUseCase = class {
  constructor(personRepository) {
    this.personRepository = personRepository;
  }
  async execute(person) {
    const existingPerson = await this.personRepository.findByCpf(person.cpf);
    if (existingPerson) {
      throw new DuplicateResourceError();
    }
    return this.personRepository.create(person);
  }
};

// src/useCases/factory/make-create-person-use-case.ts
function makeCreatePersonUseCase() {
  const personRepository = new PersonRepository();
  const createPersonUseCase = new CreatePersonUseCase(personRepository);
  return createPersonUseCase;
}

// src/http/controllers/person/create-person.ts
var import_zod12 = require("zod");
async function create2(req, reply) {
  const registerBodySchema = import_zod12.z.object({
    cpf: import_zod12.z.string(),
    name: import_zod12.z.string(),
    birth: import_zod12.z.coerce.date(),
    email: import_zod12.z.string().email(),
    user_id: import_zod12.z.coerce.number()
  });
  const { cpf, name, birth, email, user_id } = registerBodySchema.parse(
    req.body
  );
  const createPersonUseCase = makeCreatePersonUseCase();
  const person = await createPersonUseCase.execute({
    cpf,
    name,
    birth,
    email,
    user_id
  });
  return reply.status(201).send(person);
}

// src/http/controllers/person/routes.ts
async function personRoutes(app2) {
  app2.post(
    "/person",
    {
      schema: {
        tags: ["Person"],
        description: "Criar uma nova pessoa",
        body: {
          type: "object",
          properties: {
            name: { type: "string" },
            email: { type: "string", format: "email" },
            cpf: { type: "string" },
            birth_date: { type: "string", format: "date" }
          },
          required: ["name", "email"]
        },
        response: {
          201: {
            description: "Pessoa criada com sucesso",
            type: "object",
            properties: {
              id: { type: "string" },
              name: { type: "string" },
              email: { type: "string" }
            }
          }
        }
      }
    },
    create2
  );
}

// src/repositories/typeorm/address.repository.ts
var AddressRepository = class {
  constructor() {
    this.repository = appDataSource.getRepository(Address);
  }
  async findAddressByPersonId(personId, page, limit) {
    const address = await this.repository.find({
      relations: ["person"],
      where: { person: { id: personId } },
      skip: (page - 1) * limit,
      take: limit
    });
    return address.map((addr) => {
      const { person, ...addressData } = addr;
      return {
        ...addressData,
        ...person
      };
    });
  }
  async create(address) {
    return this.repository.save(address);
  }
};

// src/useCases/create-address.ts
var CreateAddressUseCase = class {
  constructor(addressRepository) {
    this.addressRepository = addressRepository;
  }
  async execute(address) {
    if (!address.person) throw new ResourceNotFoundError();
    return this.addressRepository.create(address);
  }
};

// src/useCases/factory/make-create-address-use-case.ts
function makeCreateAddressUseCase() {
  const addressRepository = new AddressRepository();
  const createAddressUseCase = new CreateAddressUseCase(addressRepository);
  return createAddressUseCase;
}

// src/http/controllers/address/create.ts
var import_zod13 = require("zod");
async function create3(request, reply) {
  const registerBodySchema = import_zod13.z.object({
    street: import_zod13.z.string(),
    city: import_zod13.z.string(),
    state: import_zod13.z.string(),
    zip_code: import_zod13.z.string(),
    person_id: import_zod13.z.coerce.number()
  });
  const { street, city, state, zip_code, person_id } = registerBodySchema.parse(
    request.body
  );
  const createAddressUseCase = makeCreateAddressUseCase();
  const address = await createAddressUseCase.execute({
    street,
    city,
    state,
    zip_code,
    person_id
  });
  reply.status(201).send(address);
}

// src/useCases/find-address-by-person.ts
var FindAddressByPersonUseCase = class {
  constructor(addressRepository) {
    this.addressRepository = addressRepository;
  }
  async execute(person_id, page, limit) {
    const addresses = await this.addressRepository.findAddressByPersonId(
      person_id,
      page,
      limit
    );
    if (!addresses) throw new ResourceNotFoundError();
    return addresses;
  }
};

// src/useCases/factory/make-find-address-by-person-use-case.ts
function makeFindAddressByPersonUseCase() {
  const addressRepository = new AddressRepository();
  const findAddressByPersonUseCase = new FindAddressByPersonUseCase(
    addressRepository
  );
  return findAddressByPersonUseCase;
}

// src/http/controllers/address/find-address.ts
var import_zod14 = require("zod");
async function findAddress(request, reply) {
  const registerParamsSchema = import_zod14.z.object({
    personId: import_zod14.z.coerce.number()
  });
  const registerQuerySchema = import_zod14.z.object({
    page: import_zod14.z.coerce.number().default(1),
    limit: import_zod14.z.coerce.number().default(10)
  });
  const { personId } = registerParamsSchema.parse(request.params);
  const { page = 1, limit = 10 } = registerQuerySchema.parse(request.query);
  const findAddressByPersonIdUseCase = makeFindAddressByPersonUseCase();
  const address = await findAddressByPersonIdUseCase.execute(
    personId,
    page,
    limit
  );
  return reply.status(200).send(address);
}

// src/http/controllers/address/routes.ts
async function addressRoutes(app2) {
  app2.post(
    "/address",
    {
      schema: {
        tags: ["Address"],
        description: "Cria um novo endere\xE7o para uma pessoa",
        body: {
          type: "object",
          properties: {
            street: { type: "string" },
            city: { type: "string" },
            state: { type: "string", minLength: 2, maxLength: 2 },
            zip_code: { type: "string" },
            person_id: { type: "number" }
          },
          required: ["street", "city", "state", "zip_code", "person_id"]
        },
        response: {
          201: {
            description: "Endere\xE7o criado com sucesso",
            type: "object",
            properties: {
              id: { type: "number" },
              street: { type: "string" },
              city: { type: "string" }
            }
          }
        }
      }
    },
    create3
  );
  app2.get(
    "/address/person/:personId",
    {
      schema: {
        tags: ["Address"],
        description: "Busca o endere\xE7o de uma pessoa pelo ID da pessoa",
        params: {
          type: "object",
          properties: {
            personId: { type: "string" }
          }
        },
        response: {
          200: {
            description: "Endere\xE7o encontrado",
            type: "array",
            items: {
              type: "object",
              properties: {
                id: { type: "number" },
                street: { type: "string" },
                city: { type: "string" },
                state: { type: "string" },
                zip_code: { type: "string" }
              }
            }
          }
        }
      }
    },
    findAddress
  );
}

// src/app.ts
var import_jwt = __toESM(require("@fastify/jwt"));
var import_swagger = __toESM(require("@fastify/swagger"));
var import_swagger_ui = __toESM(require("@fastify/swagger-ui"));
var app = (0, import_fastify.default)();
app.register(import_swagger.default, {
  swagger: {
    info: {
      title: "Learn-io",
      description: "API para gerenciamento de cursos e posts no Learn-io",
      version: "1.0.0"
    },
    host: "localhost:3000",
    schemes: ["http"],
    consumes: ["application/json"],
    produces: ["application/json"],
    securityDefinitions: {
      bearerAuth: {
        type: "apiKey",
        name: "Authorization",
        in: "header",
        description: "Digite o token no formato: Bearer [token]"
      }
    }
  }
});
app.register(import_swagger_ui.default, {
  routePrefix: "/docs"
});
app.register(import_jwt.default, {
  secret: env.JWT_SECRET,
  sign: {
    expiresIn: "1h"
  }
});
app.addHook("preHandler", validateJwt);
app.register(postsRoutes);
app.register(userRoutes);
app.register(personRoutes);
app.register(addressRoutes);
app.setErrorHandler(globalErrorHandler);

// src/server.ts
app.listen({
  host: "0.0.0.0",
  port: env.PORT
}).then(() => {
  console.log(`Server is running on port ${env.PORT}`);
});
