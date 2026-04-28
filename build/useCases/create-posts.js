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

// src/useCases/create-posts.ts
var create_posts_exports = {};
__export(create_posts_exports, {
  CreatePostsUseCase: () => CreatePostsUseCase
});
module.exports = __toCommonJS(create_posts_exports);

// src/useCases/errors/UnauthorizedError.ts
var UnauthorizedError = class extends Error {
  constructor() {
    super("Unauthorized");
  }
};

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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CreatePostsUseCase
});
