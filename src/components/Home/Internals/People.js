import useFetch from "../../customHooks/useFetch";
import { Link } from "react-router-dom";
import { setPeopleList } from "../../redux/details/detailActions";
import { useDispatch, useSelector } from "react-redux";
import { getList } from "../../redux/details/detailActions";
import { CATEGORIES } from "../../constants";
import { useEffect } from "react";

const People = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.categoryList.peopleList);
  const fetched = useSelector((state) => state.categoryList.fetched);

  useEffect(() => {
    if (data.length === 0) dispatch(getList(CATEGORIES.PEOPLE));
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
    // dispatch(setPeopleList(data));
  }
  return <div>{peopleRows}</div>;
};
export default People;
