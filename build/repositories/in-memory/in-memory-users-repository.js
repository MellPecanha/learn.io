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

// src/repositories/in-memory/in-memory-users-repository.ts
var in_memory_users_repository_exports = {};
__export(in_memory_users_repository_exports, {
  InMemoryUsersRepository: () => InMemoryUsersRepository
});
module.exports = __toCommonJS(in_memory_users_repository_exports);
var InMemoryUsersRepository = class {
  constructor() {
    this.items = [];
  }
  async create(user) {
    const newUser = {
      id: this.items.length + 1,
      username: user.username,
      password: user.password,
      role: user.role
    };
    this.items.push(newUser);
    return newUser;
  }
  async findWithPerson(userId) {
    const user = this.items.find((item) => item.id === userId);
    if (!user) {
      return void 0;
    }
    return {
      ...user,
      id: user.id,
      name: "Fake User Name",
      email: "fake@email.com",
      cpf: "123.456.789-00",
      birth: /* @__PURE__ */ new Date()
    };
  }
  async findByUsername(username) {
    const user = this.items.find((item) => item.username === username);
    return user;
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  InMemoryUsersRepository
});
