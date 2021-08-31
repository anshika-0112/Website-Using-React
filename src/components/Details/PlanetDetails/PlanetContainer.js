import PlanetDetails from "./PlanetDetails";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const PlanetContainer=()=>
{
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

  return(
      <PlanetDetails handleGoBack={handleGoBack} planetDetails={planetDetails}/>
  )
}

export default PlanetContainer;