import { Deck } from './Deck.js'

export class Participant {
  constructor (name) {
    this.name = name
    this.hand = []
    this.stopValue = Math.floor(Math.random() * 21) + 1
    //this.getStopValue()
  }

  //getStopValue () {
    //this.stopValue = Math.floor(Math.random() * 21) + 1
  }

  drawCards (drawPile, throwPile) {
    if (drawPile.length === 1) {
    // lägg över korten i slänghögen till draghögen
      const cardsToDrawPile = throwPile.splice(0)
      for (const card of cardsToDrawPile) {
        drawPile.push(card)
      }

      // blanda korten i draghögen
      drawPile = Deck.shuffle(drawPile)
    }
    this.hand.push(drawPile.pop())
  }

  throwCards (throwPile) {
    const cardsToThrowPile = this.hand.splice(0)
    for (const card of cardsToThrowPile) {
      throwPile.push(card)
    }
  }
}