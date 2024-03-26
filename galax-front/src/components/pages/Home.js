import React from "react";
import Menu from "../Menu";
import CenteredList from "../ListControl";
import Cookies from 'universal-cookie';
import axios from 'axios';



const cookies = new Cookies();
console.log(cookies.get('auth'))
const link = "http://localhost:5050/getEmailU/"+ cookies.get('auth');
let username = await axios.get(link).catch((error) => {
    console.log(error);
})



export default function Home(){
    
    if (cookies.get('auth') != username.data){
        window.location.href = "/"
    }
        const movie = "movie";
    return(
        <div>
            <Menu />
            <CenteredList movie={"movie"} link={`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&language=en-US&page=1&sort_by=primary_release_date.desc&with_genres=&api_key=8b64af438dcdf72c27a5df692c7ebf1b`} name ={"Nouveaux Films"}/>
            <CenteredList movie={"tv"} link={`https://api.themoviedb.org/3/discover/tv?include_adult=false&include_video=true&language=en-US&page=1&sort_by=primary_release_date.desc&with_genres=&api_key=8b64af438dcdf72c27a5df692c7ebf1b`} name ={"Nouveaux Séries"}/>
            <CenteredList movie={"movie"} link={`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&language=en-US&page=1&sort_by=popularity.desc&with_genres=&api_key=8b64af438dcdf72c27a5df692c7ebf1b`} name ={"Films Populaires"}/>
            <CenteredList movie={"tv"} link={`https://api.themoviedb.org/3/discover/tv?include_adult=false&include_video=true&language=en-US&page=1&sort_by=popularity.desc&with_genres=&api_key=8b64af438dcdf72c27a5df692c7ebf1b`} name ={"Séries Populaires"}/>

        </div>
    )
}