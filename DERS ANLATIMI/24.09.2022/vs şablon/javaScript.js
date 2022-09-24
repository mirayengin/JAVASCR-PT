// dom elemanları arasında gezinti
// let a;

// const myListe = document.querySelector("ul.liste");
// console.log(myListe);

// a = myListe.firstElementChild;          // Bursa
// a = myListe.lastElementChild;           // Istanbul
// a = myListe.childElementCount;          // 4



//* ParentNode, ParentElement  üst elemente

// a = myListe.parentElement.parentElement.parentElement;  //! null

// a = myListe.parentNode; //! body


// let b = document.querySelector("input") //! input#input-text

// let b = document.querySelector("input").parentElement; //! form#formID
// let b = document.querySelector("input").parentElement.parentElement; //! body
// let b = document.querySelector("input").parentElement.parentElement.parentElement; //! html

// let b = document.querySelector("input").parentElement.parentElement.parentElement.parentElement; //! null



//** nextElementSibling */ yatayda ileri yön

// let c = document.querySelector("li"); //! ilk gördüğü li olan bursayı seçti
// let c = document.querySelector("li").nextElementSibling; //! Ankara
// let c = document.querySelector("li").nextElementSibling.nextElementSibling; //! İzmir


//*** previousElementSibling */ yatayda yukarı yön

// let c = document.querySelector("li").nextElementSibling.nextElementSibling.previousElementSibling; //! Ankara

// let c = document.querySelector("li").nextElementSibling.nextElementSibling.previousElementSibling.previousElementSibling; //! Bursa

// console.log(c);





//! ELEMENT EKLEME OLUŞTURUP

// const a = document.createElement("li");
// a.className = "liste-item";
// a.id = "newId";
// a.textContent = "Yozgat"; //! içine yazıyı yazdık

// document.querySelector("ul").appendChild(a); //! Yozgatı sonuna ekledik ul nin


// console.log(a);



//! H2 YE YENİ DEĞER ATAMA

// let h2 = document.querySelector("h2");

// h2.textContent = " Clarusway"  //! Burada h2 nin içindeki yazıyı değiştirdik




//! remove  ---- eleent silme

// const a = document.querySelector("li");
// a.remove(); //! bursa silindi


// document.querySelector("ul").remove(); //! ul taiıyıcı olduğu için bütün li ler gitti


const a = document.querySelectorAll("li")[2]; //! izmiri şeçtik indekleme ile çünkü quaryselectoeall ile nodelist elde ederiz ve bunlara indexle ulaşabiliriz.

document.querySelector("ul").removeChild(a); //! yukarıda seçtiğimizi sildik

console.log(a);