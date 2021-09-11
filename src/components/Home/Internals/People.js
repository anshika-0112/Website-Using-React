import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchList } from "../../redux/details/detailActions";
import { useEffect } from "react";
import { CATEGORIES } from "../../constants";

const People = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.categoryList.peopleList);
  const fetched = useSelector((state) => state.categoryList.fetched);

  useEffect(() => {
    dispatch(fetchList(CATEGORIES.PEOPLE));
  }, []);

  let peopleRows = "";
  if (fetched) {
    peopleRows = data.map((people) => {
      const peopleId = people.url.split("/")[5];
      return (
        <h2 key={peopleId}>
          <Link to={`/People/${peopleId}`} className="links">
            {people.name}
          </Link>
        </h2>
      );
    });
  }
  return <div>{peopleRows}</div>;
};
export default People;
