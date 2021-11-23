const getNumnberSign = (number) => {
  if (number === 0) {
    return 'zero';
  } else if  (number > 0) {
    return 'positive';
  } else {
    return 'negative';
  }

}

console.log(getNumnberSign(-1))
