import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Carousel from '../components/Carousel';

export default function Film() {
    const  Gifls = [
        "https://media.tenor.com/5q1B7RH7MiwAAAAi/laundry-dragonmaid-california-girls-dance.gif",
        "https://media1.tenor.com/m/2nbeMFboylgAAAAd/meme-get-real.gif",
        "https://media1.tenor.com/m/fqmrYnlXilIAAAAd/black-man.gif",
        "https://media1.tenor.com/m/Tn2CeYtR2MoAAAAd/rate-my-fit.gif",
        "https://media1.tenor.com/m/EQZxTkYf-yEAAAAC/did-you-pray-today.gif",
        "https://media1.tenor.com/m/eGhrTKgbeDoAAAAC/kenjaku-kenjaku-jjk.gif",
        "https://media1.tenor.com/m/Ow6kKhsT7dgAAAAC/pppoof.gif",
        "https://media1.tenor.com/m/qsqwmV7R_-oAAAAd/kung-fu-black-guy.gif",
        "https://media1.tenor.com/m/hOIV57wVspUAAAAd/garfield-breakdance.gif",
        "https://media1.tenor.com/m/YJbAdOEC4HAAAAAd/flute-dome-jay-easy.gif",
        "https://media1.tenor.com/m/cha_3bjlOH0AAAAd/oh-im-sorry-to-hear-that.gif",
        "https://media1.tenor.com/m/P7_tlbMmFDUAAAAd/my-name-is-skyler-white-yo-emilseljeseth.gif",
        "https://media1.tenor.com/m/Dlm2KRGHdykAAAAd/aminagifs.gif",
        "https://media1.tenor.com/m/YaAjEs7SuXIAAAAd/look-who-fell-asleep-first.gif",
        "https://media1.tenor.com/m/NdcyUrhgewsAAAAd/ronaldo-award.gif",
        "https://media1.tenor.com/m/2hlBtZkC9JoAAAAd/ultraballin-ultrakill.gif"
    ];

    const { id } = useParams();
    const [videoId, setVideoId] = useState(null);
    const [movieTitle, setMovieTitle] = useState('');
    const [actorLs, setActorLs] = useState([]);
    const [reviewls, setReviewls] = useState([]);
    const [imgLs, setImgLs] = useState([]);
    const types = "movie";
    
    useEffect(() => {
        const fetchFilmDetails = async () => {
            try {
                const api_path = `https://api.themoviedb.org/3/${types}/${id}?language=en-US&api_key=8b64af438dcdf72c27a5df692c7ebf1b`;
                const res = await fetch(api_path);
                const data = await res.json();
                setMovieTitle(data);
            } catch (error) {
                console.error('Error fetching movie details:', error);
            }
        };
        const fetchReview = async () => {
            try {
                const api_path = `https://api.themoviedb.org/3/${types}/${id}/reviews?include_image_language=en%2Cnull&api_key=8b64af438dcdf72c27a5df692c7ebf1b`;
                const res = await fetch(api_path);
                const data = await res.json();
                setReviewls(data.results);
            } catch (error) {
                console.error('Error fetching movie details:', error);
            }
        };
        const fetchActorDetails = async () => {
            try {
                const api_path = `https://api.themoviedb.org/3/${types}/${id}/credits?language=en-US&api_key=8b64af438dcdf72c27a5df692c7ebf1b`;
                const res = await fetch(api_path);
                const data = await res.json();
                
                setActorLs(data.cast.slice(0, 20));
                console.log(data.cast.slice(0, 20));
                
                
            } catch (error) {
                console.error('Error fetching movie details:', error);
            }
        };
        
        const fetchImgLs = async () => {
            try {
                const api_path = `https://api.themoviedb.org/3/${types}/${id}/images?include_image_language=en%2Cnull&api_key=8b64af438dcdf72c27a5df692c7ebf1b`;
                const res = await fetch(api_path);
                const data = await res.json();
                let ls = data.backdrops.slice(5, 10);
                console.log(ls)
                const imageUrls = ls;
                setImgLs(imageUrls);
            } catch (error) {
                console.error('Error fetching movie images:', error);
            }
        };
        

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
        fetchImgLs();
        fetchActorDetails();
        fetchFilmTrailer();
        fetchReview();
    }, [id, types]);
    
    return (
        <div className='bg-galactic-blue dark:bg-nebula-purple'>
            <div id="description" className="flex justify-center items-center px-4 sm:px-6 lg:px-8" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div className="w-auto max-w-4xl justify-center items-center" style={{ display: 'inline-block' }}>
                    
                 <Carousel videoId={videoId} imgLs={imgLs} />
                        
                        <div className="flex items-start space-x-8 my-2 px-2">
                        <img src={`https://image.tmdb.org/t/p/w500${movieTitle.poster_path}`} alt="#" style={{ maxWidth: '500px' }} className='px-3' />
                        <div className='flex flex-col px-2 py-2'>
                            {movieTitle && <h2 className="text-3xl mt-2 font-bold border-l-4 border-meteor-orange pl-2 ">{movieTitle.title}</h2>}
                            {movieTitle && <h2 className="text-lg mt-4 text-starlight-white">Tagline: {movieTitle.tagline}</h2>}
                            {movieTitle && <h2 className="text-lg mt-2 text-starlight-white">Status: {movieTitle.status}</h2>}
                            {movieTitle && <h2 className="text-lg mt-2 text-starlight-white">Release date: {movieTitle.release_date}</h2>}
                            {movieTitle && <h2 className="text-lg mt-2 text-starlight-white">Genres: {movieTitle.genres[0].name}, {movieTitle.genres[1].name}</h2>}
                            {movieTitle && <h2 className="text-lg mt-2 text-starlight-white">Budget: {movieTitle.budget}</h2>}
                            {movieTitle && <h2 className="text-lg mt-2 text-starlight-white">Popularity: {movieTitle.popularity}</h2>}
                        </div>

                    </div>
                    {/* Flag TODO */}
                    <div className="my-12 border-t-4 border-meteor-orange">
                        <div className='text-2xl font-bold my-4 px-2 text-starlight-white'>
                            Overview:
                        </div>
                        <div className=''>
                            {movieTitle && <h2 className="text-lg text-starlight-white">{movieTitle.overview}</h2>}
                        </div>
                        <div className='text-2xl font-bold my-4 px-2 text-starlight-white'>
                            Production Companies:
                        </div>
                        <div className="flex flex-wrap justify-start">
                            {movieTitle && movieTitle.production_companies.map(company => (
                                <div className="bg-celestial-gold w-64  bg-blend-color border border-starlight-white h-24 shadow-md p-3 m-3 flex items-center">
                                    <div className='w-28 flex justify-center px-2'>

                                    <img src={company.logo_path ? `https://image.tmdb.org/t/p/w500${company.logo_path}` : gif(Gifls)} 
    alt="Company Logo" className=" max-w-auto h-16 mr-2" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold overflow-hidden text-starlight-white">{company.name}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    
                    <div className="my-12 border-t-4 border-meteor-orange">
                    <div className='text-2xl font-bold my-4 px-2 text-starlight-white'>
                            Cast:
                        </div>

                        <div className="flex flex-wrap justify-start">
                            {actorLs && actorLs.map(actor => (
                                <div key={actor.id} className="w-36 h-40 rounded-lg overflow-hidden m-2 relative"
                                    style={{backgroundImage: actor.profile_path ? `url(https://image.tmdb.org/t/p/w500${actor.profile_path})` : `url(${gif(Gifls)})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
                                <div className="h-full bg-gray-800 bg-opacity-70 flex flex-col justify-end p-2">
                                    <h3 className="text-lg font-semibold text-white">{actor.name}</h3>
                                    <p className="text-sm text-gray-300">{actor.character}</p>
                                </div>
                                </div>
                            ))}
                            </div>
                        </div>
                    
                        {/* Actor List Content */}
                    <div className="my-12 border-t-4 border-meteor-orange">
                    <div className='text-2xl font-bold my-4 px-2 text-starlight-white'>
                            Review:
                        </div>
                        <div className="flex flex-wrap justify-start">
                            {reviewls && reviewls.map(review => (
                                <div key={review.id} className="flex flex-col w-5/12 justify-end ml-9 mt-3">
                                <div className="h-full bg-gray-800 bg-opacity-70 flex flex-col  pt-4 pl-4 pb-4 pr-4">
                                    <h3 className="text-lg font-semibold text-white flex">
                                    {review.author_details.avatar_path ? (
    <img
        src={`https://image.tmdb.org/t/p/w500${review.author_details.avatar_path}`}
        alt={review.author_details.name}
        className="w-20 h-20 object-cover rounded-full flex-col"
    />
) : (
    <img
        src={gif(Gifls)}
        alt={review.author_details.name}
        className="w-20 h-20 object-cover rounded-full flex-col"
    />
)}

                                            <div className='flex-col  ml-3'>
                                            <div className=' text-3xl'>
                                            {review.author_details.username}
                                            </div>
                                            {rating(review.author_details.rating)}
                                            </div>
                                            </h3>
                                            <div id="content" className='mt-3'>
    {review.content && (
        <div dangerouslySetInnerHTML={{ __html: phrases(review.content) }} />
    )}
</div>
                                </div>
                                </div>
                            ))}
                        </div>
                        </div>
                    </div>
                    </div>
                    {/* Films Like These TODO */}
                    <div>
                        {/* Films Like These Content */}
                    </div>
                </div>
           
       


    );
};

function gif(gifs) {
   
    let randomIndex = Math.floor(Math.random() * gifs.length);
    let gif = gifs[randomIndex];
    gifs.splice(randomIndex, 1);
    return gif;
}
function rating( value ) {
    let color = '';
    let rating ='';
    if (value < 6) {
        color = 'bg-red-500';
        rating = 'This is so ass 🤮'
    } else if (value <= 7) {
        color = 'bg-orange-500';
        rating = 'Mid as hell 🥱'
    
    } else if (value <= 8) {
        color = 'bg-green-500';
        rating = 'They cook a bit👀'
    } else {
        color = 'bg-green-800';
        rating = 'PEAK FICTION✍️🔥'
    }

    return (
        <div className='flex justify-start w-64'>
            <div className='flex-col'>
                <div className={`rounded-xl w-12 h-12 flex items-center justify-center ${color} mt-3`}>
                    <h1 className="text-white text-3xl">{value}</h1>
                </div>
            </div>
            <div className='flex-col my-2 mx-4 w-5/5 text-1xl'>
                <div className='flex my-auto'>
                    Verdict: <br />
                    
                    {rating}
                </div>
            </div>
        </div>
    );
}

function phrases(phrase) {
    const sentences = phrase.split('. ');
    let phras = sentences.slice(0, 7).join('. ');
    if(!phras.endsWith('.')){
        phras+= "."
    }
    return phras;
}