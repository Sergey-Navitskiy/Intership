function summArray(arr) {
  let sum = 0;

  if (arr.length === 0) {
    return 0;
  }
  const firstArrayElem = arr[0];
  const restArray = arr.slice(1);
  return firstArrayElem + summArray(restArray);
}
const numbers = [1, 2, 3, 4, 5];
console.log(summArray(numbers));
