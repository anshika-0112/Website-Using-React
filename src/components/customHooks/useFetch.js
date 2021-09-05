import { useEffect, useState } from "react";
import useCategoryList from "../../utils/useCategoryList";

const useFetch = (categoryName) => {
  const categoryList = useCategoryList(categoryName);
  const [fetched, setFetched] = useState(false);
  const [data, setData] = useState([]);
  const url = `https://swapi.dev/api/${categoryName}`;
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setData(data.results);
      setFetched(true);
    };
    if (categoryList.length === 0) fetchData();
    else {
      setData(categoryList);
      setFetched(true);
    }
  }, [categoryName]);
  return [data, fetched];
};
export default useFetch;