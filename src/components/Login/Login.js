import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";
import "./Login.css";
const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        navigate(from, { replace: true }); //for home route
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="form-container">
      <h3 className="form-title"> Login</h3>
      <form onSubmit={handleSubmit} action="">
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" required />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" required />
        </div>

        <input className="btn-submit" type="submit" value="Log In" />
      </form>
      <p className="account">
        New to Ema Jhon? <Link to="/register">Create a new Account</Link>
      </p>
    </div>
  );
};

export default Login;
