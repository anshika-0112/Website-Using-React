import useFetch from "../../customHooks/useFetch";
import { Link } from "react-router-dom";
import { setFilmList } from "../../redux/details/detailActions";
import { useDispatch } from "react-redux";

const Films = () => {
  const dispatch=useDispatch();
  const [data, fetched] = useFetch("films");
  let filmRows = "";
  if (fetched) {
    const filmData = data.results;
    filmRows = filmData.map((film) => {
      const filmId = film.url.split("/")[5];
      console.log("filmId", filmId);
      return (
        <h2 key={filmId}>
          <Link to={`/Films/${filmId}`} className="links">
            {film.title}
          </Link>
        </h2>
      );
    });
    dispatch(setFilmList(data.results));
  }
  return <div>{filmRows}</div>;
};
export default Films;
