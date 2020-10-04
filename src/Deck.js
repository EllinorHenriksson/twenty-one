/**
 * Module for the type PlayingCard.
 *
 * @author Johan Leitet <johan.leitet@lnu.se>
 * @author Mats Loock <mats.loock@lnu.se>
 * @version 1.0.0
 */

import { Ranks } from './Ranks.js'
import { Suits } from './Suits.js'
import { PlayingCard } from './PlayingCard.js'

/**
 * Represents a deck.
 *
 * @class
 */
export class Deck {
  /**
   * Creates an array of 52 playing cards representing a deck.
   *
   * @returns {PlayingCard[]} An array of 52 PlayingCard objects.
   */
  static create () {
    const suitKeys = Object.keys(Suits)
    const rankKeys = Object.keys(Ranks)
    const playingCards = new Array(suitKeys.length * rankKeys.length)
    let i = 0

    for (const suitKey of suitKeys) {
      for (const rankKey of rankKeys) {
        playingCards[i++] = new PlayingCard(Ranks[rankKey], Suits[suitKey])
      }
    }

    return playingCards
  }

  /**
   * Shuffles the array of playing cards in place.
   *
   * @param {PlayingCard[]} playingCards - The array of PlayingCard objects to shuffle.
   * @returns {PlayingCard[]} The shuffled array of PlayingCard objects.
   */
  static shuffle (playingCards) {
    let i = playingCards.length
    let j
    let x

    while (i) {
      j = (Math.random() * i) | 0 // using bitwise OR 0 to floor a number
      x = playingCards[--i]
      playingCards[i] = playingCards[j]
      playingCards[j] = x
    }

    return playingCards
  }
}
