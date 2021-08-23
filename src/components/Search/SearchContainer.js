import { useState } from "react";
import { useParams } from "react-router-dom";
import {Search} from "./index";

const SearchContainer=()=>
{
    const [input,setInput]=useState("");
    const [searchList,setSearchList]=useState(null);
    const {cName}=useParams();
    const handleInput=(e)=>
    {
        setInput(e.target.value);
    }
    const handleCategorySearch=()=>
    {
        // const[data,fetched]=useFetch(cName,input);
        // if(fetched)
        // setSearchList(data.results);
        fetchDetails(input);
    }
    const fetchDetails=async(input)=>{
        
        const url=`https://swapi.dev/api/${cName}/?search=${input}`;
        console.log("url",url)
        const response=await fetch(url);
        const searchList=await response.json();
        setSearchList(searchList.results);
    }
    return(
        <Search handleInput={handleInput} handleCategorySearch={handleCategorySearch} searchList={searchList} input={input} cName={cName}/>
    )
}

export default SearchContainer;