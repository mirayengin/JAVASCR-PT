//********************** ÖRNEK ******************************************/

const dizi = [-5, 15, 22, -4, 45, 78];
let negatifler = [];
let pozitifler = [];
const topla = (dizi) => {
for (let i = 0; i < dizi.length; i++) {
if (dizi[i] < 0) {
negatifler.push(dizi[i]);
} else {
pozitifler.push(dizi[i]);
} }
console.log(`Dizideki Pozitif Sayıların dızısı: ${pozitifler}`);
console.log(`Dizideki Negatif Sayıların dızısı: ${negatifler}`);
};

console.log(dizi);

console.log(negatifler);
console.log(pozitifler);
console.log(dizi);



//********************** ÖRNEK ******************************************/
//? Dizideki notlarin ortalamasini hesaplayiniz.
// const notlar = [55, 77, 23, 89, 100];
// let = total = 0;
// let sayaç = 0;

// for (let i = 0; i < notlar.length; i++) {
//     sayaç += 1;
//     total += notlar[i];
// }

// console.log(`Ortalama ${total / sayaç}`);


//********************** FOR-IN LOOP ****************************/

// const notlar = [55, 77, 23, 89, 100];
// let = total = 0;
// let sayaç = 0;

// for (let i in notlar) {  //! Buradaki i indeks numarasıdır. Sıfıırdan başlar.
//     sayaç += 1;
//     total += notlar[i];
// }

// console.log(`Ortalama ${total / sayaç}`);


//*-------------------------------------------------------
//* SORU: Ogrenciler dizisinde ogrenci isimleri saklanmaktadir.
//* ogrencileri aramamizi saglayacak ve aranilan ogrenciden
//* ne kadar sayida bulunuldugunu  ana programa döndürecek bir
//* fonksiyonu yaziniz. Eger aranilan isimde bir ogrenci yok ise
//* fonksiyon "ogrenci bulunamadi" dondurulmelidir.

// const ogrenciler = [
//     "ahmet",
//     "mehmet",
//     "ismet",
//     "ahmet",
//     "can",
//     "mehmet",
//     "cem",
// ];
// let student = (isim) => {
//     let count = 0;
//     for (let i in ogrenciler) {
//         isim === ogrenciler[i] && count++
//     }
//     return  console.log(`${isim} isimli öğrenci ${count} tanedir.`);
// }

// console.log(student("ahmet"));
// console.log(student("ismet"));
// console.log(student("Ahmet"));
//*--------------------------------------------------------





//************************* FOR-OF DÖNGÜSÜ *********************/

//! FOR-İN İN geliştirilmiş hali





//* ======================================================
//*                   FOREACH METHOD
//* ======================================================
//! return değeri yoktur. for each void bir functiondur.
//?Void Function = Void functions are created and used just like value-returning functions except they do not return a value after the function executes. In lieu of a data type, void functions use the keyword "void." A void function performs a task, and then control returns back to the caller--but, it does not return a value. 
    // console.log("****** ITERATION **********");

//?-------------- ÖRNEK -------------------
//?  Dizideki herbir fiyati konsola bastiriniz.

// const prices = [100, 250, 50, 89];

// prices.forEach((p) => {console.log(p); //! Sırasıyla bütün elemanları bastırır.
    
// });



//? prices dizisinin elemanlarının toplamları
const price1 = [100, 250, 50, 89];
let total = 0;
price1.forEach((price) => (total += price)); //! Buradaki parametre zorunludur. Burada return vermediği için undefined verir. 
//?forEach ( function (şunkideğer,indis,dizi)) parametreleri alabilir. Ama en çok tek parametreli yapılır.
console.log("TOTAL : ", total);


//?-------------- ÖRNEK -------------------
//?price dizisindeki her bir ara toplam değeri konsola yazdırınız. Ayrıca her bir fiyata %10 zam yapınız.
const price2 = [100, 250, 50, 89];
let sum = 0;

price2.forEach((price, index) => {
    sum += price;
    console.log(`${index + 1}.iteration: ${sum}`);
    price2[index] = Math.trunc(price * 1.1); //! tam sayı kısmını alır.
    // price2[index] = price * 1.1;
    //? Burada virgüllü sayı vear ve göstermek için çok sıfırlı yazar bu yuvarlama hatasıdır.
});

console.log(price2);


//* ======================================================
//*                       MAP METHOD
//* ======================================================
//!BİR YENİ COPY DİZİ DÖNDÜRÜR.USER IN İSTEĞİNE GÖRE MODİFİKASYON YAPAR.
//? Orjinal diziyi değiştirmez.

//!Bir return değerini döndürür.

//?map(callbackfn: (value: number, index: number, array: number[]) => any, thisArg?: any): any[]
//!A function that accepts up to three arguments.The map method calls the callbackfn function one time for each element in the array.Calls a defined callback function on each element of an array, and returns an array that contains the results.

//! ARRAY.MAP( function (şunkideğer,indis,dizi)) parametreleri alabilir. Ama en çok tek parametreli yapılır.

//?-------------- ÖRNEK -------------------
//? Bir dizideki tüm isimleri BÜYÜK harfe dönüştüren uygulamayı yazınız.
let names = ["Mustafa", "Murat", "Ahmet", "Mustafa", "Ayşe", "canan"];

let bigName = names.map(name => name.toUpperCase());

console.log(bigName, names);



//?-------------- ÖRNEK -------------------
//? tlFiyatlar dizisindeki rakamlarin Euro ve dolar
//? karsiliklarini hesaplatarak yeni dizelere kaydediniz

const euro = 18.23;
const dolar = 18.19;
const tlPrices = [100, 150, 100, 50, 80];

const euroPrices = tlPrices.map((tl) => Number((tl / euro).toPrecision(3))); //! prececision yaparsak toplamda kaç basamaklı olacağını belirler.

//? Bu metod strıng e dönüştürür değerleri.

console.log(euroPrices);


const dolarPrices = tlPrices.map((tl) => Number((tl / euro).toPrecision(3)));
console.log(dolarPrices);

//! Bir dizide değişiklik yapmak gerekiyorsa bu metod kullanılır. Eğer return özeeliği kapanmasın dersek süslü parantez açmıyoruz açarsakta biz return ediyoruz.


//?-------------- ÖRNEK -------------------
//? products dizisinin icerisindeki her urunu (Orjinal dizideki)
//? buyuk harf olarak degistirelim.

const products = [
    "Iphone12",
    "samsungS20",
    "lenovo",
    "macbook pro",
    "mac air",
    "Galaxy tablet",
    "macbook",
    "Iphone12",
    "mac air",
    "lenovo",
    "macbook pro",
    "samsungS20",
  ];
  //! Orjinal diziyi degistidik.
products.map((p, i, arr) => (arr[i] = p.toUpperCase())); //! Burada indiksleme yaparak elemanı çağırıyoruz ve istediğimiz değeri atıyoruz. arr parametresi dizinin kendisidir.
//? array.map(callbackfn: (value, index,arr(dizinin kendisi bu))
//? arr[i] = p.UpperCase() yaparak.
  console.log(products); 

//* ======================================================
//*                CHAINING (PIPELINE)
//* ======================================================
//! map, filter, forEach gibi metodlar art arta kullanılabilir. Buna da pipeling denir.Ama return çevirmesi hepsinin yoksa işlem yarım kalır.




//* ======================================================
//*                 FILTER METHOD
//* ======================================================
const salary = [5500, 8000, 6500, 9000, 10000, 15000, 25000];

//?-------------- ÖRNEK -------------------
//? Maasi 10000'den buyuk olanlari ayri bir diziye saklayalim

const bigSalary = salary.filter((s) => s > 10000);

console.log(salary, bigSalary);

const range = salary.filter((p) => p >= 6000 && p <= 10000);

console.log(range);
//* ======================================================
//*                 REDUCE METHOD
//* ======================================================