// If Statment adalah sebuah fitur di dalam pemograman untuk melakukan kondisi JIka tidak (IF or els)

const id = 100;

if (id == 100) {
  console.log("Bener Yeay!!!");
} else {
  console.log("Anda Kurang Beruntung Silahkan coba lagi nanti!!!!");
}

// Lebih Besar, Lebih Kecil

if (id >= 100) {
  console.log("Betul");
} else {
  console.log("Salah");
}

// If dengan String Type data if , else if and else

const color = "blue";

if (color == "blue") {
  console.log("Yeay Betul ini adalah warna blue");
} else if (color == "black") {
  console.log("Ini warna Hitam");
} else {
  console.log("Opps ini bukan kedua nya mungkin ini warna lain !!!");
}

const name = "Rem";
const age = 12;

if (age > 0 && age < 12) {
  console.log(`${name} bukan Istri Downy`);
} else if (age > 0 && age == 12) {
  console.log(`${name} Adalah Istri DOwny di Dunia Pararel Nanti`);
} else {
  console.log("Emilia adalah Istri Downy");
}
