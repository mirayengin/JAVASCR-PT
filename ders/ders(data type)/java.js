console.log("App ls Running");

// var a = 5;
// console.log(a);

// {
//     // var a=3;
//     console.log(a);
// }

// console.log(a);



// let a = 5;
// console.log(a);

// {
//     // let a=3; let ile olunca sadece bu süslü parantezlerin içinde değeri geçerli olur.
//     a=3
//     console.log(a);
// }

// console.log(a);


// console.log(typeof 0);
// console.log(typeof 3.14);
// console.log(typeof "hello");
// console.log(typeof 8>9);

// let b = prompt("içine birsey giriniz") // Javascript input yeri
// console.log(typeof b);

// let b = +prompt("içine birsey giriniz"); // prompt un başına + koyarsak number yapar rakam girersek
// console.log(typeof b);

// console.log(typeof 42);
// console.log(typeof typeof 42); // Strimg verdi(typeof "number") gibi oluyor çünkü

// let age;
// console.log(age);

// console.log(UserName);

// var UserName="erhan" //Bunu yaparsak undefined olur

// console.log("Hello");

// var ile bir atama yapınca stack içinde bir yer tutuyor her zaman ve çağırılma sıralarını bekliyor bu istenen bir durum değil yazılan programın yavaşlamasına neden olur. Yer tutuğu için.

// let c = null; //type object tir
// console.log(typeof c);

// let d = undefined;
// console.log(d);


/*biz bir değişkene bilerek kasıtlı olarak yok değeri vermek istiyorsak "null" kullanabiliriz.
değeri verilmemiş değişkenlere bilerek kasıtlı olarak "undefined" KULLNANMAYINIZ */


// console.log(null + 3); // sıfır değeri var gibi kabul edilir.
// console.log(undefined + 3); // NaN sonuçu verir çünkü hiçbir değeri yoktur.

// NaN == NaN; // false verir
// NaN === NaN; //false verir


// let x;
// do {
//     x = prompt("enter a number");

// }while ( isNaN(x)); // isNaN rakam olursa hepsi False verir ve döngü sona erer sonra yazdırır.

// console.log(x, x*x);


// let x = 456789987987654;
// let y = 1234568987899654687845485; // on beş basamktan sonrası için doğruluk vermiyor.
// console.log(x);
// console.log(y);


// let z = 0.12345678998745632;
// let zz = 0.123456789987456321; // ondalıkta onyedi basamağa kadar doğruluk veriryor

// console.log(z);
// console.log(zz);

// let g = 0.1+0.2;
// console.log(g);
// console.log(g.toFixed(2)); // burada string olur data type Tofixed den dolayı
// console.log(+g.toFixed(2)); // Artı koyarsak number olur data type ı yine

// console.log(typeof (g.toFixed(2)));
// console.log(typeof (+g.toFixed(2)));

// let h = 1_000_000_000; // Böyle yazılabilir.


// (``) bu altgr + virgül le oluyor

// let userName = `Musa`;
// console.log("Merhaba", userName);

// console.log(`Merhaba ${userName}`); // Python f metoduna benziyor bunu (``) tırnakta yapabiliyoruz. Bu tırnaklar değilde cift ve tek tırnağa alırsak normal normal string değer olur.

// console.log(`2+3 = ${2+3}`);


// Boolean("Hello World");
// Boolean(5);
// Boolean(-5);
// Boolean("false");
// Boolean('0');
// Boolean(3.14 + 8);   //All of these values return true
// Boolean("");
// Boolean(0);
// Boolean(-0);
// Boolean(null);
// let x;
// Boolean(x);   //All of these values return false



// const myCar = {
//     make : 'ford',
//     model : 'Mustang',
//     year : 1965,
//     color : 'Black'
//   }

//   console.log(myCar);

//   myCar.color = 'green'
//   console.log(myCar);

// //   myCar = 'Ford' // Bunda hata verir.const ile belirtilmiş.

// myCar.sunRoof = false; // Ekleme yaptık object te
// console.log(myCar);


// myCar.age = function (current) {
//     console.log(current - this.year);
// }

// myCar.age(2022);





