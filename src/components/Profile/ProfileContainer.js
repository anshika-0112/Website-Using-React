import Profile from "./Profile";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ProfileContainer=()=>
{
    const [personDetails, setPersonDetails] = useState(null);
    let {userName}=useParams();
    useEffect(() => {
        const fetchPersonInfo = async () => {
          const url = `https://swapi.dev/api/people/?search=${userName}`;
          const personResponse = await fetch(url);
          const personInfo = await personResponse.json();
          console.log(personInfo);
          setPersonDetails(personInfo.results);
        };
        fetchPersonInfo();
    },[userName]);
      console.log("person details",personDetails);
    return(
        <div>
        {personDetails && <Profile personDetails={personDetails[0]}/>}
        </div>
    )
}

export default ProfileContainer;