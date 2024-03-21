import React from "react";
import Menu from "../Menu";
import CenteredList from "../ListControl";
import Cookies from 'universal-cookie';
import axios from 'axios';
const cookies = new Cookies();
const users = cookies.get('auth');
let username =await axios.get("http://localhost:5050/getnameU", users).then((res ) => {
        username=res
    }).catch((error) => {
    console.log(error);
})
///debug later
export default function Home(){
    
    if (cookies.get('auth') != username){
        console.log("username:"+username)
    }
        const movie = "movie";
    return(
        <div>
            <Menu />
            <CenteredList movie={movie}/>
        </div>
    )
}