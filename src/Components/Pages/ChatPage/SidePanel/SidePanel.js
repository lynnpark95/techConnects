import React from "react";
import { IoIosChatboxes, IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import UserPanel from "./UserPanel";
import Favorited from "./Favorited";
import ChatRooms from "./ChatRooms";
import Header from "../../../Header";
import Box from "@mui/material/Box";

function SidePanel() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/calendar");
  };

  return (
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

        <h4 style={{ color: "white", marginBottom: "2rem" }}>
          <IoIosChatboxes /> Messaging
        </h4>

        <UserPanel style={{ marginBottom: "3rem" }} />

        <div style={{ marginBottom: "3rem", marginTop: "1rem" }}>
          <Favorited />
        </div>

        <div style={{ marginBottom: "3rem" }}>
          <ChatRooms />
        </div>
      </Box>

      <Header />
    </div>
  );
}

export default SidePanel;
