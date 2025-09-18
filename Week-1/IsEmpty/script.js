// function isEmpty(obj) {}

// const firstObj = {
//   name: "Siarhei",
//   surname: "Navitski",
//   location: null,
// };

// isEmpty(firstObj);

function isEmptyAnother(obj, property) {
  for (const key in obj) {
    if (key in obj) {
      console.log(`Свойство - ${key} существует`);
    }
  }
  if (property in obj) {
    console.log(`Свойство- ${property} существует`);
    return true;
  } else {
    console.log(`Свойство- ${property}  не существует`);
    return false;
  }
}

const firstObj1 = {
  name: "Siarhei",
  surname: "Navitski",
  location: null,
};

// isEmpty(firstObj);
isEmptyAnother(firstObj, "sity");
