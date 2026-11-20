// Profile page - Protected (only logged-in users)
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthContext";

const Profile = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error.message);
    }
  };

  const boxStyle = {
    maxWidth: "560px",
    margin: "60px auto",
    padding: "40px 32px",
    textAlign: "center",
    background: "rgba(15, 15, 35, 0.85)",
    border: "1px solid rgba(255, 255, 255, 0.15)",
    borderRadius: "20px",
    boxShadow: "0 10px 40px rgba(0, 0, 0, 0.45)",
    color: "#fff"
  };

  return (
    <div style={boxStyle}>
      <h1>Profile Page</h1>
      <p>
        Email: <strong>{user.email}</strong>
      </p>
      <button onClick={handleLogout} className="btn btn-danger">
        Logout
      </button>
    </div>
  );
};

export default Profile;
