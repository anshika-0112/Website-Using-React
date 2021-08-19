import PlanetCard from "../PlanetCard.js/PlanetCard"

const PlanetTable=({planetDetails})=>
{
    const rows=planetDetails.map((planet)=>
    {
        return (
            <PlanetCard key={planet.url} planetDetails={planet}/>
        )
    })
    return(
        <div>{rows}</div>
    )
}

export default PlanetTable;