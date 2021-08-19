import useFetch from "../customHooks/useFetch";
import { Link } from "react-router-dom";
const People = () => {
  const [data, fetched] = useFetch("people");
  let peopleRows = <h1></h1>;
  if (fetched) {
    const peopleData = data.results;
    peopleRows = peopleData.map((people) => {
      console.log(people);
      const peopleId=people.url.split('/')[5];
      return <li><Link to={`/People/${peopleId}`} key={people.peopleId}>{people.name}</Link></li>;
    });
  }
  return <div>{peopleRows}</div>;
};
export default People;
