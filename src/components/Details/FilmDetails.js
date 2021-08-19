import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const FilmDetails=()=>
{
    const [movieDetails,setMovieDetails]=useState(null);
    const {filmId}=useParams();
    useEffect(()=>
    {
        const fetchFilmInfo=async()=>
        {
            const url=`https://swapi.dev/api/films/${filmId}`;
            const movieResponse=await fetch(url);
            const movieInfo=await movieResponse.json();
            console.log(movieInfo)
            setMovieDetails(movieInfo);
        }
        fetchFilmInfo();
    },[filmId])
    return(
        <div><h1>Details</h1>

        {movieDetails?<div><p>{movieDetails.title}</p><p>
        {movieDetails.opening_crawl}
        </p>
        <p>{movieDetails.created}</p>
        <p>{movieDetails.director}</p>

        </div>:null}
        
        </div>
    );
}

export default FilmDetails;