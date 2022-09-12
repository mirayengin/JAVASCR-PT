console.log("**** app.js *******");

const langInput = document.querySelector(".lang-input");
const addBtn = document.querySelector("#add-btn");
const deleteBtn = document.querySelector("#delete-btn");
const langList = document.querySelector("#lang-list");

const newUl = document.createElement("ul"); //!elemet  ekledik 
langList.appendChild(newUl); //! element atadık

//! addBtn event handler
addBtn.addEventListener('clink', () => {
    if (!langInput.value) {
        alert('Please enter a language')
    } else {
        newUl.innerHTML += `<li>${langInput.value}</li>` //? yazılan değerleri alt alta yazdırmak için yaptık
        langInput = ""; //? yazılan değeri silmek için inputa
    }
    langInput.focus();

})


//! onload event handler
window.addEventListener('load', () => {
    langInput.focus();
})

//! deleteBtn event handler
deleteBtn.addEventListener('clink', () => {
    newUl.childElementCount > 0 //? child ların sayısını görmek için
        ? newUl.removeChild(newUl.lastElementChild) //! girilen elementlerin sonuncusunu silmek için
        : alert('There is no item to delete') 

    
})

//! enter key event handler

langInput.addEventListener('keydown', (event) => { //? keydown butona basmak
    // console.log(event);  //! input içinde herhangi bir value yazınca görülür

    // console.log(event.target); //! event nerden geldiğini öğrenmek için
    // console.log(event.keyCode); //! 
    // console.log(event.code); //! 
    
    if (event.keyCode === 13) { //? enter a basılınca (enter tuşu karşılığı 13 keyCode u)
        addBtn.click();
    }
    if (event.keyCode === 46) { //? delete a basılınca (delete tuşu karşılığı 46 keyCode u)
        addBtn.click();
    }

    // if (event.code === "Delete") { //? delete basılınca)
    //     deleteBtn.click();
    // }

})


//! del key event handler