const person = {
  firstName: "Ramdoni",
  lastName: "Ganteng",
  age: 19,
  email: "ramd42156@gmail.com",
  hoby: ["Main Voli", "Parkour"],
  addres: {
    kota: "Momonot City",
    Zip: 007,
  },

  getUlangTahun: function () {
    return 2018 - this.age;
  },
};

let val;

val = person;
val = person.firstName;
val = person.lastName;
val = person.age;
val = person.email;
val = person.addres;
val = person.hoby;
val = person.hoby[0];
val = person.hoby[1];
val = person.getUlangTahun();
console.log(val);
