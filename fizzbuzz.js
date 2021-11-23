const fizzBuzz = (number) => {
  if (number % 3 === 0 && number % 5 === 0) {
    return 'FizzBuzz';
  } else if (number % 3 ===0) {
    return 'Fizz';
  } else if (number % 5 === 0) {
    return 'Buzz';
  } else {
    return number;
  }
}

// for (let x = 1 ; x <= 50 ; x++) {
//   console.log(`Fizzbuzz result for ${x} is ${fizzBuzz(x)}`);
// }

module.exports = fizzBuzz;