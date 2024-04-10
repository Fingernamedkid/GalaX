import React, {useState, useEffect} from "react";
import List from "./List";
export default function ListFilm({ genre, link, movie, listFavor}) {
    const [movies, setMovies] = useState([]);
    const [startIndex, setStartIndex] = useState(0);
    useEffect(() => {
        const list = []
        const API_URL = link; 
        const fetchMovies = async () => {
            const res = await fetch(API_URL);
            const data = await res.json();
            for (let i = 0; i < data.results.length; i += 5) {
                list.push(data.results.slice(i, i + 5));
            }
            setMovies(list)
        };
        fetchMovies();
    }, [link]); 
    
    
  return (
    <div className="list-film">
        <div className="flex item-center w-full- justify-center">

      <h1 className="text-center text-2xl font-bold mb-4">{genre}</h1>
        </div>
      {movies.map((listmovie, index) => (
  <List key={index} movies={listmovie} startIndex={0} movie={movie} listFav={listFavor}/>
))}

    </div>
  );
}
