/**
 * Module for the type PlayerError.
 *
 * @author Ellinor Henriksson <eh224kr@student.lnu.se>
 * @version 1.0.0
 */

/**
 * Represents an error due to invalid input of players.
 *
 * @class PlayerError
 */
export class PlayerError extends Error {
  /**
   * Creates an instance of PlayerError.
   *
   * @param {string} message - The error message.
   * @property {string} name - The error's name.
   */
  constructor (message) {
    super(message)
    this.name = 'PlayerError'
  }
}
