import React from "react";
import Item from "../../../my-app/src/Item";
import Cards from "./Cards";

export default function List(props) {
    const API_URL = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&language=en-US&page=1&sort_by=popularity.desc&with_genres=&api_key=8b64af438dcdf72c27a5df692c7ebf1b'
    const ls = getMovies(API_URL)

    async function getMovies(url) {
        const res = await fetch(url)
        const data = await res.json() 

        return data
        
    }
    const Item = (array) => {
        const inside = array.map((movie) =>
        
          <Cards movie={movie} />
        )
        return(inside);
      }

  return (
    <div class="container my-8">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-3xl font-medium">
          Category one
          <a href="#" class="">
            <span class="text-salmon font-medium text-lg ml-2 hover:underline">
              See all
            </span>
          </a>
        </h2>
        <div>
          <button class="cursor-pointer text-xl mx-1 text-indigo-600 font-bold"></button>
          <button class="cursor-pointer text-xl mx-1 text-indigo-600 font-bold"></button>
        </div>
      </div>
      <div
        id="scrollContainer"
        class="flex flex-no-wrap overflow-x-scroll scrolling-touch items-start mb-8"
      >
        {
            Item(ls.result)
        }

      </div>
    </div>
  );
}
