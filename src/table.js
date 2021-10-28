import { Participant } from './Participant.js'
import { Deck } from './Deck.js'

// Sätt igång spelet

export function table (numberOfPlayers = 3) {
  // Skapa spelare
  const players = []

  for (let i = 0; i < numberOfPlayers; i++) {
    const name = `Player ${i + 1}`
    players[i] = new Participant(name)
  }

  // Skapa dealer
  const dealer = new Participant('Dealer')

  // Skapa och blanda draghög
  const drawPile = Deck.create()
  Deck.shuffle(drawPile)

  // Skapa en slänghög
  const throwPile = []

  // Ge alla spelare ett kort
  for (const player of players) {
    player.drawCard(drawPile, throwPile)
  }

  // Skapa en sträng som konkateneras allt eftersom spelet går
  let score = ''

  // Låt alla spelare spela - FORTSÄTT HÄR!!!!!
  for (const player of players) {
    do {
      player.drawCard(drawPile, throwPile)
    } while (player.valueOfHand() <= player.stopValue)
    if (player.valueOfHand === 21) {
      // Konkatenera spelarens namn, hand och handens värde med score OCH konkatenera dealerns namn, hand och handens värde med score OCH konkatenera att spelaren vinner
    }
  }
}

// -------------------------------------------
/*
// Spelare (objekt instansierat från klass). Ska ha ett namn, en hand (array) och ett stoppvärde. Ska kunna dra kort från draghögen. Ska kunna slänga korten på handen i slänghögen. Presenteras i en array med spelare.
const players = []

for (let i = 0; i < numberOfPlayers; i++) {
  const name = `Player ${i + 1}`
  players[i] = new Participant(name)
}

// Giv (objekt instansierat från klass). Ska ha ett namn, en hand (array) och ett stoppvärde. Ska kunna dra kort från draghögen. Ska kunna slänga korten på handen i slänghögen.

const dealer = new Participant('Dealer')

// Draghög (array innehållande objekt representerande spelkort). Ska skapas vid spelets början och blandas. Ska ta emot korten i slänghögen när det endast finns 1 kort kvar och sedan blandas på nytt.
const drawPile = Deck.create()

Deck.shuffle(drawPile)

// Slänghög (array som initialt är tom men fylls på med objekt representerande spelkort)

const throwPile = []
*/
