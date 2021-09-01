import { Link } from "react-router-dom";

const PlanetRows = ({ searchList }) => {
  let planetRows = "";
  if (searchList) {
    planetRows = searchList.map((planet) => {
      const planetId = planet.url.split("/")[5];
      return (
        <h4 key={planet.url}>
          <Link to={`/dashboard/planets/${planetId}`}  className="links">
            {planet.name}
          </Link>
        </h4>
      );
    });
  }
  return (
    <>
      {searchList.length !== 0 ? (
       <div className="searchResults">{planetRows}</div>
      ) : (
        <div>No matches Found</div>
      )}
    </>
  );
};

export default PlanetRows;
