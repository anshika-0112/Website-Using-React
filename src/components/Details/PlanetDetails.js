import PlanetTable from "../PlanetTable/PlanetTable";
import { useParams } from "react-router";
import { useEffect,useState } from "react";
const PlanetDetails=()=>
{
    console.log("i am here")
    const [planetDetails,setPlanetDetails]=useState(null);
    const {planetId}=useParams();
    useEffect(()=>
    {
        const fetchPlanetInfo=async()=>
        {
            const url=`https://swapi.dev/api/planets/${planetId}`;
            const planetResponse=await fetch(url);
            const planetInfo=await planetResponse.json();
            console.log("planetInfo",planetInfo)
            setPlanetDetails(planetInfo);
        }
        fetchPlanetInfo();
    },[planetId])
    return(
        <div><h1>Details</h1>

        {planetDetails?<div><p>{planetDetails.name}</p>
        <p>
        {planetDetails.climate}
        </p>
        <p>{planetDetails.population}</p>
        <p>{planetDetails.diameter}</p>

        </div>:null}
        
        </div>
    );
}

export default PlanetDetails;