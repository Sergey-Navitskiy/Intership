const calculator = {
  a: 0,
  b: 0,
  read: (aValue, bValue) => {
    console.log("🚀 ~ aValue:", aValue);
    console.log("🚀 ~ bValue:", bValue);
    // для сохранения значения
    this.a = aValue;
    this.b = bValue;
  },
  sum: () => {
    console.log("🚀 ~ this:", this);
    return this.a + this.b;
  },

  mul: () => {
    return this.a * this.b;
  },
};

calculator.read(14, 20);
console.log(calculator.sum());
console.log(calculator.mul());

// const obj2 = {
//   a: 1,
//   b: 2
// }

// const obj2 = Object.create(calculator);

// obj2.read(2, 5);
// console.log("🚀 ~ obj2:", obj2);

// console.log("obj2", obj2.sum());
// console.log("obj2", obj2.mul());

const obj2 = { a: 2, b: 5 };

console.log("obj2 sum: ", calculator.sum.call(obj2));
console.log("obj2 mul: ", calculator.mul.apply(obj2));
