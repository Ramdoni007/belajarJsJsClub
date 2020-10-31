// For Each di dalam java script adalah kondisi

// For

const waifus = ["Rem", "Itsuki", "Ichika", "Emilia", "Mikasa", "Azuka"];

for (let i = 0; i < waifus.length; i++) {
  console.log(waifus[1]);
}

/**
 * forEach() — menjalankan
 * fungsinya untuk setiap elemen dengan mengeksekusi dari index terkecil ke yang terbesar.
 *  */

waifus.forEach(function (waifu, index, array) {
  console.log(`${index}: ${waifu}`);
  console.log(array);
});

/**
 * Sedangkan Map dia dalam javascript adalah
 * fungsi map() ini membentuk array baru yang di dapat dari array itu sendiri
 * dan di map() ini sendiri dapat mengembalikan nilai return.
 */

const waifus2 = [
  { id: 1, name: "Rem", age: 18 },
  { id: 2, name: "Itsuki", age: 19 },
  { id: 3, name: "Ichika", age: 20 },
  { id: 4, name: "Azuka", age: 19 },
];

const waifu = waifus2.map(function (waifu2) {
  return waifu2.name;
});

console.log(waifu);

const person = {
  firstName: "Downy",
  lastName: "Rem",
  age: 20,
};

for (let x in person) {
  console.log(`${x}:  ${person[x]}`);
}
