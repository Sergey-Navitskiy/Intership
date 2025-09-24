function makeCounter() {
  let counter = 0;
  return function count() {
    return counter++;
  };
}

const myClosure = makeCounter();
console.log(myClosure());
console.log(myClosure());

console.log(myClosure());

console.log(myClosure());
