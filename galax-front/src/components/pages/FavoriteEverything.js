import React, { useEffect, useState } from "react";
import ListFav from "./ListFav.js";
import Cookies from "universal-cookie";
import axios from "axios";

function Favorite() {
  const cookies = new Cookies();
  const [listFav, setListFav] = useState([]);
  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await axios.get(`http://localhost:5050/getFav/${cookies.get('auth')}`);
        setListFav(response.data);
      } catch (error) {
        console.error("Error fetching favorites:", error);
      }
    };

    fetchFavorites();
  }, []);
  console.log(listFav)
  const listfilm = listFav[1]
  console.log(listfilm)
  return (
    <div className="films-body flex">
      <section className="film-container">
        <ListFav listFavor={listfilm} movie={"movie"}/>
      </section>
    </div>
  );
}

export default Favorite;
