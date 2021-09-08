import userImage2 from "../../assets/images/userImage2.png";

const Profile = ({ personDetails }) => {
  console.log(personDetails);
  return (
    <div>
      <img src={userImage2} width="200px" height="200px"></img>
      <h2>{personDetails.name}</h2>
      <p>Birth Year:- {personDetails.birth_year}</p>
      <p>Gender:- {personDetails.gender}</p>
      <p>Eye Color:- {personDetails.eye_color}</p>
      <p>Height:- {personDetails.height}</p>
      <p>Weight:- {personDetails.mass}</p>
      {personDetails.films.map((film) => {
        return <p key={film.url}>{film}</p>;
      })}
    </div>
  );
};

export default Profile;
