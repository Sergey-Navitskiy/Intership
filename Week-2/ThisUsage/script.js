const calculator = {
  a: 0,
  b: 0,
  read: function (aValue, bValue) {
    // для сохранения значения
    this.a = aValue;
    this.b = bValue;
  },
  sum: function () {
    return this.a + this.b;
  },

  mul: function () {
    return this.a * this.b;
  },
};

calculator.read(14, 20);
console.log(calculator.sum());
console.log(calculator.mul());
