function myMap(arr, callback) {
  if (!Array.isArray(arr)) {
    console.error("First arg must be array");
    return [];
  }

  if (typeof callback !== "function") {
    console.error("Second arg must be function");
    return arr;
  }

  const newArray = [];

  for (let i = 0; i < arr.length; i++) {
    const result = callback(arr[i], i, arr);
    newArray.push(result);
  }
  return newArray;
}

const result1 = myMap(123, (x) => x * 2);
console.log("Result 1:", result1);

const numbers = [1, 2, 3];
const result2 = myMap(numbers, "not a function");
console.log("Result 2 (вернулся исходный массив):", result2); // [1, 2, 3]

const doubledNumbers = myMap(numbers, (num) => num * 2);
console.log("Doubled numbers:", doubledNumbers); // [2, 4, 6]

const words = ["apple", "banana"];
const uppercasedWords = myMap(words, (word) => word.toUpperCase());
console.log("Uppercased words:", uppercasedWords); // ['APPLE', 'BANANA']
