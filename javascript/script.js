alert("merhaba")
console.log("merhaba")  //bu komutla parantez içindekileri yazdırabiliyoruz
console.log(123);
console.log(true);
console.log([1,2,3]);
console.error("hata oluştu.");  // bir hata uyarısı verirken bu error kullanıyoruz
console.warn("bir uyarı oluştu.");  // bir uyarı alak içinde warn ı kullanıyoruz

// tek satırlık yorumlar için

/*
çok satırlı yorumlar için
*/

console.clear();


/*
document yazarak html dosyamızda bulunanları browser console kısmına aktarabiliyoruz
*/

/*
* document.getElementById("header") yazarak html dosyamızda bulunan bir ıd nın kapsadığı html dosyası kısmını browser console kısmına aktarabiliyoruz.
 */


//ctrl + ö ile satırları yorum haline getirebiliyoruz

// let ve var arasındaki fark

let elma="yeşil";
elma="kırmızı";
console.log(elma); // Buna izin vermez.


var elma="yeşil";
elma="kırmızı";
console.log(elma); // Buna izin verir.

// (use strict) burada katı kurallar geçerli olsun.
