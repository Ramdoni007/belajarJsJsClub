// Perulangan Dalam Bahasa Pemograman Umunya
// Sama Diantara nya ada 3 : For , While ,DoWhile

// 1. FOR

for (let i = 0; i < 10; i++) {
  console.log("Number " + i);

  // Di Dalam Scope For ini juga kita bisa melakukan banyak kondisi
  // contohnya if

  if (i === 2) {
    console.log("2 adalah angka favorite saia");
    continue;
  }
  if (i === 5) {
    console.log("Berhenti Lakukan Perulangan");
    break;
  }
}

// 2 . WHILE

let a = 0;

while (a < 10) {
  console.log("Number" + a);
  a++;
}

// 3. DoWHile  = dimana kondisi perulangan apapun yang terjadi akan
// selalu mengeksekusi blok di dalam do dahulu. baru while nya
// otomatis akan menghasilkan input minimal 1

let b = 0;

do {
  console.log("Number " + b);
  b++;
} while (b < 10);
