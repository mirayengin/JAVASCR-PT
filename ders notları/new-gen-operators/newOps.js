//* ======================================================
//*  DESTRUCTURING (OBJECT)
//* ======================================================
// console.log("****** NEW OPERATORS *******");
// const car = {
//   name: "BMW",
//   model: 1990,
//   engine: 1.6,
//   colors: ["blue", "purple"],
// };
// //* 1.YONTEM (Classical)
// const name1 = car.name;
// const model1 = car["model"];
// //* 2.YONTEM: DESTRUCTURING
// const { name, colors, model, engine } = car;
// console.log(name, model, engine, colors);
// //* EXAMPLE: NESTED
// const cars = {
//   car1: {
//     name: "BMW",
//     model: 1990,
//     engine: 1.6,
//   },
//   car2: {
//     name: "Mercedes",
//     model: 2022,
//     engine: 2.0,
//   },
// };

// const { car1, car2 } = cars;

// const {name:c1Name, model:c1Model } = car1;

// const { name: c2Name, model: c2Model } = car2;

// console.log(c1Name, c2Name);


// const team = [
//     {
//       name: "Josh",
//       surname: "Barry",
//       job: "developer",
//       age: 30,
//     },
//     {
//       name: "Josh",
//       surname: "Barry",
//       job: "tester",
//       age: 45,
//     },
//     {
//       name: "Hazel",
//       surname: "Nut",
//       job: "team lead",
//       age: 40,
//     },
// ];
  
// team.forEach((p) => {
//     console.log("**************************");
//     console.log("Name:", p.name);
//     console.log("Surname:", p.surname);
//     console.log("Job:", p.job);
//     console.log("Age:", p.age);
// })



// //* ======================================================
// //*  DESTRUCTURING (ARRAY)
// //* ======================================================

// team.forEach((p) => {
//     const { name, surname, job, age } = p; //? Burada parametre sırası önemli değil ama ismi önemli
//     console.log("**************************");
//     console.log("Name:", p.name);
//     console.log("Surname:", p.surname);
//     console.log("Job:", p.job);
//     console.log("Age:", p.age);
// })


// //*======================================================
// //*  REST (...)
// //* ======================================================

// //? REST operatoru kullanici tarafindan girilen degerleri dizi
// //? icerisine konumlandirir. Cesitli kullanim alanlari vardir.

// //! 1- Bir dizi veya object'deki bazi degerlerden geri kalanlarini
// //!    ayri dizi yada objelere kopyalanmasini saglayabilir.

// //* REST: (Arrays)
const autos = ["anadol", "reno", "bmw", "mercedes", "ferrari"];

const [anadol, reno, ...restAutos] = autos; //? Başka diziye almasını istediğimiz kalan kesintisiz olmalıdır eğer bir durum bu sirayı kesintiye uğratırsa yeni idziye atama yapmıyor.. Bu yüzden sona konuyor dizinin.
console.log(anadol, reno);
console.log(restAutos);

// //* REST (Objects)
const personel = {
  pName: "john",
  surname: "smith",
  job: "developer",
  age: 30,
};

const { pName, job, ...ageSurname } = personel;

console.log(ageSurname);
console.log(pName, job);

// //! 2- Bir fonksiyonun argumanlarini diziye cevirmek icin kullanilabilir.

const sum = (x, y) => x + y;

//? hata vermez fakat sadece 2 argumani toplar
console.log(sum(1, 2, 3, 4, 5, 6));

const sumAll = (...numbers) => {
  console.log(numbers); //? (4) [1, 2, 3, 4]
  return numbers.reduce((s, n) => (s += n), 0);
};

console.log("SUM OF NUMBERS:", sumAll(1, 2, 3, 4, 5, 6)); //? Burada function a bir dizi verdik parametre olarak biz parametre olarak ...numbers dediğimizi için bize bir array verdi argüman olarak.


const showName = (name, surname, ...titles) => {
    console.log(titles);

    const summary = `${name} ${surname} is a ${titles.join(" and ")}`; //? join bir birleştirme metodu ve titles bir dizi ve bu dizi içinde olan elemnların arasına and koyarak birleştirdi.

    console.log(summary);
};

showName("Noah", "Adams", "Developer", "Instr", "Professor", "Dad");


//*======================================================
//*  SPREAD (...)
//* ======================================================

//? Spread operatoru ise iterables olan bir elemani bireysel
//? degerler haline getirir.

const flyingVecihles = ["Aircraft", "Helicopter", "QuadCopter"];
const automobiles = ["Truck", "Bus", "Car", "SUV"];
// const allVehicles = [flyingVecihles, automobiles];
const allVehicles = [...flyingVecihles, ...automobiles];
console.log(allVehicles);

const citrus = ["orange", "lime", "lemon"];
const fruits = ["apple", ...citrus, "banana", "chery", "pear"];
// const fruits = ["apple", ...citrus, "banana", "chery", "pear"];
console.log(fruits);

//* String spread
let str = "Hello FS12";
const charArray = [...str];
console.log(charArray, str);

charArray[0] = "X";
console.log(charArray, str);

//* Max() - Dizileri fonksiyonlara acik bir sekilde parametre vermek icin
console.log(Math.max(1, 3, 5, 2, 10));
const nums = [1, 3, 5, 2, 10];
console.log(Math.max(...nums));

//* Array Copy
const myNumbers = [1, 2, 3];
const herNumbers = [-1, ...myNumbers, 7];
const hisNumbers = [...herNumbers];
hisNumbers.push(101);
console.log("MY:", myNumbers, "HIS:", hisNumbers);

console.log(herNumbers);

//* Object Copy

const myObj = { a: 1, b: 2, c: 4 };
const herObj = { a: 2, z: 4, c: 3 };

const copiedObj = {...myObj };
console.log(copiedObj);

copiedObj.c = "33";
console.log(copiedObj, myObj);

const combinedObj = { ...herObj, ...myObj };

console.log(combinedObj);




// Given an array of integers your solution should find the smallest integer.
// For example:
// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345

// const enKucukBul1 = (arr) => arr.sort((a,b)=> a-b)[0];
// console.log(enKucukBul1([34, 15, 88, 2]));


// const enKucukBul2 = (arr) => Math.min(...arr);
// console.log(enKucukBul2([34, 15, 88, 2]));

const arrayPlusArray = (arr1, arr2) => {
  // return arr1.reduce((acc, val) => acc+=val,0 ) + arr2.reduce((acc,val) => acc + val, 0)

  return [...arr1, ...arr2].reduce((acc, val) => acc + val, 0);

};

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));
console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6]));