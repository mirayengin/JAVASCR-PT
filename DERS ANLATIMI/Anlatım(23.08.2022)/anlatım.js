






// İF DÖNGÜSÜ
console.log("İF DÖNGÜSÜ");

if ("koşul") {
    // console.log("code body");
}

// console.log("Sisteme kayıtlı şifrenizle giriş yapınız.");

// let kayitliSifre = "erhan", şifre = prompt("Kayıtlı sifrenizi giriniz: ").toLowerCase();

// if (kayitliSifre === şifre) {
//     console.log("Girdiğiniz şifre kabul edildi");
// } else {
//     console.log("Girdiğiniz şifre yanlış.Lütfen tekrar gi");
// }




console.log("------------------------------------");




// FOR DÖNGÜSÜ

console.log("FOR DÖNGÜSÜ")

// for (initializer(BAŞLATAN); condition(KOŞUL); iterator(YENİLEYİCİ)) {
//     // for loop body
// }

// console.log("Örnek = 1-10 a kadar sayıları yazdırınız.");

// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }



console.log("-------------------------------------------");





console.log("isNaN");

// isNaN dan bahsedelim
// let letter;
// letter = isNaN(prompt("Giriş yapınız: "));
// console.log(letter);
// Number type olacak olanlar için false değerini verir olmöayacaklar içinse true verir.

//  console.log(Number("a"));

console.log("------------------------------------------------");






console.log("Soru-1 Bir metin yazınız. Metin karaktelerinin string ise display yapınız eğer string değilse döngüden çıkınız.");

// let karakterUzunluğu, metin;
// metin = prompt("Aklınıza ilk geleni yazınız.");
// console.log(metin);
// karakterUzunluğu = metin.length;

// for (let i = 0; i < karakterUzunluğu; i++) {
//     let karakter = metin[i];
//     console.log(`${metin[i]} indekslenen karakter.`);
//     if (isNaN(karakter)) {
//         console.log(`${metin[i]} bu karakter string bir değerdir.`);
//     } else if (karakter === " ") {
//         console.log(`${metin[i]} bu karakter string bir değerdir.`);
//     } else {
//         console.log(`${metin[i]} bu karakter number bir değerdir.`);
//         break;
//     }
// }





console.log("---------------------------------------");





// WHİLE DÖNGÜSÜ
console.log("WHİLE DÖNGÜSÜ")

// while ("koşul") {
//     //code body
// }


console.log("Soru-2 = Girilen sayıların ortalaması çift olana kadar sayı isteyen bir döngü yazınız. ");

// let sayi, total, counter, avg;

// total = 0;
// counter = 0;
// avg = 1;

// while (avg % 2 != 0) {
//     sayi = prompt("Bir sayı giriniz: ");
//     if (isNaN != false ) {
//         console.log(`Girilen sayı ${sayi} dır. Sayı kabul edildi.`);
//         counter += 1;
        
//         if (counter > 1){
//         total += Number(sayi);
//             avg = Math.round(total / counter);
//             console.log(avg);
//         }
//     } else {
//         console.log("Girilen değer kabul edilmedi.");
//     }
// }

// console.log(`Sayıların ortalaması ${avg} dir.`);

// let number, total = 0, counter = 0, avg;

//  while (avg % 2 != 0 , ) {
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


for (let x = 1; x <= 10; x++) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${x} X ${i} = ${x * i}`);
        if (i === 10) {
            console.log("---------------------");
        }
    }
}




console.log("---------------------------------------------");


console.log("DO WHİLE DÖNGÜSÜ");

do {
    console.log("Code body");
} while (false);



console.log("Soru-3 = Kullanıcının ismini yazdıran kodu yazınız.");





console.log("------------------------------------------------");





console.log("SEARCH METODU");

console.log("string.search(searchValue)");

console.log(
`The search() method matches a string against a regular expressionn 
The search() method returns the index (position) of the first match.
The search() method returns -1 if no match is found.
The search() method is case sensitive.`);


console.log("ÖRNEK");

let text = "Mr. Blue has a blue house";
let position = text.search("Blue");




console.log("-----------------------------------------");



console.log("SLİCE METODU");

console.log("string.slice(start, end)");


console.log("Slice Metodunun Özellikleri");

console.log(`
The slice() method extracts a part of a string.
The slice() method returns the extracted part in a new string.
The slice() method does not change the original string.
The start and end parameters specifies the part of the string to extract.
The first position is 0, the second is 1, ...
A negative number selects from the end of the string.`);


    
console.log("ÖRNEK");


let text1 = "Hello world!";
let result = text1.slice(0, 5);

console.log("--------------------------------------------------------");


console.log("Soru-1 = Çarpım toplosunu yazdırınız.");














