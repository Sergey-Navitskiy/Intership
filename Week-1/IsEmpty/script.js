// function isEmpty(obj) {}

// const firstObj = {
//   name: "Siarhei",
//   surname: "Navitski",
//   location: null,
// };

// isEmpty(firstObj);

function isEmptyAnother(obj, property) {
  // Проверить что св-о принадлежит этому объекту, а не родителю
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

const obj = { surName: "FQ" };

// const firstObj1 = {
//   name: "Siarhei",
//   surname: "Navitski",
//   location: null,
// };

const firstObj1 = Object.create(obj);
console.log("🚀 ~ firstObj1:", firstObj1);

// firstObj1.name = "Siarhei";
// firstObj1.surname = "Navitski";
// firstObj1.location = null;

// isEmpty(firstObj);
isEmptyAnother(firstObj1);
