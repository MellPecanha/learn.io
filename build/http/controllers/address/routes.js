"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp(target, key, result);
  return result;
};

// src/http/controllers/address/routes.ts
var routes_exports = {};
__export(routes_exports, {
  addressRoutes: () => addressRoutes
});
module.exports = __toCommonJS(routes_exports);

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

// src/useCases/errors/resource-not-found-error.ts
var ResourceNotFoundError = class extends Error {
  constructor() {
    super("Resource not found");
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
var import_zod2 = require("zod");
async function create(request, reply) {
  const registerBodySchema = import_zod2.z.object({
    street: import_zod2.z.string(),
    city: import_zod2.z.string(),
    state: import_zod2.z.string(),
    zip_code: import_zod2.z.string(),
    person_id: import_zod2.z.coerce.number()
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
var import_zod3 = require("zod");
async function findAddress(request, reply) {
  const registerParamsSchema = import_zod3.z.object({
    personId: import_zod3.z.coerce.number()
  });
  const registerQuerySchema = import_zod3.z.object({
    page: import_zod3.z.coerce.number().default(1),
    limit: import_zod3.z.coerce.number().default(10)
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
async function addressRoutes(app) {
  app.post(
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
    create
  );
  app.get(
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  addressRoutes
});
