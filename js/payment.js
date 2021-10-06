import { moviesArray } from "./movies-list.js";

const resultContainer = document.querySelector(".result-container")

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const movieId = params.get("id");




const movie = moviesArray.find(  id  => id === id);

createHtml(movie)


// moviesArray.forEach(function(movie) {
//     createHtml(movie)
// })


//function to create html
function createHtml(data) {

    resultContainer.innerHTML = 
    `<div class= "result">
         <img src= "${data.imageSmall}" alt = "${data.name}" class = "left" >
        <p>You choose ${data.name}</p>
        <p> Price: ${data.price}</p>
        <p>check-out</p>

    </div>`
}
