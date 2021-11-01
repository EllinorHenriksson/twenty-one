import { Deck } from './Deck.js'
import { CardError } from './CardError.js'

export class Participant {
  #name
  #hand
  #stopValue

  constructor (name) {
    this.name = name
    this.#hand = []
    this.#stopValue = Math.floor(Math.random() * 21) + 1
  }

  get name () {
    return this.#name
  }

  set name (value) {
    if (typeof value !== 'string') {
      throw new TypeError('The passed value for "name" must be a string')
    }

    this.#name = value
  }

  get hand () {
    return this.#hand
  }

  get stopValue () {
    return this.#stopValue
  }

  drawCard (drawPile, throwPile) {
    if (drawPile.length === 1) {
      if (throwPile.length === 0) {
        throw new CardError('Too few cards in the draw pile')
      }

      const cardsToDrawPile = throwPile.splice(0)

      for (const card of cardsToDrawPile) {
        drawPile.push(card)
      }

      drawPile = Deck.shuffle(drawPile)
    }

    this.#hand.push(drawPile.pop())
  }

  throwCards (throwPile) {
    const cardsToThrowPile = this.#hand.splice(0)

    for (const card of cardsToThrowPile) {
      throwPile.push(card)
    }
  }

  valueOfHand () {
    let value = this.#hand.reduce((value, playingCard) => value + playingCard, 0)

    if (value <= 8 && this.#hand.some(playingCard => playingCard.rank === 1)) {
      value += 13
    }

    return value
  }

  toString () {
    if (this.#hand.length > 0) {
      return `${this.#name}: ${this.#hand.join(' ')} (${this.valueOfHand()})`
    } else {
      return `${this.#name}: -`
    }
  }
}
