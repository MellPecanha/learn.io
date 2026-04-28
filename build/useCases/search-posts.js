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

// src/useCases/search-posts.ts
var search_posts_exports = {};
__export(search_posts_exports, {
  SearchPostsUseCase: () => SearchPostsUseCase
});
module.exports = __toCommonJS(search_posts_exports);

// src/useCases/errors/UnauthorizedError.ts
var UnauthorizedError = class extends Error {
  constructor() {
    super("Unauthorized");
  }
};

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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  SearchPostsUseCase
});
