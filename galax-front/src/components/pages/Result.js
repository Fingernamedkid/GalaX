import React, {useState, useEffect} from 'react';
import List from '../List';

export default function Result(){
    const  query  = "dune"
    //const { genre } = genre 
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        const API_URL = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1&api_key=8b64af438dcdf72c27a5df692c7ebf1b`;
        
        const fetchMovies = async () => {
            try {
                const res = await fetch(API_URL);
                const data = await res.json();
                setMovies(data.results); 
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
        };
        //dasfasfsdgggggg
    
        fetchMovies();
    }, []); 
    const chunkSize = 5;
    const chunkedCast = [];
    for (let i = 0; i < movies.length; i += chunkSize) {
        chunkedCast.push(movies.slice(i, i + chunkSize));
    }
    return(
        <div>
            <div className='flex justify-center mx-auto'>
                <div>
                    Search Reuslts
                </div>
            </div>
            <div id="scrollContainer" className="flex flex-no-wrap  scrolling-touch scroll-smooth items-start">
            <div>
            {chunkedCast.map((chunk, index) => (
                <List key={index} movies={chunk} startIndex={0} />
            ))}
        </div>
        </div>
        </div>
    );
};