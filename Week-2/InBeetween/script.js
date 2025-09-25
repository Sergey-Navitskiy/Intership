function inBetween(firsttArgument, secondArgument) {
  return function (item) {
    return item >= firsttArgument && item <= secondArgument;
  };
}

const arr = [1, 2, 3, 4, 5, 6];

const result = arr.filter(inBetween(2, 4));

console.log(result);
