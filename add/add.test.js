const add = require("./add");

// // describe('add', () => {
//   test('add two numbers', () => {
//     expect(add(2, 2)).toBe(4)
//   });

describe('add', () => {
  it('adds 2 and 2', () => {
    expect(add(2, 2)).toBe(4);
  });
});
