/**
 * Formats a test case and its calculated total for console output.
 *
 * @param {number} caseNumber - One-based test case number.
 * @param {{ticketPrice: number, attendeeCount: number}} testCase - Case inputs.
 * @param {number} totalCost - Calculated total in dollars.
 * @returns {string} Readable test case output.
 */
function formatTestCase(caseNumber, testCase, totalCost) {
  return [
    `Test Case ${caseNumber}`,
    `Ticket price: $${testCase.ticketPrice}`,
    `Attendees: ${testCase.attendeeCount}`,
    `Total cost: $${totalCost}`,
  ].join("\n");
}

module.exports = formatTestCase;
