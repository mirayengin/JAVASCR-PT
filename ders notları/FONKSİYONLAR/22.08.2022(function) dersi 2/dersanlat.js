// console.log("Arrow Yöntemi");

// //! Func Declaration yontemi ile tanimlama
// function isim (parametre) {
//     code body
// }

// //! Func expression Yöntemi

// const isim = function (parametre) {
//     code body
// }


//! Arrow Yöntemi

const isim = (paramtre) => expression 

// Arrow funcions bazı durumlarda return yazmasanda bir sonuç yani bir değer gönderir.
// Çoklu işlem yapacaksak süslü parantez kullanmamız lazımdr.

const gel = (a, b) => a + b;


// Arrow functionda süslü parantez kullanıyorsak return gereklidir eğer kullanmazsak undefined sonucunu alırız.
// Yukarıda olduğu gibi eğer arrow functionda birden fazla işlem yapılacaksa süslü parantez açarız ve return keyword unu kullanmamız lazımdır.

const gel1 = (a, b) => {
    a + b;
    return a + b;
}


//!Funct expression ve arrow func yontemlerinde
//! Once fonks tanimlanmalidir sonra cagrilmalidir.
//! Aksi takdirde hata alrsiniz.

// console.log(gel2(1, 2));

// const gel2 = (a, b) => {
//     return a + b;
// }




// function gel5(a, b) {
//     return a+b;
// };

// console.log(gel5(1, 2));

console.log("Dört işlem yapan code yazınız.");

// const hesapla = () => {
//     num1 = +prompt("bir sayı giriniz: ");
//     num2 = +prompt("ikinci sayıyı giriniz: ");
//     işlem = prompt("matematik işlem sembolunu giriniz: ")

//     if (işlem == "+") {
//         num1 + num2;
//          return num1 + num2;
//     } else if (işlem== "-") {
//         num1 - num2;
//          return num1 - num2;
//     }
// }

// console.log(hesapla()); 


// function hesapla1() {
//     sayi1 = +prompt("Bir sayı giriniz: ");
//     sayi2 = +prompt("bir sayı giriniz:");
//     işlem = prompt("matematik işlem sembolu giriniz:");
//     if (işlem == "+") {
//           sayi1 + sayi2;
//     } else if (işlem== "-") {
//           sayi1 - sayi2;
//     }

// }

// console.log(hesapla1());


// const hesapla2 = function () {
//     sayi1 = +prompt("Bir sayı giriniz: ");
//     sayi2 = +prompt("bir sayı giriniz:");
//     işlem = prompt("matematik işlem sembolu giriniz:");
//     if (işlem == "+") {
//          return sayi1 + sayi2;
//     } else if (işlem== "-") {
//         return  sayi1 - sayi2;
//     }

// }

// console.log(hesapla2());



console.log("SORU silindir hacmi");

// // let r, h;
// const r = +prompt("  Yarıçap değerini giriniz: ");
// const h = +prompt("Yükseklik değerini giriniz:");

// const daire = (r, h) => Math.PI * r * r * h;

// console.log(daire(r,h));


// const a = 3, c = 5;

// console.log(a,c);


console.log("Doğum tarihinizi yazınız: "); //üç yöntemle yapınız.

console.log(new Date());

const age = (doğumtarihi) => new Date().getFullYear() - doğumtarihi;

console.log(age(1991));