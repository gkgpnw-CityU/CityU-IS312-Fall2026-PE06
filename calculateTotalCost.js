/**
 * Calculates the combined ticket price for an event.
 *
 * @param {number} ticketPrice - Price of one ticket in dollars.
 * @param {number} attendeeCount - Number of tickets to purchase.
 * @returns {number} Total ticket cost in dollars.
 */
function calculateTotalCost(ticketPrice, attendeeCount) {
  return ticketPrice * attendeeCount;
}

module.exports = calculateTotalCost;
