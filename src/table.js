import { Participant } from './Participant.js'
import { Deck } from './Deck.js'

// Sätt igång spelet

export function table (numberOfPlayers = 3) {
  // Skapa spelare
  const players = []

  for (let i = 0; i < numberOfPlayers; i++) {
    const name = `Player #${i + 1}`
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

  // Låt alla spelare spela - FORTSÄTT HÄR!!!!!
  for (const player of players) {
    let score = ''
    do {
      player.drawCard(drawPile, throwPile)
    } while (player.valueOfHand() < player.stopValue || player.hand.length === 5)
    if (player.valueOfHand() === 21 || (player.valueOfHand() < 21 && player.hand.length === 5)) {
      // Konkatenera spelaren och dealers namn, hand och handens värde samt utrop av vinnaren med strängen score
      score = `${player.toString()}\n${dealer.toString()}\n${player.name} wins!\n`
    } else if (player.valueOfHand() > 21) {
      score = `${player.toString()}\n${dealer.toString()}\n${dealer.name} wins!\n`
    } else {
      // Nu ska dealern spela mot spelaren
      do {
        dealer.drawCard(drawPile, throwPile)
      } while (dealer.valueOfHand() < dealer.stopValue || dealer.hand.length === 5)
      if (dealer.valueOfHand() === 21 || (dealer.valueOfHand() < 21 && dealer.hand.length === 5)) {
        score = `${player.toString()}\n${dealer.toString()}\n${dealer.name} wins!\n`
      } else if (dealer.valueOfHand() > 21) {
        score = `${player.toString()}\n${dealer.toString()}\n${player.name} wins!\n`
      } else {
        if (dealer.valueOfHand() >= player.valueOfHand()) {
          score = `${player.toString()}\n${dealer.toString()}\n${dealer.name} wins!\n`
        } else {
          score = `${player.toString()}\n${dealer.toString()}\n${player.name} wins!\n`
        }
      }
    }

    // Visa resultatet för delomgången
    console.log(score)

    // Spelaren och dealern slänger de kort de har på handen
    player.throwCards(throwPile)
    dealer.throwCards(throwPile)
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
