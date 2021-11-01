/**
 * Module for the function table.
 *
 * @author Ellinor Henriksson <eh224kr@student.lnu.se>
 * @version 1.0.0
 */

import { Participant } from './Participant.js'
import { Deck } from './Deck.js'
import { PlayerError } from './PlayerError.js'

/**
 * Sets up the card game and executes a playing round.
 *
 * @param {number} numberOfPlayers - The number of players.
 */
export function table (numberOfPlayers) {
  if ((!Number.isInteger(numberOfPlayers) || numberOfPlayers < 1 || numberOfPlayers > 7) && (numberOfPlayers !== 20 && numberOfPlayers !== 50)) {
    throw new PlayerError('Not a valid number of players')
  }

  const players = []

  for (let i = 0; i < numberOfPlayers; i++) {
    const name = `Player #${i + 1}`
    players[i] = new Participant(name)
  }

  const dealer = new Participant('Dealer')

  const drawPile = Deck.create()
  Deck.shuffle(drawPile)

  const throwPile = []

  // Players get one playing card each
  for (const player of players) {
    player.drawCard(drawPile, throwPile)
  }

  // Players play in turn
  for (const player of players) {
    let winner = ''

    do {
      player.drawCard(drawPile, throwPile)
    } while (player.valueOfHand() < player.stopValue && player.hand.length < 5)

    if (player.valueOfHand() === 21 || (player.valueOfHand() < 21 && player.hand.length === 5)) {
      winner = player.name
    } else if (player.valueOfHand() > 21) {
      winner = dealer.name
    } else {
      // Dealer plays against player
      do {
        dealer.drawCard(drawPile, throwPile)
      } while (dealer.valueOfHand() < dealer.stopValue && dealer.hand.length < 5)
      if (dealer.valueOfHand() === 21 || (dealer.valueOfHand() < 21 && dealer.hand.length === 5)) {
        winner = dealer.name
      } else if (dealer.valueOfHand() > 21) {
        winner = player.name
      } else {
        if (dealer.valueOfHand() >= player.valueOfHand()) {
          winner = dealer.name
        } else {
          winner = player.name
        }
      }
    }

    // Show score
    console.log(`${player.toString()}\n${dealer.toString()}\n${winner} wins!\n`)

    player.throwCards(throwPile)
    dealer.throwCards(throwPile)
  }
}
