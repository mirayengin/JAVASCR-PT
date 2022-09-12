//? Diziler sirali bellek bölgeleridir.Bu yuzden dizilere
//? indeksleme ile erisebiliriz. Ancak daha karmasik (unstructured)
//? verilerimiz icin  Object'leri kullanabiliriz.

//? Object'lerde Key-value (property-value) yapisi kullanilir.
//? Herhangi bir veriyi erismek icin property (key) adi kullanilir.

console.log("******* Objects *********");

//! 3 farkl, yontem ile Object olusturulabilir
//* ----------------------------------------------
//* 1- Object() class'ından new Operatörü ile
//* ----------------------------------------------

//! lenght metodu burada yok 

const cars = new Object();
cars.marka = "BMW";
cars.motor = "1.3";
cars.model = 2022;
cars.lpg = true;

console.log(cars);


//!READ

console.log(cars.lpg); //?notation
console.log(cars["model"]); //?Square bracket notation


//? Square bracket yonteminin en buyuk avantaji key degerini
//? degisken olarak kullanabilmemizdir.

// const key = "marka";
// console.log(cars[key]);

const key = "motor";
console.log(cars[key]);

cars.motor = "1.6";
console.log(cars["motor"]); //? Buurada atama yaptık ve değer değişti.



//* ---------------------------------------------------------
//* 2- object constructor'i kullanarak (OOP ile ayrintilandirilacak)
//* ---------------------------------------------------------

// //? Object Constructure
// function Personel(id, ad, maas) {
//   this.id = id;
//   this.ad = ad;
//   this.maas = maas;
//   // console.log(this); //! Personel objesine baglanmistir (binded)
// }

// const kisi1 = new Personel("1234567890", "Mustafa", 15000);
// const kisi2 = new Personel("177567890", "Canan", 25000);
// // console.log(kisi1);
// console.log(kisi1.ad);
// console.log(kisi2.maas);
// console.log(kisi2["id"]);

// //? Global alanda window objesini gosterir.
// console.log(this);
// window.alert("Merhaba");





//****  LİTERAL YÖNTEMİ */

const worker = {
    name: 'Erhan',
    surName: 'FIRAT',
    age: 31,
    job: 'developer',
    languages: ["C++", "Javascript", "Python", "Go"],
    salary: 140000,

};

console.log(worker);

console.log("Job:  ",worker.job);
console.log("Lang:  ", worker["languages"].forEach((l) => console.log(l))); //! foreach değer döndürmediği için undefined döndürür.

console.log(worker.languages[2]); //? Burada value olan değerden value çağırdık.
worker["languages"].forEach((l) => console.log(l));


worker.dob = "1990"; //? key ekledik bu şekilde
worker.email = "can@gmail.com";
console.log(worker);

worker["salary"] = worker["salary"] * 1.1; //!Alttakinin aynısı
worker["salary"] *=  1.1; //? Buda kısa yol buda salary i arttırır.
console.log(worker);


//***********OBJECTS COPY ********/

const person = worker; //? Shallow (Sığ kopyalama) Copy
console.log(person); //? person worker ın aynısı oldu yani kopyalandı.

person.dob = "2000";
console.log(worker); //! Burada ikisinde de bu dob değeri değişmiştir. Çünkü person heap da aynı yerde worker ile, bu yüzden aynı yerde saklandığı için ikisindede değişti değer.
console.log(person);


//! DEEP COPY

//! Object.create(), Object.assign(), spread (...), concat() , slice() -> Shallow Copying

person.dob = 2000;
console.log("PERSON:", person);

//! Deep Copy
let deepCopyOfWorker = JSON.parse(JSON.stringify(worker));
console.log(JSON.stringify(worker));//? Bu string hale çevirir.

//!JSON ( JavaScript Object Notation); insanların okuyabileceği türde metin içermesi nedeniyle geliştiriciler arasında popüler bir veri formatıdır. Bu format XML e göre hafif, daha az kodlama gerektiriyor ve daha hızlı işleniyor.

deepCopyOfWorker.dob = "2022";
console.log("DEEP:", deepCopyOfWorker);

//************OBJECT METODLARI **********************/

const personal = {
    name: 'Erhan',
    surName: 'FIRAT',
    dob: "1990",
    job: 'developer',
    salary: 140000,
    drivingLicense: true,
    calculateAge: function() { //? Buradaki gibi objectlerin içine fonk yazılabilir.
        return new Date().getFullYear() - this.dob;
    }, 

    summary: function () {
        return `${this.name} is ${this.calculateAge()} years old.`
    }

    // summary: () => {
    //     console.log(this); //? windows u gösterdi globalde olmadığı halde çünkü arraw fonk farklı func. lardır. "this" i kullanmamayı sağlar.Kendilerine ait scope u yoktur.

        //!//! NOT: arrow fonksiyonlari ozellikle callback fonksiyonu olarak
//! kullanilmak ve bu fonksiyonlarda this keyword kullanim
//! gereksinimini kaldirmak icin gelistirilmistir.
//! Lexical context'e sahiptirler.Dolayisiyla, bir obje fonksiyonu
//! olarak kullanilirsa, this kelimesi global scope'u (window nesnesini)
//! gösterir. Bunu engellemek için object fonksiyonlarini tanimlarken
//! diger (func. expression veya declaration) yontemlerini kullanabilir.
        
        // return `${this.name} is ${this.calculateAge()} years old.`; //? Bradaki this.name de bir değer göstermez. Bu windows altındaki name i gösterir.
    
};

console.log("DOB: ", personal.calculateAge());
console.log("SUMMARY: ", personal.summary());




// * ======================================================
// *                  OBJECT ITERATION
// * ======================================================


//? nested
const people = {
    person1: {
      name: "Can",
      surname: "Canan",
      dob: "1990",
      job: "developer",
      salary: "140000",
      drivingLicense: true,
    },
    person2: {
      name: "John",
      surname: "Sweet",
      dob: "1990",
      job: "tester",
      salary: "110000",
      drivingLicense: false,
    },

    person3: {
        name: "Steve",
        surname: "Sweet",
        dob: "2000",
        job: "QA",
        salary: "100000",
        drivingLicense: true,
      },
  };
  
console.log(people); //?
  
console.log("Slary of p2: ", people.person2.salary); //? Nested yapılarda bu şekilde ulaşıyoruz.Basit halde.

//? Javascript'de Objeler default olarak iterable degildir.
//? Ama for in ve for of donguleri ile itere edilebilirler.


//? Javascript'de Objeler default olarak iterable degildir.
//? Ama for in ve for of donguleri ile itere edilebilirler.

//? Objelerin key ve value'larini okumak icin built-in metotlar vardir.
//? Bu mettotlar aslinda objelerin key ve/veya value'lari bir dizi olarak dondurur.
console.log(Object.keys(people)); //! Keyler döndürülür
console.log(Object.values(people)); //! Value lar döndürülür.
console.log(Object.entries(people)); //! key ve values döndürür.

//! FOR - IN
//* for (key in object) {
//*   // code block to be executed
//* }

for (let person in people) {
    console.log(person);
    console.log(people[person]);
  }


  //! FOR - OF
  //* for (x of iterable) {
//*   code block to be executed
//* }

// for (let peron of people) { //? burada object iterable olmadığı için hata verir biz iterable yapmalıyız.
//       console.log(person);
//   }


for (let v of Object.keys(people)) {
    console.log(v);
};

//! Bütün people ların salalry

for (let v of Object.keys(people)) {
    console.log(v.salary);
    // console.log(v["salary"]);
};

 //? salary leri key ve value şeklinde

for (let [key, value] of Object.entries(people)) { 
    console.log(`${key} - ${value.salary}`); //! value nin değerini illaki almayız bu şekilde yoksa yazdıramayız.
};


//!ARRAY METODLARI

Object.keys(people).forEach((p) => console.log(p));

Object.values(people).forEach((p) => console.log(p.surName));



//*** developer olanların dob u yazdır. */

Object.values(people).filter((p) => p.job == "developer").forEach((p) => console.log(p.dob));



//********************************************************
//* JSON => Javascript Object Notation
//********************************************************

const team = [
    { name: "Josh", surname: "Adams", job: "developer", age: 30 },
    { name: "Mary", surname: "Bary", job: "tester", age: 22 },
    { name: "Hazel", surname: "Nut", job: "developer", age: 20 },
  ]; //* JSON
  
  console.log(team);
  console.log(team[2]);
  
  //* Ornek1: team dizisindeki job'lari tek tek yazdiriniz.
  team.forEach((person) => console.log(person.job));
  
  //* Ornek2: age'leri bir artirarak yeni bir diziye saklayiniz.
  const ages = team.map((p) => p.age + 1);
  
  //* Ornek3: name ve surname'leri birlestirip buyuk harfe ceviren ve
  //* bunu fullName key'i olarak saklayan, ayni zamanda age degerlerini 5
  //* arttirarak age key'ine saklayan ve olusan diziyi donduren kodu yazınız.


  const teamFullName = team.map((p) => ({
    fullName: p.name.toUpperCase() + " " + p.surname.toUpperCase(),
    age: p.age + 5,
  }));
  
console.log(teamFullName);
  


team.filter((p) => p.age <= 22).forEach((p) => console.log(p.name));



const teamUnder22 = team.filter((x) => x.age <= 22).map((p) => p.name);
console.log(teamUnder22);



const avgAge = team.reduce((sum, person) => sum += person.age, 0) / team.length;

console.log(avgAge);