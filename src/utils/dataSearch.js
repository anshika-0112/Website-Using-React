const dataSearch=async(categoryName,input,pageNumber,cb)=>
{
    const url=`https://swapi.dev/api/${categoryName}/?search=${input}&page=${pageNumber}`;
    const response=await fetch(url);
    const info=await response.json();
    cb(info)
}

export default dataSearch;