const sayilar = [1, 50, 2, 41, 41, 84, 8, 35, 3];
const isimler = ['sezer', 'ali', 'hasan', 'ayse'];
const ogrenciler = [
    {id : 12, isim : "sezer", yas : 30},
    {id : 22, isim : "hasan", yas : 15},
    {id : 32, isim : "fatma", yas : 55},
    {id : 13, isim : "nuriye", yas : 19},
    {id : 92, isim : "kemal", yas : 45},
    {id : 15, isim : "mustafa", yas : 75},
    {id : 44, isim : "ceren", yas : 30}
];

//** SOME */
//? some bize true veya false veriyor.

let b = ogrenciler.some(x => x.yas < 18) //! öğrenciler içinde 18 yaşından küçük olanlar varmı sorusunun cevabını veriyor.
console.log(b);

let b2 = ogrenciler.some(x => x.yas < 18 && x.isim == "hasan")
console.log(b2); //! şekildede birden fazla koşulla yapılabiliyor.

//** EVERY */

let b3 = ogrenciler.every(x => x.yas < 74)
console.log(b3);

let b4 = ogrenciler.every(x => x.yas < 76) //! true ve false verir hepsi koşula uygunsa true birii bile değilse false
console.log(b4);


//* MAP ***/

let b1 = ogrenciler.map(x => x.yas < 18) //! false, true false, false, false, false, false

console.log(b1);


//***ARRAY.FROM */

let ad = "Sezer ÖKMEN";

let b5 = Array.from(ad); //! stringlere dizi metodu uygulamak için öncelikle array a çevirmeliyiz.

//*** SPREAD*/

let a1 = [...ad] //! spread metodu bu diziye cevirdi 
console.log(a1);


//*** toSTRİNG */

let a2 = b5.toString(); //! string yaptık
console.log(a2);

//***ARRAY */

let a3 = Array(5, 2); //! [5, 2] iki elemanlı dizi oluşturdu.
console.log(a3);

let a4 = Array(5) //! [empty × 5] burada beş elemenlık boşluk bıraktı
console.log(a4);


//***ARRAY OF*/

let a5 = Array.of(5) //! 
console.log(a5); //! [5] tek sayı olmasına rağmen bir dizi oluşturdu array den tek farkı budur.







//***SLİCE*/

const name = isimler.slice(1, 3);

console.log(name);

const array = ogrenciler.slice(2, 6);
console.log(array);



//***SPLİCE*/

let a = sayilar.splice(2, 4) //! ikinci indexten itibaren dört elemenı sil ve ayrıca üzerinde işlem yapılan diziyi değiştirir.

console.log(a);


// let newName = isimler.splice(2, "erhan");

// let newName = isimler.splice(2) //! ikinci indekten itibaren sil işlem yapılan diziyi değiştirdi.


// let newName = isimler.splice(2, 0, 1111, 2222); //! ikinci indekte silme ve diğerlerini ekle


let newName = isimler.splice(2, 2, 1111, 2222); //! ikinci indekten itibaren iki eleman sil ve yerine yandakileri koy
console.log(newName);