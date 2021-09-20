import { Link, BrowserRouter as Router } from "react-router-dom";

const PlanetRows = ({ searchList }) => {
  let planetRows = <h1></h1>;
  if (searchList) {
    planetRows = searchList.map((planet) => {
      const planetId = planet.url.split("/")[5];
      return (
        <h4 key={planet.url}>
          <Link to={`/planets/${planetId}`} className="links">
            {planet.name}
          </Link>
        </h4>
      );
    });
  }
  return (
    <>
      {console.log("searched", searchList.length)}
      {searchList.length !== 0 ? (
        <div className="searchResults" data-testid="planetList">
          {planetRows}
        </div>
      ) : (
        <div>No matches Found</div>
      )}
    </>
  );
};

export default PlanetRows;
