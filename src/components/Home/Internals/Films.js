import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getList } from "../../redux/details/detailActions";
import { CATEGORIES } from "../../constants";
import { useEffect } from "react";

const Films = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.categoryList.filmList);
  const fetched = useSelector((state) => state.categoryList.fetched);

  useEffect(() => {
    if (data.length === 0) dispatch(getList(CATEGORIES.FILM));
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
    // dispatch(setFilmList(data));
  }
  return <div>{filmRows}</div>;
};
export default Films;
