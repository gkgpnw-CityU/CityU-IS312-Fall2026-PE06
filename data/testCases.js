/**
 * @typedef {Object} TicketCostTestCase
 * @property {number} ticketPrice - Price of one ticket in dollars.
 * @property {number} attendeeCount - Number of attendees.
 */

/** @type {TicketCostTestCase[]} */
const testCases = [
  { ticketPrice: 15, attendeeCount: 4 },
  { ticketPrice: 15, attendeeCount: 6 },
];

module.exports = testCases;
