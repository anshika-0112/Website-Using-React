import useFetch from "../../customHooks/useFetch";
import { Link } from "react-router-dom";
import { setPlanetList } from "../../redux/details/detailActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { CATEGORIES } from "../../constants";
import { getList } from "../../redux/details/detailActions";

const Planet = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.categoryList.planetList);
  const fetched = useSelector((state) => state.categoryList.fetched);

  useEffect(() => {
    if (data.length === 0) {
      dispatch(getList(CATEGORIES.PLANET));
    }
  }, []);

  let planetRows = "";
  console.log("planet fetched", fetched);
  if (fetched) {
    console.log("in planetrows");
    console.log("planet data", data);
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
  }
  return <div>{planetRows}</div>;
};
export default Planet;
