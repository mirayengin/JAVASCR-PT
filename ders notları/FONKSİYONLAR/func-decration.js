// in wang ve calling fonksiyonun çağrılması demektir.
//stack (RAM) dolmasına stackoverflow denir.

//FONKSİYON YAZMA YÖNTEMLERİ
// 1. YÖNTEM

// function fonkismi(parametre1, parametre) {
//     //işlemler
//     //....
//     return dönüşDeğeri;
// }

// fonkismi(); //fonk çağırıldı.

// Fonksiyonlarda return tanımlamazsak console.log(fonkismi) dersek boş string gelir. Çünkü tuttuğu bir değerin olmaması sebebiyle. Eğer return yapılırsa return değerini verir.


// yazdir(); // Burayada yazsak olur çünkü global olarak kabul edilir bu yöntemde.
// function yazdir() {
//     console.log("merhaba");
// }

// yazdir();
// yazdir();

/************************************************* */
// function selamla(ad, soyad) {
//     console.log(`Merhaba ${ad} ${soyad}`);
// }

// selamla("Can", "Öztürk");
// selamla("Erhan"); //Burada undefined yazmaması için parametre içine soyad = " " yaparsak bir değer girmezsek default olarak bu parantez içinde atananı yazar.

// Bir parametreyi cagirma sirasinda kullanmaz isek onun
//! yerine default parametre atayabiliriz. Ornekteki lastName
//! parametresi icin default değer olarak '' atanmistir.


/************************************************* */

// function yas(isim, doğum_tarihi) {
//     return `Benim adım ${isim} ve ben ${new Date().getFullYear() - doğum_tarihi} yaşındayım.`;
// }

// const haber = yas("Erhan", 1991)
// console.log(haber);


// function yas(isim, doğum_tarihi) {
//     return `Benim adım ${isim} ve ben ${new Date().getFullYear() - doğum_tarihi} yaşındayım.`;
// }


// console.log(yas("Erhan", 1991));



// function yas(isim, doğum_tarihi) {
//     const sonuç = `Benim adım ${isim} ve ben ${new Date().getFullYear() - doğum_tarihi} yaşındayım.`;
//     return sonuç;
// }


// console.log(yas("Erhan", 1991));


/************************************************************** */

// function tekCift(sayi) {
//     return sayi % 2 ?`Girilen ${sayi} sayısı Tektir` : `Girilen ${sayi} sayısı Çifttir`;
// }


// console.log(tekCift(2));
// console.log(tekCift(5));


//--------------------------------------------
    
// function tekCift(sayi) {
//     return sayi % 2 ?`Girilen ${sayi} sayısı Tektir` : `Girilen ${sayi} sayısı Çifttir`;
// }

// const sayi = +prompt("bir sayı giriniz")
// console.log(tekCift(sayi));

// Burada tekÇift(n) desek yine çalışır çünkü fonksiyona sadece değer gider.Oyüzden parametre ismi önemli değildir.


//EXPRESSİON YÖNTEMİ

// const hesapla = function (n1, n2) {
//     return n1+n2
// }

// hesapla(3, 5); //Her yerde kullanılmaz bu yöntemde atananlar, sadec bu fonk kullanılır.


// console.log(tekCift(9)); // Burada hata verir çünkü tekCift deklare edilmesi gerektiği hatasını verir. Yani burada atama yapılmaış veya func yokmuşl gibi düşünür.o yüzden bu yöntemde fonk çağırma fonk dan sonra olmalıdır.

// const tekCift1 = function (sayi) {
//     return sayi % 2 ?`Girilen ${sayi} sayısı Tektir` : `Girilen ${sayi} sayısı Çifttir`;
// }

// console.log(tekCift1(2));
// console.log(tekCift1(5));

/*************************************** */

//En büyük sayıyı bul

// const buyukbul = function (n1, n2, n3) {
// if (n1 >= n2 && n1 >= n3) {
//   result = n1
// } else if (n2 >= n1 && n2 >= n3) {
//   result = n2
// } else if (n3 >= n1 && n3 >= n2) {
//   result = n3
//     }
    
//     return result;
// }




// const n1 = +prompt("Sayi1:");
// const n2 = +prompt("Sayi2:");
// const n3 = +prompt("Sayi3:");

// console.log("Girilen sayıların  en büyüğü", buyukbul(n1,n2,n3));



const buyukbul = function (n1, n2, n3 = Number.MAX_VALUE) {
    if (n1 >= n2 && n1 >= n3) {
      result = n1
    } else if (n2 >= n1 && n2 >= n3) {
      result = n2
    } else if (n3 >= n1 && n3 >= n2) {
      result = n3
        }
        
        return result;
    }
    
    
    
    
    const n1 = +prompt("Sayi1:");
    const n2 = +prompt("Sayi2:");
    const n3 = +prompt("Sayi3:");
    
    console.log("Girilen sayıların  en büyüğü", buyukbul(n1,n2,n3));
console.log("Girilen sayıların  en büyüğü", buyukbul(-8, -9)); // Bunun en büyüğünü ararken ve eksik bir parametre verirken doğru sonuç için number.max_value yazıp en büyük sayıyı bulup başına eksi koyunca en küçük sayı vermiş oluruz.en küçük sayıyı bulurkende tersi bu işlemin.





































































































































































































