
// Bir function içinde kendini çağırdığımızda kesinlikle bir koşula bağlamalıyız bu çağırmayı.

// Fibonacci 1,1,2,3,5,8,13,21

const n = Number(prompt("n terimini giriniz: "));   

const fibo = (n) => {
    if (n <= 0) {
        return 0;
    } else if (n === 1 || n == 2) {
        return 1;
    } else {
        return fibo(n - 1) + fibo(n - 2);
    }
};

console.log(`Fibo (${n})= ${fibo(n)}`);
