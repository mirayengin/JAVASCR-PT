var customerName_customerLastname =String('Erhan FIRAT');
var idcardnumber= Number(31174208084);
var ordertotal = Number(100);
var gender = String(Male);
var gender = true // erkek olursa işlem yaptırır.kadın ise false.
var address = String(Cengiz_Topal_Caddesi_No=95)
var address = {
    city: 'Bolu',
    district: 'Merkez', // bu bir object tir.
    body : 'burası iyi'
}

var customerhobby =  String(the_read_book);
var hobbies = ['sinema', 'Kitap', 'Spor']; // Array

// Siparişleri toplayınız.
var order1 = '100';
var order2 = '150';

var total = Number(order1) + Number(order2);
console.log(total);

// siparişleri tamsayı olarak toplayınız.

var order3 = '100.2';
var order4 = '150.5';

var total1 = parseInt(order3) + parseInt(order4);
console.log(total1);

// Verilen yıla göre yaş hesapla.

var yeardate = 1986;
console.log(new Date().getFullYear() - yeardate);

const yeardate = 1986; // değer değişimi olmaz değer sabit kalır const ile

// Aşağıdaki string ifadenin karakter sayısını bulunuz.

var course = 'Moder Javascript Kursu';

console.log(course.length());


