// MyComponent.js

import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Navbar from "../Navbar Items/Navbar";
import Cards from "./Cards";
import FullConversationCard from "./FullConversationCard"; // Import FullConversationCard

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
        {/* You can replace this with your Navbar component */}
        <Navbar />
      </div>
      <div style={{ marginLeft }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography variant="h3" component="h1">
            Messaging
          </Typography>
        </Box>
        <Box
          sx={{
            alignItems: "left",
            border: "solid",
            maxWidth: 400,
            height: "100vh",
          }}
        >
          {/* Pass handleCardClick function to Cards */}
          <Cards marginLeft={0} onCardClick={handleCardClick} />
        </Box>
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
