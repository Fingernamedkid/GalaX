import React, { useEffect, useState } from "react";
import SideMenu from "../SideMenu";
import CenteredList from "../ListControl";
import ListFilm from "../ListFilms";
function Films() {
  const movie = "movie";
  const [listgenre, setMovies] = useState([]);
  const [modeGenre, setGenre] = useState({
    isActive: false,
    selectedGenre: "",
    id: 0
  });

  useEffect(() => {
    const API_URL =
      "https://api.themoviedb.org/3/genre/movie/list?language=en&api_key=8b64af438dcdf72c27a5df692c7ebf1b";
    const fetchMovies = async () => {
      const res = await fetch(API_URL);
      const data = await res.json();
      setMovies(data.genres);
    };
    fetchMovies();
  }, [listgenre]);
  
     
  

  return (
    <div className="films-body flex">
      <SideMenu list={listgenre} setGenre={setGenre} modeGenre={modeGenre} />
      <section className="film-container">
        {modeGenre.isActive?
        <ListFilm 
           genre={modeGenre.selectedGenre}
           link={`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&language=en-US&page=1&sort_by=popularity.desc&with_genres=${modeGenre.id}&api_key=8b64af438dcdf72c27a5df692c7ebf1b`}
           movie={movie}
        />
        :listgenre.slice(0, 5).map((genre) => (
          <CenteredList
            movie={movie}
            link={`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genre.id}&api_key=8b64af438dcdf72c27a5df692c7ebf1b`}
            name={genre.name}
          />
        ))}
      </section>
    </div>
  );
}

export default Films;
