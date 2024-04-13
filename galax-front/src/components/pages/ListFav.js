import React, { useState, useEffect } from "react";
import List from "../List.js";
import axios from "axios";

export default function ListFav({ listFavor, movie }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const list = [];
        const listtoput = [];
        for (const id of listFavor) {
          const API_URL = `https://api.themoviedb.org/3/${movie}/${id}?language=en-US&api_key=8b64af438dcdf72c27a5df692c7ebf1b`;
          const res = await axios.get(API_URL);
          list.push(res.data);
        }
        for (let i = 0; i < list.length; i += 5) {
            listtoput.push(list.slice(i, i + 5));
        }
        setMovies(listtoput);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, [listFavor, movie]);


  return (
    <div className="list-film">
      <div className="flex item-center w-full- justify-center">
        <h1 className="text-center text-2xl font-bold mb-4">Favorite {movie}</h1>
      </div>
      {movies.map((fivemovies) => (<List movies={fivemovies} startIndex={0} movie={movie} listFav={listFavor} />      ))}
    </div>
  );
}
