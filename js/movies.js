
const moviesContainer = document.querySelector(".movies");

// import {moviesArray} from "./movies-list.js"


// for (let i= 0; i< moviesArray.length; i++) {
 
//     moviesContainer.innerHTML += `
//     <div class="movie">
//     <a href="movies/${moviesArray[i].link}.html">
//     <img src= "${moviesArray[i].imageMedium}" alt= "${moviesArray[i].name}">
//     <h2>${moviesArray[i].name}</h2>
//     <img src = "${moviesArray[i].rating}" class="rating" alt="ratings">
//     </a>
//    </div>`


// }

// const buttons = document.querySelectorAll("button");
// buttons.forEach(function(button) {
//   button.onclick = function(e) {
//   
   
//     const movieToAdd = moviesArray.find( movie => movie.id === e.target.dataset.movie )
//     console.log(movieToAdd)
//   }
// })

const baseUrl = "https://ankson.no/squareeyes/wp-json/wc/store/products";

async function getMovies(url) {
    const response = await fetch(url);
    const result = await response.json();
    createHtml(result)
}
  getMovies(baseUrl);


function createHtml(movies) {

    movies.forEach(movie => {
        moviesContainer.innerHTML += `
        <div class="movie">
        <a href="movie-specific.html?id=${movie.id}">
        <img src= "${movie.images[0].src}" alt= "${movie.name}">
        <h2>${movie.name}</h2>
        <img src = "${movie.images[3].src}" class="rating" alt="ratings">
        </a>
    </div>`
    })

}