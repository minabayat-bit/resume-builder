import React, { useEffect } from "react";
import { useNavigate } from "react-router";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    console.log(localStorage.getItem("token"));
    if (localStorage.getItem("token") === null) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <button
        onClick={() => {
          localStorage.removeItem("token");
        }}
      >
        Logout
      </button>
      <h1>Dashboard</h1>
    </>
  );
};

export default Dashboard;
