let val;

const today = new Date();
let birthday = new Date("3-12-2000");
birthday = new Date("Desember 03 2000");
birthday = new Date(03 / 12 / 2000);

val = today;
val = today.getFullYear();
val = today.getMonth();
val = today.getDate();
val = today.getHours();
val = today.getSeconds();
val = today.getMilliseconds(); 
val = today.getTime();

birthday.setDate(03);
birthday.setMonth("11");
birthday.setFullYear(2000);

console.log(birthday);
console.log(val);