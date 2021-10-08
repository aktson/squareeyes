//input fields
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");


// span container
const emailSpan = document.querySelector("#email-span");
const passwordSpan = document.querySelector("#password-span");
const nameSpan = document.querySelector("#name-span");


const msgContainer = document.querySelector("#msg-container");
const form = document.querySelector("form");


form.addEventListener("submit", checkInputData);

function checkInputData(e) {
e.preventDefault();

    checkInputValue(checkLength(name.value, 3),nameSpan,"first name must be minimum 3 letters")
    checkInputValue (checkValidEmail(email.value),emailSpan,"enter a valid email")
    checkInputValue(checkLength(password.value, 5), passwordSpan, "password must be atleast 5 character")

    if (checkLength(name.value, 3) && checkValidEmail(email.value) && checkLength(password.value,5)) {

        msgContainer.classList.add("success-msg");
        showMsg(msgContainer, "Thank you for Joining SquareEyes!!");

        form.reset();

    
    }
}
