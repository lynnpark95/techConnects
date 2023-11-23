import React from "react";
import { IoIosChatboxes, IoIosArrowBack } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import UserPanel from "./UserPanel";
import Favorited from "./Favorited";
import ChatRooms from "./ChatRooms";
import DirectMessages from "./DirectMessages";

function SidePanel() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    // Navigate to the specified route when the back icon is clicked
    navigate("/calendar");
  };

  return (
    <div
      style={{
        backgroundColor: "#4B87C5",
        padding: "2rem",
        minHeight: "100vh",
        color: "white",
        minWidth: "275px",
      }}
    >
      {/* Back Icon */}
      <IoIosArrowBack
        style={{ cursor: "pointer", marginBottom: "1rem" }}
        size={24}
        color="white"
        onClick={handleGoBack}
      />

      {/* Logo */}
      <h4 style={{ color: "white" }}>
        <IoIosChatboxes /> Chat App
      </h4>

      <UserPanel />

      <Favorited />

      <ChatRooms />

      <DirectMessages />
    </div>
  );
}

export default SidePanel;