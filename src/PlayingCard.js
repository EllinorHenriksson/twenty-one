/**
 * Module for the type PlayingCard.
 *
 * @author Johan Leitet <johan.leitet@lnu.se>
 * @author Mats Loock <mats.loock@lnu.se>
 * @version 1.1.0
 */

import { Ranks } from './Ranks.js'
import { Suits } from './Suits.js'

/**
 * Creates a new PlayingCard object.
 *
 * @param {Ranks} rank - The playing card's rank.
 * @param {Suits} suit - The playing card's suit.
 * @class
 */
export function PlayingCard (rank, suit) {
  /**
   * The playing card's rank.
   *
   * @type {Ranks}
   */
  this.rank = rank

  /**
   * The playing card's suit.
   *
   * @type {Suits}
   */
  this.suit = suit

  // Make the object immutable.
  Object.freeze(this)
}

/**
 * Returns a string representing the object.
 *
 * @returns {string} A string that represents the current object.
 */
PlayingCard.prototype.toString = function () {
  // If Ace, Jack, Queen, or King use the first character; otherwise the rank.
  return (this.rank < 2 || this.rank > 10
    ? (Object.keys(Ranks)[this.rank - 1]).substr(0, 1)
    : this.rank) +
    this.suit
}

/**
 * Returns the primitive value of the specified object.
 *
 * @returns {number} The primitive value of the specified object.
 */
PlayingCard.prototype.valueOf = function () {
  return Number(this.rank)
}
