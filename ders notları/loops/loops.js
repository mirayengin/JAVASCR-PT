// For döngülerinde const ile atama yapılmaz çünkü değiştirilmezler


// const n = Number(prompt("bir sayı giriniz: "));
// let toplam = 0;
// for(let i = 1; i < n+1; i++){
//     toplam += i
// }

// console.log("SONUÇ :", toplam);


//? Ornek: 0-100 Arasinda 10 adet rasgele sayi ureten kodu
//? for dongusu ile yaziniz..

// let min = 0, max = 100;
// istenilen_sayı = Number(prompt("kaç sayı istiyorsunuz: "));

// for (let i=0; i<istenilen_sayı; i++) {

//     console.log(Math.round(min+Math.random()*(max-min)));
// }

//* NOT:
//* Math.floor() =>surekli asagiya yuvarlar
//* Math.ceil() =>sürekli yukariya yuvarlar
//* Math.round() => degerine gore yuvarlar.
//* Math.trunc() => kesirli sayinin tam kismini alir.


//? ÖRNEK: Girilen bir sayinin Asal olup olmadigini yazdiran kodu
//? for dongulerini kullanarak yaziniz.

// const num1 = Number(prompt("pozitif bir sayı giriniz: "));
// let asal = true

// if (num1 <=1) {
//     alert("num1 1'den büyük olmalıdır.")
// }else {
//     for(let i=2; i<num1; i++) {
//         if(num1%i === 0){
//             asal = false;
//             break;
//         }
//     }
// }

// const result = asal === true ?  "ASALDIR" : "ASAL DEĞİLDİR";
// console.log(`${num1} : ${result}`);



// const num = Number(prompt("bir sayı giriniz"));
// for(let i=2; i<num; i++){
//     if(num % i ===0){
//         console.log(`${num} asalsayı değildir.`);
//     }else {
//         console.log(`${num} asalsayıdır.`);
//     }
// }




// let sayi;
// let sonuc = true;
// sayi < 2;
// sayi = prompt("Lütfen bir sayı giriniz.");

// for(let i = 2; i < sayi; i++){
//     if(sayi%i == 0){
//         sonuc = false;
//         break;
//     }

// if(sonuc) {
//     alert(sayi + " asal sayıdır!")
// } else{
//     alert(sayi + " asal sayı değildir!")
// }


// let n = +prompt(“bir sayı giriniz”);
// for(let i;i<=n-1;i++)
// {if(n mod i==0)consol.log{‘${n} asal bir sayı değildir’}
// {if(n mod i!=0)consol.log{‘${n} asal bir sayıdır’}




/******************** WHİLE ******************* */










