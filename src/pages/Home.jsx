
const Home = () => {
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

  const btnBase = {
    padding: "12px 30px",
    borderRadius: "10px",
    fontWeight: "600",
    textDecoration: "none",
    color: "#fff",
    transition: "transform 0.2s",
  };

  return (
    <div style={boxStyle}>
      <img
        src="/logo.png"
        alt="GateKeeper logo"
        style={{ width: "130px", height: "130px", objectFit: "contain", marginBottom: "16px" }}
      />
      <h1 style={{ fontSize: "2rem", margin: "0 0 12px" }}>Welcome to GateKeeper</h1>
      <p style={{ fontSize: "1.05rem", margin: "0 0 8px" }}>
        A secure React app with Firebase Authentication and protected routes.
      </p>
      <p style={{ opacity: 0.75, margin: "0 0 28px" }}>
        Log in to access your Dashboard and Profile.
      </p>
    </div>
  );
};

export default Home;
