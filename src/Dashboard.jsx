import React from "react";
import Navbar from "./Components/Navbar Items/Navbar";
import NeedsLogin from "./Components/NeedsLogin";

const Dashboard = () => {
  return (
    <NeedsLogin>
      <div style={{ maginLeft: "500px" }}>
        <Navbar />
      </div>
    </NeedsLogin>
  );
};
export default Dashboard;
