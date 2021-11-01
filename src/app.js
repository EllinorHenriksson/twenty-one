/**
 * The starting point of the application.
 *
 * @author Johan Leitet <johan.leitet@lnu.se>
 * @author Mats Loock <mats.loock@lnu.se>
 * @author Ellinor Henriksson <eh224kr@student.lnu.se>
 * @version 1.1.0
 */

// TODO: Replace the code below with your own game logic.

/*
import { Deck } from './Deck.js'

try {
  // Create 52 playing cards and...
  const playingCards = Deck.create()
  console.log(playingCards.join(', '), '\n')

  // ...shuffle them.
  Deck.shuffle(playingCards)
  console.log(playingCards.join(', '), '\n')

  // Draw three playing cards, view the remaining playing cards, the drawn playing cards and
  // then calculate the value of them.
  // (`value + playingCard` implicitly calls PlayingCard#valueOf to get
  //  the primitive value of the current PlayingCard object.)
  const hand = playingCards.splice(0, 3)

  console.log(playingCards.join(', '))

  const value = hand.reduce((value, playingCard) => value + playingCard, 0)
  console.log(`${hand.join(' ')} (${value})`)
} catch (e) {
  console.error(e.message)
}
*/

// Egen kod

import { table } from './table.js'
import { PlayerError } from './PlayerError.js'
import { CardError } from './CardError.js'

const myArgs = process.argv.slice(2)
let numberOfPlayers

if (myArgs.length === 0) {
  numberOfPlayers = 3
} else {
  numberOfPlayers = Number(myArgs)
}

try {
  table(numberOfPlayers)
} catch (e) {
  console.error(e.message)

  if (e instanceof PlayerError) {
    process.exitCode = 26
  }

  if (e instanceof CardError) {
    process.exitCode = 27
  }

  process.exitCode = 1
}
