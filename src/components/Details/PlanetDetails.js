import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const PlanetDetails = () => {
  let history=useHistory();
  const [planetDetails, setPlanetDetails] = useState(null);
  const { planetId } = useParams();
  const handleGoBack=()=>
  {
    history.goBack();
  }
  useEffect(() => {
    const fetchPlanetInfo = async () => {
      const url = `https://swapi.dev/api/planets/${planetId}`;
      const planetResponse = await fetch(url);
      const planetInfo = await planetResponse.json();
      console.log("planetInfo", planetInfo);
      setPlanetDetails(planetInfo);
    };
    fetchPlanetInfo();
  }, [planetId]);
  return (
    <div className="details" id="planetDetailContainer">
      <h1>Details</h1>

      {planetDetails ? (
        <div>
          <p><span className="boldText">Name: </span>{planetDetails.name}</p>
          <p><span className="boldText">Climate: </span>{planetDetails.climate}</p>
          <p><span className="boldText">Population: </span>{planetDetails.population}</p>
          <p><span className="boldText">Diameter: </span>{planetDetails.diameter}</p>
          <p><span className="boldText">Orbital Period: </span>{planetDetails.orbital_period}</p>
          <p><span className="boldText">Terrain: </span>{planetDetails.terrain}</p>
          <p><span className="boldText">Gravity: </span>{planetDetails.gravity}</p>
          <p><span className="boldText">Surface Water: </span>{planetDetails.surface_water}</p>
        </div>
      ) : null}
      <button className="search-btn" onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export default PlanetDetails;
