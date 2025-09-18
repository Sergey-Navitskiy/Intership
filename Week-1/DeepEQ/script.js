function deepEqual(firstObj, secondObj) {
  if (firstObj === secondObj) {
    return true;
  }

  if (firstObj == null || secondObj == null) {
    return false;
  }

  if (typeof firstObj !== "object" || typeof secondObj !== "object") {
    return false;
  }

  const firstObjKeys = Object.keys(firstObj);
  const secondObjKeys = Object.keys(secondObj);

  if (firstObjKeys.length !== secondObjKeys.length) {
    return false;
  }

  for (const key of firstObjKeys) {
    console.log(`Comparing ${key}: ${firstObj[key]} vs ${secondObj[key]}`);
    if (
      !secondObjKeys.includes(key) ||
      !deepEqual(firstObj[key], secondObj[key])
    ) {
      return false;
    }
  }
  return true;
}

const objec1 = {
  name: "Siarhei",
  surname: "Navitski",
  location: "vitebsk",
};

const objec2 = {
  name: "Siarhei",
  surname: "Navitski",
  location: "vitebsk",
};

const objec3 = {
  name: "Alexander",
  surname: "Kleimenov",
  location: "vitebsk",
};

const objec4 = {
  name: "Alexander",
  surname: "Kleimenof",
  location: "vitebsk",
  card: {
    num: 25,
    CVV: 145,
  },
};

const objec4_1 = {
  name: "Alexander",
  surname: "Kleimenof",
  location: "vitebsk",
  card: {
    num: 25,
    CVV: 140,
  },
};

const objec5 = {
  name: "Alexander",
  surname: "Kleimenov",
};

console.log(deepEqual(objec4, objec4_1));
