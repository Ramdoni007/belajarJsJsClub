// Function yang nge return parameterNya
function Person(firstName, lastName) {
  return `Hay , ${firstName} ${lastName}`;
}

console.log(Person("Rem", "Doni"));

// Mencari Nilai Square Yand Dikalikan
const square = function (x = 8) {
  return x * x;
};

console.log(square());

// IIFEs

(function (name) {
  console.log(`Hayy , ${name}`);
})("RemDoni");
