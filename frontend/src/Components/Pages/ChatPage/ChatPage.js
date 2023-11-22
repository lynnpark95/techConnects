import React from "react";
import SidePanel from "./SidePanel/SidePanel";
import MainPanel from "./MainPanel/MainPanel";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import NeedsLogin from "../../NeedsLogin"; // Update the path

function ChatPage() {
  const currentUser = useSelector((state) => state.user.currentUser);
  console.log(currentUser);

  // If the user is authenticated, render the ChatPage
  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "300px" }}>
        <SidePanel key={currentUser && currentUser.uid} />
      </div>
      <div style={{ width: "100%" }}>
        <MainPanel />
      </div>
    </div>
  );
}

// Wrap the ChatPage component with NeedsLogin
const ChatPageWithAuth = () => <NeedsLogin children={<ChatPage />} />;

export default ChatPageWithAuth;
