var age ;   // bu komudu değiişkenleri belirtmek için kullanıyoruz. Python gibi direk değilde bu değişken demek için bunu yapıyoruz.
console.log(age);
age = 20
console.log(age);


var fullname="Erhan FIRAT";
console.log(fullname);

// Browserdaki console sayısal ifadeleri mavi string ifadeleri gri olarak yazar.

fullname= "Aslı FIRAT"; //bu atamayı yapınca artık python daki gibi fullname aslı fırat oldu
console.log(fullname);


// DEĞİŞKEN TANIMLAMA KURALLARI

/*
* Değişkenler sayısal ifadeyle başlayamaz.
*/
var 1yas;   //syntax hatası verdi consol da
var yaş;    // bu şekilde tanımlama olur.
var _yaş;
var $yaş;
var yaş1 // bunlar olabilir

// Komut isimleriyle tanımlama yapılamaz.

var for // Böyle bir tanımlama olamaz
var switch // olmaz

// Birden fazla kelime içeriyorsa;

var ad="Erhan"
var soyad="FIRAT"

var ad_soyad="Erhan FIRAT";
var adsoyad="Erhan FIRAT";

// case sensitive (büyük küçük duyarlılığı)

var firstname="Erhan";
var FirstName="Erhan";  //Burada farklı değişkenlere atama yapılmıştır.
console.log(firstname);
console.log(FirstName);

// var, let, const

let city="Kocaeli"; // var ile yapılan tüm işlemler let ile de yapılabilir.
console.log(city);

const email='abc@gmail.com';    // const değişken tanımlamayı kullanırsak bu değer sabittir demek istiyoruz.
console.log(email);

email='bcd@gmail.com';  // Burada yazdırma hatası verir.Çünkü const ile tanımlarsan değer sabit kalmalı değişkende.
console.log(email);

//bir değişkene atanan değerin değişmemesini istiyorsak const ile atama yapmalıyız.
// bu atama let ve var ilede yapılabilir ama değer değişikliğe uğrayabileceği için const ile yapılmalı.

// süslü parantez içinde (var) ile değişken tanımlarsak global gibi davranıyor ve istediğimizx gibi kullanabiliyoruz.
{
    var elma="meyve";
    console.log(elma); // Burada gösterir.
}

console.log(elma); // Burada gösterir.

// süslü parantez içinde (let ve const) içinde tanımlama yaparsak dışında kullanamıyoruz.

{
    let elma="meyve";
    console.log(elma); // Burada gösterir.
}

console.log(elma); // Burada göstermez.






