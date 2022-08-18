// backtick kullanımı
console.log("hello"+"world");
console.log("hello "+"world");
console.log("hello"+" world");
console.log("hello"+" "+ "world");
console.log("Buraya nasıl yazı istersem öyle yazıyorum");

let myName="erhan";
console.log("merhaba "+ myName+" hoşgeldiniz.");
console.log(`merhaba ${myName} hoşgeldiniz`);

let soyad= "firat";
console.log(`Benim soyadım ${soyad}, adım ${myName}'dır.`);

console.log(myName.length);
console.log("lenght ile herhangibir string datanın uzunluğu bulunur.".length);


// kilometreyi mile cevir giriş almadan
// 1 mil = 1.609 kmdir.
let mil=44, km=1.609;
console.log(mil);
console.log(`mil olarak km*mil=${(mil).toFixed(2)}dir`);

mil = 81;
console.log(mil);
console.log(`${mil} mil : ${mil*1.609} kilometredir.`);

//todo soru-1 in-class

// let num1, num2, num3;
// num1 = +prompt("bir sayı gir"); //Number(prompt("sayı gir")) aynı şeyler
// num2 = parseInt(prompt("bir sayı gir"));

// num3 = +prompt("bir sayı gir", 5); // virgülden sonra bir sayı yazılırsa bu sayı default olarak bize giriş yaparken görünür biz istersek değiştiririz.

// console.log(`${num1} * ${num2} = ${num1*num2}`);
// console.log(`${num1} / ${num2} = ${num1/num2}`);

//todo dikdörtgenin alanı bul

// let k1,k2,k3,k4;
// k1 = +prompt("bir sayı gir");
// k2 = +prompt("bir sayı gir");
// // k3 = +prompt("bir sayı gir");
// // k3 = +prompt("bir sayı gir");


// console.log(`Dikdörtgenin alanı ${k1*k2}, Dikdörtgenin çevresi ${(k1+k2)*2} `);

//todo sayılar tek mi çift mi kontrol et

let Number = 11;

if (Number%2 === 0 ) {
    console.log(`${Number} çift sayıdır.`);
}else {
    console.log(`${Number} tek sayıdır.`)
}

if (Number%2 !== 0 ) {
    console.log(`${Number} tek sayıdır.`);
}else {
    console.log(`${Number} çift sayıdır.`)
}

//kullanıcıdan alınan sayı 3 bölünür mü

// let sayı4 = parseInt(prompt("sayı giriniz"));

// if (sayı4 % 3 === 0) {
//     console.log(`${sayı4} 3 e tam bölünür`);
// }else{
//     console.log(`${sayı4} 3 e tam bölünmez.`);
// }

//girilen sayı pozitfmi negatif mi yoksa sıfır mı

// let sayı5 = +prompt("sayı gir:");

// if (sayı5 > 0) {
//     console.log(`${sayı5} pozitif sayıdır`);
// }else if (sayı5 === 0) {
//     console.log(`${sayı5} sıfıra eşittir.`);
// }else{
//     console.log(`${sayı5} negtivif bir sayıdır.`);
// }

//SORU 

// const name1 = "erhan";
// let istenen;

// istenen = prompt("isim giriniz");
// istenen = istenen.toLowerCase()

// if (name1 === istenen) {
//     console.log(`Hello ${name1} password is : 123`);
// }else {
//     console.log(`Sorry ${name1} see you latter.`);
// }

// if (name1 === istenen) {
//     console.log(`Hello ${name1} password is : 123`);
// }else {
//     console.log(`Sorry ${name1} see you latter.`);
// }

// girilen notun harflendirmesi

let not = +prompt("notu giriniz");

if (not > 89) {
    if (not > 94) {
        console.log(`${not} A+`);
    }else{
        console.log(`${not} A`);
    }
}else if (79 < not && not < 90) {
    if (84 < not < 90) {
        console.log(`${not} B+`);
    }else {
        console.log(`${not} B`);
    }
}else {
    console.log(`${not} 79 dan aşağıya`);
}

let not = +prompt('not giriniz')
if (not >= 90) {
    if (not >= 95 ) {
        console.log('+A');
        alert('A+');
    }else{console.log('A');}
}else if (not>=80) {
    if (not >= 85 ) {
        console.log('+B');
        alert('B+');
    }else{console.log('B');}
}else {
    console.log('Zayıf');
}

// girilen sınav notunun karşılığını bulan kodu yazınız? 
//!(iç içe if/else if kullanarak çözün)
// 95 ve üstü A+
// 90-94  A
// 85-89  B+
// 80-84  B
// 79 ve aşağısı -
let exam = parseInt(prompt("Enter your exam note:"));
if(exam >=90 ){
    if (exam >=95){
        score = "A+";
    }else {
        score = "A";
    }
}else if (exam >= 80) {
    if (exam >=85){
        score = "B+";
    }else{
        score = "B";
    }
}else {
    score = "C-";
}
console.log(`İf ile --> Your score is ${score}`);
switch(true){
    case (exam>=95) : score = "A+"; break;
    case (exam>=90) : score = "A"; break;
    case (exam>=85) : score = "B+"; break; // Bu breajk olmazsa ise şart sağlansa bile break olmadığı için snrakine geçer ve break varsa onu yazdırır
    case (exam>=80) : score = "B"; break;
    default : score = "B-";
}
console.log(`Switch case --> Your score is ${score}`);