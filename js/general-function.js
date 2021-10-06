//global nvaigation click event

const hamburger = document.querySelector(".hamburger");
const navigation = document.querySelector("nav");
const logo = document.querySelector ("#logo");

// hamburger.addEventListener ("click", toggleNav) 


// //togglenav function to display nav onclick
// function toggleNav(e) {
//     if (navigation.style.display === "block") {
//         return navigation.style.display = "none";
//     }
//     return navigation.style.display = "block";


// }
hamburger.onclick = function expandNav (e) {
    console.log(e.target)
    if (navigation.style.display === "none") {
        return navigation.style.display = "block";
    }
    return navigation.style.display = "none";
}

  



//function to show error or success message
function showMsg(input, msg) {
        return input.innerHTML = msg;
}


// check for input value, then add class either "error" or "success", and then add message
function checkInputValue (input,container, msg) {
    if (!input) {
        container.classList.add("error");
        container.innerHTML = msg;
    } else {
        container.innerHTML ="";
        container.classList.remove("error");
        container.classList.add("success")
    }
}
// check for valid email
function checkValidEmail (email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
    
}

// check length of input
function checkLength (input, len) {
    if (input.trim().length >= len ) {
        return true;
    } else {
    showMsg(input, `${input} can not be less than ${len}`)
    }
}