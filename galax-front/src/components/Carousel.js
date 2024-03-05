import React from 'react';
import ReactPlayer from 'react-player/youtube';

export default function Carousel({ videoId, imgLs }) {
    const listLength = imgLs.length
    return (
        
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <div className="flex w-full justify-center bg-black">
                    {videoId && <ReactPlayer url={`https://www.youtube.com/watch?v=${videoId}`} width={896} height={504}/>}
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href={`#slide${listLength + 1}`} className="btn btn-circle">❮</a> 
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>

            {imgLs.map((link, index) => (
                <div key={`slide${index + 2}`} id={`slide${index + 2}`} className="carousel-item relative w-full">
                    <img src={`https://image.tmdb.org/t/p/w1280${link.file_path}`} alt={`Item ${index + 2}`} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href={`#slide${index + 1}`} className="btn btn-circle">❮</a> 
                        <a href={index !== imgLs.length-1 ?`#slide${index + 3}`: `#slide1`} className="btn btn-circle">❯</a>
                    </div>
                </div>
            ))}
            
            
        </div>
    );
}
