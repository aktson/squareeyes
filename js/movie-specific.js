const payPerViewBtn = document.querySelector(".payperview");
const resultContainer = document.querySelector(".result-container");


const closeModal = document.querySelector (".close-modal");
const overlay = document.querySelector (".overlay");

// click event for payPerView and closeModal buttons
payPerViewBtn.addEventListener("click", getToPayment)
closeModal.addEventListener("click", closePaymentModal)


function closePaymentModal() {
    overlay.classList.add ("hidden");
}


//open overlay with payment and closemodal
function getToPayment(e) {

    const parentHTML = payPerViewBtn.parentElement.innerHTML
    resultContainer.innerHTML = parentHTML;
    overlay.classList.remove ("hidden");
}


//payment form validation 
//input fields
const name= document.querySelector("#name");
const cardNumber = document.querySelector("#card-number");
const expiryContainer = document.querySelector("#expiry");
const ccvContainer = document.querySelector("#ccv");

// span container
const nameSpan = document.querySelector("#name-span");
const cardSpan = document.querySelector("#card-span");
const ccvSpan = document.querySelector("#ccv-span");
const expirySpan = document.querySelector("#expiry-span");



const msgContainer = document.querySelector("#msg-container");
const form = document.querySelector("form");



form.addEventListener("submit", checkInputData);

function checkInputData(e) {
    e.preventDefault();

    checkInputValue(checkLength(name.value, 5),nameSpan,"name must be minimum 5 letters")
    checkInputValue(checkLength(cardNumber.value, 12),cardSpan,"card number must be 12 numbers")
    checkInputValue(checkLength(expiryContainer.value, 4),expirySpan," enter year and date")
    checkInputValue(checkLength(ccvContainer.value, 3),ccvSpan," ccv must be 4 numbers")
 
    if (checkLength(name.value, 5) && checkLength(cardNumber.value, 12) && checkLength(expiryContainer.value, 4) && checkLength(ccvContainer.value, 3)) {

        msgContainer.classList.add("success-msg");
        showMsg(msgContainer, "Payment Successfull!!");
        form.reset();
    }
}

// // to get to pazment link
// moviesArray.forEach(function(movie) {
//     let movieLink = `<a href="payment.html?id=${movie.id}" class="cta">Watch </a>`
//     console.log (movieLink)
//     moviesContainer.innerHTML += `
//     <div class="movie">
   
//     <img src= "${movie.imageMedium}" alt= "${movie.name}">
//     <h2>${movie.name}</h2>
//     <img src = "${movie.rating}" class="rating" alt="ratings">
//   ${movieLink}
//     </div>`
//   })