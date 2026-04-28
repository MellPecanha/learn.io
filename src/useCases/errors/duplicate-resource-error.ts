export class DuplicateResourceError extends Error {
  constructor() {
    super('CPF já cadastrado')
  }
}
