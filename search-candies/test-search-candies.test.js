const searchCandies = require("./search-candies");

describe('searchCandies', () => {
it('should return Mars and Maltesers', () => {
  expect(searchCandies('Ma', 10)).toEqual(['Maltesers', 'Mars']);
});

it('should return only Mars', () => {
  expect(searchCandies('Ma', 2)).toEqual(['Mars']);
});

it('should return Skitties, Skittles and Starbust', () => {
  expect(searchCandies('S', 10)).toEqual(['Skitties', 'Skittles', 'Starburst'])
});

it('should return Skitties and Skittles', () => {
  expect(searchCandies('S', 4)).toEqual(['Skitties', 'Skittles'])
});

it('should return Skitties and Skittles for lowercase s', () => {
  expect(searchCandies('s', 4)).toEqual(['Skitties', 'Skittles'])
});
});