import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import AvatarUser from "./AvatarUser";
import FullConversationCard from "./FullConversationCard";
import Chip from "./Chip";

export default function Cards({ marginLeft, onCardClick }) {
  const handleCardClick = () => {
    // Call the onCardClick function passed from the parent component
    onCardClick(FullConversationCard); // You can pass any data you want here
  };

  return (
    <Box sx={{ maxWidth: 400 }}>
      <Card variant="outlined" onClick={handleCardClick} sx={{ height: 120 }}>
        <CardContent>
          <div style={{display: 'flex'}}>
            <div style={{paddingTop: 15}}>
            <AvatarUser />
            </div>
            <div style={{paddingLeft: 15}}>
            <Typography variant="h5" component="div">
              User1
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary" paddingTop={0}>
              Preview of message
            </Typography>
            <div style={{paddingTop: 0}}>
            <Chip />
            </div>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card variant="outlined" onClick={handleCardClick} sx={{ height: 120 }}>
        <CardContent>
          <div style={{display: 'flex'}}>
            <div style={{paddingTop: 15}}>
            <AvatarUser />
            </div>
            <div style={{paddingLeft: 15}}>
            <Typography variant="h5" component="div">
              User2
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary" paddingTop={0}>
              Preview of message
            </Typography>
            <div style={{paddingTop: 0}}>
            <Chip />
            </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Box>
  );
}
