//* ======================================================
//*  DESTRUCTURING (OBJECT)
//* ======================================================
console.log("****** NEW OPERATORS *******");
const car = {
  name: "BMW",
  model: 1990,
  engine: 1.6,
  colors: ["blue", "purple"],
};
//* 1.YONTEM (Classical)
const name1 = car.name;
const model1 = car["model"];
//* 2.YONTEM: DESTRUCTURING
const { name, colors, model, engine } = car;
console.log(name, model, engine, colors);
//* EXAMPLE: NESTED
const cars = {
  car1: {
    name: "BMW",
    model: 1990,
    engine: 1.6,
  },
  car2: {
    name: "Mercedes",
    model: 2022,
    engine: 2.0,
  },
};

const { car1, car2 } = cars;

const {name:c1Name, model:c1Model } = car1;

const { name: c2Name, model: c2Model } = car2;

console.log(c1Name, c2Name);


const team = [
    {
      name: "Josh",
      surname: "Barry",
      job: "developer",
      age: 30,
    },
    {
      name: "Josh",
      surname: "Barry",
      job: "tester",
      age: 45,
    },
    {
      name: "Hazel",
      surname: "Nut",
      job: "team lead",
      age: 40,
    },
];
  
team.forEach((p) => {
    console.log("**************************");
    console.log("Name:", p.name);
    console.log("Surname:", p.surname);
    console.log("Job:", p.job);
    console.log("Age:", p.age);
})



//* ======================================================
//*  DESTRUCTURING (ARRAY)
//* ======================================================

team.forEach((p) => {
    const { name, surname, job, age } = p;
    console.log("**************************");
    console.log("Name:", p.name);
    console.log("Surname:", p.surname);
    console.log("Job:", p.job);
    console.log("Age:", p.age);
})


//*======================================================
//*  REST (...)
//* ======================================================

//? REST operatoru kullanici tarafindan girilen degerleri dizi
//? icerisine konumlandirir. Cesitli kullanim alanlari vardir.

//! 1- Bir dizi veya object'deki bazi degerlerden geri kalanlarini
//!    ayri dizi yada objelere kopyalanmasini saglayabilir.

//* REST: (Arrays)
const autos = ["anadol", "reno", "bmw", "mercedes", "ferrari"];

const [anadol, reno, ...restAutos] = autos;
console.log(anadol, reno);
console.log(restAutos);

//* REST (Objects)
const personel = {
  pName: "john",
  surname: "smith",
  job: "developer",
  age: 30,
};

const { pName, job, ...ageSurname } = personel;

console.log(ageSurname);
console.log(pName, job);

//! 2- Bir fonksiyonun argumanlarini diziye cevirmek icin kullanilabilir.

const sum = (x, y) => x + y;

//? hata vermez fakat sadece 2 argumani toplar
console.log(sum(1, 2, 3, 4, 5, 6));

const sumAll = (...numbers) => {
  console.log(numbers); //? (4) [1, 2, 3, 4]
  return numbers.reduce((s, n) => (s += n), 0);
};

console.log("SUM OF NUMBERS:", sumAll(1, 2, 3, 4, 5, 6));


const showName = (name, surname, ...titles) => {
    console.log(titles);

    const summary = `${name} ${surname} is a ${titles.join(" and 
    ")}`;

    console.log(summary);
};

showName("Noah", "Adams", "Developer", "Instr", "Professor", "Dad");


//*======================================================
//*  SPREAD (...)
//* ======================================================