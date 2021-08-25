import { useState } from "react";
import { searchListContext } from "../context";
import Router from "../Router/Router";
const SearchListProvider=()=>
{
    const [searchList,setSearchList]=useState(null);
    return(
        <searchListContext.Provider value={{searchList,setSearchList}}>
            <Router/>
        </searchListContext.Provider>
    )
}
export default SearchListProvider;