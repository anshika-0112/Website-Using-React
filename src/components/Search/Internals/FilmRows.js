import { Link, BrowserRouter as Router } from "react-router-dom";
const FilmRows = ({ searchList }) => {
  let filmRows = <h1></h1>;
  if (searchList) {
    filmRows = searchList.map((film) => {
      const filmId = film.url.split("/")[5];
      return (
        <h4 key={film.url}>
          <Router>
            <Link to={`/Films/${filmId}`} className="links">
              {film.title}
            </Link>
          </Router>
        </h4>
      );
    });
  }
  return (
    <>
      {searchList.length !== 0 ? (
        <div className="searchResults" data-testid="filmList">
          {filmRows}
        </div>
      ) : (
        <div>No matches Found</div>
      )}
    </>
  );
};

export default FilmRows;
