import React, { useEffect, useState } from "react";
import SideMenu from "../SideMenu";
import CenteredList from "../ListControl";
import ListFilm from "../ListFilms";
import Cookies from "universal-cookie";
import axios from "axios";
function favorite() {
  const cookies = new Cookies();
  const movie = "movie";
  const [listgenre, setMovies] = useState([]);
  const [listFav, setlistFav] = useState([]);
  const [modeGenre, setGenre] = useState({
    isActive: false,
    selectedGenre: "",
    id: 0
  });
  const lien2 = "http://localhost:5050/getFav/"+ cookies.get('auth')


  useEffect(() => {
    axios.get(lien2).then((res) => {setlistFav(res.data)}).catch((error) => {console.log(error)}  );
    for(ii in listFav[0]){
    const API_URL =`https://api.themoviedb.org/3/movie/${ii}?language=en-US&api_key=8b64af438dcdf72c27a5df692c7ebf1b`;
    const fetchMovies = async () => {
      const res = await fetch(API_URL);
      const data = await res.json();
      setMovies(...listgenre,data);
      
    };
    fetchMovies();
}

    
    
  }, []);
  
     
  

  return (
    <div className="films-body flex">
        <section className="film-container">
        {<ListFilm 
           genre={modeGenre.selectedGenre}
           link={`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&language=en-US&page=1&sort_by=popularity.desc&with_genres=${modeGenre.id}&api_key=8b64af438dcdf72c27a5df692c7ebf1b`}
           movie={movie}
           listFavor={listFav}
        />}
      </section>
    </div>
  );
}