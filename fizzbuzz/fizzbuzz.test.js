// it should return "Fizz" if the number is divisible by 3 (e.g 3 or 9)
// it should return "Buzz" if the number is divisible by 5 (e.g 5 or 10)
// it should return "FizzBuzz" if the number is divisible by 15 (e.g 15 or 30)
// it should just return the number the number is otherwise
const fizzBuzz = require('./fizzbuzz');

test('should return Fizz if number is 3', () => {
  expect(fizzBuzz(3)).toBe('Fizz');
});

test('should return Buzz if number is 5', () => {
  expect(fizzBuzz(5)).toBe('Buzz');
});

test('should return FizzBuzz if number is 15', () => {
  expect(fizzBuzz(15)).toBe('FizzBuzz');
});

test('should return if number is otherwise', () => {
  expect(fizzBuzz(2)).toBe(2);
});