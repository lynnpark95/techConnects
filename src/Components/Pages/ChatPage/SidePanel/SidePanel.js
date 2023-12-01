import React from "react";
import { IoIosChatboxes, IoIosArrowBack } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import UserPanel from "./UserPanel";
import Favorited from "./Favorited";
import ChatRooms from "./ChatRooms";
import Header from "../../../Header";
import Box from "@mui/material/Box";
import DirectMessages from "./DirectMessages"

function SidePanel() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    // Navigate to the specified route when the back icon is clicked
    navigate("/calendar");
  };

  return (
    <div style={{ position: "relative", display: "flex" }}>
      <Box
        sx={{
          backgroundColor: "#4B87C5",
          padding: "2rem",
          minHeight: "130vh",
          
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
            BACK
          </span>
        </div>
        <div>
          <h4 style={{ color: 'white', marginBottom: '1rem' }}>
            <IoIosChatboxes /> MESSAGING
          </h4>

          <UserPanel style={{ marginBottom: '1rem' }} />

          <div style={{ marginBottom: '2rem', marginTop: '1rem' }}>
            <Favorited />
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <ChatRooms />
          </div>

          <div style={{ marginBottom: '3rem' }}>
            <DirectMessages />
          </div>

          {/* Add the missing closing tag for the div element */}
        </div>
      </Box>
      
    </div>
  );
}

export default SidePanel;
