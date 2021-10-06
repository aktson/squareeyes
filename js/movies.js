
const moviesContainer = document.querySelector(".movies");

import {moviesArray} from "./movies-list.js"


for (let i= 0; i< moviesArray.length; i++) {
    
    moviesContainer.innerHTML += `
    <div class="movie">
    <a href="movies/${moviesArray[i].link}.html">
    <img src= "${moviesArray[i].imageMedium}" alt= "${moviesArray[i].name}">
    <p>${moviesArray[i].name}</p>
    <img src = "${moviesArray[i].rating}" class="rating">
    </a>
 
  </div>`
console.log(moviesArray[i].image)

}

// const buttons = document.querySelectorAll("button");
// buttons.forEach(function(button) {
//   button.onclick = function(e) {
//   
   
//     const movieToAdd = moviesArray.find( movie => movie.id === e.target.dataset.movie )
//     console.log(movieToAdd)
//   }
// })