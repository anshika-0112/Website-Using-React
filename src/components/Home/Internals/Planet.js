import useFetch from "../../customHooks/useFetch";
import { Link } from "react-router-dom";
import { setPlanetList } from "../../redux/details/detailActions";
import { useDispatch } from "react-redux";

const Planet = () => {
  const dispatch = useDispatch();
  const [data, fetched] = useFetch("planets");
  let planetRows = "";
  if (fetched) {
    planetRows = data.map((planet) => {
      const planetId = planet.url.split("/")[5];
      return (
        <h2 key={planet.url}>
          <Link to={`/planets/${planetId}`} className="links">
            {planet.name}
          </Link>
        </h2>
      );
    });
    dispatch(setPlanetList(data));
  }
  return <div>{planetRows}</div>;
};
export default Planet;
