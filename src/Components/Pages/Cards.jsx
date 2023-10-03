import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import AvatarUser from "./AvatarUser";
import FullConversationCard from "./FullConversationCard";

export default function Cards({ marginLeft, onCardClick }) {
  const handleCardClick = () => {
    // Call the onCardClick function passed from the parent component
    onCardClick(FullConversationCard); // You can pass any data you want here
  };

  return (
    <Box sx={{ maxWidth: 400, marginLeft }}>
      <Card variant="outlined" onClick={handleCardClick}>
        <CardContent>
          <AvatarUser />
          <Typography variant="h5" component="div">
            User1
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary" paddingTop={1}>
            Preview of message
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
