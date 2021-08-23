import { PeopleRows,FilmRows,PlanetRows } from "./index";
import "../../componentStyle/search.css"
const Search = ({
  handleInput,
  handleCategorySearch,
  searchList,
  input,
  cName,
}) => {
  return (
    <div id="searchContainer">
      <h1>Search</h1>
      <input value={input} onChange={handleInput} id="searchInput" placeholder="Search..."></input>
      <button onClick={handleCategorySearch} className="search-btn">Submit</button>
      {searchList && cName === "planets" ? (
        <PlanetRows searchList={searchList} />
      ) : null}
      {searchList && cName === "films" ? (
        <FilmRows searchList={searchList} />
      ) :null}
      {searchList && cName === "people" ? (
        <PeopleRows searchList={searchList} />
      ) : null}
    </div>
  );
};

export default Search;
