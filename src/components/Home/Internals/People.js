import useFetch from "../../customHooks/useFetch";
import { Link } from "react-router-dom";

const People = () => {
  const [data, fetched] = useFetch("people");

  let peopleRows = null;

  if (fetched) {
    const peopleData = data.results;
    peopleRows = peopleData.map((people) => {
      console.log(people);
      const peopleId = people.url.split("/")[5];
      return (
        <h2>
          <Link
            to={`/People/${peopleId}`}
            key={people.peopleId}
            className="links"
          >
            {people.name}
          </Link>
        </h2>
      );
    });
  }
  return <div data-testid="people">{peopleRows}</div>;
};
export default People;
