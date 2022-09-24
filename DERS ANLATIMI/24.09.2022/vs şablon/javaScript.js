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

const a = document.createElement("li");
a.className = "liste-item";
a.id = "newId";
a.textContent = "Yozgat"; //! içine yazıyı yazdık

document.querySelector("ul").appendChild(a); //! Yozgatı sonuna ekledik ul nin 


console.log(a);