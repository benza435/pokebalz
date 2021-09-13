// describe('currencyFormatter', () => {
//     test.each`
//       input     | expectedResult
//       ${'abc'}  | ${undefined}
//       ${1.59}   | ${'£1.59'}
//       ${1.599}  | ${'£1.60'}
//       ${1599}   | ${'£1,599.00'}
//       // add new test cases here
//     `('converts $input to $expectedResult', ({ input, expectedResult }) => {
//       expect(currencyFormatter(input)).toBe(expectedResult)
//     })
//   })
import getRandomPokemon from "../mvc/gets";

describe("getRandomPokemon", () => {
  it("should return a pokemon name", () => {
    expect(typeof getRandomPokemon()).toEqual("string");
  });
});
