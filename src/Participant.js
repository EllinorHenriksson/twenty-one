/**
 * Module for the type Participant.
 *
 * @author Ellinor Henriksson <eh224kr@student.lnu.se>
 * @version 1.0.0
 */

import { Deck } from './Deck.js'
import { CardError } from './CardError.js'

/**
 * Represents a game participant.
 *
 * @class Participant
 */
export class Participant {
  /**
   * The participant's name.
   *
   * @type {string}
   */
  #name

  /**
   * The participant's hand, represented by an arry of PlayingCard objects.
   *
   * @type {object[]}
   */
  #hand

  /**
   * The paticipant's stop value.
   *
   * @type {number}
   */
  #stopValue

  /**
   * Creates a Participant instance that represents a player or dealer.
   *
   * @param {string} name - The participant's name.
   */
  constructor (name) {
    this.name = name
    this.#hand = []
    this.#stopValue = Math.floor(Math.random() * 21) + 1
  }

  /**
   * Gets the name of the participant.
   *
   * @returns {string} The participant's name.
   */
  get name () {
    return this.#name
  }

  /**
   * Sets the name of the participant.
   *
   * @param {string} value - The participant's name.
   */
  set name (value) {
    if (typeof value !== 'string') {
      throw new TypeError('The passed value for "name" must be a string')
    }

    this.#name = value
  }

  /**
   * Gets the hand of the participant.
   *
   * @returns {object[]} The participant's hand.
   */
  get hand () {
    return this.#hand
  }

  /**
   * Gets the stop value of the participant.
   *
   * @returns {number} The participant's stop value.
   */
  get stopValue () {
    return this.#stopValue
  }

  /**
   * Lets the participant draw a playing card from the draw pile.
   *
   * @param {object[]} drawPile - The draw pile to draw cards from (an array of PlayingCard objects).
   * @param {object[]} throwPile - The throw pile to move cards from if needed (an array of PlayingCard objects).
   */
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

  /**
   * Lets the participant throw the playing cards on his or her hand on the throw pile.
   *
   * @param {object[]} throwPile - The throw pile to throw cards on (an array of PlayingCard objects).
   */
  throwCards (throwPile) {
    const cardsToThrowPile = this.#hand.splice(0)

    for (const card of cardsToThrowPile) {
      throwPile.push(card)
    }
  }

  /**
   * Returs the value of the playing cards on the participant's hand.
   *
   * @returns {number} The value of the participant's hand.
   */
  valueOfHand () {
    let value = this.#hand.reduce((value, playingCard) => value + playingCard, 0)

    if (value <= 8 && this.#hand.some(playingCard => playingCard.rank === 1)) {
      value += 13
    }

    return value
  }

  /**
   * Returns a string with the participant's name, hand and value of hand.
   *
   * @returns {string} A string representing the participant.
   */
  toString () {
    if (this.#hand.length > 0) {
      return `${this.#name}: ${this.#hand.join(' ')} (${this.valueOfHand()})`
    } else {
      return `${this.#name}: -`
    }
  }
}
