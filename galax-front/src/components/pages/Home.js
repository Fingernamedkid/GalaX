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
    const [listFav,setlistFav] = useState([]);
    const lien = "http://localhost:5050/home/getIdU/"+ cookies.get('auth')
    const lien2 = "http://localhost:5050/getFilms/"+ cookies.get('auth')
    const cookie = cookies.get('auth')
    useEffect(() => {
        
        axios.get(lien).then((res) => {setUsername(res.data)}).catch((error) => {window.location.href="/"})

        
     }, []);
      
     
    
    return(
        <div>
            <Menu name={name[0]}/>
            <CenteredList movie={"movie"} link={`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&language=en-US&page=1&sort_by=primary_release_date.desc&with_genres=&api_key=8b64af438dcdf72c27a5df692c7ebf1b`} name ={"Nouveaux Films"}/>
            <CenteredList movie={"tv"} link={`https://api.themoviedb.org/3/discover/tv?include_adult=false&include_video=true&language=en-US&page=1&sort_by=primary_release_date.desc&with_genres=&api_key=8b64af438dcdf72c27a5df692c7ebf1b`} name ={"Nouveaux Séries"}/>
            <CenteredList movie={"movie"} link={`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&language=en-US&page=1&sort_by=popularity.desc&with_genres=&api_key=8b64af438dcdf72c27a5df692c7ebf1b`} name ={"Films Populaires"}/>
            <CenteredList movie={"tv"} link={`https://api.themoviedb.org/3/discover/tv?include_adult=false&include_video=true&language=en-US&page=1&sort_by=popularity.desc&with_genres=&api_key=8b64af438dcdf72c27a5df692c7ebf1b`} name ={"Séries Populaires"}/>
            <Footer/>
        </div>
    )
}