import { useSelector } from "react-redux"

const useCategoryList=(categoryName)=>
{
    const peopleList=useSelector(state=>state.categoryList.peopleList);
    const filmList=useSelector(state=>state.categoryList.filmList);
    const planetList=useSelector(state=>state.categoryList.planetList);
    console.log("planet list",planetList);
    switch(categoryName)
    {
        case "people":return peopleList;
        case "films":return filmList;
        case "planets":return planetList;
        default:return [];
    }
}
export default useCategoryList;