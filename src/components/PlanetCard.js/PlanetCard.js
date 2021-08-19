import { Link, Route,BrowserRouter as Router } from "react-router-dom";

const PlanetCard = ({ planetDetails }) => {
  return (
    <>
      <div>{planetDetails.name}</div>
        <Link to="/details">
          <button>Show Info</button>
        </Link>
    </>
  );
};

export default PlanetCard;
