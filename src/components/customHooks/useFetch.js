import { useEffect, useState,useContext } from "react";
const useFetch = (categoryName) => {
  console.log("here");
  const [fetched, setFetched] = useState(false);
  const [data, setData] = useState([]);
  const url = `https://swapi.dev/api/${categoryName}`;
  useEffect(() => {
    const fetchData = async () => {
      console.log("here");
      const response = await fetch(url);
      console.log("response", response);
      const data = await response.json();
      setData(data);
      setFetched(true);
      console.log("data", data);
    };
    fetchData();
  }, [categoryName]);
  return [data, fetched];
};
export default useFetch;