
//input fields
const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

// span container
const emailSpan = document.querySelector("#email-span");
const passwordSpan = document.querySelector("#password-span");
const firstNameSpan = document.querySelector("#first-name-span");
const lastNameSpan = document.querySelector("#last-name-span");

const msgContainer = document.querySelector("#msg-container");
const form = document.querySelector("form");

console.log(firstNameSpan);

form.addEventListener("submit", checkInputData);

function checkInputData(e) {
e.preventDefault();
 console.log(firstName.value)
    checkInputValue(checkLength(firstName.value, 3),firstNameSpan,"first name must be minimum 3 letters")
    checkInputValue(checkLength(lastName.value, 3),lastNameSpan,"last name must be minimum 3 letters")
    checkInputValue (checkValidEmail(email.value),emailSpan,"enter a valid email")
    checkInputValue(checkLength(password.value, 5), passwordSpan, "password must be atleast 5 character")

    if (checkLength(firstName.value, 3) && checkLength(lastName.value, 3) && checkValidEmail(email.value) && checkLength(password.value,5)) {

        msgContainer.classList.add("success-msg");
        showMsg(msgContainer, "Thank you for Joining SquareEyes!!");
        form.reset();
    }
}
