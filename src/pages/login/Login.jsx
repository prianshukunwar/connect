import { Link } from "react-router-dom";
import "./Login.scss";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const Login = () => {
  const {login} = useContext(AuthContext);

  const loginHandler = () => {
    login();
  }

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>ConnectU</h1>
          <p>
            ConnectU is a vibrant social media platform that brings people
            together, fostering connections and sharing moments of joy,
            inspiration, and collaboration.
          </p>
          <span>Don't you have an account?</span>
          <Link to="/register">
          <button>Register</button>
          </Link>
        
        </div>
        <div className="right">
            <h1>Login</h1>
            <form>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button onClick={loginHandler}>Login</button>
            </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
