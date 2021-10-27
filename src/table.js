import { Participant } from './Participant.js'
import { Deck } from './Deck.js'

// Antal spelare
const numberOfPlayers = 3

// Spelare (objekt instansierat från klass). Ska ha ett namn, en hand (array) och ett stoppvärde. Ska kunna dra kort från draghögen. Ska kunna slänga korten på handen i slänghögen. Presenteras i en array med spelare.
const players = []

for (let i = 0; i < numberOfPlayers; i++) {
  const name = `Player ${i + 1}`
  players[i] = new Participant(name)
}

// Giv (objekt instansierat från klass). Ska ha ett namn, en hand (array) och ett stoppvärde. Ska kunna dra kort från draghögen. Ska kunna slänga korten på handen i slänghögen.

const dealer = new Participant('Dealer')

// Draghög (array innehållande objekt representerande spelkort). Ska skapas vid spelets början och blandas. Ska ta emot korten i slänghögen när det endast finns 1 kort kvar och sedan blandas på nytt.
let drawPile = Deck.create()

drawPile = Deck.shuffle(drawPile)

// Slänghög (array som initialt är tom men fylls på med objekt representerande spelkort)

const throwPile = []

// ------------------------------------------------------------------------------------------------------
// Sätt igång spelet

export function play (numberOfPlayers = 3) {
  // Skapar en array med spelare (objekt som instansieras från klassen Participant)
  const players = []

  for (let i = 0; i < numberOfPlayers; i++) {
    const name = `Player ${i + 1}`
    players[i] = new Participant(name)
  }

  // Skapar en dealer (objekt som instansieras från klassen Participant)
  const dealer = new Participant('Dealer')

  // Skapar en draghög i form av en array innehållande objekt representerande spelkort. Blandar draghögen.
  let drawPile = Deck.create()

  drawPile = Deck.shuffle(drawPile)

  // Skapar en slänghög i form av en tom array

  const throwPile = []
}
