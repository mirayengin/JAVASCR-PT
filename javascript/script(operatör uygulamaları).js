// Benim kg ve boyum

const kgben = 84;
const boyben = 1.74;
const indeksben = kgben / (boyben*boyben);

const kgasli = 54;
const boyasli = 1.60;
const indeksasli = kgasli/(boyasli*boyasli);

// Yukarıda bu değerler sabit olduğu için const ile tanımlama yaptık. Sonrasında ise indeksleri hesapladık.

console.log(indeksben.toFixed(),indeksasli.toFixed());
console.log(boyben,boyasli);
console.log(kgben,kgasli);

let benhigherindeks = indeksben>indeksasli;
let aslihigherindeks = indeksasli>indeksben;

console.log("Benim kilo indeks im Aslının kinden daha büyük : ", benhigherindeks);
console.log("Aslının kilo indeks im benim kinden daha büyük : ", benhigherindeks);

 let ben = (indeksben>0) && (indeksben<18.4);
 let ben1 = (indeksben>18.5) && (indeksben<24.9);
 let ben2 = (indeksben>25) && (indeksben<29.9);
 let ben3 = (indeksben>30) && (indeksben<34.9);

 console.log(ben, "True ise zayıf");
 console.log(ben1, "True ise normal");
 console.log(ben2, "True ise fazla kilolu");
 console.log(ben3, "True ise şişman");