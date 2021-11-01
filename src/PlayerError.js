export class PlayerError extends Error {
  constructor (message) {
    super(message)
    this.name = 'PlayerError'
  }
}
