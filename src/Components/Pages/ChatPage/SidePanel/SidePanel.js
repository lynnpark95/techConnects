import React from "react";
import { IoIosChatboxes, IoIosArrowBack } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import UserPanel from "./UserPanel";
import Favorited from "./Favorited";
import ChatRooms from "./ChatRooms";
<<<<<<< HEAD
import DirectMessages from "./DirectMessages";
=======
import Header from "../../../Header";
import Box from "@mui/material/Box";
import DirectMessages from "./DirectMessages"
>>>>>>> 76d284362cc4a6e4825556c0010db3932033d8af

function SidePanel() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    // Navigate to the specified route when the back icon is clicked
    navigate("/calendar");
  };

  return (
<<<<<<< HEAD
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
=======
    <div style={{ position: "relative", display: "flex" }}>
      <Box
        sx={{
          backgroundColor: "#4B87C5",
          padding: "2rem",
          minHeight: "100vh",
          color: "white",
          minWidth: "275px",
          zIndex: 1,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
          <IoIosArrowBack
            style={{ cursor: "pointer" }}
            size={24}
            color="white"
            onClick={handleGoBack}
          />
          <span
            style={{
              marginLeft: "0.5rem",
              cursor: "pointer",
            }}
            onClick={handleGoBack}
          >
            Back
          </span>
        </div>
        <div>
          <h4 style={{ color: 'white', marginBottom: '2rem' }}>
            <IoIosChatboxes /> Messaging
          </h4>

          <UserPanel style={{ marginBottom: '3rem' }} />

          <div style={{ marginBottom: '3rem', marginTop: '1rem' }}>
            <Favorited />
          </div>

          <div style={{ marginBottom: '3rem' }}>
            <ChatRooms />
          </div>

          <div style={{ marginBottom: '3rem' }}>
            <DirectMessages />
          </div>

          {/* Add the missing closing tag for the div element */}
        </div>
      </Box>
      <Header />
>>>>>>> 76d284362cc4a6e4825556c0010db3932033d8af
    </div>
  );
}

export default SidePanel;
