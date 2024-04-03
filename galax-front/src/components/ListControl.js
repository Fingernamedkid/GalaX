import React, { useEffect, useState } from "react";
import List from "./List.js";
import ListController from './ListController.js';

export default function CenteredList({movie, link, name}) {
   
    const [movies, setMovies] = useState([]);
    const [startIndex, setStartIndex] = useState(0);
         
    useEffect(() => {
        const API_URL = link; 
        const fetchMovies = async () => {
            const res = await fetch(API_URL);
            const data = await res.json();
            setMovies(data.results.slice(0, 25)); 
            console.log(data);
        };
        fetchMovies();
    }, [movie, link]); 
    
    return (
        <div className="container my-24 place-content-center mx-auto "> {/* Centering the carousel */}
            <div id="List" className="mx-auto"> 
            <ListController startIndex={startIndex} setStartIndex={setStartIndex} movies={movies} name={name}/>
            <List movies={movies} startIndex={startIndex} movie={movie}/>
            </div>
        </div>
    );
}