import { useEffect, useState } from "react";
import { useParams,useHistory } from "react-router-dom";
import "../../componentStyle/details.css";

const FilmDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const { filmId } = useParams();
  let history=useHistory();
  useEffect(() => {
    const fetchFilmInfo = async () => {
      const url = `https://swapi.dev/api/films/${filmId}`;
      const movieResponse = await fetch(url);
      const movieInfo = await movieResponse.json();
      console.log(movieInfo);
      setMovieDetails(movieInfo);
    };
    fetchFilmInfo();
  }, [filmId]);
  const handleGoBack=()=>
  {
    history.goBack();
  }
  return (
    <div className="detailContainer" id="filmDetailContainer">
      <h1>Movie Details</h1>

      {movieDetails ? (
        <div className="details" >
          <h2>{movieDetails.title}</h2>
          <p><span className="boldText">Plot: </span>{movieDetails.opening_crawl}</p>
          <p><span className="boldText">Created: </span>{movieDetails.created}</p>
          
          <p><span className="boldText">Released: </span>{movieDetails.release_date}</p>
          <p><span className="boldText">Producer: </span>{movieDetails.producer}</p>
          <p><span className="boldText">Director: </span>{movieDetails.director}</p>
        </div>
      ) : null}
      <button className="search-btn" onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export default FilmDetails;
