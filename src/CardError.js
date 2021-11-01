/**
 * Module for the type CardError.
 *
 * @author Ellinor Henriksson <eh224kr@student.lnu.se>
 * @version 1.0.0
 */

/**
 * Represents an error due to lack of playing cards.
 *
 * @class CardError
 */
export class CardError extends Error {
  /**
   * Creates an instance of CardError.
   *
   * @param {string} message - The error message.
   */
  constructor (message) {
    super(message)
    this.name = 'CardError'
  }
}
