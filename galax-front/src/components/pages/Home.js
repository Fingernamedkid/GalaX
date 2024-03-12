import React from "react";
import Menu from "../Menu";
import CenteredList from "../ListControl";
import Footer from "../Footer";

export default function Home(){

    const movie = "movie";
    return(
        <div className="home-container">
            <Menu />
            <CenteredList movie={movie}/>
            <Footer/>
        </div>
    )
}