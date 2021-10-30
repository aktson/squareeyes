
const moviesContainer = document.querySelector(".movies");

const baseUrl = "https://ankson.no/squareeyes/wp-json/wc/store/products";

async function getMovies(url) {
    try {
    const response = await fetch(url);
    const result = await response.json();
    createHtml(result)
    }
    catch(error) {
        moviesContainer.innerHTML = error;
    }
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

//general search function which searches for movies
const searchContainer = document.querySelector(".search");
const searchButton = document.querySelector(".search-button");




searchButton.addEventListener("click", function() {
    const userText = searchContainer.value;

    if (userText) {
        const newUrl = baseUrl + `?search=${userText}`;
        moviesContainer.innerHTML = "";
        getMovies(newUrl);
    }
    else  {
        moviesContainer.innerHTML = `<p class="center">Sorry... No result found</p>`; 
    }
      
})



//import methog with manually adding movies in array
// import {moviesArray} from "./movies-list.js"

