// OPERATÖRLER
let val;
const a=10;
const b= 5;
let c = 3;
let d=5;

console.log(val);
console.log(typeof val);

//Aritmatik Operatörler

val = a+b;
val = a-b;
val = a * b;
val = a % b ;
val = a / b ;
val = a++;  // Burada sabit değeri değiştirmeye çalışıyoruz o yüzden hata verecektir.
val = c++; // Bu önce val in içine c yi at bir arttır demek.
val = c--;
val = ++c; // Burada önce (c) yi bir arttır sonra val in içine at.
val = --c;

//ATAMA OPERATÖRLERİ
 val = a;
 val +=a; // val = val + a;
 val -=a; // val = val - a;
 val *=a; // val = val * a;
 val /=a; // val = val / a;
 val %=a; // val = val % a;

 //KARŞILAŞTIRMA OPERATÖRLERİ
 val = a==b; // Bu iki tane eşittirde sadece değer kontrolü yapılır.
 val = b == d ;
 val = b===d; // Burada ise değer ve type kontrolü yapılır.

 val = 5=='5'; // değer kontrolü olduğu için sadece true verir.
 val = 5==='5'; // Bunu yaparsak değer ve type kontrolü yapıldığı için false verir.
 val = 5 !== '5' // Değer ve type ı eşit mi kontrolü yapmak istersek bu şekilde.
 val = 5 != '5' // Değer olarak eşitmi kontrolü için bunu yaparız.
 val = a >= b ;
 val = a <= b ;

 //MANTIKSAL OPERATÖRLER
    // AND &&

    val = (a>b) && (c>d);

    // OR ||

    val = (a>b) || (c<d); 

    // NOT !

    val = !(a>b); // (a>b) true olursa false eğer false olursa true verir.
    