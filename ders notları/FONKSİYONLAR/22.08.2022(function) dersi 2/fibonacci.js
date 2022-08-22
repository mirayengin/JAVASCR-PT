// 0,1,1,2,3,5 fibonacci

let num1, num2, adet, counter;
num1 = 0;
num2 = 1;
adet = Number(prompt("Kaç adet fibonacci sayısı istiyorsunuz: "));
counter = 1;

do {

    console.log(`${counter}'inci fibonacci ${num2}`);
    
    let total = num1 + num2;
    num1 = num2
    num2 = total
    counter += 1;
} while (counter <= adet);
