const searchCandies = require("./search-candies");

test('should return Mars and Maltesers', () => {
  expect(searchCandies('Ma', 10)).toEqual('Maltesers', 'Mars');
});


// //  should return Mars and Maltesers (2 ms)
// ✓ should return only Mars
// ✓ should return Skitties, Skittles and Starbust
// ✓ should return Skitties and Skittles (1 ms)
// ✓ should return Skitties and Skittles for lowercase "s"