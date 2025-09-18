function searchSecondMaxNumber(array) {
  let n = 0;
  array.sort((a, b) => b - a);

  if (array.length < 2) {
    return null;
  }

  return array[1];
}
const array1 = [2, 3, 4, 8, 98, 67, 54, 33, 22, 7, 12, 323];
console.log(searchSecondMaxNumber([14, 5, 2, 12, 10]));
console.log(searchSecondMaxNumber(array1));
