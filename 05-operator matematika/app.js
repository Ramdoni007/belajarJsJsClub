// Perhitungan Di Dalam JavaScript

const num1 = 100;
const num2 = 200;
let val;

// Simple Matematika

val = num1 + num2;
val = num1 * num2;
val = num1 / num2;
val = num1 % num2;
val = num1 - num2;

// Math Object adalah Operasi Yand Disediakan oleh JavaScript yand tidak
// ada di dalam operatr matematika Simple

val = Math.PI; // untuk menentukan Desimal
val = Math.E;
val = Math.round(3.4); // Membulatkan Bilangan
val = Math.ceil(2.4); // Membulatkan Bilangan ke arah bawah
val = Math.floor(4.7);
val = Math.sqrt(64); // mencari pangkat
val = Math.abs(-5); // Mempositifkan Bilangan
val = Math.pow(10, 5); // Mempangkatkan Bilangan
val = Math.min(2, 4, 5, 6, 19, 29, -2, -3, -100); // Mecari Bilangan Terkecil / Minimum
val = Math.max(3, 10, 900, 9999, 222222, 33333, 2222221, 445444444); // Mencari Bilangan Terbesar / Maksimum
val = Math.random(); // Mencari Bilangan Random tetapi bentuknya desimal
val = Math.floor(Math.random() * 50); // Mencari Bilangan Secara Random Dengan Batasan Angka 50 dan juga tidak desimal

console.log(val);
