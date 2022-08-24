//***! */ Primitive type tek değer alabilen number.string,nan,undefined,vs
//!Nonprimitive birden cok değer içerenler objectler gibi

//! New ile beraber yazılan herşey bir object tir.

// String Lterals(klasik) yöntemle ile string tanımlanırsa bu primitive bir type dır.
//! Primitive tanımlama
const str1 = " Hello";
const str2 = " Full Stack";

console.log(str1, typeof str1);



//?------------------------------------------------------


//! Normal bir primitive olan bir type ı javastrip sanki bir non-primitive gibi davranılmasını sağlıyor.



console.log(str1.toLowerCase()); // non-primitive gibi davranılmasını sağladı.

//* Normalde primitive veri tiplerinin property veya metodu olmaz.
//* Ancak,Javascript otomatik olarak primitive String'ler için object wrapper oluşturur.
//* Bu sayede, String nesnelerine ait olan fonksiyonlar veya özellikleri
//* primitive string'ler ile kullanılabilir hale gelir.
//* Sonrasında oluşan bu object bellekten otomatik olarak kaldırılır.

//? Ek Açıklama için : https://javascript.info/primitives-methods



//?---------------------------------------------------


//! Non-primitive String Tanımlama
// const str3 = new String("Hello");
// console.log(str3, typeof str3);


const str4 = str1 + str2;

console.log(str4);

const str5 = 5;

const str6 = str1 + str2 + str4;

console.log(str6); //? Burada bir concart yapılıyor o yüzden burada number bile olsa sonuçta strıng olşur bize.


//?---------------------------------------------------

//**** concat( ) immutable ********/

//************ */

console.log(str1.concat(str2)); //! Değerleri concat etti. str1 ve str2 eğeri burda değişmez.

// str1 = str2.concat("PATH"); // Burada atama yapıldığı için str1 değişti.

// console.log(str1);


//?-------------------------------------------







//! ORNEK: iki string'i esit veya degil diye kiyaslayarak sonucu
//! donduren fonksiyonu yaziniz.

const esitMi = (a,b) => {
    return a.toLowerCase() === b.toLowerCase() ? `${a} ile ${b} eşittir` : `${a} ile ${b} eşit değildiir.` 
}


console.log(esitMi("Merhaba", "MERHABA"));
console.log(esitMi("Hello", "Hell"));

const esitMi1 = (a,b) => a.toLowerCase() === b.toLowerCase() ? `${a} ile ${b} eşittir` : `${a} ile ${b} eşit değildiir.` 

//*** Yukarıdaki gibi de tek satırda yazılabilir arrowla ve return kullanmaya gerek yoktu. */

//! Ufak bir bilgi mülakatlarda karşınıza çıkabilir
let str = "Mark"
let str7 = str //! creates a copy
str = "Noah"
console.log(str) //! Noah
console.log(str7) // !Mark immutable olduğu için değişmedi obje olsaydı değişirdi.

//?---------------------------------------------------------

//?--------------------------
//** localeCompare() */
//?--------------------------


const a = 'réservé'; // with accents, lowercase
const b = 'RESERVE'; // no accents, uppercase

console.log(a.localeCompare(b));
// expected output: 1
console.log(a.localeCompare(b, 'en', { sensitivity: 'base' }));

//? 'BASE: a ≠ b, a = á, a = A'
//? 'ACCENT: a ≠ b, a ≠ á, a = A' // aksan
//? 'CASE: a ≠ b, a = á, a ≠ A' // küçük büyük


//! 0 sıfır değeri verirse değerler aksan olarak eşittir. Pozitif yada negatif sayı verirse eşit değiller.


//?---------------------------------------------------------

//?--------------------------
//** charAt() */
//?--------------------------

const str8 = "Full Stack Path";
console.log(str8.charAt(3)); //? l //! istenilen indeks teki karakteri döndürür.

console.log(str8.charAt()); //? Default değer 0 dır ve ilk karakteri döndüür.

console.log(str8.charAt(14)); //? Sondakini döndürür.

//!Length bir property (objenin değişkeni) dir yani özelliktir. Strıng ın karaktersayısını tutar.
console.log(str6.length); //? 27

//! String son karakteri için
console.log(str8.charAt(str6.length - 1)); //? Son karakteri verir. Burada bir çıkardık çünkü indeks 0' dan başlıyor.


//?---------------------------------------------------------

//?--------------------------
//** includes() */ case sensitive
//?--------------------------

//! Boolen (true,false) bir değer verir. Bizim istediğimiz strıng ı arar.

const word = "To be or not to be, that is the question";

console.log(word.includes("to be")); //? true içinde var.
console.log(word.includes("That")); //? false case sensitive bir dil.
console.log(word.includes("")); //? true çünkü strıng datalarda null ile saklanıyor yani içinde var.

console.log(word.includes("to be", 14)); //? false burada 14 den başla diyoruz aramaya.

console.log(word.includes("to be", 13)); //? true to be 13 üncü indekten başlıyor.

//! NOT: case insentive kullanmak icin str baslangicta kucuk veya
//! buyuk harfe cevirilerek arama yapilabilir.



//?---------------------------------------------------------

//?--------------------------
//** indexOf(), LastindexOf(), => case sensitive
//?--------------------------

const toBe = word.indexOf("or");
console.log(toBe);//? 6 çünkü arananın başlangıcı 6'ıncı indeks.

const be = word.indexOf("be"); 
console.log(be);//? 3

console.log(word.lastIndexOf("be")); //? En son bulduğu be karakterini bulur ve başlangıc indeks ini verir.

console.log(word.lastIndexOf("BE")); //? -1 Çünkü indeks sayısı negatif olamaz yani -1 olunca bulamadı diyoruz.



//?---------------------------------------------------------

//?--------------------------
//** search() => case sensitive
//?--------------------------

const buyukHarf = /[A-Z]/; //? Büyük harflerin indeksi diyoruz.
const nokta = /[.]/; //? Aralık belirtirken yada bunları bul  derken köşeli parantez içine karakter yazarız.
const virgul = /[,]/; //? regex 
console.log(word.search(buyukHarf)); //? ilk buyuk harfin indeksi 0
console.log(word.search(virgul)); //?  18
console.log(word.search(nokta)); //? -1


//* ----------------------------------------------------------
//* startsWidth() , endsWith() - case sensitive
//* ----------------------------------------------------------
let word2 = "Sen gulunce guller acar gul pembe!";

console.log(word2.startsWith("Sen" )); //? word2 Sen ile başlıyor.

console.log(word2.startsWith("gulunce")); //? false

console.log(word2.startsWith("gulunce", 4)); //? 4 üncü indeks ten başla kontrole diyoruz.

console.log(word2.endsWith("!", 4)); //? true 4 üncü indeksten sonra ! ile biten varmı.

console.log(word2.endsWith("acar", 23)); //? true



//* ----------------------------------------------------------
//*  replace(searchFor, replaceWith) --immutable
//* ----------------------------------------------------------
let oku = "Oku Baban gibi, saf olma";

console.log(oku.replace("saf olma", "akilli ol")); //? Burada orjinal korunur.
console.log(oku);

oku = oku.replace(/BASARILI/i, "Zengin") //? Buradaki i sen büyük küçük harfler olsada eşitse bul ve ilk olanı değiştir.



// let oku = "Oku Baban gibi, saf olma, saf olma";
// // console.log(oku.replace("saf olma", "basarili ol"));
// oku = oku.replace("saf olma", "basarili ol");
// // oku = oku.replace(/saf olma/gi, "basarili ol");
// console.log(oku);

// oku = oku.replace(/BASARILI/gi, "Zengin");
// console.log(oku);

//! NOT: replace metodu eger Regex ile aksi belirtilmiyorsa (g) sadece ilk buldugunu degistirir.



//* ----------------------------------------------------------
//*  replaceAll() --immutable
//* ----------------------------------------------------------
let degistir = "daglar daglar yol ver gecem..";
degistir = degistir.replaceAll("daglar", "Dağlar");
console.log(degistir);

//?Regex de kullanilabilir.
let degistir2 =
  "No woman, no cry" +
  " No woman, no cry, eh, yeah" +
  " Little darling, don't shed no tears" +
  " No woman, no cry, eh";

console.log(degistir2.replaceAll(/no/gi, "Hayir"));


//?* --------------------------------------------------*/
//*  slice(beginIndex[, endIndex])
//*  substring(beginIndex[, endIndex])
//*  substr (depreceated)
//* ----------------------------------------------------------


const veysel = "Uzun ince bir yoldayim yuruyorum gunduz gece..";

const sliced = veysel.slice(33); //? gunduz gece.. 33'den başla sonuna kadrını al.

console.log(sliced); 

console.log(veysel.slice(17,30)); //? dayim yuruyor


//! Not: slice - index alabilir son harf -1'dir Ama bunu sadece slice içinde kullanabiliyoruz.

console.log(veysel.slice(-10)); //? duz gece.. Bu örnekte çalışır.

console.log(veysel.slice(-23, -19)); //? yuru


console.log(veysel.substring(17,30));//? dayim yuruyo
console.log(veysel.substring(-10)); //? Bu methotda negatif indeks kullanılomaz.Çalışmaz.

//***  Hocanın yazdıkları */
 
// const veysel = "Uzun ince bir yoldayim yuruyorum gunduz gece..";

// const sliced = veysel.slice(33);
// console.log(sliced, typeof sliced); //? gunduz gece..

// console.log(veysel.slice(17, 30)); //? dayim yuruyor.
// console.log(veysel.slice(-10)); //? duz gece..
// console.log(veysel.slice(-23, -19)); //? yuru

// console.log(veysel.substring(17, 30)); //? dayim yuruyor
// //! negatif indeks substring ile kullanilamaz.
// console.log(veysel.substring(-10)); //? Uzun ince bir yoldayim yuruyorum gunduz gece..



//* ----------------------------------------------------------
//* split([sep [, limit] ])
//* ----------------------------------------------------------



const tarkan = "Gel gunduzle gece olalim";
const splited = tarkan.split(" ");
console.log(splited, typeof splited); //! Bosluklara göre ayirarak Array'e cevirdi.


const chars = tarkan.split("");
console.log(chars); //* null karakterine göre harfleri ayırarark bir char dizisi oluşturdu.


tarkan.split(" ").join("-") //? önce böler sonra birleştirir.join array methodu


//* ----------------------------------------------------------
//* trim();
//* ----------------------------------------------------------
const ramazan = "    Hoş geldin ya şehri Ramazan     ";
console.log(ramazan);
console.log(ramazan.length); // 36
console.log(ramazan.trim());
console.log(ramazan.trim().length); //27

//! ODEV1: tarkan string'indeki kelimelerin sayisini donduren
//! bir fonksiyon yaziniz.

let uzunluk = splited.length
console.log(uzunluk);



//! ODEV2:
//! ----------------------------------------------------------
// https://www.youtube.com/watch?v=b7vfp5G4brE

//// https://youtu.be/b7vfp5G4brE


let adress = "https://www.youtube.com/watch?v=b7vfp5G4brE";

adress = adress.replace("www.", "");

console.log(adress);

let first = adress.lastIndexOf(".");
let last = adress.indexOf("=") + 2;
let parça = adress.slice(first, last);
adress = adress.replace(parça, "");

let son = adress.indexOf("be");

console.log(son);

adress = adress.slice(0, son) + "." + adress.slice(son);

console.log(adress);



















































