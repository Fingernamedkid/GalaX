import React from "react";
import Cards from './Card.js';

export default function List({movies, startIndex, movie, listFav}) {

       return (
            <div id="scrollContainer" className="flex flex-no-wrap  scrolling-touch scroll-smooth items-start">
                {movies.slice(startIndex, startIndex + 5).map((film, index) => (
                    <div className="mx-2" key={index}>
                        <Cards film={film} movie={movie} listFavorite={listFav}/>
                    </div>
                ))}
            </div>
    );
}
