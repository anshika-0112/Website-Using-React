import Profile from "./Profile";
import { useSelector } from "react-redux";

const ProfileContainer = () => {
  const personDetails = useSelector((state) => 
     state.user.userDetails);

  return (
    <div>{personDetails && <Profile personDetails={personDetails} />}</div>
  );
};

export default ProfileContainer;