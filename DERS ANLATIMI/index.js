// İF DÖNGÜSÜ
console.log("İF DÖNGÜSÜ");

// if ("koşul") {
//     console.log("code body");
// }

// ÖRNEK

// let hesapsifre = "erhan", şifre;
// şifre = prompt("Kayıtlı şifrenizi giriniz: ").toLowerCase();

// if (şifre === hesapsifre) {
//     console.log("Girilen şifre kabul edildi.");
// } else {
//     console.log("Hatalı giriş yaptınız.");
// }



// let dizi, karaktersayısı;
// dizi = prompt("Aklınıza ilk geleni yazın: ");
// karaktersayısı = dizi.length
// console.log(`Dizinin karakter uzunluğu ${karaktersayısı} dir`);

// for (let i = 0; i <= karaktersayısı; i++) {
//     karakter = dizi[i];
//     console.log(dizi[i]);
//     if (isNaN(dizi[i])) {
//         console.log(`${dizi[i]} sayı değildir.`);
//     } else {
//         console.log(`${dizi[i]} sayıdır.`);
//         break;
//     }
// }

// isNaN dan bahsedelim
// let letter;
// letter = isNaN(prompt("Giriş yapınız: "));
// console.log(letter);
// Number type olacak olanlar için false değerini verir olmayacaklar içinse true verir.









// FOR DÖNGÜSÜ

// console.log("FOR DÖNGÜSÜ")

// for (initializer(BAŞLATAN); condition(KOŞUL); iterator(YENİLEYİCİ)) {
//     // for loop body
// }

// console.log("Örnek = 1-10 a kadar sayıları yazdırınız.");

// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }


// console.log("Soru-1 = Çarpım toplosunu yazdırınız.")
// for (var x = 1; x <= 10; x++) {
//     for (var i = 1; i <= 10; i++) {
//         console.log(`${x} X ${i} = ${x * i}`);
//         if (i === 10) {
//             console.log("---------------------");
//         }
//     }
// }



// WHİLE DÖNGÜSÜ
// console.log("WHİLE DÖNGÜSÜ")

// while ("koşul") {
//     //code body
// }

console.log("Soru-2 = Girilen sayıların ortalaması çift olana kadar sayı isteyen bir döngü yazınız. ");

// let number, total = 0, counter = 0, avg;

//  while (avg % 2 != 0) {
//     number = prompt("bir sayı giriniz: ");
//     if (isNaN(number) == false) {
//         console.log(`Girilen sayı ${number} dır. Kabul edildi.`)
//         total += Number(number);
//         counter += 1;
//         avg = Math.round(total / counter);
//         console.log("Girilen sayıların ortalaması : ",avg);
//     } else {
//         console.log("Girilen değer kabul edilmedi.")
//     }

     
// }

// console.log("Girilen sayıların ortalaması: ",avg);



console.log("Soru-2");

// while (avg % 2 != 0) {
//     number = +prompt("Bir sayı giriniz: ");
//     total += number;
//     counter += 1;
//     avg = Math.round(total / counter);
//     console.log(avg);

// }

// console.log(avg);


console.log("DO WHİLE DÖNGÜSÜ");

do {
    console.log("Code body");
} while (false);

console.log("Soru-3 = isminizi yazdıran kodu yazınız.");

let adet, adınız,counter;
adınız = prompt("Adınızı girniz: ").toUpperCase();
console.log(adınız);
adet = prompt("Bir rakam giriniz: ")
counter = 0;

do {
    console.log(`Àdınız ${adınız}`);
    counter += 1;
    
}while(counter < adet);

console.log(`Adınız ${adınız}'tır ve ${adet} defa yazdırılmıştır.`);


console.log("---------------------------------------");

console.log("SEARCH METODU");

console.log("string.search(searchValue)");

The search() method matches a string against a regular expression **

The search() method returns the index (position) of the first match.

The search() method returns -1 if no match is found.

The search() method is case sensitive.


console.log("ÖRNEK");

// let text = "Mr. Blue has a blue house";
// let position = text.search("Blue");


console.log("-----------------------------------------");

console.log("SLİCE METODU");

console.log("string.slice(start, end)");


console.log("Slice Metodunun Özellikleri");
The slice() method extracts a part of a string.

The slice() method returns the extracted part in a new string.

The slice() method does not change the original string.

The start and end parameters specifies the part of the string to extract.

The first position is 0, the second is 1, ...

A negative number selects from the end of the string.


    
console.log("ÖRNEK");


let text = "Hello world!";
let result = text.slice(0, 5);


// let isimler = "";
// while (true) {
//   menu = +prompt(
//     "1 - Ogretmen menu\n2 - Ogrenci menu\n 0 - Exit\n(ogrenci menude notların gorünebilmesi icin ogretmen menuden notların girilmesi gerekir...)"
//   );

//   if (menu == 0) {
//     break;
//   } else if (menu == 1) {
//     let sayac = prompt("kac adet ogrenci verisi gireceksiniz : ");
//     let isim = "";
//     for (let i = 1; i <= sayac; i++) {
//       isim = prompt(`${i}. ogrenci ismini giriniz : `);
//       if (i == 1) {
//         isimler = isim + " = ";
//       } else {
//         isimler += "     " + isim + " = ";
//       }
//       let sayac2 = +prompt(`${isim} icin kac adet not gireceksiniz : `);
//       let not = 0;
//       let ort = 0;
//       let etki = 0;
//       for (let j = 1; j <= sayac2; j++) {
//         not = +prompt(`${j}. notu giriniz : `);
//         etki = +prompt(`bu not yuzde kac etkili(0-100 arası rakam yazınız) : `);
//         ort += (not * etki) / 100;
//       }
//       isimler += ort;
//       console.log("ogrenci isimleri ve notlari basariyla eklendi...");
//     }
//     // console.log(isimler);
//   }
//   if (menu == 2) {
//     let name = prompt("Lutfen aradıgınız ismi giriniz : ");
//     let index = isimler.search(name);
//     if (index != -1) {
//       console.log(isimler.slice(index, index + 6 + name.length));
//     } else {
//       console.log("kayit bulunamadi....");
//     }
//   }
// }

















































