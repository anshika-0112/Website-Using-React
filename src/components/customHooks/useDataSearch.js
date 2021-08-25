const useDataSearch=()=>
{
    const [pageNumber,setPageNumber]=useState(1);
    const url=`https://swapi.dev/api/people/?page=${pageNumber}`;
}