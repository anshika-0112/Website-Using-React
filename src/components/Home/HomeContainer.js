import {Home} from "./index"
import { useHistory } from "react-router-dom";

const HomeContainer = () => {
  const history = useHistory();
  const handleCategorySearch = (categoryName) => {
    console.log("history", history);
    history.push(`/search/${categoryName}`);
  };
  return <Home handleCategorySearch={handleCategorySearch} />;
};

export default HomeContainer;
