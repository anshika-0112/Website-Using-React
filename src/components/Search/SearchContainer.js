import { useState, useEffect, useRef, useCallback } from "react";
import { useParams } from "react-router-dom";
import { Search } from "./index";
import dataSearch from "../../utils/dataSearch";

const SearchContainer = () => {
  const [searchList, setSearchList] = useState([]);
  const { cName } = useParams();
  const [loading, setLoading] = useState(true);
  const [input, setInput] = useState("");
  const [hasMore, setHasMore] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);
  useEffect(() => {
    dataSearch(cName, input, pageNumber, (data) => {
      setLoading(false);
      if (data.next) {
        setHasMore(true);
      } else {
        setHasMore(false);
      }
      if (data && data.results) {
        console.log("here");
        setSearchList((prevList) =>{ return [...new Set([...prevList, ...data.results])]})
      }
    });
  }, [input,pageNumber]);
  useEffect(() => {
    setSearchList([]);
  }, [input]);
  console.log("search list", searchList);

  const observer = useRef();
  const lastElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
          setLoading(true);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );
  const handleInput = (e) => {
    setInput(e.target.value);
    setPageNumber(1);
    setLoading(true);
  };

  return (
    <Search
      handleInput={handleInput}
      searchList={searchList}
      input={input}
      cName={cName}
      lastElementRef={lastElementRef}
      loading={loading}
      hasMore={hasMore}
    />
  );
};

export default SearchContainer;
