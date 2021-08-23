import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const PersonDetails = () => {
  let history=useHistory();
  const [personDetails, setPersonDetails] = useState(null);
  const { peopleId } = useParams();
  useEffect(() => {
    const fetchPersonInfo = async () => {
      const url = `https://swapi.dev/api/people/${peopleId}`;
      const personResponse = await fetch(url);
      const personInfo = await personResponse.json();
      console.log(personInfo);
      setPersonDetails(personInfo);
    };
    fetchPersonInfo();
  }, [peopleId]);
  const handleGoBack=()=>
  {
    history.goBack();
  }
  return (
    <div className="details">
      <h1>Person Details</h1>

      {personDetails ? (
        <div>
          <h2><span className="boldText">Name: </span>{personDetails.name}</h2>
          <p><span className="boldText">Birth Year: </span>{personDetails.birth_year}</p>
          <p><span className="boldText">Gender: </span>{personDetails.gender}</p>
          <p><span className="boldText">Height: </span>{personDetails.height}</p>
        </div>
      ) : null}
      <button className="search-btn" onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export default PersonDetails;
