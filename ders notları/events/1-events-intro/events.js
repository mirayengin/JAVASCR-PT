//* ======================================================
//*                        EVENTS
//* ======================================================

console.log("****** EVENTS *******");



//* EXAMPLE-1 (Mouse Over, Mouse Out )
//* -------------------------------------------------------
const h1 = document.querySelector("#header h1");

//? Metod 3
h1.onmouseover = function () {
    h1.style.color = "red";
    h1.style.fontWeight = "300";
};


h1.onmouseout = function () {
    h1.style.color = "black";
    h1.style.fontWeight = "900";
};

//? Metod 4
h1.addEventListener("click", () => {
    alert("h1 click");
})




//* EXAMPLE-2 (addEventListener())
//* -------------------------------------------------
//!içindeki fonk. gloabal alanda declare edilmemeli

//? event lar nested seklinde olmaz

document.getElementById("btn").addEventListener("click", function () {
    const input = document.querySelector("#input");
    // if (!input.value) {
    //     alert("Please enter an item")
    // } else {
    //     alert(`${input.value} entered`);
    // }

    !input.value ? alert(`${input.value} entered`) : alert("Please enter an item");

    input.value = "";
})


//* EXAMPLE-3

// const big = document.getElementsByClassName("list").forEach((x) => console.log(x));

const list = document.querySelectorAll(".list"); //? nodelist

list.forEach((li) => {

    li.onmouseover = () => {
        li.style.transition = "font-size 0.8s ,  transform 0.5s"; //! tırnak içi css gibi yaz Buraya yapılacak değişimler yavaş olacaksa yazmamız lazım.
        li.style.transform = "translateX(10px)"
        li.style.fontSize = "2rem";
        
    }
    
    
    li.onmouseout = () => {
        li.style.fontSize = "1rem";
        li.style.transform = "translateX(-10px)"
    }
})

// //* EXAMPLE-3
// //* -------------------------------------------------
// const list = document.querySelectorAll(".list"); //?nodelist

// list.forEach((li) => {
//   li.style.transition = "all 0.8s";
//   li.style.lineHeight = "2rem";

//   li.onmouseover = () => {
//     li.style.fontSize = "2rem";
//     li.style.transform = "translateX(10px)";
//   };

//   li.onmouseout = () => {
//     li.style.fontSize = "1rem";
//     li.style.transform = "translateX(-10px)";
//   };
// });

// const print = () => {
//   console.log("Starting");
// };




// //* EXAMPLE-4 (onload)
// //* -------------------------------------------------

window.onload = function () {
    document.querySelector("#input").focus() //? focus yenilemede nereden başlamak istiyorsak oraya yönlendirir.
}


