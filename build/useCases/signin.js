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

// src/useCases/signin.ts
var signin_exports = {};
__export(signin_exports, {
  SigninUseCase: () => SigninUseCase
});
module.exports = __toCommonJS(signin_exports);

// src/useCases/errors/invalid-credencials-error.ts
var InvalidCredentialsError = class extends Error {
  constructor() {
    super("Username or password invalid");
  }
};

// src/useCases/signin.ts
var SigninUseCase = class {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }
  async execute(username) {
    const user = await this.userRepository.findByUsername(username);
    if (!user) throw new InvalidCredentialsError();
    return user;
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  SigninUseCase
});
