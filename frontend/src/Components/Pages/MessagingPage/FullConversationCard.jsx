// Cards.js

import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import AvatarUser from "./AvatarUser";

// Sample conversation data
const conversations = [
  {
    id: 1,
    username: "User1",
    preview: "Preview of message 1",
    fullConversation: "Full conversation details for User1",
  },
  {
    id: 2,
    username: "User2",
    preview: "Preview of message 2",
    fullConversation: "Full conversation details for User2",
  },
  // Add more conversation objects as needed
];

export default function FullConversationCard ({ marginLeft, onCardClick }) {
  return (
    <Box sx={{ maxWidth: 400, marginLeft }}>
      {conversations.map((conversation) => (
        <Card
          key={conversation.id}
          variant="outlined"
          onClick={() => onCardClick(conversation)} // Handle card click
          style={{ cursor: "pointer" }}
        >
          <CardContent>
            <AvatarUser />
            <Typography variant="h5" component="div">
              {conversation.username}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary" paddingTop={1}>
              {conversation.preview}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}
