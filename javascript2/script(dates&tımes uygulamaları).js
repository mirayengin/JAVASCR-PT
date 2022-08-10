let day, mounth, year, time ;
time = new Date();

console.log(time);

console.log(time.getTime());
console.log(time.getFullYear());
console.log(time.getDay());
console.log(time.getMonth());
// şimdiki tarihin gün, ay , yılını yazdırdık.


let time1, hour;

time1 = new Date().getFullYear();
hour = new Date().getHours();

console.log(time1);
console.log(hour);

// burada tarih ve saat oluşturduk.



var dt = new Date('07/29/2022'), dt2 = new Date('07/29/2022 14:50:');

console.log(dt);
console.log(dt2);

var dtb = new Date(2010,06,28,14,50); // bununlada aynı objeyi oluşturabiliriz.
console.log(dtb);
// burada bir zaman ve saatli object oluşturduk.


// 1/1/1990 bir gün öncesi bulunuz.

var dtc = new Date('1/1/1990');

console.log(dtc);

var dayof = dtc.getDate(); // burada detdate metoduyla number type yaptık sonrada işlemimizi yaptık.
console.log(typeof dayof)
dtc.setDate(dayof-1); // set date ilede günden bir cıkardık.
console.log(dtc);


// iki tarih arasında geçen süeyi bulunuz.

let history1 = new Date('6/29/2022'), history2 = new Date('1/12/1991');
console.log(history1);
console.log(history2);

let milisecond = history1 - history2; //

console.log('milisecond :'+milisecond);
console.log(typeof milisecond);

let saniye = milisecond / 1000 ;
console.log('saniye :'+saniye);
console.log(typeof saniye);

let dakika = saniye / 60 ;
console.log('dakika :'+dakika);
console.log(typeof dakika);


let saat = dakika / 60 ;
console.log('saat :'+saat);
console.log(typeof saat);


let gun = saat / 24 ;
console.log('gun :'+gun);
console.log(typeof gun);

let years = gun / 365 ;
console.log('years :'+years);
console.log(typeof years);

// yaş hesaplama

var birtday = new Date('01/12/1991');
console.log(birtday);





























