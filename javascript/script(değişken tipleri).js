// DEĞİŞKEN TİPLERİ


// PRİMİTİVE TYPES


    // 1- STRİNG

    let firstname='Erhan'

    console.log(typeof firstname);

    // 2- NUMBER

    let age=20;
    let money= 100.5;

    console.log(typeof age);
    console.log(typeof money);
    /* Burada ondalıklı ve tam sayılar number type olarak görünür.*/

    // 3-BOOLEAN

    let isActive = false;
    console.log(typeof isActive); // Bunun type ı boolean dır.

    // NULL
    let job=null; // Bu atama job değişkeninin bir değeri olmadığını göstermek için kullanılır.

    console.log(typeof null);

    // UNDEFİNED
    let car;
    console.log(typeof car); // type undefined olarak bize verecektir.


// REFERENCE TYPES - OBJECTS

    //ARRAY

    let names=['erhan', 'aslı'];

    console.log(typeof names); // TYPES I ARRAY OLARAK GÖRÜNÜR.
    console.log(names[0];) // Buradaki işlem indeksleme.
    
    // OBJECT
    let address= {city:'Kocaeli', country:'Türkiye'} 
    console.log(typeof address);

    //FUNCTİON

    var calculateAge = function(){
        return 0;
    };

    console.log(typeof calculateAge); // type of function olarak görürüz.

    
    // notlar
    let isim = "erhan";
    console.log(isim); // Burada ise browser ın console kısmında çıkar.

    document.write(isim); // Bunu yaptığımızda html dosyasının sanki body kısmına yazılmış gibi oluyor.

    let x = "bolu" + 11 + 7;
    console.log(x); // Burada strıng ifade olarak hepsini algılar ve (bolu117) çıktısı verir.

    let  a = 11e-7; // başına 7 sıfır koy demek istedik.
    let b = 1e+9 // sonuna 9 sıfır koy.