export class InvalidCredentialsError extends Error {
  constructor() {
    super('Username or password invalid')
  }
}
