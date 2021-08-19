import useFetch from "../customHooks/useFetch";
import Planet from "./Planet";
import Films from "./Films";
import People from "./People";
import { useHistory } from "react-router-dom";
const Home = () => {
  const history = useHistory();
  const handleCategorySearch = (categoryName) => {
    console.log("history", history);
    history.push(`/search/${categoryName}`);
  };
  return (
    <div>
      <h1>Home</h1>
      <div>
        <h2>Planet</h2>
        <Planet />
        <button onClick={() => handleCategorySearch("planets")}>
          View All
        </button>
      </div>
      <div>
        <h2>Films</h2>
        <Films />
        <button onClick={() => handleCategorySearch("films")}>View All</button>
      </div>
      <div>
        <h1>People</h1>
        <People />
      </div>
      <button onClick={() => handleCategorySearch("people")}>View All</button>
    </div>
  );
};

export default Home;
