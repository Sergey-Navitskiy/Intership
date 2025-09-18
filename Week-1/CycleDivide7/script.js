function cycle(array) {
  let dividedBySeven = null;
  for (const divide of array) {
    if (divide % 7 === 0) {
      dividedBySeven = divide;
      break;
    }
  }
  return dividedBySeven;
}

const array = [15, 8, 35, 24, 56, 73];
console.log(cycle(array));
