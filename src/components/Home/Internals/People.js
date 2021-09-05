import useFetch from "../../customHooks/useFetch";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setPeopleList } from "../../redux/details/detailActions";

const People = () => {
  const dispatch = useDispatch();
  const [data, fetched] = useFetch("people");
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
    dispatch(setPeopleList(data));
  }
  return <div>{peopleRows}</div>;
};
export default People;
