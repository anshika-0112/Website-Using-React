import { Link } from "react-router-dom";
const FilmRows = ({ searchList }) => {
  let filmRows = "";
  if (searchList) {
    filmRows = searchList.map((film) => {
      const filmId = film.url.split("/")[5];
      return (
        <h4 key={film.url} >
          <Link to={`/dashboard/Films/${filmId}`} className="links">
            {film.title}
          </Link>
        </h4>
      );
    });
  }
  return (
    <>
      {searchList.length !== 0 ? (
        <div className="searchResults">{filmRows}</div>
      ) : (
        <div>No matches Found</div>
      )}
    </>
  );
};

export default FilmRows;
