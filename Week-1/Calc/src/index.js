const display = document.getElementById("display");
const history = document.getElementById("history");
const themeBtn = document.getElementById("themeBtn");

let firstValue = null;
let operator = null;
let waitingSecond = false;
// firstValue — что уже введено
// operator — что нужно сделать
// waitingSecond — на каком этапе вычислений мы находимся

// ввод цифр
function inputDigit(digit) {
  if (waitingSecond) {
    display.textContent = digit;
    waitingSecond = false;
  } else {
    display.textContent =
      display.textContent === "0" ? digit : display.textContent + digit;
  }

  // Если только что нажали оператор — начинаем ввод с чистого листа
  // Если на экране 0, заменяем его (чтобы не было 0005)
  // В остальных случаях дописываем цифру справа
}
// ввод точки
function inputDot() {
  if (!display.textContent.includes(".")) {
    display.textContent += ".";
  }
  // Запрещаем вторую точку (иначе получится невалидное число)
}
// очистка
function clearAll() {
  display.textContent = "0";
  history.textContent = "";
  firstValue = null;
  operator = null;
  waitingSecond = false;
  // Приводим всё в «стартовое» состояние.
}
// смена знака
function changeSign() {
  display.textContent = (parseFloat(display.textContent) * -1).toString();
  // преобразовали строку умножили на −1  вернули строку
}
// подсчёт процентов
function percent() {
  display.textContent = (parseFloat(display.textContent) / 100).toString();
}
// выбор оператора
function chooseOperator(op) {
  if (firstValue === null) {
    firstValue = parseFloat(display.textContent);
  } else if (operator && !waitingSecond) {
    const result = calc(firstValue, parseFloat(display.textContent), operator);
    display.textContent = result.toString();
    firstValue = result;
  }
  operator = op;
  history.textContent = firstValue + " " + operator;
  waitingSecond = true;
}
// сли это первый оператор — запоминаем текущий ввод как firstValue
// Если оператор уже был и второе число введено — сразу считаем промежуточный результат (поддержка цепочки действий: 2 + 3 * 4)
// Обновляем history, чтобы пользователь видел текущий знак
// Ставим флаг waitingSecond = true, чтобы следующая цифра начала второе число

// вычисления
function calc(a, b, op) {
  switch (op) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      if (b === 0) {
        return "Ошибка";
      }
      return a / b;
    default:
      return "Ошибка: неподдерживаемая операция";
  }
}
// Явно перечислены допустимые операции
// Деление на ноль ловим и отдаём "Ошибка"

//  = равно
function equals() {
  if (operator && !waitingSecond) {
    const second = parseFloat(display.textContent);
    const result = calc(firstValue, second, operator);
    history.textContent = firstValue + " " + operator + " " + second + " =";
    display.textContent = result.toString();
    firstValue = result;
    operator = null;
  }
  // Считаем только если есть оператор и второе число уже введено
  // В history показываем полное выражение, в display — результат
  // Сохраняем результат в firstValue — удобно сразу продолжать дальше (например, =, потом + 2)
}

// свич темы
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");
});
// обработка кнопочек
document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("click", () => {
    const action = button.dataset.action;
    const value = button.dataset.value;

    if (action === "digit") inputDigit(value);
    if (action === "dot") inputDot();
    if (action === "clear") clearAll();
    if (action === "sign") changeSign();
    if (action === "percent") percent();
    if (action === "operator") chooseOperator(value);
    if (action === "equals") equals();
  });
  // Подписывает каждую кнопку на клик и направляет к нужной функции
});

document.addEventListener("keydown", (event) => {
  const key = event.key;

  // Если цифра
  if (!isNaN(key)) {
    inputDigit(key);
  }

  // Точка
  if (key === ".") {
    inputDot();
  }

  // Операция
  if (key === "+" || key === "-" || key === "*" || key === "/") {
    chooseOperator(key);
  }

  // Проценты
  if (key === "%") {
    percent("%");
  }

  //  = равно
  if (key === "Enter" || key === "=") {
    event.preventDefault(); // чтобы не срабатывал submit
    equals();
  }

  // сброс
  if (key === "Escape" || key === "c") {
    clearAll();
  }
});
