import useFetch from "../customHooks/useFetch";
import {Link} from "react-router-dom";
const Films = () => {
  const [data, fetched] = useFetch("films");
  let filmRows = <h1></h1>;
  if (fetched) {
    const filmData = data.results;
    filmRows = filmData.map((film) => {
      const filmId=film.url.split('/')[5];
      console.log(filmId)
      return <li><Link to={`/Films/${filmId}`} key={filmId}>{film.title}</Link></li>;
    });
  }
  return <div>{filmRows}</div>;
};
export default Films;
