const nama = "Ramdoni Tae Tae";
const umur = 19;
const job = "FullStack";
const alamat = "Endonesa Jaya";
const jumlah = 19;

let html;

// Template Html dengan ES 5

// html =
//   "<ul>" +
//   "<li>Nama:" +
//   nama +
//   "</li>" +
//   "<li>Umur:" +
//   umur +
//   "</li>" +
//   "<li>Job:" +
//   job +
//   "</li>" +
//   "<li>Alamat:" +
//   alamat +
//   "</li>" +
//   "</ul>";

// function hello() {
//   return "Hello";
// }

function hello() {
  return "hello";
}

// WIth Template ES6

html = `
    <ul>
    <li>Nama : ${nama} </li>
    <li>Umur: ${umur}</li>
    <li>Job: ${job}</>
    <li>Alamat: ${alamat}</li>
    <li>${5 + 2}</li>
    <li>${hello()}</li>
    <li>${umur > 20 ? "Over 20" : "Under 20 "}</li>
    </ul>

`;

document.body.innerHTML = html;
