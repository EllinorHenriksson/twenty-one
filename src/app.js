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

//Egna försök
/*const argumentArray = process.argv.slice(2)

const argument = argumentArray[0]
*/

import { play } from './table.js'

play()

