import React, {useState ,useEffect} from "react";
import Menu from "../Menu";
import CenteredList from "../ListControl";
import Cookies from 'universal-cookie';
import axios from 'axios';
import Footer from "../Footer";
import { NavLink } from "react-router-dom";


export default function Home(){
    const cookies = new Cookies();
    const [name,setUsername] = useState([]);
    const [listFavFilms, setListFavFilms] = useState([]);
    const [listFavSeries, setListFavSeries] = useState([]);

    const lien = "http://localhost:5050/home/getIdU/"+ cookies.get('auth')
    const lien2 = "http://localhost:5050/getFav/"+ cookies.get('auth');
    const cookie = cookies.get('auth')
    useEffect(() => {
        
        axios.get(lien).then((res) => {setUsername(res.data)}).catch((error) => {window.location.href="/"})
        axios.get(lien2).then((res) => {
            if (res.data && res.data.length === 2) {
                setListFavSeries(res.data[0]);
                setListFavFilms(res.data[1]);
            }
        }).catch((error) => { console.error("Failed to fetch favorites", error) });
        
     }, []);
      
     
    
    return(
        <div>
            <Menu name={name[0]}/>
            <CenteredList movie={"movie"} link={`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&language=en-US&page=1&sort_by=primary_release_date.desc&with_genres=&api_key=8b64af438dcdf72c27a5df692c7ebf1b`} name={"Nouveaux Films"} listFav={listFavFilms}/>
            <CenteredList movie={"tv"} link={`https://api.themoviedb.org/3/discover/tv?include_adult=false&include_video=true&language=en-US&page=1&sort_by=primary_release_date.desc&with_genres=&api_key=8b64af438dcdf72c27a5df692c7ebf1b`} name={"Nouveaux Séries"} listFav={listFavSeries}/>
            <CenteredList movie={"movie"} link={`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&language=en-US&page=1&sort_by=popularity.desc&with_genres=&api_key=8b64af438dcdf72c27a5df692c7ebf1b`} name={"Films Populaires"} listFav={listFavFilms}/>
            <CenteredList movie={"tv"} link={`https://api.themoviedb.org/3/discover/tv?include_adult=false&include_video=true&language=en-US&page=1&sort_by=popularity.desc&with_genres=&api_key=8b64af438dcdf72c27a5df692c7ebf1b`} name={"Séries Populaires"} listFav={listFavSeries}/>
           <Footer/>
        </div>
    )
}