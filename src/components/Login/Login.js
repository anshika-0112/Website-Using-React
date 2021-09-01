import user from "../../assets/images/userImage.png";
import "../../componentStyle/login.css";
import { useDispatch } from "react-redux";
const Login = ({ username,password, checkPassword, checkUserName, handleSignIn,errorMessage }) => {
  const dispatch=useDispatch();
  return (
    <div id="login-page">
      <h1>Login</h1>
      <img src={user} id="user-image"></img>
      <form onSubmit={handleSignIn}>
        <label className="label">Username</label>
        <input
          required
          type="text"
          value={username}
          onChange={(e)=>dispatch(checkUserName(e))}
          className="input-field"
        ></input>
        <label className="label">Password</label>
        <input
          required
          type="password"
          value={password}
          onChange={(e)=>dispatch(checkPassword(e))}
          className="input-field"
        ></input>
              {errorMessage && <div>{errorMessage}</div>}
        <button type="submit" className="btn-primary">
          Sign in
        </button>
      </form>
    </div>
  );
};
export default Login;
