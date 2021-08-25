import { useState, useContext, useEffect,useRef,useCallback } from "react";
import { useParams } from "react-router-dom";
import { searchListContext } from "../context";
import { Search } from "./index";

const SearchContainer = () => {
  const [searchList, setSearchList] = useState(null);
  const { cName } = useParams();
  
  const [input, setInput] = useState("");
  const fetchDetails = async (input) => {
    const url = `https://swapi.dev/api/${cName}/?search=${input}`;
    console.log("url", url);
    const response = await fetch(url);
    const searchList = await response.json();
    setSearchList(searchList.results);
  };
  useEffect(() => {
    fetchDetails("");
  }, []);
  
  const handleInput = (e) => {
    setInput(e.target.value);
    fetchDetails(input);
  };
  const handleCategorySearch = () => {
    // const[data,fetched]=useFetch(cName,input);
    // if(fetched)
    // setSearchList(data.results);
    
  };

  return (
    <Search
      handleInput={handleInput}
      handleCategorySearch={handleCategorySearch}
      searchList={searchList}
      input={input}
      cName={cName}
    />
  );
};

export default SearchContainer;
