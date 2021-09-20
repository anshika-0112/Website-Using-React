import user from "../../assets/images/userImage.png";
import "../../componentStyle/login.css";

const Login = ({
  state,
  checkPasswordName,
  checkUserName,
  handleSignIn,
  errorMessage,
}) => {
  return (
    <div id="login-page">
      <h1>Login</h1>
      <img src={user} id="user-image"></img>
      <form onSubmit={handleSignIn}>
        <label className="label">Username</label>
        <input
          data-testid="userName"
          required
          type="text"
          onChange={checkUserName}
          value={state.username}
          className="input-field"
        ></input>
        <label className="label">Password</label>
        <input
          data-testid="password"
          required
          type="password"
          value={state.password}
          onChange={checkPasswordName}
          className="input-field"
        ></input>
        {errorMessage && <div data-testid="error">{errorMessage}</div>}
        <button type="submit" className="btn-primary" data-testid="signInBtn">
          Sign in
        </button>
      </form>
    </div>
  );
};
export default Login;
