const name = document.querySelector("#name");
const email = document.querySelector("#email");
const textarea = document.querySelector("#textarea")

//span container
const nameSpan= document.querySelector("#name-span");
const emailSpan= document.querySelector("#email-span");
const textareaSpan= document.querySelector("#textarea-span");
const msgContainer = document.querySelector("#msg-container");

const form = document.querySelector("form");

form.addEventListener("submit", checkformdata);

function checkformdata(e) {
    e.preventDefault();

    checkInputValue(name.value, nameSpan, "Name must be atleast 5 characters");
    checkInputValue(checkValidEmail(email.value), emailSpan,"Enter valid email");
    checkInputValue(textarea.value, textareaSpan,"must atleast 10 characters");
   
    if (checkLength(name.value, 5) && checkValidEmail(email.value) && checkLength(textarea.value, 10)) {
        
        msgContainer.classList.add("success-msg");
        showMsg(msgContainer, "Thank you!! We will contact you");
        form.reset();
   }
   

}