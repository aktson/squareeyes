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

//containers
const msgContainer = document.querySelector("#msg-container");
const form = document.querySelector("form");
const resultContainer = document.querySelector(".result-container");

//form validation eventlistner
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


//get querystring and find id with async function
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const movieId = params.get("id");


const baseUrl =  `https://ankson.no/squareeyes/wp-json/wc/store/products`;

async function getMovie(url) {
    const response = await fetch(url);
    const result = await response.json();
    const movie = result.find( ({id})  => id == movieId);

    createHtml(movie)
}

getMovie(baseUrl)


//function to create html
function createHtml(movie) {
  const payButton = document.querySelector(".pay");
  payButton.value = `Make payment NOK${movie.prices.price}`

    resultContainer.innerHTML = `
      <div>
        <img src="${movie.images[1].src}" />
        <h3>${movie.name}</h3>
        <img src = "${movie.images[3].src}" class="rating" alt="ratings"/>
        <p>${movie.description}</p>
        <p class="result">NOK ${movie.prices.price}</p>
      </div>`
}
