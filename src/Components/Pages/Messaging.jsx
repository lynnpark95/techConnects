import React from 'react';
import Navbar from '../Navbar Items/Navbar';
import { Typography } from '@mui/material';
import Box from "@mui/material/Box";

const Messaging = () => {
    return (
        <div style={{maginLeft: '500px'}}>
            <Navbar />
            <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography variant="body2" component="p" marginLeft={45}>
            Messaging Test
            </Typography>
          </Box>
        </div>
    )
}
export default 
Messaging;