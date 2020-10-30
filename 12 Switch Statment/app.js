// Switch Statment biasa di gunakan untuk melakukan proses If sederhana atau Tidak sama dengan

// Contoh nya bisa kita liat sama sama di bawah ini :)

const myLove = "Rem";

switch (myLove) {
  case "Maimunah":
    console.log(`${myLove} adalah myLove Pangeran Downy-Kun`);
    break;

  case "Milea":
    console.log(`${myLove} adalah myLove Pangeran Downy-Kun`);
    break;
  case "Rem":
    console.log(`${myLove} adalah myLove Pangeran Downy-Kun`);
    break;
  default:
    console.log("tidak ada di kedua nya ini");
    break;
}

// Melakukan Pengecekan Jika Pada Nama Hari :)
let day;

switch (new Date().getDay()) {
  case 0:
    day = "Minggu";
    break;
  case 1:
    day = "Senen";
    break;
  case 2:
    day = "selasa";
    break;
  case 3:
    day = "rebo";
    break;
  case 4:
    day = "Kemis";
    break;
  case 5:
    day = "Jum'at";
    break;
  case 6:
    day = "Sabtu";
    break;
}

console.log(day);

// Noted Di atas merupakan contoh logika sederhana daru
// penerapan Switch Case
