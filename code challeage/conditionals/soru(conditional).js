// console.log("SORU - 1");
// console.log("Write a JavaScript program that takes two integers from a user and displays the larger.Bir kullanıcıdan iki tamsayı alan ve büyük olanı görüntüleyen bir javaScript programı yazın.");

// let num1 = Number(prompt("Bir sayı griniz: "));
// let num2 = Number(prompt("Bir sayı griniz: "));

// if (num1 != num2) {
//     if (num1 > num2) {
//     console.log(`num1:${num1} büyüktür num2:${num2}den`);
// } else {
//     console.log(`num2:${num2} büyüktür num1:${num1}den`);
// }
// } else {
//     console.log("Girilen sayılar birbirinden farklı olmalıdır. ");
// }



// console.log("SORU - 2");
// console.log("Write a JavaScript program that takes 3 integers from a user and displays the largest.Bir kullanıcıdan 3 tamsayı alan ve aşağıdakileri görüntüleyen bir JavaScript programı yazın.en büyük.");

// let num1 = Number(prompt("Bir sayı giriniz: "));
// let num2 = Number(prompt("Bir sayı giriniz: "));
// let num3 = Number(prompt("Bir sayı giriniz: "));

// if (num1 > num2 && num1 > num3) {
//     console.log(`The largest number is ${num1}`);
// } else if (num2 > num1 && num2 > num3) {
//     console.log(`The largest number is ${num2}`);
// } else {
//     console.log(`The largest number is ${num3}`);
// }





// console.log("SORU - 3");
// console.log("Write a JavaScript program that takes 3 integers from a user, multiplies all these numbers, and displays the sign of the product. Bir kullanıcıdan 3 tamsayı alan ve tüm bunları çarpan bir JavaScript programı yazın numaraları ve ürünün işaretini görüntüler..");

// let num1 = Number(prompt("Bir sayı giriniz: "));
// let num2 = Number(prompt("Bir sayı giriniz: "));
// let num3 = Number(prompt("Bir sayı giriniz: "));
// let result = num1 * num2 * num3;

// if (result > 0) {
//     console.log(`${result} sayısının işareti + dır.`);
// } else if (result == 0) {
//     console.log(`${result} sayısının işareti yoktur.`);
// } else {
//     console.log(`${result} sayısının işareti - dır.`);
// }







// console.log("SORU - 4");
// console.log("Write a JavaScript program to check whether a given integer is in the range 50 to 100. ");

// let num1 = Number(prompt("Bir sayı giriniz: "));
// if (50 < num1 && num1 < 100) {
//     console.log(`Sayı ${num1} 50 ile 100 arasındadır.`);
// } else {
//     console.log(`Sayı ${num1} 50 ile 100 arasında değildir.`);
// }




// console.log("SORU - 5");
// console.log("Write a basic Calculator with JavaScript. Ask the user to enter 2 numbers and an operand (+,-,*,/). Execute the desired operation and display the result. ");

// let num1 = Number(prompt("Bir sayı giriniz: "));
// let num2 = Number(prompt("Bir sayı giriniz: "));
// let işlem = prompt("Yapmak istenen matematik işlemi sembolünü giriniz: ")

// if (işlem == "+") {
//     console.log(`${num1} + ${num2} = ${num1+num2}`);
// } else (işlem == "-") {
//     console.log(`${num1} - ${num2} = ${num1-num2}`);
// }




// console.log("SORU - 6");
// console.log("Write a JavaScript program that asks the user to enter a day, check this day, and display whether a weekday or not.  ");

let day = prompt("Haftanın bir gününü seçiniz:").toLowerCase();

switch (day) {
    case "monday":
        console.log(`${day} haftaiçi dir`);
        break;
    
    case "wednesday":
        console.log(`${day} haftaiçi dir`);
        break;
    
    case "tuesday":
        console.log(`${day} haftaiçi dir`);
        break;
    
    case "thursday":
        console.log(`${day} haftaiçi dir`);
        break;
    
    case "friday":
        console.log(`${day} haftaiçi dir`);
        break;
    
    case "saturday":
        console.log(`${day} haftasonu dur`);
        break;
    
    case "sunday":
        console.log(`${day} haftasonu dur`);
        break;

    default:
        console.log("Haftanın bir gününü giriniz.");
        break;
}






// console.log("SORU - 6");
// console.log("Write a JavaScript program that tells the user provided number is odd or even. ");

// let number = Number(prompt("Bir sayı giriniz: "));

// console.log(number % 2 ? "old" : "even");




console.log("SORU - 7");
console.log("Write a JavaScript program to find a value that is nearest to 100 from two different given integer values. ");

let num1 = prompt("bir sayı giriniz: ");
let num2 = prompt("Bir sayı giriniz: ");

if (num1 != NaN && num2 != NaN) {
    if (num1-100  > num2- 100) {
        console.log(`${num1} sayısı 100e daha yakındır.`);
    } else if (100 - num1 == 100 - num2) {
        console.log(`${num1} ve ${num2} sayıları 100e eşit yakınlıktadır.`);
    } else {
        console.log(`${num2} sayısı 100e daha yakındır.`);
    }
} else {
    console.log("Bir rakam giriniz.");
}