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

// src/repositories/in-memory/in-memory-posts-repository.ts
var in_memory_posts_repository_exports = {};
__export(in_memory_posts_repository_exports, {
  InMemoryPostsRepository: () => InMemoryPostsRepository
});
module.exports = __toCommonJS(in_memory_posts_repository_exports);
var InMemoryPostsRepository = class {
  constructor() {
    this.items = [];
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async create(data) {
    const post = {
      id: this.items.length + 1,
      title: data.title,
      content: data.content,
      image_url: data.image_url || "",
      author_id: data.author_id || 1,
      created_at: /* @__PURE__ */ new Date(),
      updated_at: /* @__PURE__ */ new Date()
    };
    this.items.push(post);
    return post;
  }
  async findById(id) {
    const post = this.items.find((item) => item.id === id);
    return post || null;
  }
  async findAll(page, limit) {
    return this.items.slice((page - 1) * limit, page * limit);
  }
  async search(query) {
    return this.items.filter(
      (item) => item.title.includes(query) || item.content.includes(query)
    );
  }
  async update(post) {
    const itemIndex = this.items.findIndex((item) => item.id === post.id);
    if (itemIndex >= 0) {
      this.items[itemIndex] = post;
    }
    return post;
  }
  async save(post) {
    return this.update(post);
  }
  async delete(id) {
    const itemIndex = this.items.findIndex((item) => item.id === id);
    if (itemIndex >= 0) {
      this.items.splice(itemIndex, 1);
    }
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  InMemoryPostsRepository
});
