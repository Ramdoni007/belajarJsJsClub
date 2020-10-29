// Conversi Type Data Dalam Java Script Bisa di lakukan
// 2 Cara :

// Yang # PERTAMA

let val;
let val2;
let val3;
let val4;

// * NUMBER TO STRING

val = String(123);

// * BOOLEAN TOSTRING

val = String(false);

// *DATE TO STRING

val = String(new Date());

// * ARRAY TO STRING

val = String([1, 2, 3, 4, 5]);

console.log(val);
console.log(typeof val);
console.log(val.length);

// *Yang Kedua menggunakan method toTypeData

val2 = (10).toString();
console.log(val2);
console.log(typeof val2);
console.log(val2.length);

// 2. Mengubah String Kedalam Number

val3 = Number("100.31");

// Bool to Number

val3 = Number(true);
val3 = Number(false);

// Method Parse Int And ParseFLoat

val3 = parseInt("330.10");
val3 = parseFloat("330.10");

console.log(val3);
console.log(typeof val3);
console.log(val3.toFixed());

// Method Penjumlahan dalam Number yang Di Konversikan Kedalam String

const pertama = String(5); // ini adalah String
const kedua = 10;
const sum = pertama + kedua;

console.log(sum);
