import { Link } from "react-router-dom";

const PeopleRows = ({ searchList }) => {
  let peopleRows = "";

  if (searchList) {
    peopleRows = searchList.map((person) => {
      const personId = person.url.split("/")[5];
      return (
        <h4 key={person.url}>
          <Link to={`/People/${personId}`}  className="links">
            {person.name}
          </Link>
        </h4>
      );
    });
  }
  return (
    <>
      {searchList.length !== 0 ? (
        <div className="searchResults">{peopleRows}</div>
      ) : (
        <div>No matches Found</div>
      )}
    </>
  );
};

export default PeopleRows;
