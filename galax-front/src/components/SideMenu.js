import React from "react";
import { NavLink } from "react-router-dom";

export default function SideMenu({ list, setGenre, modeGenre }) {
  const listgenre = list;

  function handleGenreClick (genreName,id) {
    console.log(modeGenre)
    setGenre((prevModeGenre) => ({
        isActive: prevModeGenre.selectedGenre !== genreName || !prevModeGenre.isActive,
        selectedGenre: prevModeGenre.selectedGenre !== genreName ? genreName : "",
        id: prevModeGenre.selectedGenre !== genreName ? id : "",
      }));
  };

  return (
    <div className="side-menu">
      <NavLink to="/home">
        <i
          className="fa-solid fa-arrow-left"
          id="arrow-btn"
          style={{ fontSize: "30px", marginBottom: "20px", color: "white" }}
        ></i>
      </NavLink>
      <h1 id="categorie">Catégories</h1>
      <section className="border">{/* Section Border */}</section>
      <ul>
        {listgenre.map((genre, index) => (
          <li key={index}>
            <button
              onClick={() => handleGenreClick(genre.name, genre.id)}
              className={`py-2 px-4 rounded ${modeGenre.isActive &&modeGenre.selectedGenre === genre.name? "bg-blue-500 text-white": "bg-gray-200 text-gray-800 hover:bg-blue-500 hover:text-white"}`}>
              {genre.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
