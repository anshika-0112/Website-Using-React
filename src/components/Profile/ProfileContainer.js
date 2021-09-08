import Profile from "./Profile";
import { useSelector } from "react-redux";

const ProfileContainer = () => {
  const personDetails = useSelector((state) => 
     state.user.users);
     console.log("profilr",personDetails);

  return (
    <div>{personDetails && <Profile personDetails={personDetails[0]} />}</div>
  );
};

export default ProfileContainer;