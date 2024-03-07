import React from 'react';
import { Link } from 'react-router-dom'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons'

export default function Cards({ film, type}) {
    const rating = Math.round(film.vote_average * 10);
    function getClassByRate(vote) {
        if (vote >= 80) {
            return { className: 'text-lime-400 font-bold text-lg md:text-2xl', emoji: '😍' };
        } else if (vote >= 70) {
            return { className: 'text-lime-400 font-bold text-lg md:text-2xl', emoji: '😊' };
        } else if (vote >= 50) {
            return { className: 'text-yellow-400 font-bold text-lg md:text-2xl', emoji: '😐' };
        } else if (vote >= 30) {
            return { className: 'text-orange-400 font-bold text-lg md:text-2xl', emoji: '☹️' };
        } else {
            return { className: 'text-red-400 font-bold text-lg md:text-2xl', emoji: '🤬' };
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
                <div className="px-4 py-2">
                    <h3 className="font-bold text-white-800 text-xl mb-2 truncate">
                        {film.title}
                    </h3>
                    <div className="text-lg text-ellipsis">
                        <p className={getClassByRate(rating).className}>
                            {getClassByRate(rating).emoji}{rating}
                        </p>
                    </div>
                </div>
                <div className="py-6 px-10 pb-2">
                    <Link to={`/film/${film.id}`} className="btn btn-outline rounded-r-full rounded-l-full w-44">
                    <FontAwesomeIcon icon={faInfoCircle} />
                        Description
                    </Link>
                </div>
                <div className="py-2 px-10 pb-2">
                    <Link to="/watchlist" className="btn btn-info rounded-r-full rounded-l-full w-44">
                    <FontAwesomeIcon icon={faPlusCircle} />                        Add to Watchlist
                    </Link>
                </div>
            </div>
        </div>
    );
}