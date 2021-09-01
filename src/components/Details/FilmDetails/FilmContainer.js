import FilmDetails from "./FilmDetails";
import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";

const FilmContainer = () => {
  console.log("in film details");
  const [movieDetails, setMovieDetails] = useState(null);
  const { filmId } = useParams();
  let history = useHistory();
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
  const handleGoBack = () => {
    history.goBack();
  };
  return (
    <FilmDetails handleGoBack={handleGoBack} movieDetails={movieDetails} />
  );
}

export default FilmContainer;
