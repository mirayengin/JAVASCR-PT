let num1 = 15.123566845414;

// Toplamlarda üç basamak olsun
console.log(num1.toPrecision(3)); // Üç basmak yapar.

// Ondalıklı sayılarda virgülden sonrsı üç basamak olsun
console.log(num1.toFixed(3));

// En yakın sayıya yuvarla

console.log(Math.round(num1));
console.log(Math.round(15.6256485));



// Aşağıya yuvarla
console.log(Math.floor(num1));

// Yukarıya yuvarla
console.log(Math.ceil(num1));

// 1,2,10,56,20 saylarının en küçüğü ve en büyüğü
console.log(Math.min(1,2,10,56,20));
console.log(Math.max(1,2,10,56,20));


// Sayı aralığını kullanıcının belirlediği rastgele bir sayı

let min = 50;
let max = 100;

console.log(min+Math.random()*max); // Burada sadece max ı yazsaydık 0 dan 100 e giderdi ama minden başla ve üzerine koy dedik random metoduyla üretilen sayıyı o yüzden 150 ye kadar gider.
console.log(min+Math.random()*(max-min)); // 50 ile 100 arası sayı üretir.

console.log(Math.floor(min+Math.random()*(max-min))); // Burada da sayıyı aşağı yuvarladık

// Bir personelin yaptığı mesai'ye göre aldığı maaşı hesaplayınız

// brüt_maaş = 3700
// brüt_mesai = 10.3

// Ağustos ayında mesai toplamı 42 saat ise brüt maaş nedir?
// Brüt maaş üzerinden toplam kesinti oranı %25 ise alınacak toplam net maaş nedir?

let brüt_maaş = 3700, brüt_mesai = 10.3;
toplam_brüt_maaş = 3700 + 10.3 * 42
console.log(`Ìşcinin brüt maaşı ${toplam_brüt_maaş}`);
console.log(`İşcinin net maaşı ${(toplam_brüt_maaş - (toplam_brüt_maaş*0.25)).toFixed(2)}`);
