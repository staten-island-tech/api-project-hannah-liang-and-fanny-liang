import { DOMSelectors } from "./DOM";
import { genres } from "./genre";

//const key = "YOURKEYHERE";

const query = async function () {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/tv?api_key=283bc35e6dd7de4b871d46535cba89fb&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate${key}`
    );
    const data = await response.json();
    data.results.forEach((show) => {
      DOMSelectors.grid.insertAdjacentHTML(
        "beforeend",
        `<div class="show-card">
      <div class="show-card-front">
        <img src="http://covers.openlibrary.org/b/isbn/9781476746586-L.jpg" alt="" class="cover" />
      </div>
      <div class="show-card-back">
        <h3 class="show-card-header">${show.original_name}</h3>
        <div class="score-box">
        <p class="user-score">Votes</p>
        <p class="user-score">${show.vote_average}</p>
      </div>
        <div class="Overview-box">
          <p class="Overview">Overview</p>
          <p class="Overview">${show.overview}</p>
        </div>
        <div class="show-genres">
          <li class="show-genre">Adventure</li>
        </div>
      </div>`
      );
    });
  } catch (error) {
    console.log(error);
    alert("Hey something went wrong");
  }
};
query();
