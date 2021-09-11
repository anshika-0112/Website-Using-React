import { Link } from "react-router-dom";
import { fetchList } from "../../redux/details/detailActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { CATEGORIES } from "../../constants";

const Planet = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.categoryList.planetList);
  const fetched = useSelector((state) => state.categoryList.fetched);

  useEffect(() => {
    dispatch(fetchList(CATEGORIES.PLANET));
  }, []);

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
  }
  return <div>{planetRows}</div>;
};
export default Planet;
