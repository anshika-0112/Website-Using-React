import user from "../../assets/images/userImage.png";
import "../../componentStyle/login.css";

const Login = ({ state, checkPasswordName, checkUserName, handleSignIn,errorMessage }) => {
  return (
    <div id="login-page">
      <h1>Login</h1>
      <img src={user} id="user-image"></img>
      <form onSubmit={handleSignIn}>
        <label className="label">Username</label>
        <input
          required
          type="text"
          value={state.username}
          onChange={checkUserName}
          className="input-field"
        ></input>
        <label className="label">Password</label>
        <input
          required
          type="password"
          value={state.password}
          onChange={checkPasswordName}
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
