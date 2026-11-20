// Register page - Public
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthContext";
import { getAuthErrorMessage } from "../utils/authErrors";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    setError("");

    // Simple validation (Firebase also requires at least 6 characters)
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    setSubmitting(true);

    try {
      // Firebase creates the account AND logs the user in automatically
      await createUser(email, password);
      navigate("/dashboard", { replace: true });
    } catch (err) {
      setError(getAuthErrorMessage(err));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="page form-page">
      <h1>Register</h1>

      <form onSubmit={handleRegister}>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" placeholder="Enter your email" required />

        <label htmlFor="password">Password</label>
        <input id="password" type="password" name="password" placeholder="At least 6 characters" required />

        <button type="submit" className="btn btn-success" disabled={submitting}>
          {submitting ? "Creating account..." : "Register"}
        </button>
      </form>

      {error && <p className="error">{error}</p>}

      <p className="hint">
        Already have an account? <Link to="/login">Login here</Link>
      </p>
    </div>
  );
};

export default Register;
