// 0,1,1,2,3,5 fibonacci

let num1, num2, adet, counter;
num1 = 1;
num2 = 2;
adet = Number(prompt("Kaç adet fibonacci sayısı istiyorsunuz: "));
counter = 1;

do {

    console.log(`${counter}'inci fibonacci ${num2}`);
    
    let total = num1 + num2;
    num1 = num2
    num2 = total
    counter += 1;
} while (counter <= adet);


//-----------------------------------------------

let resultString = "1,1";

const fibo = (n) => {
    let fib1 = 1;
    let fib2 = 1;
    let toplam = 0;

    for (let i = 2; i <= n; i++) {
        toplam += fib1 + fib2;
        fib1 = fib2;
        fib2 = toplam;
        resultString += "," + fib2;
    }
    return fib2;
}

const n = Number(prompt("n terimini giriniz: "));
if (n <= 0) {
    console.log("Lütfen 0 dan büyük bir sayı giriniz.");
} else {
    
    console.log(`Fibo (${n})= ${fibo(n)}`);
    console.log(resultString);
}


//Arrow ile yapımı

toplama = function (n) {
    let fibonacci = [0, 1];
    for (let i = 2; i <= n; i++) {
   fibonacci[i] = fibonacci[i-1] + fibonacci [i-2]
    }
    return fibonacci[n];
  };