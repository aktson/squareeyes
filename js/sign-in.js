const email = document.querySelector("#email");
const password = document.querySelector("#password");
const emailSpan = document.querySelector("#email-span");
const passwordSpan = document.querySelector("#password-span");
const msgContainer = document.querySelector("#msg-container");

const form = document.querySelector("form");
form.addEventListener("submit", checkInputData);

function checkInputData(e) {
e.preventDefault();

    checkInputValue (checkValidEmail(email.value),emailSpan,"enter a valid email")
    checkInputValue(checkLength(password.value, 5), passwordSpan, "password must be atleast 5 character")

    if (checkValidEmail(email.value) && checkLength(password.value,5)) {

    msgContainer.classList.add("success-msg");
        showMsg(msgContainer, "Sign in successful");
        form.reset();
    }
}

// showMsg(emailSpan, "error", "ankit Soni");
