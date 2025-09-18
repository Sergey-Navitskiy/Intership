function searchSecondMaxNumber(array) {
  let n = 0;
  array.sort((a, b) => b - a);

  if (array.length < 2) {
    return null;
  }

  return array[1];
}

console.log(searchSecondMaxNumber([14, 5, 2, 12, 10]));
