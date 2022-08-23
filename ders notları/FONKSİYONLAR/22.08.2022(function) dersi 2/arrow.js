// Arrow funcions bazı durumlarda return yazmasanda bir sonuç yani bir değer gönderir.

//Syntax ı

const topla = (a,b) => a + b;  // Burada return olmadığı halde bir değer verir.
console.log(topla(2, 3)); 

const usAl = (t, u) => t ** u;  // Tek satırlık codes için iyidir.
console.log(usAl(2, 3));

const yazdir = () => console.log("Hı"); // Parametre almasada olur.
yazdir();

const hesapla = (x, y, işlem) => {

    let sonuç;
    if (işlem === "+") {
        sonuç = x + y;
        console.log(sonuç);
    } else if (işlem === "-") {
        sonuç = x - y;
        console.log(sonuç);
    }
    return sonuç;

}

// Arrow functionda süslü parantez kullanıyorsak return gereklidir eğer kullanmazsak undefined sonucunu alırız.

// Yukarıda olduğu gibi eğer arrow functionda birden fazla işlem yapılacaksa süslü parantez açarız ve return keyword unu kullanmamız lazımdır.

// return keyword unu kullandığınızda return u calıştırır ve function tamamlanır ve sona erer.Bu yüzden function başında kullanılmaz.

//Expression yönteminde kesinlikle return keyword u kullanılır.



// SORU silindir hacmi


// const r = Number(prompt("yarıçap girinizz:"));
// const h = Number(prompt("yükseklik giriniz: "));

// const hacimhesapla = (r, h) => Math.PI * (r ** 2) * h;

// console.log(hacimhesapla(r,h).toFixed(2)); 

// toEwponential( kullanırsak 10 üzeri olarak gösterir.)
// trunch sayının tam kısmını alır.


const birthday = Number(prompt("Doğum tarihinizi yazınız: "));

// Arrow yöntemiyle tanımlama

const age = (birthday) => {
    const result = new Date().getFullYear() - birthday;
    return result;
}

console.log("Yaşınız: ", age(birthday));

// Alternatif yöntem
const age2 = (birthday) => new Date().getFullYear() - birthday;
console.log("Yaşınız: ", age(birthday));


// Function Expression yöntemiyle tanımlama

const age1 = function(birthday) {
    const result = new Date().getFullYear() - birthday;
    return result;
}

console.log("Yaşınız: ", age(birthday));

// Yukarıdaki tanımlama yöntemlerinde önce function tanımlanmalıdır.


// Hocanın slack e gönderdiği;

//* ORNEK: Yas hesapla
//************************************************/

const tarih = Number(prompt("Dogum Tarihini giriniz:"));

//! Arrow Func yontemi ile tanimlama
const yasHesapla = (tarih) => {
  const yas = new Date().getFullYear() - tarih;
  return yas;
};
console.log("YASINIZ:" + yasHesapla(tarih));

//?-----------------------------------------

// console.log("YASINIZ:" + yasHesapla2(tarih));
//!Funct expression ve arrow func yontemlerinde
//! Once fonks tanimlanmalidir sonra cagrilmalidir.
//! Aksi takdirde hata alrsiniz.

//! Func Expression yontemi ile tanimlama
const yasHesapla2 = function (tarih) {
  const yas = new Date().getFullYear() - tarih;
  return yas;
};
//?-----------------------------------------

console.log("YASINIZ:" + yasHesapla3(tarih));

//! Func Declaration yontemi ile tanimlama
function yasHesapla3(tarih) {
  const yas = new Date().getFullYear() - tarih;
  return yas;
}
//?-----------------------------------------
















































































