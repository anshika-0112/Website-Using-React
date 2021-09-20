import useFetch from "../../customHooks/useFetch";
import { Link } from "react-router-dom";

const Planet = () => {
  const [data, fetched] = useFetch("planets");
  let planetRows = <h1></h1>;
  if (fetched) {
    const planetData = data.results;
    planetRows = planetData.map((planet) => {
      const planetId = planet.url.split("/")[5];
      return (
        <h2 key={planet.url}>
          <Link to={`/planets/${planetId}`} className="links">
            {planet.name}
          </Link>
        </h2>
      );
    });
  }
  return <div data-testid="planet">{planetRows}</div>;
};
export default Planet;
