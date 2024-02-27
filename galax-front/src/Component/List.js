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
                setMovies(data.results.slice(0, 20)); 
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
        };
        //dasfasfsdgggggg
    
        fetchMovies();
    }, []); 
    
    const scrollLeft = () => {
        setStartIndex(prevIndex => Math.max(prevIndex - 5, 0));
    };

    const scrollRight = () => {
        setStartIndex(prevIndex => Math.min(prevIndex + 5, movies.length - 1));
    };

    return (
        <div className="container my-20 place-content-center mx-auto "> {/* Centering the carousel */}
            <div id="List" className="mx-auto" style={{ width: '85%' , paddingLeft: '15%'}}> {/* Setting width to 44rem */}
                <div style={{ borderLeft: '8px solid red'}}>
                    <div className="flex justify-between items-center w-max mb-4 " >
                        <h2 className="text-3xl font-medium px-4">Category one</h2>
                        <div id="button" style={{ paddingRight: '2.5rem' , borderRight: '8px solid blue' }}>
                            <button className="cursor-pointer text-xl mx-1 text-indigo-600 font-bold px-4" onClick={scrollLeft}>Prev</button>
                            <button className="cursor-pointer text-xl mx-1 text-indigo-600 font-bold " onClick={startIndex !== 15 ? scrollRight : null}>Next</button>
                        </div>
                    </div>
                </div>
                <div id="scrollContainer" className="flex flex-no-wrap overflow-x-scroll scrolling-touch scroll-smooth items-start">
                    {movies.slice(startIndex, startIndex + 5).map((film, index) => (
                        <Cards film={film} key={index} />
                    ))}
                </div>
            </div>
        </div>
    );
}
