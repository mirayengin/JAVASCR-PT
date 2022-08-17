// * ============================================
// *            DONGULER(LOOPS)- WHILE
// * ============================================

console.log("****** WHILE *******");

//? ORNEK: Kullanicidan 0-100 arasinda bir not isteyen ve girilen not
//? 0-100'den farkli ise Kullaciniyi uyararak yeniden 0-100 arasinda
//? not girmeye zorlayan kodu while dongusu ile yaziniz.

// const score = Number(prompt("0-100 arasında not giriniz: "));

// if (score < 0 || score> 100) {
//     alert("Not 0-100 arasında olmalıdır.");
// }else {
//     console.log(`${score} budur.`);
// }



// let score = Number(prompt("0-100 arasında not giriniz: "));

// while (score < 0 || score> 100) {
//     console.log("Not 0-100 arasında olmalıdır.");
//     score = Number(prompt("0-100 arasında not giriniz: "));
// }

// console.log("Girdiğiniz not :", score);


// * ============================================
// *            DONGULER(LOOPS)- DO WHILE
// * ============================================

// let not1;
// do {
//   not1 = +prompt("Lutfen 0-100 arasinda bir not girniz.");
//   if (not1 < 0 || not1 > 100) {
//     console.log("Not 0-100 arasinda olmaldir.");
//   }
// } while (not1 < 0 || not1 > 100);

// console.log("Giridiginiz Not:", not1);




// ÖDEV: Klavyeden Q veya q karakteri girilene kadar not girişi yapan ve bu karakterlerden birisi girildiğinde O ana kadar girilen tüm notların ortalamasını hesaplayarak konsola ortalamayı bastıran uygulamayı yazınız.


/*********** TAHMİN OYUNU ************/

//* Program 0*100 arasında rasgele bir sayı tutacak ve kullanıcının bu sayıyı 5 kere(hak) de bilmesini isteyecektir. Her yanlışta hakkını bir düşürecek ve ARTTIR/AZALT diyerek kullanıcıyı yönlendirecektir.Sonuç olarak kullanıcının hakkı 0 olursa "Üzgünüz bilemediniz" eğer bildi ise "Tebrikler ... denemede bildiniz" yazacaktır.

//* 1- hak =5
//* 2- Raskele sayı tut (0-100)
//* 3- Kullanıcan tahmin iste (tahmın)
//* 4- hak=hak-1
//* 5- eğer (tahmin =?rasgele)
//*        print(Tebrikler Bildiniz)
//*    değilse (tahmin < rasgele)
//*        print(Arttır)
//*    değilse(tahmin > rastgele)
//*        print(Azalt)
//* 6- eğer (hak > 0 )
//*       goto stage-3
//*   değilse
//*       print(üzgünüz)

let hak = 5;
const rastgele = Math.round(0+Math.random()*100);
console.log(rastgele);
let tahmin;

do {
    let tahmin = Number(prompt("0-100 arasında bir tahmin giriniz: "));
    hak -= 1;
    if ( rastgele === tahmin) {
        console.log(`Tebrikler ${5-hak} kerede bildiniz.`);
        break;
    }else if (tahmin > rastgele){
        console.log("Azalt");
    }else {
        console.log("Arttır");
        }
    }

while (hak > 0);

if( rastgele === tahmin) {
    console.log("Üzgünüz oyunu kaybettiniz.");
}


















































































































































