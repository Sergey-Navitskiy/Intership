function once(func) {
  let hasBeenCalled = false;
  let result;

  return function (...args) {
    if (!hasBeenCalled) {
      hasBeenCalled = true;
      result = func.apply(this, args);
    }
    return result;
  };
}

function myFunct(a, b) {
  console.log("выполняется");
  return a + b;
}

const onceAdd = once(myFunct);

console.log(onceAdd(5, 10));
console.log(onceAdd(10, 10));
console.log(onceAdd(100, 10));
console.log(onceAdd(50, 10));
