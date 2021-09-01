import {Home} from "./index"
import React from "react";
import { useHistory } from "react-router-dom";

const HomeContainer = () => {
  const history = useHistory();
  const handleCategorySearch = (categoryName) => {
    history.push(`/dashboard/search/${categoryName}`);
  };
  return <Home handleCategorySearch={handleCategorySearch} />;
};

export default HomeContainer;
