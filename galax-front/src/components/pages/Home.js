import React from "react";
import Menu from "../Menu";
import CenteredList from "../ListControl";

export default function Home(){

    const movie = "movie";
    return(
        <div>
            <Menu />
            <CenteredList type={movie}/>
        </div>
    )
}