// TÜR DÖNÜŞÜMÜ
    let num1='5'
    let num2='10'
    console.log(typeof num1);
    console.log(num1 + num2);   // String ifadeleri python daki gibi yan yana getirir.


    let num3=Number('5');
    let num4=Number('10');
    let total= num3+num4;
    console.log(typeof total);
    console.log(total); //Bu işlemde artık type lar number ve normal matematik işlemi yapıldı.


    let val;

    //1 - NUMBER TO STRİNG
    val = String(10)
    console.log(typeof val);
    console.log(val.length); // Bununla değişkenin uzunluğunu buluyoruz.
    
    
    // 2-  BOOL TO STRİNG

    val = (true) 
    console.log(val) // Bool  değerler normalde mavi olarak yazdırılır.
    
    val = String(true) 
    console.log(val) // Bool değeri string yapıp yazdırdığımızda gri olarak görünür yazdırdığımız zaman.
    console.log(typeof val);
    console.log(val.length);

    // DATE TO STRİNG
    val = new Date().getTime() // date ten sonra '.' koyarız ve metodlarına ulaşabiliriz.(gün, yıl , dakika gibi)
    

    val = String(new Date().getTime()); //Burada da date değerlerini string olarak görebiliriz.
    console.log(val);
    console.log(typeof val);
    console.log(val.length);

    // ARRAY TO STRİNG
    val = String([1,2,3]); // Burada bir dizi oluşturmak için köşeli parantez açıp içine değerleri yazmalıyız.Burada yaptığımız dizide string bir değerdir.
    console.log(val);
    console.log(typeof val);
    console.log(val.length);

    // TO STRİNG
    val = (10).toString();
    val = (false).toString(); // Bu işlemlerde tostring kullanarak değeri string yapabiliriz.


    // STRİNG TO NUMBER

    val = Number('10'); // BU İŞLEMLEDE STRİNG İFADE NUMBER TYPE A DÖNÜŞTÜRÜLDÜ.
    console.log(val);
    console.log(typeof val);
    console.log(val);
    console.log(val.toFixed); // Bu işlemde sayının virgülden sonrasını yazdırabiliriz yani kaç tane basamak istiyorsak virgülden sonra onu belirliyoruz.
    console.log(val.toFixed(3));
    console.log(val.toFixed(2)); // gibi örnekler verebiliriz.


    val = Number(true); // Burada true nun number tipde (1) rakamına eşit olduğunu görürüz.Pythonda olduğu gibi int ifadeler bool değer olarak true veriyordu.
    console.log(val);
    console.log(typeof val);
    console.log(val.toFixed); // Buunun değer olarak karşılığıda (1.00) dır.

    val = Number(false); // Buişlemde false number olarak (0) değerini verir.
    val = Number(null); // Bu işlemdede null bize (0) değerini verir.
    val = Number('a');  // Burada number tipe dönüştürülemeyecek  bir değer mevcuttur. Bunun sonucu olarak bize (NaN) verir.
    val = Number([1,2,3]); // Bu dizenin sonucun dada NaN veriri bize.
    // NaN = number tipe dönüştürülemeyen bir değer var demektir.


    // parseInt, parseFloat

    val = parseInt('10.5'); // Burada string ifade tam sayıya dönüştürülerek (10) sonucunu verir.
    val = parseFloat('10.5'); // Burada string ifade float değer olarak bize gelir. (10.50) olarak.
