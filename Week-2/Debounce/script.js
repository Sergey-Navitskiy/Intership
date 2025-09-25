function debounce(funct, ms) {
  let timerId;

  return function (...args) {
    clearTimeout(timerId);

    timerId = setTimeout(() => {
      return funct.apply(this, args);
    }, ms);
  };
}

function logSomth() {
  console.log("КУ");
}

const debounceUse = debounce(logSomth, 500);
debounceUse();
