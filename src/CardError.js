export class CardError extends Error {
    constructor (message) {
        super(message)
        this.name = 'CardError'
    }
}