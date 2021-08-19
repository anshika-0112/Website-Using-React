import { useParams } from "react-router";
import { useEffect,useState } from "react";
const PersonDetails=()=>
{
    const [personDetails,setPersonDetails]=useState(null);
    const {peopleId}=useParams();
    useEffect(()=>
    {
        const fetchPersonInfo=async()=>
        {
            const url=`https://swapi.dev/api/people/${peopleId}`;
            const personResponse=await fetch(url);
            const personInfo=await personResponse.json();
            console.log(personInfo)
            setPersonDetails(personInfo);
        }
        fetchPersonInfo();
    },[peopleId])
    return(
        <div><h1>Person Details</h1>

        {personDetails?<div><p>{personDetails.name}</p><p>
        {personDetails.birth_year}
        </p>
        <p>{personDetails.gender}</p>
        <p>{personDetails.height}</p>

        </div>:null}
        
        </div>
    );
}

export default PersonDetails;