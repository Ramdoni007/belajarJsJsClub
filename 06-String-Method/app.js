// Manipulasi String  di dalam Java Scripts Adalah mengubah
// Beberapa String Kedalam Method Yang Berbeda

var firstName = "Downy";
var lastName = "RemRin";
let val;
const tags = "kotlin , java , C , C pager , C++";

// * Method Concatenation

val = firstName + " " + lastName;

console.log(val);

// Append

val = "Downy";
val += "RemRin"; // Ini Adalah Contoh dari penerapan Append
console.log(val);

//Escaping
// Ini merupakan contoh dari penerapan Escaping Meenggunakan \\
val = "ini dia 'namanya Remrin,yang dimana dia' merupakan orang cantik";
val = "Ini dia namanya adalah Remrin";
console.log(val);

// Lengt Merupakan Method untuk mencari panjang String

val = firstName;
console.log(val.length);

// Method Concate untuk mengabungkan 2 string
var one = firstName + " " + lastName;
var two =
  "Hello Nama Abdi Doni Usia Abdi 19 tahun Mau 20 Lach " +
  "Dan Abdi Sukak Banget Sama Remrin";
console.log(one);
console.log(two);

// Change Case

val1 = firstName.toUpperCase();
val2 = lastName.toLowerCase();
console.log(val1);
console.log(val2);

// index of
var Indx = firstName.indexOf("w");
console.log(Indx);

//  charAt ()
var char = firstName.charAt("2");
console.log(char);
var last = firstName.charAt(firstName.length - 1); // ini di gunakan untuk mencari index terakhir
console.log(last);

// Substring
var subs = firstName.substring(0, 4);
console.log(subs);

// Slice
var potongan = firstName.slice(0, 4);
var potongan1 = firstName.slice(-1);
console.log(potongan);
console.log(potongan1);

// replace
var rplc = tags.replace("java", "PHP");
console.log(rplc);

// split

var splt = tags.split("-");
var split1 = tags.split(",");
console.log(splt);
console.log(split1);

// Includes

var incld = tags.includes("PHP");
console.log(incld);
