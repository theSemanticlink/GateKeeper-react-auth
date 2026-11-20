import { useContext } from "react";
import { AuthContext } from "../providers/AuthContext";

const Dashboard = () => {
  const { user } = useContext(AuthContext);

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
      <h1>Welcome to Dashboard</h1>
      <p>This is the dashboard page of GateKeeper.</p>
      <p>
        Logged in as: <strong>{user.email}</strong>
      </p>
    </div>
  );
};

export default Dashboard;
