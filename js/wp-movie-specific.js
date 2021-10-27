const playerContainer = document.querySelector(".player-description");
const movieSubContainer = document.querySelector(".movies-sub")


const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const movieId = params.get("id");

const baseUrl =  `https://ankson.no/squareeyes/wp-json/wc/store/products`;

async function getMovie(url) {
    try {
    const response = await fetch(url);
    const result = await response.json();
    const movie = result.find( ({id})  => id == movieId);

    createHtml(movie);
    createSubHtml(result);
    }
    catch(error) {
        playerContainer.innerHTML = error;
    }
   
}


getMovie(baseUrl)


function createHtml(movie) {
        playerContainer.innerHTML = 
            `<div class="player">
                <a href="../sign-in.html">
                    <img src="${movie.images[2].src}" />
                </a>
                </div>
            <div class="movie-description">
                <h1>${movie.name}</h1>
                <img src = "${movie.images[3].src}" class="rating" alt="ratings"/>
                <p>${movie.description}</p>
                <a href="../payment.html?id=${movie.id}" class="cta payperview">Watch for NOK ${movie.prices.price}</a>
            </div> `
       
}
function createSubHtml (movies) {
 for (let i = 0; i < movies.length; i++) {
    
    movieSubContainer.innerHTML += `
    <div>
    <a href="movie-specific.html?id=${movies[i].id}">
    <img src="${movies[i].images[1].src}" alt="${movies[i].name}" />
    <p>${movies[i].name}</p>
    <img src="${movies[i].images[3].src}" alt="ratings" class="rating"/>
    </a>
    </div>`

 }
   
   
}