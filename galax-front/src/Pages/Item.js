import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player/youtube';

export default function Film() {
    const { id } = useParams();
    const [videoId, setVideoId] = useState(null);
    const [movieTitle, setMovieTitle] = useState('');
    const types = "movie";

    useEffect(() => {
        const fetchFilmDetails = async () => {
            try {
                const api_path = `https://api.themoviedb.org/3/${types}/${id}?language=en-US&api_key=8b64af438dcdf72c27a5df692c7ebf1b`;
                const res = await fetch(api_path);
                const data = await res.json();
                setMovieTitle(data);
                console.log(data)
            } catch (error) {
                console.error('Error fetching movie details:', error);
            }
        };
         /* Adjust the max width as needed */


        const fetchFilmTrailer = async () => {
            try {
                const api_path = `https://api.themoviedb.org/3/${types}/${id}/videos?language=en-US&api_key=8b64af438dcdf72c27a5df692c7ebf1b`;
                const res = await fetch(api_path);
                const data = await res.json();
                
                const trailer = data.results.find(item => item.site === "YouTube" && item.type === "Trailer");
                if (trailer) {
                    setVideoId(trailer.key);
                }
            } catch (error) {
                console.error('Error fetching movie trailer:', error);
            }
        };

        fetchFilmDetails();
        fetchFilmTrailer();
    }, [id, types]);

    return (
    <div className=''>
        <div id="descrption" className=" max-w-2xl mx-auto justify-center px-4 sm:px-6 lg:px-8">
            <div className="w-auto " style={{ paddingLeft: '50%' }}>
                <div>
                 {videoId && <ReactPlayer url={`https://www.youtube.com/watch?v=${videoId}`} style={{ width: '100%' }} />}
                </div>
        <div className="flex items-left space-x-8 py-2">
            <img src={`https://image.tmdb.org/t/p/w500${movieTitle.poster_path}`} alt="#" style={{ maxWidth: '250px' }} />
            <div id='smalldescp' className='px-4 py-2'>
                {movieTitle && <h2 className="text-2xl mt-4">{movieTitle.original_title}</h2>}
                {movieTitle && <h2 className="text-2xl mt-4">{movieTitle.tagline}</h2>}
                {movieTitle && <h2 className="text-2xl mt-4">{movieTitle.status}</h2>}
                {movieTitle && <h2 className="text-2xl mt-4">{movieTitle.release_date}</h2>}
                {movieTitle && <h2 className="text-2xl mt-4">{movieTitle.genres[0].name}</h2>}
                {movieTitle && <h2 className="text-2xl mt-4">{movieTitle.budget}</h2>}
                {movieTitle && <h2 className="text-2xl mt-4">{movieTitle.popularity}</h2>}
            </div>
        </div>
    </div>
        </div>
</div>



    );
}
