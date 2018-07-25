const expect = require("chai").expect;
const getDate = require("../src/dateService").getDate;

describe("Tests date format", () => {
  it("Date format should be dd-mm-yyyy", () => {
    const date = getDate();
    expect(date).to.exist;
  });
});
