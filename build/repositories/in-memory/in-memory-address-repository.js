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

// src/repositories/in-memory/in-memory-address-repository.ts
var in_memory_address_repository_exports = {};
__export(in_memory_address_repository_exports, {
  InMemoryAddressRepository: () => InMemoryAddressRepository
});
module.exports = __toCommonJS(in_memory_address_repository_exports);
var InMemoryAddressRepository = class {
  constructor() {
    this.items = [];
  }
  async create(address) {
    const newAddress = {
      id: this.items.length + 1,
      street: address.street,
      city: address.city,
      state: address.state,
      zip_code: address.zip_code,
      person: address.person
    };
    this.items.push(newAddress);
    return newAddress;
  }
  async findAddressByPersonId(personId, page, limit) {
    const addresses = this.items.filter((item) => {
      if (typeof item.person === "number") {
        return item.person === personId;
      }
      return item.person?.id === personId;
    });
    return addresses.slice((page - 1) * limit, page * limit).map((addr) => ({
      ...addr,
      id: addr.id,
      name: "Fake Person Name",
      email: "fake@email.com",
      cpf: "123.456.789-00",
      birth: /* @__PURE__ */ new Date()
    }));
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  InMemoryAddressRepository
});
