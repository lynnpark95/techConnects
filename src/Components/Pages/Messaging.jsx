import React from 'react';
import Navbar from '../Navbar Items/Navbar';
import { Typography } from '@mui/material';
import Box from "@mui/material/Box";
import MessagingPage from './ChatComponents/MessagingPage';

const Messaging = () => {
  const marginValue ='500px'
    return (
        <div style={{maginLeft: marginValue}}>
            <Navbar />
            <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography variant="h3" component="h1" marginLeft={45} marginTop={5}>
            Messaging
            </Typography>
          </Box>
          <MessagingPage />
        </div>

    )
}
export default 
Messaging;