import useFetch from "../../customHooks/useFetch";
import { Link } from "react-router-dom";

const Films = () => {
  const [data, fetched] = useFetch("films");
  let filmRows = "";
  if (fetched) {
    const filmData = data.results;
    filmRows = filmData.map((film) => {
      const filmId = film.url.split("/")[5];
      console.log("filmId", filmId);
      return (
        <h2>
          <Link to={`/dashboard/Films/${filmId}`} key={filmId} className="links">
            {film.title}
          </Link>
        </h2>
      );
    });
  }
  return <div>{filmRows}</div>;
};
export default Films;
