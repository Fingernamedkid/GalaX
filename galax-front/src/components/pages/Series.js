import React from "react";
import SideMenu from "../SideMenu";
import CenteredList from "../ListControl";
function Series() {
  const movie = "tv"
  const [listgenre,setMovies] = useState([]);
  useEffect(() => {
    const API_URL = "https://api.themoviedb.org/3/genre/movie/list?language=en&api_key=8b64af438dcdf72c27a5df692c7ebf1b"; 
    const fetchMovies = async () => {
        const res = await fetch(API_URL);
        const data = await res.json();
        setMovies(data.genres.slice(0,5)); 
    };
    fetchMovies();
}, [listgenre]); 
  return (
    <div className="films-body flex">
      
      <SideMenu />
      
      <section className="film-container">
      {listgenre.map((genre, index) =>
      <li key={index} id={genre.id}>
      <CenteredList movie={movie} link={`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genre.id}&api_key=8b64af438dcdf72c27a5df692c7ebf1b`} name={genre.name}/>
      </li>
      )}
      

      </section>
    </div>
   
    
  );
}

export default Series;
