

const hamburger = document.querySelector(".hamburger");
const navigation = document.querySelector("nav");
const logo = document.querySelector ("#logo");


//global hamburger/bars click event
hamburger.onclick = function expandNav (e) {
    if (navigation.style.display === "block") {
        return navigation.style.display = "none";
    }
    return navigation.style.display = "block";
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

//on page load spinner function
const wrapper = document.querySelector(".wrapper");
const body = document.querySelector("body");

document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        body.style.visibility = "hidden";
        wrapper.style.visibility = "visible";
    } else {
        wrapper.style.display = "none";
        body.style.visibility = "visible";
    }
}
