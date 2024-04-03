import React, {useState ,useEffect} from "react";
import Menu from "../Menu";
import CenteredList from "../ListControl";
import Cookies from 'universal-cookie';
import axios from 'axios';
import Footer from "../Footer";


export default function Home(){
    const cookies = new Cookies();
    const [name,setUsername] = useState("");
    const lien = "http://localhost:5050/home/getEmailU/"+ cookies.get('auth')
    useEffect(() => {
        let username = axios.get(lien).catch((error) => {console.log(error);})
        setUsername(username.data)
     }, [lien, name]);
    if (cookies.get('auth') !== name){
        window.location.href = "/"
    }
    return(
        <div>
            <Menu />
            <CenteredList movie={"movie"} link={`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&language=en-US&page=1&sort_by=primary_release_date.desc&with_genres=&api_key=8b64af438dcdf72c27a5df692c7ebf1b`} name ={"Nouveaux Films"}/>
            <CenteredList movie={"tv"} link={`https://api.themoviedb.org/3/discover/tv?include_adult=false&include_video=true&language=en-US&page=1&sort_by=primary_release_date.desc&with_genres=&api_key=8b64af438dcdf72c27a5df692c7ebf1b`} name ={"Nouveaux Séries"}/>
            <CenteredList movie={"movie"} link={`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&language=en-US&page=1&sort_by=popularity.desc&with_genres=&api_key=8b64af438dcdf72c27a5df692c7ebf1b`} name ={"Films Populaires"}/>
            <CenteredList movie={"tv"} link={`https://api.themoviedb.org/3/discover/tv?include_adult=false&include_video=true&language=en-US&page=1&sort_by=popularity.desc&with_genres=&api_key=8b64af438dcdf72c27a5df692c7ebf1b`} name ={"Séries Populaires"}/>
            <Footer/>
        </div>
    )
}