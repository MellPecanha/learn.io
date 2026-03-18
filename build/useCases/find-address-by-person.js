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

// src/useCases/find-address-by-person.ts
var find_address_by_person_exports = {};
__export(find_address_by_person_exports, {
  FindAddressByPersonUseCase: () => FindAddressByPersonUseCase
});
module.exports = __toCommonJS(find_address_by_person_exports);

// src/useCases/errors/resource-not-found-error.ts
var ResourceNotFoundError = class extends Error {
  constructor() {
    super("Resource not found");
  }
};

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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  FindAddressByPersonUseCase
});
