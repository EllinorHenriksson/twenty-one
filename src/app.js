/**
 * The starting point of the application.
 *
 * @author Johan Leitet <johan.leitet@lnu.se>
 * @author Mats Loock <mats.loock@lnu.se>
 * @author Ellinor Henriksson <eh224kr@student.lnu.se>
 * @version 1.1.0
 */

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
  } else if (e instanceof CardError) {
    process.exitCode = 27
  } else {
    process.exitCode = 1
  }
}
