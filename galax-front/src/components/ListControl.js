import React, { useEffect, useState } from "react";
import List from "./List.js";
import ListController from './ListController.js';

export default function CenteredList({movie}) {
    const [movies, setMovies] = useState([]);
    const [startIndex, setStartIndex] = useState(0);
     {/* TODO
             Props s'appelle genre qui va changer le type de film qu'il cherche
             */}

             
    useEffect(() => {
        const API_URL = `https://api.themoviedb.org/3/discover/${movie}?include_adult=false&include_video=true&language=en-US&page=1&sort_by=popularity.desc&with_genres=&api_key=8b64af438dcdf72c27a5df692c7ebf1b`;
        
        const fetchMovies = async () => {
            try {
                const res = await fetch(API_URL);
                const data = await res.json();
                setMovies(data.results.slice(0, 25)); 
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
        };
    
        fetchMovies();
    }, []); 
    
    
    return (
        <div className="container my-24 place-content-center mx-auto "> {/* Centering the carousel */}
            <div id="List" className="mx-auto"> 
            <ListController startIndex={startIndex} setStartIndex={setStartIndex}/>
            
            <List movies={movies} startIndex={startIndex} />
            </div>
        </div>
    );
}
