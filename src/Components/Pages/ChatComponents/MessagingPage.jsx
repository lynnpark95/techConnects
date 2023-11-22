import React from "react";
import { Card, Container } from "@mui/material";
import Box from "@mui/material/Box";
import OutlinedCard from "./Cards";

const MessagingPage = () => {
  const style = {
    marginRight: "400px",
  };

  return (
    <div style={style}>
      <Container maxWidth="xs">
      
        <Box
          sx={{
            bgcolor: "#cfe8fc",
            height: "80vh",
            border: "1px solid #ccc",
            padding: "20px",
            position: "relative", // Add this to position the search bar
          }}
        >
          {/* Search bar */}
          <div style={{ paddingTop: "5px" }}>
            <input
              type="text"
              placeholder="Search messages..."
              style={{
                width: "90%",
                padding: "15px",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
            />
          </div>

          {/* Messaging content */}
          {/* Place your messaging content here */}
        
          
          
        </Box>
        
      </Container>
      <OutlinedCard />
    </div>
    
  );
};

export default MessagingPage;
