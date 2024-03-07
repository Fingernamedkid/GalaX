import React, { useEffect, useState } from "react";
import List from "./List.js";
import ListController from './ListController.js';

export default function CenteredList({type}) {
    const [movies, setMovies] = useState([]);
    const [startIndex, setStartIndex] = useState(0);
         
    useEffect(() => {
        const API_URL = `https://api.themoviedb.org/3/discover/${type}?include_adult=false&include_video=true&language=en-US&page=1&sort_by=popularity.desc&with_genres=&api_key=8b64af438dcdf72c27a5df692c7ebf1b`; 
        const fetchMovies = async () => {
            const res = await fetch(API_URL);
            const data = await res.json();
            setMovies(data.results.slice(0, 25)); 
            console.log(data);
        };
        fetchMovies();
    }, [type]); 
    
    return (
        <div className="container my-24 place-content-center mx-auto "> {/* Centering the carousel */}
            <div id="List" className="mx-auto"> 
            <ListController startIndex={startIndex} setStartIndex={setStartIndex} movies={movies}/>
            <List movies={movies} startIndex={startIndex} type={type}/>
            </div>
        </div>
    );
}
