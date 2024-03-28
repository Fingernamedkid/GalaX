import React from "react";
import Cards from './Card.js';

export default function List({movies, startIndex, movie}) {
    return (
        
                
                    <div id="scrollContainer" className="flex flex-no-wrap  scrolling-touch scroll-smooth items-start">
                        {movies.slice(startIndex, startIndex + 5).map((film, index) => (
                            <Cards film={film} key={index} movie={movie}/>
                        ))}
                    </div>

            
    );
}