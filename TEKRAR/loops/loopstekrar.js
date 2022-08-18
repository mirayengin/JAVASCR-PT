// 0-10 arası sayıların toplamını veren kod yazınız

// let num = Number(prompt("Bir sayı giriniz: "));
// let total = 0;

// for(let i=0; i<=num;i++) {
//     total += i;
// }

// console.log(`${num}'a kadar olan sayıların toplamı:${total}`);    


//? Ornek: 0-100 Arasinda 10 adet rasgele sayi ureten kodu
//? for dongusu ile yaziniz..

// ÖNCE KAÇ SAYI İSTİYORSAK ONU İSTEYECEZ
//İSTENİLEN ARALIK BELİRLENECEK

// let miktar = Number(prompt("İstenilen sayı miktarını giriniz: "));
// for(let i=1; i<=miktar;i++) {
//     creat_number = Math.round(0+Math.random()*100);
//     console.log(`Creat number: ${creat_number}`);
// }



//? ÖRNEK: Girilen bir sayinin Asal olup olmadigini yazdiran kodu
//? for dongulerini kullanarak yaziniz.
// let control_number = Number(prompt("Bir sayı giriniz: "));
// let asal=true;

// if(control_number < 2) {
//     console.log("Girilen sayı ikiden küçük olmamalı.");
// }else {
//     for(let i=2;i<control_number;i++){
//         if(control_number % i === 0 ) {
//             asal=false;
//         }
//     }
// }

// const result = asal === true ?  "ASALDIR" : "ASAL DEĞİLDİR";
// console.log(`${control_number} : ${result}`);

// const num = Number(prompt("bir sayı giriniz"));
// for (let i = 2; i < num; i++) {
//   if (num % i === 0) {
//     console.log(`${num} asalsayı değildir.`);
//     break;
//   } else {
//     console.log(`${num} asalsayıdır.`);
//   }
// }

//? ORNEK: Kullanicidan 0-100 arasinda bir not isteyen ve girilen not
//? 0-100'den farkli ise Kullaciniyi uyararak yeniden 0-100 arasinda
//? not girmeye zorlayan kodu while dongusu ile yaziniz.

// let score ;
// let score_adeti = Number(prompt("Score adetini giriniz: "));
// let girilen_score = 0;
// do {
//     score = Number(prompt("Not giriniz: "));
//     if(score >= 0 && score <= 100){
//         girilen_score += 1
//         console.log(`Girilen not ${score} dır. Not kabul edildi.`);
//     }else {
//         console.log("0-100 arasında not giriniz.");
//     }

//     }
    
// while(girilen_score < score_adeti)



// let score_adeti = Number(prompt("Not sayısını giriniz: "));
// let score = Number(prompt("Notu giriniz: "));
// let girilen_score = 0;

// while(score_adeti >= girilen_score) {
//     for(let)
// }


//* Program 0*100 arasında rasgele bir sayı tutacak ve kullanıcının bu sayıyı 5 kere(hak) de bilmesini isteyecektir. Her yanlışta hakkını bir düşürecek ve ARTTIR/AZALT diyerek kullanıcıyı yönlendirecektir.Sonuç olarak kullanıcının hakkı 0 olursa "Üzgünüz bilemediniz" eğer bildi ise "Tebrikler ... denemede bildiniz" yazacaktır.

// let hak = 5;
// let tahmin;
// let tahmin_sayısı = 0;
// const random_number = Math.round(0+Math.random()*100);
// console.log(random_number);

// do {
//     tahmin = Number(prompt("Sayı giriniz: "))
//     tahmin_sayısı += 1;
//     if(random_number === tahmin) {
//         console.log(`${tahmin_sayısı} kere bildiniz.`);
//         break;
//     }else if(hak === tahmin_sayısı){
//         console.log("For you Game over!");
//     }else{
//         console.log("Üzülme başarabilirsin.Tekrar dene");
//     }
// }while(hak > tahmin_sayısı);




//* Program 0*100 arasında rasgele bir sayı tutacak ve kullanıcının bu sayıyı 5 kere(hak) de bilmesini isteyecektir. Her yanlışta hakkını bir düşürecek ve ARTTIR/AZALT diyerek kullanıcıyı yönlendirecektir.Sonuç olarak kullanıcının hakkı 0 olursa "Üzgünüz bilemediniz" eğer bildi ise "Tebrikler ... denemede bildiniz" yazacaktır.

// let hak = 5;
// const rastgele = Math.round(0+Math.random()*100);
// console.log(rastgele);
// let tahmin;
// let istek = true;


// while(istek){
// do {
//     let tahmin = Number(prompt("0-100 arasında bir tahmin giriniz: "));
//     hak -= 1;
//     if ( rastgele === tahmin) {
//         console.log(`Tebrikler ${5-hak} kerede bildiniz.`);
//         break;
//     }else if (tahmin > rastgele){
//         console.log("Azalt");
//     }else{
//         console.log("Arttır");
//     }   
    
// }
// while (hak>0);

// if( hak == 0) {
//     console.log("Üzgünüz oyunu kaybettiniz.");
//     console.log("Tekrar oynamak istersen evet veya hayır diyebilirsin");
// }
// let choose = prompt("Evet veya Hayır yazınız").toLowerCase();
// console.log(choose);
// if(choose == "evet"){
//     hak = 5;
//     istek = true;
// }else{
//     istek = false;
//     console.log("Oyun için teşekkürler");
// }   
// }




// ÖDEV: Klavyeden Q veya q karakteri girilene kadar not girişi yapan ve bu karakterlerden birisi girildiğinde O ana kadar girilen tüm notların ortalamasını hesaplayarak konsola ortalamayı bastıran uygulamayı yazınız.

// let sistemden_çıkış1 = "Q", sistemden_çıkış = "q";
// let Enter_grade = 0;
// let grade_total = 0;


// do{
//     let grade = prompt("Notları giriniz: ");
//     if(Number(grade) >= 0 && Number(grade) <= 100){
//         Enter_grade += 1;
//         grade_total += Number(grade);
//         console.log(`Girilen ${Enter_grade}üncü not olan ${grade} kabul edildi.`);
//         console.log(grade_total);
//     }else if(grade === "Q" || grade === "q"){
//         console.log("Not girme işlemi bitmiştir.");
//         console.log(`Girilen notların ortalaması ${grade_total/Enter_grade}dır.`);
//         break;
//     }else{
//         console.log("Girilen not 0-100 arasında olmalıdır.");
//     }

// }while(true)





































































































