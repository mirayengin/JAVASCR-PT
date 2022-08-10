// DATE OBJECT

let d = new Date(); // Bu işlemden bize gelen normal bir string ifade değil bir obje gelir bize ve biz bunun bizim işimize yarayacak kısmını alabiliriz.
        
let bitrhday = new Date(1991,0,11);

console.log(d.getFullYear() - bitrhday.getFullYear());
console.log(d.getMonth() - bitrhday.getMonth());
console.log(d.getDay() - bitrhday.getDay());



    // SET METODLARI

    d.setFullYear(2020);
    d.setMonth(5);
    d.setDate(20);
    d.setHours(10);
    d.getMinutes(45);
        
        
        
    // 1-GET METODLARI
    console.log(d.getDate()); // Burada değişkenden sonra nokta koyarak date objesine neler uygulayabiliriz bunları görürüz.Çağırdıktan sonra fonsiyonu parantezini unutma.
    console.log(d.getDay());
    console.log(d.getFullYear());
    console.log(d.getHours());
    console.log(d.getMonth());
    console.log(d.getMinutes());
    console.log(d.getSeconds());

// Yukarıdaki get metodlarıyla getdate metodunun istediğimiz kısmını alabiliriz. Birde sırasını verirken sıralama vermeye (0) dan başlamaktadır.





    




console.log(d);
console.log(typeof d);

