import React,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import Cookies from 'universal-cookie';
import axios from 'axios';

export default function Cards({ film , movie, listFavorite }) {
    const cookies = new Cookies();

    const [isFav, setIsFav] = useState(false);

    useEffect(() => {
        setIsFav(listFavorite && listFavorite.includes(String(film.id)));
    }, [film.id, listFavorite]);

    const submitFav = (e) => {
        setIsFav(isFav => !isFav);
    
        const value = cookies.get("auth")
        const fav = {
            idUser: value,
            idTmdb: e
        }
        axios.post("http://localhost:5050/saveFilm", fav)
            .then((res ) => {
                if(res.data[0] === "Success"){
                    console.log("yes")
                } else {
                    console.log(res.data);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }
      
    const rating = Math.round(film.vote_average * 10);
    
    function getClassByRate(vote) {
        switch (true) {
            case (vote >= 80) :
                return { className: 'text-lime-400 font-bold text-lg md:text-2xl', emoji: '😍' };
            case (vote >= 70) :
                return { className: 'text-lime-400 font-bold text-lg md:text-2xl', emoji: '😊' };
            case (vote >= 50) :
                return { className: 'text-yellow-400 font-bold text-lg md:text-2xl', emoji: '😐' };
            case (vote >= 30) :
                return { className: 'text-orange-400 font-bold text-lg md:text-2xl', emoji: '☹️' };
            case (vote !== 0):
                return { className: 'text-red-400 font-bold text-lg md:text-2xl', emoji: '🤬' };
            default:
                return { className: 'text-gray-400 font-bold text-lg md:text-2xl', emoji: 'No Review' };
        }
    }

    return (
        <div className="flex-none w-1/7 md:w-1/5 h-max  mr-2 md:mr-4  flex flex-col">
            <div className="aspect-w-16 aspect-h-9 px-4">
                <img
                    className="object-cover h-80  shadow-md hover:shadow-xl rounded-lg"
                    src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
                    alt=""
                />
            </div>
            <div className="flex-grow flex flex-col justify-between">
                <div className="px-4 py-2 overflow-hidden">
                    <h3 className="font-bold text-white-800 text-xl mb-2 h-12 truncate">
                        {film.title}
                    </h3>
                    <div className="text-lg text-ellipsis">
                        <p className={getClassByRate(rating).className}>
                            {getClassByRate(rating).emoji}{rating === 0 ? "" : rating}
                        </p>
                    </div>
                </div>
                <div className="py-6 px-10 pb-2">
                    <Link to={`/${movie}/${film.id}`} className="btn btn-outline rounded-r-full rounded-l-full w-44">
                        <FontAwesomeIcon icon={faInfoCircle} />
                        Description
                    </Link>
                </div>
                <div className="py-2 px-10 pb-2">
                    <button className="btn btn-info rounded-r-full rounded-l-full w-44" onClick={() => submitFav(film.id)}>
                        <FontAwesomeIcon icon={faPlusCircle} /> {isFav ? "Remove from Watchlist" : "Add to Watchlist"}
                    </button>
                </div>
            </div>
        </div>
    );
}
