import { useState, useEffect, useRef, useCallback } from "react";
import { useParams } from "react-router-dom";
import { Search } from "./index";
import dataSearch from "../../utils/dataSearch";
import useCategoryList from "../../utils/useCategoryList";

const SearchContainer = () => {
  const { cName } = useParams();
  const categoryList=useCategoryList(cName);

  const [searchList, setSearchList] = useState(categoryList);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);
  const [input, setInput] = useState("");

  useEffect(() => {
    if (input) setSearchList([]);
  }, [input]);

  useEffect(() => {
    const fetchData = () =>
      dataSearch(cName, input, pageNumber, (data) => {
        setLoading(false);
        if (data.next) {
          setHasMore(true);
        } else {
          setHasMore(false);
        }
        if (data && data.results) {
         
          setSearchList((prevList) => {
            console.log("data results",data.results,prevList);
            return [...new Set([...prevList, ...data.results])];
          });
        }
      });

    if (
      (searchList.length !== 0 && pageNumber !== 1) ||
      searchList.length === 0 ||
      input
    ) {
      fetchData();
    } else if (searchList.length !== 0 && pageNumber === 1) {
      setLoading(false);
    }
  }, [input, pageNumber]);

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
