import React, { useEffect, useState } from "react";
import Cards from './Cards.js';

export default function List() {
    const [movies, setMovies] = useState([]);
    const [startIndex, setStartIndex] = useState(0);

    useEffect(() => {
        const API_URL = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&language=en-US&page=1&sort_by=popularity.desc&with_genres=&api_key=8b64af438dcdf72c27a5df692c7ebf1b';
        
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
    
    const scrollLeft = () => {
        setStartIndex(prevIndex => Math.max(prevIndex - 5, 0));
    };

    const scrollRight = () => {
        setStartIndex(prevIndex => Math.min(prevIndex + 5, movies.length - 1));
    };

    return (
        
                
                <div id="scrollContainer" className="flex flex-no-wrap  scrolling-touch scroll-smooth items-start">
                    {movies.slice(startIndex, startIndex + 5).map((film, index) => (
                        <Cards film={film} key={index} />
                    ))}
                </div>

            
    );
}
