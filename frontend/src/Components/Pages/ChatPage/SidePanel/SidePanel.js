import React from "react";
import { IoIosChatboxes } from "react-icons/io";
import UserPanel from "./UserPanel";
import Favorited from "./Favorited";
import ChatRooms from "./ChatRooms";
import DirectMessages from "./DirectMessages";

function SidePanel() {
  return (
    <div
      style={{
        backgroundColor: "#7B83EB",
        padding: "2rem",
        minHeight: "100vh",
        color: "white",
        minWidth: "275px",
      }}
    >
      {/* Logo */}
      <h3 style={{ color: "white" }}>
        <IoIosChatboxes /> Chat App
      </h3>

      <UserPanel />

      <Favorited />

      <ChatRooms />

      <DirectMessages />
    </div>
  );
}

export default SidePanel;
