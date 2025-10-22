function myReduce(arr, funct, initialValue) {
  let accamulator;
  let index;
  if (initialValue !== undefined) {
    accamulator = initialValue;
    index = 0;
  }
  if (initialValue == undefined) {
    accamulator = arr[0];
    index = 1;
  }

  for (let i = index; i < arr.length; i++) {
    accamulator = funct(accamulator, arr[i]);
  }
  return accamulator;
}

const arr = [1, 2, 3, 4];

// сложение
const sumFunc = (acc, val) => acc + val;

// С начальным значением 10
const result1 = myReduce(arr, sumFunc, 10);
console.log(result1); // Ожидаем 20

// Без значения
const result2 = myReduce(arr, sumFunc);
console.log(result2); // Ожидаем 10
