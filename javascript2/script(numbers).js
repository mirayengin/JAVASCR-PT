// Number

let val;

val = 10;
console.log(val);
console.log(typeof val);


// ----------------
let val1;

val1 = "10";
console.log(val1);
console.log(typeof val1);

console.log(typeof Number(val1));

//---------------------------

let val2;

val2 = parseInt("20");
val2 = parseInt("20,5");
val2 = parseInt("20a"); // Sonuna sayı değeri olmayan bir karakter koyduğumuzda o sayı olmayan değeri dikkate almaz ve sayı kısmını bize display eder.
val2 = parseInt("20a2"); // Sayı olmayan karakterden sonra sayı olsada onu dikkate almaz.
console.log(val2); 
console.log(typeof val2);

//----------------

let val3;

val3 = parseFloat(10.5); // Sayılarda virgül değil nokta kullan
console.log(val3); 
console.log(typeof val3);

//Sayının bir number type a dönüştürülebilecek bir değer olup olmadığının kontrolü

let sayı, sayı1, sayı3;

sayı = isNaN("a10"); // True verirse yani bu değer NaN bir değer (sayıya çevrilemez demek)
sayı1 = isNaN("10swdervrv"); // ParseInt de bu sayı number type dönüşsede bu isNaN metodunda true olarak görünüyor.
sayı3 = isNaN("10"); // False verdi yani number bir değer
console.log("sayı:"+sayı);
console.log("sayı1: "+sayı1);
console.log("sayı3: "+sayı3);
console.log(typeof sayı);
console.log(typeof sayı1);
console.log(typeof sayı3);

// toPrecision methodu : Bu metod number bir değeri string olarak döndürür vede kaç karakterli olmasını istediimizde bize yardımcı olur.

var num ; 
num = 10.254893285;
console.log(num.toPrecision()); // Ayrıca seçtiğiimiz karakteren sonra beşten büyük number gelirse yuvarlama yapar.
console.log(num.toPrecision(2));
console.log(num.toPrecision(5));
console.log("tofixed :"+ num.toFixed(5)); //Bunun farkı bu noktadan sonraki basamak sayılarını beirlememizi sağlar.
console.log(typeof num.toPrecision());


//Math Objects

let nu;
nu = Math.PI; // Pi sayısını verir.
nu = Math.round(2.49); //Python daki method aynısı mantığı
console.log(nu);
nu = Math.round(2.5);
console.log(nu);

nu = Math.ceil(2.1); //Bu da sayının noktadan sonrası önemsiz ve yukarıya yuvarlar
console.log(nu);
nu = Math.ceil(2.6);
console.log(nu);

nu = Math.floor(2.9); // Bunda da sayının noktadan sonrası önemsiz ve asağıya yuvarlar hep.
console.log(nu);
nu = Math.floor(2.4);
console.log(nu);

nu = Math.sqrt(121);
console.log(nu);

nu = Math.pow(4,2);
console.log(nu);