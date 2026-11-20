// Login page - Public
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthContext";
import { getAuthErrorMessage } from "../utils/authErrors";

const Login = () => {
  const { signInUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  // If the user was redirected here from a protected page,
  // send them back there after login. Otherwise go to /dashboard.
  const redirectTo = location.state?.from?.pathname || "/dashboard";

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    setError("");
    setSubmitting(true);

    try {
      await signInUser(email, password);
      navigate(redirectTo, { replace: true });
    } catch (err) {
      setError(getAuthErrorMessage(err));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="page form-page">
      <h1>Login</h1>

      <form onSubmit={handleLogin}>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" placeholder="Enter your email" required />

        <label htmlFor="password">Password</label>
        <input id="password" type="password" name="password" placeholder="Enter your password" required />

        <button type="submit" className="btn btn-primary" disabled={submitting}>
          {submitting ? "Logging in..." : "Login"}
        </button>
      </form>

      {error && <p className="error">{error}</p>}

      <p className="hint">
        New here? <Link to="/register">Create an account</Link>
      </p>
    </div>
  );
};

export default Login;
