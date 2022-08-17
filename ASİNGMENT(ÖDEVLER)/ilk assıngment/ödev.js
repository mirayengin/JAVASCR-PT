//ODEV1: Dort Islem Hesap Makinasi (2 Sayı bir operator)

let n1 = +prompt("bir sayı giriniz: ");
let n2 = +prompt("bir sayı giriniz: ");
let işlem = prompt("istediğiniz matemati işlemi sembolünü giriniz: ");

if (işlem === "+") {
    console.log(`${n1} + ${n2} = ${n1+n2}`);
}else if (işlem === "-") {
    console.log(`${n1} - ${n2} = ${n1-n2}`);
}else if (işlem === "*") {
    console.log(`${n1} * ${n2} = ${n1*n2}`);
}else if (işlem === "/") {
    console.log(`${n1} / ${n2} = ${n1/n2}`);
}else {
    console.log("Dört işlem sembolünden birini seçiniz.");
}





// ODEV2 :Clarusway’deki haftalık ders ve etkinlik programınızı, console’dan girilen gün değerine göre çıktı veren kodu switch-case yapısı ile yazınız.

let day = prompt("Haftanın bir gününü seçiniz").toLowerCase();
switch (true) {
    case (day === "pazartesi" || day === "salı" || day == "çarşamba" || day === "perşembe") : console.log(`${day} Inclass var`); break;
    case (day === "cuma") :  console.log(`${day} Teamwork var`); break;
    case (day === "cumartesi") :  console.log(`${day} InClass + Workshop var`); break;
    case (day === "pazar") : console.log(`${day} Self-stud var`); break; 
    default: console.log(`${day} haftanın bir günü değildir. Doğru değer giriniz.`); break;

    console.log(`${day} var`);
}

// Pazartesi, Salı ,Çarşamba, Perşembe -> InClass

// Cuma -> Teamwork

// Cumartesi ->  InClass + Workshop

// Pazar -> Self-Study

// Aksi takdirde -> Yanlis gun girildi.




// ODEV3:Maasi asgari ucretten az olanlara %50 zam,fazla olanlara ise %10 zam yapmak istiyoruz.

const asgari_ücret = 5100 , maaş = +prompt("ücretinizi giriniz: ");
if (maaş >= asgari_ücret) {
    console.log(`Zamlı maaşınız ${(maaş*1.1).toFixed(2)} dir`);
}else {
    console.log(`Zamlı maaşınız ${(maaş*1.5).toFixed(2)} dir`);
}

// ODEV4: Kredi Risk Programı

// Console’dan kişinin gelir ve gider miktarını alan

// eğer kişinin geliri giderinden en az asgari ücret kadar fazla ise Kredi Verilebilir 🤑

// değilse Kredi Verilemez 🥺

// şeklinde çıktı veren kodu Ternary deyimi kullanarak yazınız.

const expense = +prompt("Enter your expense  please:"), income = +prompt("Enter your income please"), kalan = 5100;
(income - expense) >= kalan? console.log("Kredi verilebilir") : console.log("Kredi verilemez");

