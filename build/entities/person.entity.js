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

// src/entities/person.entity.ts
var person_entity_exports = {};
__export(person_entity_exports, {
  Person: () => Person
});
module.exports = __toCommonJS(person_entity_exports);
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Person
});
