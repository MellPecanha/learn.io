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

// src/useCases/find-all-posts.ts
var find_all_posts_exports = {};
__export(find_all_posts_exports, {
  FindAllPostsUseCase: () => FindAllPostsUseCase
});
module.exports = __toCommonJS(find_all_posts_exports);

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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  FindAllPostsUseCase
});
