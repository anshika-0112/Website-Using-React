import useFetch from "../customHooks/useFetch";
import { Link } from "react-router-dom";

const Planet = () => {
  const [data, fetched] = useFetch("planets");
  let planetRows = <h1></h1>;
  if (fetched) {
    const planetData = data.results;
    planetRows = planetData.map((planet) => {
      const planetId=planet.url.split('/')[5];
      return <li><Link to={`/planets/${planetId}`} key={planet.url}>{planet.name}</Link></li>;
    });
  }
  return <div>{planetRows}</div>;
};
export default Planet;
