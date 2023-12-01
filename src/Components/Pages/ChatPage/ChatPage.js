import React from "react";
import SidePanel from "./SidePanel/SidePanel";
import MainPanel from "./MainPanel/MainPanel";
import { useSelector } from "react-redux";
import NeedsLogin from "../../../Components/NeedsLogin";
import Header from "../../Header";


function ChatPage() {
  const currentUser = useSelector((state) => state.user.currentUser);
  const currentChatRoom = useSelector(
    (state) => state.chatRoom.currentChatRoom
  );

  return (
    <NeedsLogin>
      <div style={{ position: "relative", zIndex: 1 }}> 
        <Header />
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ width: "300px", zIndex: 2, position: "relative" }}>
          <SidePanel key={currentUser && currentUser.uid} />
        </div>
        <div style={{ width: "100%" }}>
          <MainPanel key={currentChatRoom && currentChatRoom.id} />
        </div>
      </div>
    </NeedsLogin>
  );
}

export default ChatPage;