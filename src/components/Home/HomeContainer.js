import { Home } from "./index";
import React from "react";
import { useHistory } from "react-router-dom";

const HomeContainer = () => {
  const history = useHistory();
  const handleCategorySearch = (categoryName) => {
    console.log("category name", categoryName);
    history.push(`/search/${categoryName}`);
  };
  return <Home handleCategorySearch={handleCategorySearch} />;
};

export default HomeContainer;
