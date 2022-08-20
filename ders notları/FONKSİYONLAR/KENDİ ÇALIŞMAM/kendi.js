// function ageWriter(name, age,) {
//     console.log(`Ben ${name}, ${age} yaşındayım.`);
// }

// ageWriter("Erhan", 31);

// function ben(doğum, ad) {
//     let age = 2021 - Number(doğum);
//     console.log(`Ben ${ad}, ${age} yaşındayım.`);
// }

// ben(1990, "ERHAN");

// function hesapmakinesi(num1, num2,işlem) {
//     if (işlem === "+") {
//         console.log(`${num1} + ${num2} = ${num1+num2}`);
//     }else if (işlem === "-") {
//         console.log(`${num1} - ${num2} = ${num1-num2}`);
//     }else if (işlem === "*") {
//         console.log(`${num1} * ${num2} = ${num1*num2}`);
//     }else if (işlem === "/") {
//         console.log(`${num1} / ${num2} = ${num1/num2}`);
//     } else {
//         console.log("Dört işlemden birini giriniz.");
//     }
// }

// hesapmakinesi(1, 2, "+");



// function bölmekontrol(number1) {
//     if (number1 % 2) {
//         console.log(`${number1} sayısı tek sayıdır.`);
//     } else {
//         console.log(`${number1} sayısı çift sayıdır.`);
//     }
// }

// bölmekontrol(2);



// FUNCTİON EXPRESCİON YÖNTEMİ

// let fonkTekmi = function (x) {
//     return x % 2 ? "Tek" : "Çift"
// }

// x = +prompt("Bir sayı giriniz.");
// console.log(`${x}, ${fonkTekmi(x)}`);



// ARROW YÖNTEMİ

// let fonk = (arg1, arg2) expression

// let age = (doğum) => 2021 - doğum;
// alert(age(1990));

// let name = (ad) => console.log(`Merhaba ben , ${ad}`);
// alert(name("erhan"))

// let yarıçap = (sayı) => (Math.PI * (sayı ** 2)).toFixed(2);
// alert(yarıçap(2))

//FONKSİYON KARŞILAŞTIRMA

// let fonksiyon = (a, b) => a + b,

// function fonksiton(a, b) {
//     return a+b
// }

// let fonksiton = function (a,b) {
//     return a+b
// }

// a = prompt("bir sayı giriniz.");
// b = prompt("bir sayı giriniz.")

// console.log(`${a} + ${b} = ${a+b} dir.`);
