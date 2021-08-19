import PlanetTable from "../PlanetTable/PlanetTable";
import { Link } from "react-router-dom";

const Search=({handleInput,handleCategorySearch,searchList,input,cName})=>
{
    let planetRows=<h1></h1>;
    let filmRows=<h1></h1>;
    let peopleRows=<h1></h1>;
    if(searchList){
    planetRows = searchList.map((planet) => {
        const planetId=planet.url.split('/')[5];
        return <li><Link to={`/planets/${planetId}`} key={planet.url}>{planet.name}</Link></li>;
      });}
    if(searchList)
    {
    filmRows=searchList.map((film)=>
    {
        const filmId=film.url.split('/')[5];
        return <li><Link to={`/Films/${filmId}`} key={film.url}>{film.title}</Link></li>;   
    });}
    if(searchList)
    {
        peopleRows=searchList.map((person)=>
        {
            const personId=person.url.split('/')[5];
            return <li><Link to={`/People/${personId}`} key={person.url}>{person.name}</Link></li>
        })
    }

    return(
        <div>
        <h1>Search</h1>
        <input value={input} onChange={handleInput}></input>
        <button onClick={handleCategorySearch}>Submit</button>
        {searchList && cName==="planets"?planetRows:null}
        {searchList && cName==="films"?filmRows:null}
        {searchList && cName==="people"?peopleRows:null}
        </div>
    )
}

export default Search;