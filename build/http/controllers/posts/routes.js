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
var import_typeorm = require("typeorm");
var Posts = class {
};
__decorateClass([
  (0, import_typeorm.PrimaryGeneratedColumn)("increment", { name: "id" })
], Posts.prototype, "id", 2);
__decorateClass([
  (0, import_typeorm.Column)({ name: "title", type: "varchar" })
], Posts.prototype, "title", 2);
__decorateClass([
  (0, import_typeorm.Column)({ name: "content", type: "varchar" })
], Posts.prototype, "content", 2);
__decorateClass([
  (0, import_typeorm.Column)({ name: "image_url", type: "varchar" })
], Posts.prototype, "image_url", 2);
__decorateClass([
  (0, import_typeorm.Column)({ name: "author_id", type: "int" })
], Posts.prototype, "author_id", 2);
__decorateClass([
  (0, import_typeorm.Column)({
    name: "created_at",
    type: "timestamp without time zone",
    default: () => "CURRENT_TIMESTAMP"
  })
], Posts.prototype, "created_at", 2);
__decorateClass([
  (0, import_typeorm.Column)({
    name: "updated_at",
    type: "timestamp without time zone",
    default: () => "CURRENT_TIMESTAMP"
  })
], Posts.prototype, "updated_at", 2);
Posts = __decorateClass([
  (0, import_typeorm.Entity)({ name: "posts" })
], Posts);

// src/entities/person.entity.ts
var import_typeorm3 = require("typeorm");

// src/entities/user.entity.ts
var import_typeorm2 = require("typeorm");

// src/entities/enums/user-role.ts
var UserRole = /* @__PURE__ */ ((UserRole2) => {
  UserRole2["PROFESSOR"] = "professor";
  UserRole2["ALUNO"] = "aluno";
  return UserRole2;
})(UserRole || {});

// src/entities/user.entity.ts
var User = class {
};
__decorateClass([
  (0, import_typeorm2.PrimaryGeneratedColumn)("increment", { name: "id" })
], User.prototype, "id", 2);
__decorateClass([
  (0, import_typeorm2.Column)({ name: "username", type: "varchar" })
], User.prototype, "username", 2);
__decorateClass([
  (0, import_typeorm2.Column)({ name: "password", type: "varchar" })
], User.prototype, "password", 2);
__decorateClass([
  (0, import_typeorm2.Column)({
    name: "role",
    type: "enum",
    enum: UserRole,
    default: "aluno" /* ALUNO */
  })
], User.prototype, "role", 2);
__decorateClass([
  (0, import_typeorm2.OneToOne)(() => Person, (person) => person.user_id)
], User.prototype, "person", 2);
User = __decorateClass([
  (0, import_typeorm2.Entity)({ name: "user" })
], User);

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
Person = __decorateClass([
  (0, import_typeorm3.Entity)({ name: "person" })
], Person);

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
  DATABASE_PORT: import_zod.z.coerce.number()
});
var _env = envSchema.safeParse(process.env);
if (!_env.success) {
  console.error("Invalid environment variables", _env.error.format());
  throw new Error("Invalid environment variables");
}
var env = _env.data;

// src/lib/typeorm/typeorm.ts
var import_typeorm4 = require("typeorm");

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

// src/lib/typeorm/typeorm.ts
var appDataSource = new import_typeorm4.DataSource({
  type: "postgres",
  host: env.DATABASE_HOST,
  port: env.DATABASE_PORT,
  username: env.DATABASE_USER,
  password: env.DATABASE_PASSWORD,
  database: env.DATABASE_NAME,
  entities: [Posts, User, Person],
  migrations: [UserAddRole1773452300096],
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
      skip: (page - 1) * limit,
      take: limit
    });
  }
  async findById(id) {
    return this.repository.findOne({
      where: {
        id
      }
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

// src/useCases/find-all-posts.ts
var FindAllPostsUseCase = class {
  constructor(postsRepository) {
    this.postsRepository = postsRepository;
  }
  async execute(page, limit) {
    return this.postsRepository.findAll(page, limit);
  }
};

// src/useCases/factory/make-find-all-posts.ts
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
  const findAllPostsUseCase = makeFindAllPostsUseCase();
  const posts = await findAllPostsUseCase.execute(page, limit);
  return reply.status(200).send(posts);
}

// src/useCases/create-posts.ts
var CreatePostsUseCase = class {
  constructor(postsRepository) {
    this.postsRepository = postsRepository;
  }
  async execute(posts) {
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
  const createPostUseCase = makeCreatePostsUseCase();
  const post = await createPostUseCase.execute({
    title,
    content,
    image_url,
    author_id
  });
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
  async execute(id) {
    const post = await this.postsRepository.findById(id);
    if (!post) throw new ResourceNotFoundError();
    return post;
  }
};

// src/useCases/factory/make-find-posts.ts
function makeFindPostsUseCase() {
  const postsRepository = new PostsRepository();
  const findPostsUseCase = new FindPostsUseCase(postsRepository);
  return findPostsUseCase;
}

// src/http/controllers/posts/find-post.ts
var import_zod4 = __toESM(require("zod"));
async function findPost(request, reply) {
  const findPostParamsSchema = import_zod4.default.object({
    id: import_zod4.default.coerce.number()
  });
  const { id } = findPostParamsSchema.parse(request.params);
  const findPostUseCase = makeFindPostsUseCase();
  const post = await findPostUseCase.execute(id);
  return reply.status(200).send(post);
}

// src/useCases/update-posts.ts
var UpdatePostsUseCase = class {
  constructor(postsRepository) {
    this.postsRepository = postsRepository;
  }
  async execute(posts) {
    if (!posts.id) {
      throw new ResourceNotFoundError();
    }
    const post = await this.postsRepository.findById(posts.id);
    if (!post) {
      throw new ResourceNotFoundError();
    }
    return this.postsRepository.update(posts);
  }
};

// src/useCases/factory/make-update-posts.ts
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
  const updatePostsUseCase = makeUpdatePostsUseCase();
  const posts = await updatePostsUseCase.execute({
    id,
    title,
    content,
    image_url,
    author_id
  });
  return reply.status(200).send(posts);
}

// src/useCases/delete-posts.ts
var DeletePostsUseCase = class {
  constructor(postsRepository) {
    this.postsRepository = postsRepository;
  }
  async execute(id) {
    const post = await this.postsRepository.findById(id);
    if (!post) {
      throw new ResourceNotFoundError();
    }
    return this.postsRepository.delete(id);
  }
};

// src/useCases/factory/make-delete-posts.ts
function makeDeletePostUseCase() {
  const postsRepository = new PostsRepository();
  const deletePostsUseCase = new DeletePostsUseCase(postsRepository);
  return deletePostsUseCase;
}

// src/http/controllers/posts/delete-posts.ts
var import_zod6 = require("zod");
async function deletePost(req, res) {
  const registerParamsSchema = import_zod6.z.object({
    id: import_zod6.z.coerce.number()
  });
  const { id } = registerParamsSchema.parse(req.params);
  const deletepostUseCase = makeDeletePostUseCase();
  await deletepostUseCase.execute(id);
  return res.status(204).send();
}

// src/http/controllers/posts/routes.ts
async function postsRoutes(app) {
  app.get("/posts", findAllPosts);
  app.get("/posts/:id", findPost);
  app.post("/posts", createPost);
  app.put("/posts/:id", updatePosts);
  app.delete("/posts/:id", deletePost);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  postsRoutes
});
