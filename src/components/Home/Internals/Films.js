import { Link } from "react-router-dom";
import { fetchList } from "../../redux/details/detailActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { CATEGORIES } from "../../constants";

const Films = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.categoryList.filmList);
  const fetched = useSelector((state) => state.categoryList.fetched);

  useEffect(() => {
    dispatch(fetchList(CATEGORIES.FILM));
  }, []);

  let filmRows = "";
  if (fetched) {
    filmRows = data.map((film) => {
      const filmId = film.url.split("/")[5];
      return (
        <h2 key={filmId}>
          <Link to={`/Films/${filmId}`} className="links">
            {film.title}
          </Link>
        </h2>
      );
    });
  }
  return <div>{filmRows}</div>;
};
export default Films;
