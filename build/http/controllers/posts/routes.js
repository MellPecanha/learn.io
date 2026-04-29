"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp(target, key, result);
  return result;
};

// src/http/controllers/posts/routes.ts
var routes_exports = {};
__export(routes_exports, {
  postsRoutes: () => postsRoutes
});
module.exports = __toCommonJS(routes_exports);

// src/entities/posts.entity.ts
var import_typeorm4 = require("typeorm");

// src/entities/person.entity.ts
var import_typeorm3 = require("typeorm");

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

// src/entities/person.entity.ts
var Person = class {
};
__decorateClass([
  (0, import_typeorm3.PrimaryGeneratedColumn)("increment", { name: "id" })
], Person.prototype, "id", 2);
__decorateClass([
  (0, import_typeorm3.Column)({ name: "cpf", type: "varchar" })
], Person.prototype, "cpf", 2);
__decorateClass([
  (0, import_typeorm3.Column)({ name: "name", type: "varchar" })
], Person.prototype, "name", 2);
__decorateClass([
  (0, import_typeorm3.Column)({ name: "birth", type: "date" })
], Person.prototype, "birth", 2);
__decorateClass([
  (0, import_typeorm3.Column)({ name: "email", type: "varchar" })
], Person.prototype, "email", 2);
__decorateClass([
  (0, import_typeorm3.OneToOne)(() => User, (user) => user.person),
  (0, import_typeorm3.JoinColumn)({ name: "user_id" })
], Person.prototype, "user_id", 2);
__decorateClass([
  (0, import_typeorm3.OneToMany)(() => Address, (address) => address.person)
], Person.prototype, "address", 2);
__decorateClass([
  (0, import_typeorm3.OneToMany)(() => Posts, (posts) => posts.author_id)
], Person.prototype, "posts", 2);
Person = __decorateClass([
  (0, import_typeorm3.Entity)({ name: "person" })
], Person);

// src/entities/posts.entity.ts
var Posts = class {
};
__decorateClass([
  (0, import_typeorm4.PrimaryGeneratedColumn)("increment", { name: "id" })
], Posts.prototype, "id", 2);
__decorateClass([
  (0, import_typeorm4.Column)({ name: "title", type: "varchar" })
], Posts.prototype, "title", 2);
__decorateClass([
  (0, import_typeorm4.Column)({ name: "content", type: "varchar" })
], Posts.prototype, "content", 2);
__decorateClass([
  (0, import_typeorm4.Column)({ name: "image_url", type: "varchar" })
], Posts.prototype, "image_url", 2);
__decorateClass([
  (0, import_typeorm4.Column)({ name: "author_id", type: "int" }),
  (0, import_typeorm4.ManyToOne)(() => Person, (person) => person.posts),
  (0, import_typeorm4.JoinColumn)({ name: "author_id" })
], Posts.prototype, "author_id", 2);
__decorateClass([
  (0, import_typeorm4.CreateDateColumn)({
    name: "created_at",
    type: "timestamp without time zone",
    default: () => "CURRENT_TIMESTAMP"
  })
], Posts.prototype, "created_at", 2);
__decorateClass([
  (0, import_typeorm4.UpdateDateColumn)({
    name: "updated_at",
    type: "timestamp without time zone",
    default: () => "CURRENT_TIMESTAMP"
  })
], Posts.prototype, "updated_at", 2);
Posts = __decorateClass([
  (0, import_typeorm4.Entity)({ name: "posts" })
], Posts);

// src/repositories/typeorm/posts.repository.ts
var import_typeorm6 = require("typeorm");

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

// src/repositories/typeorm/posts.repository.ts
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
var import_zod2 = require("zod");
async function findAllPosts(request, reply) {
  const registerQuerySchema = import_zod2.z.object({
    page: import_zod2.z.coerce.number().default(1),
    limit: import_zod2.z.coerce.number().default(10)
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
var import_zod3 = __toESM(require("zod"));
async function createPost(request, reply) {
  const registerPostBodySchema = import_zod3.default.object({
    title: import_zod3.default.string(),
    content: import_zod3.default.string(),
    image_url: import_zod3.default.string(),
    author_id: import_zod3.default.number()
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
var import_zod4 = require("zod");
async function findPost(request, reply) {
  const findPostParamsSchema = import_zod4.z.object({
    id: import_zod4.z.coerce.number()
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
var import_zod5 = require("zod");
async function updatePosts(request, reply) {
  const registerParamsSchema = import_zod5.z.object({
    id: import_zod5.z.coerce.number()
  });
  const { id } = registerParamsSchema.parse(request.params);
  const registerBodySchema = import_zod5.z.object({
    title: import_zod5.z.string(),
    content: import_zod5.z.string(),
    image_url: import_zod5.z.string(),
    author_id: import_zod5.z.number().optional()
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
var import_zod6 = require("zod");
async function deletePost(req, reply) {
  const registerParamsSchema = import_zod6.z.object({
    id: import_zod6.z.coerce.number()
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
var import_zod7 = require("zod");
async function searchPosts(req, reply) {
  const searchQuerySchema = import_zod7.z.object({
    q: import_zod7.z.string()
  });
  const { q } = searchQuerySchema.parse(req.query);
  const user = req.user;
  const searchPostsUseCase = makeSearchPostsUseCase();
  const posts = await searchPostsUseCase.execute(q, user.role);
  return reply.status(200).send(posts);
}

// src/http/controllers/posts/routes.ts
async function postsRoutes(app) {
  app.get(
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
  app.get(
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
  app.get(
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
  app.post(
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
  app.put(
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
  app.delete(
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  postsRoutes
});
