import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import PersonDetails from "./PersonDetails";

const PersonContainer=()=>
{
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

    return(
        <PersonDetails handleGoBack={handleGoBack} personDetails={personDetails}/>
    )

}

export default PersonContainer;