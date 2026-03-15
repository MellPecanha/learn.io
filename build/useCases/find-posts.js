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

// src/useCases/find-posts.ts
var find_posts_exports = {};
__export(find_posts_exports, {
  FindPostsUseCase: () => FindPostsUseCase
});
module.exports = __toCommonJS(find_posts_exports);

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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  FindPostsUseCase
});
