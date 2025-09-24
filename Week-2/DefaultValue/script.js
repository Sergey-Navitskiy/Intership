function greet(name = "Гость") {
  return `Привет, ${name}!`;
}

console.log(greet("Ivan"));
console.log(greet());
