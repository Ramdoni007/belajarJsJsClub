// Scope Dalam JavaScript adalah Merupakan
// Cakupan atau Ruang Lingkuo

// Ruang Lingkup variable di dalam JavaScript
// Ada 3 kondisi 1. Var , 2. Let 3. Const

// 1. GlobalScope

var a = 1;
let b = 2;
const c = 3;

console.log("GLobal Scope ", a, b, c);

// Ini merupakan Fungsi
// dari pembagian Scope
function local() {
  // Scope FUnction
  // Variable ini hanya berjalan di block function ini saja

  var a = "Ini";
  let b = "Itu";
  const c = "Ono";

  console.log("Scope FUnction : ", a, b, c);
}

local();
console.log();

// if (true) {
//   var a = "Doni";
//   var b = "Rem";
//   var c = "Ram";
// }

// var akan merubah nilai , let bisa di inisialisasi belakangan , const tidak bisa merubah nilai variable
