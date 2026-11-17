/**
 * @file Runs each predefined ticket-cost case and writes its result to stdout.
 */
const testCases = require("./data/testCases");
const calculateTotalCost = require("./calculateTotalCost");
const formatTestCase = require("./formatTestCase");

for (let index = 0; index < testCases.length; index += 1) {
  const testCase = testCases[index];
  const totalCost = calculateTotalCost(
    testCase.ticketPrice,
    testCase.attendeeCount,
  );

  if (index > 0) {
    console.log("");
  }

  console.log(formatTestCase(index + 1, testCase, totalCost));
}
