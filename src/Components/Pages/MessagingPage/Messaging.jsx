// MyComponent.js

import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Navbar from "../../Navbar Items/Navbar";
import Cards from "./Cards";
import FullConversationCard from "./FullConversationCard"; // Import FullConversationCard
import PlusIcon from "./PlusIcon";
import Header from "../../Header";

function Messaging() {
  const marginLeft = "350px"; // Set your desired margin value here

  const [selectedConversation, setSelectedConversation] = useState(null);

  const handleCardClick = (conversationDetails) => {
    console.log("Card clicked:", conversationDetails); // Add console log
    setSelectedConversation(conversationDetails);
  };

  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        
        <Navbar />
      </div>
      <div style={{ marginLeft }}>
        <Box
          sx={{
            alignItems: "center",
            paddingBottom: "30px",
            marginTop: 10
          }}
        >
          <Typography variant="h3" component="h1">
            Messaging
          </Typography>
        </Box>
        <div>
        <Box
          sx={{
            alignItems: "center",
            paddingBottom: "20px",
            display: 'flex'
          }}
        >
          <Typography variant="h6" component="p">
            New Messages
          </Typography>
          <PlusIcon />
        </Box>
        </div>
        <div style={{ display: "flex", height: "100vh" }}>
          <div style={{ width: 350, paddingRight: "5px" }}>
            <Box
              sx={{
                alignItems: "left",
                border: "solid",
                maxWidth: 400,
                height: "100vh",
              }}
            >
              <div style={{ display: "flex", padding: '10px' }}>
            <input
              type="text"
              placeholder="Search Messages"
              style={{
                padding: "10px", 
                borderRadius: "10px", 
                background: "#f5f5f5", 
                width: "95%",
                padding: '12px' 
              }}
            />
          </div>
              {/* Pass handleCardClick function to Cards */}
              <Cards marginLeft={0} onCardClick={handleCardClick} />
            </Box>
          </div>

          <Box
            sx={{
              flex: 1,
              border: "solid",
              padding: 2,

              height: "100vh",
              width: 300,
            }}
          ></Box>
        </div>
      </div>

      {/* Render selected conversation details */}
      {selectedConversation && (
        <FullConversationCard
          marginLeft={marginLeft}
          conversation={selectedConversation}
        />
      )}
    </div>
  );
}

export default Messaging;
