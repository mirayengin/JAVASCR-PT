let num = 5;  // 5
console.log(num);

const fonk = function () {
    num = 22;
    console.log(num);  // 22    
}

fonk();

console.log(++num); // arttır kullan 23
console.log(num++); // kullan arttır 23
console.log(num); // 24

//-----------------------------------------------------

let num1 = 7;
console.log(num1); //  7 global scope

const fonk1 = function () {
    let num1 = 22; // function scope Yeni değişken tanımlandı ve bu functiona ait oldu bu.
    console.log(num1);  // 22    
}

console.log(num1++); // 7













