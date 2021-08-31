const PersonDetails = ({handleGoBack,personDetails}) => {
 
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
