// ! Array ler non-primitive bir datadır. Array adress leri stack tutulurken verinin kendisi heap te tutulur. Çünkü stack küçük bir alan dır fakat heap stack ten büyük bir alandır. Veriye ulaşırken array bir veriye stack teki adressten heapteki veriye ulaşıyoruz.


// ! Odev: prompt ile konsoldan bir sayi istenmeli (string veya number
// ! olarak) eger bu girilen sayi, dizi icerisinde bulunuyorsa indisi
// ! (string ve number olarak ayri) yazdirilmalidir. Eger bulunamadiysa
// ! Aranilan bulunamamistir yazidirilmalidir.
// !-----------------------------------------------------------

// * DİZİ TANIMLAMA

// *---------------------------
//? Diziler orderred dir. Ve immutable dır.
//! Dizi tanımlama köşeli parantezz ile olabilir;

const myArr = ["ali", 2, false, "erhan"]; //! seklinde olabilir ve yaygın kullanım budur.(array literal yöntemi)

//! Array lerde indexleme yapılabilir. İndexleme sıfırdan başlar ve eleman sayısının bir eksiğine kadar devam eder.

const list = ["erhan", "asli", "miray", "engin"];
console.log(list);
console.log(typeof list); //! bunu yazdırdığımızda prototype array cıkar bu array alt kümesinden oluşturulmuş demektir.

console.log(list[0]);
console.log(list[1]);
console.log(list[2]);
console.log(list[3]);

const empty = []; //! Bu şekilde boş dizide oluşturabilir.
console.log(empty);
console.log(typeof empty);

//! Array oluşturmanın diğer yolu (Object Consructer);

const list1 = new Array("erhan", "asli", "miray", "engin"); //! new ile Array yapma yolu

console.log(list1);
console.log(typeof list1);

 
//? NOT: Array lar (diziler) bir object tir.
//! Dizi isimleri çoğul kullanılır.


//*-----------------------------------------------------------

const names = new Array("erhan", "asli", "miray", "engin"); //! Burada drört elemanlı bir array oluşturdu.

const num = new Array(10); //? Burada on elemanlık bir boş dizi oluşturdu.Bu constructor ın bir özelliği( Burada on elemanlık veri tutulabilir. Yani saklama alanı oluşturma.Ama buraya number bir değer yazarsak bu alan ayırmayı yapar.)
console.log(num);


//! Array oluşturmanın diğer yolu (Array.of);

const datas = new Array(1, 2, 3); //? Bu şekilde de array oluşturabiliriz.
console.log(datas);

const place = new Array("Çanakkale"); //! object constructor dan farklı olarak tek elemanlı bir array oluşturabiliriz.
console.log(place);
console.log(typeof place);


//************************************************ */

//! DİZİDEN VERİ OKUMA-YAZMA(İNDEXLEME);


///? Diziden Veri Okuma

console.log(list[0]); //! Yukarıda tanımlanan list dizisinin 0 ıncı indeksini okuduk.
//? İndeks sayısı dizinin son indeks numaasından büyük yazarsak bize undefined verir.

console.log(list[list.length - 1]); //! Javascriptte negatif sayı ile indekleme yoktur.Bu üzden son elemanı yazdırırken önce eleman sayısını sonrada sıfırdan başladığı için indeks no'lar eksi 1 yaparız.


console.log(list.at(-1)); //! Bu at metoduyla negatif sayı ile indeksleme işlemi yapabiliyoruz. Burada son elemanı getirdi bize.

//? Yukarıdaki metod cooookkkk önemlidir.


//?Diziye Veri Yazma

// const list1 = new Array("erhan", "asli", "miray", "engin");

list[1] = "canım"; //* "asli" = "canım"  oldu.
console.log(list);

//? Akla gelen const ile atanan değerler değiştirilmez kuralı burada biraz esnedi. Çünkü object in stack teki adresi değişmedi sadece heap de tutulan verileri kısmi olarak değişti. Bu yüzden adress değişmediği için değişmediği için kısmi değişime izin verdi array lerde kural bu şekildedir.

//? fakat

// list = ["erhan"]; //! Burada hata verdi çünkü stack adreesi ve heap verileri bunu yapınca değişecektir. Stack veriye ulaşma adresi değişeceği için bu atamaya izin vermez.
console.log(list);


//? Bu yukarıdaki kural sadece const ile atama ile geçerlidir.

//! Dizideki elemanların değerini arttırma

const numbers = [1, 2, 3];
console.log(numbers);

numbers[numbers.length - 1]++;
console.log(numbers);

numbers[numbers.length - 1] += 1;
console.log(numbers);

numbers[numbers.length - 1]--;
console.log(numbers);

numbers[numbers.length - 1] -= 1;
console.log(numbers);

numbers[0]--;
console.log(numbers);

numbers[1] += 1;
console.log(numbers);

//? Görüldüğü gibi number dataların değerleri yukarıdaki gibi indeksleme ile istediğimiz sayı kadar arttırılabilir. Arttırma için yukarıdaki yöntemler kullanılır.

const numbers1 = [1, 2, 3, "erhan"]; 
console.log(numbers1);

numbers1[numbers1.length - 1] += "han";
console.log(numbers1);

numbers1[0] += "1"; //** Burada number data olmasına karşın eklenen strıng olduğu için string işlem baskın geldi ve concat edip sonuçta strıng değer çıktı.
console.log(numbers1);



const yaslar = [22, 44, 55];
const kisiler = ["Ahmet", "Can", 2022, 2022 - 1990, true, yaslar];

console.log(kisiler);

//? kisiler icerisindeki yaslar dizisinde bulunan 55 yasini konsola yazdiriniz.

const yas55 = kisiler[5][2];
console.log(yas55);

//? kisiler icerisindeki yaslar dizisinde bulunan 44 yasini bir eksiltiniz.
kisiler[5][1]--; //?43
console.log(kisiler);
console.log(yaslar);


//? ===========================================================
//?  DIZIYI DEGISTIREN (MUTATOR) METOTLAR
//? ===========================================================

const arabalar = ["BMW", "Mercedes", "Fiat", "Anadol"];

//** pop() son elemanı siler ve sildigi elemani dondurur.
const silinen = arabalar.pop(); //! İçine bir değer yazılmaz çünkü son değeri siler ve silineni bize gösterir.
console.log(arabalar, silinen);

//* push() dizinin sonuna eleman ekler ve dizinin son eleman sayisini dondurur.

const n = arabalar.push("Citroen"); //! Eklemek istenen değer parantez içine yazılır ve ekledikten sonra yeni dizinin eklenmiş eleman sayısını döndürür.
console.log(arabalar, n);

//* unshift dizinin 0. indeksine eleman ekler ve dizinin son eleman sayisini dondurur.
const n1 = arabalar.unshift("Audi"); //! Dizinin başına eleman ekler ve yeni dizinin eleman sayısını döndürür.
console.log(arabalar, n1);

//* shift dizinin 0. indeks elemanini siler ve silenen elemani dondurur
const audi = arabalar.shift(); //! Baştaki elemanı siler ve silineni döndürür.
console.log(arabalar, audi);

//* splice()
//? 1.parametre: eklenecek indis numarasi
//? 2.parametre: 0 ise araya ekleme, 1 ise uzerine yazma
//? 3.parametre: yeni eklenecek veri
arabalar.splice(1, 0, "Passat"); //! Burada 1.inci indekse passat değerini ekler ve kaydırır diğer elemanları.
console.log(arabalar);

arabalar.splice(3, 1, "Honda", "Toyota");
console.log(arabalar);

//* Dizinin tamamini ters siraya cevirir.
arabalar.reverse();
console.log(arabalar);

//* sort() Diziyi alfabetik olarak siralar.
// isimler.sort();
// console.log(isimler);

//! Alfabetik siraladigi icin dogru sonuc cikmayabilir.
const sayilar = [2, 111, 3, 22, 1, 11, 5, 7, 6];
sayilar.sort();
console.log(sayilar);

//* sort metodu diziyi iterasyona ugratir ve parametre olark aldigi arrow
//* fonksiyonunu dizinin her bir elemanina uygular. Bu sayede kucuk sayilar
//* ile buyuk sayilari yer degistirerek siralama islemini gerceklestirir.
sayilar.sort((a, b) => a - b);
console.log(sayilar);

//* fill()
const array1 = [1, 2, 3, 4];
array1.fill(0);
console.log(array1);
array1.fill(0)
array1.fill(1, 2, 4);
console.log(array1);
array1.fill(-1, 1); //* 1. eleman ve sonrasini -1 yap
console.log(array1);



//? ===========================================================
//?  DIZI ERISIM METOTLARI
//? ===========================================================
const sayilar1 = [3, 5, 2, "2", "uc", 2, "3", "bes", "5"];

//* includes()
//*-----------------------------------------------------------
console.log(sayilar1.includes(5)); //? true
console.log(sayilar1.includes("5")); //? false

//* indexOf(), lastIndexOf();
//*-----------------------------------------------------------
//* ilk eslesen indeksi dondurur.

console.log(sayilar1.indexOf(2)); //? 2
console.log(sayilar1.lastIndexOf(2)); //? 5
console.log(sayilar1.lastIndexOf(4)); //? -1

//! Odev: prompt ile konsoldan bir sayi istenmeli (string veya number
//! olarak) eger bu girilen sayi, dizi icerisinde bulunuyorsa indisi
//! (string ve number olarak ayri) yazdirilmalidir. Eger bulunamadiysa
//! Aranilan bulunamamistir yazidirilmalidir.

const numberB = [1, "bir", 2, "iki", 3, "üç", 4, "dört", 5, "beş", 6, "altı", 7, "yedi", 8, "sekiz", 9, "dokuz"];

let sayiGir = prompt("Enter a figure(write or number").toLowerCase();

let indeks = numberB.includes(sayiGir);

if (indeks != -1) {

    console.log(numberB.indexOf(sayiGir));

    if (sayiGir === Number(sayiGir)) {
        console.log(`${sayiGir} Number bir değerdir. İndenksi ${indeks} dır.`);
    } else if (sayiGir === String(sayiGir)) {
        console.log(`${sayiGir} String bir değerdir.İndenksi ${indeks} dır.`);
    }
        
    } else {
  console.log("Aranılan bulunamamıştır.");
}

//!-----------------------------------------------------------

//* join()
//*-----------------------------------------------------------
//? join, dizinin elamanlari birlestirip string hale cevirir.
console.log(sayilar1.join(" "));
console.log(sayilar1.join()); // 3,5...
console.log(sayilar1);

//* toString()
//*-----------------------------------------------------------
//? toString fonksiyonu sadece dizinin elemanlarinin aralarina
//? (virgul) koyarak birlestirir ve string yapar.
console.log(sayilar1.toString());

//* slice()
//*-----------------------------------------------------------
const arabalar1 = ["BMW", "Mercedes", "Fiat", "Anadol"];
const yeniArabalar = arabalar1.slice(2);
console.log(yeniArabalar, arabalar1);

const yeniArabalar1 = arabalar1.slice(1, 3);
console.log(yeniArabalar1);

//* concat()
//*-----------------------------------------------------------
const yazilar = ["Bugun", "hava", "cok", "guzel"];
const numbersArr = [1, 2, 5, 7];
const combinedArr = yazilar.concat(
  true,
  numbersArr,
  ["aslinda", "cok", "sicak"],
  [["x", "y"]]
);
console.log(combinedArr);

//* every()
//*-----------------------------------------------------------
//? Tum diziyi itere eder ve aldigi callback fonksiyonuna gore
//? test gerceklestirir.Tum elemanlar icin test basarili ise
//? true aksi takdirde false deger dondurur.

const yasArray = [18, 22, 78, 34, 78, 79, 15];
const check = yasArray.every((yas) => yas >= 18);
check
  ? console.log("Dizideki herkesin yasi 18'den buyuktur")
  : console.log("Dizide 18 yas alti var");

//* some()
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna gore test gerceklestirir.
//? En az bir eleman icin bile test basarili ise true aksi
//? takdirde false deger dondurur.

const buyuk80 = yasArray.some((y) => y >= 80);
console.log(buyuk80); //? false

//* find(), findLast()
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna gore test gerceklestirir.
//? Kosulu saglayan ilk dizi elemaninin dondurur.
//? Eger hic bir eleman kosulu saglamazsa undefined dondurur.

//?Ornek: Yasi 30 dan buyuk olan ilk elemani yazdirin
const yasIlk30 = yasArray.find((yas) => yas >= 30);
const yasSon30 = yasArray.findLast((yas) => yas >= 30);
console.log(yasIlk30, yasSon30);

//* findIndex()
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna gore test gerceklestirir.
//? Kosulu saglayan ilk dizi elemaninin indeksini dondurur.
//? Eger hic bir eleman kosulu saglamazsa -1 dondurur.

//?Ornek: Yasi 30 dan buyuk olan ilk elemanin indexini yazdirin

const foundIndex = yasArray.findIndex((yas) => yas >= 30);
console.log(foundIndex);