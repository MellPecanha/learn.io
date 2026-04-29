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

// src/lib/typeorm/migrations/1777421308811-AlterTablePostsAddAuthorForeignKey.ts
var AlterTablePostsAddAuthorForeignKey_exports = {};
__export(AlterTablePostsAddAuthorForeignKey_exports, {
  AlterTablePostsAddAuthorForeignKey1777421308811: () => AlterTablePostsAddAuthorForeignKey1777421308811
});
module.exports = __toCommonJS(AlterTablePostsAddAuthorForeignKey_exports);
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AlterTablePostsAddAuthorForeignKey1777421308811
});
