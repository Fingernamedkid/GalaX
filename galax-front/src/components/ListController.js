import React from "react";
import style from "tailwindcss"
export default function ListController({startIndex, setStartIndex , movies}){
    const scrollLeft = () => {
        setStartIndex(prevIndex => Math.max(prevIndex - 5, 0));
    };

    const scrollRight = () => {
        setStartIndex(prevIndex => Math.min(prevIndex + 5, movies.length - 1));
    };

    return(
    <div>
    <div style={{ borderLeft: '8px solid red'}}>
    <div className="flex justify-between items-center w-max mb-4 " >
        <h2 className="text-3xl font-medium px-4">Nouveauté</h2>
        <div id="button" style={{paddingRight: '2.5rem' , borderRight: '8px solid blue' }}>
            <button className="cursor-pointer text-xl mx-1 text-indigo-600 font-bold px-4" onClick={scrollLeft}>Prev</button>
            <button className="cursor-pointer text-xl mx-1 text-indigo-600 font-bold " onClick={startIndex !== 15 ? scrollRight : null}>Next</button>
        </div>
    </div>
</div>
</div>
)
}