import React from 'react';
import Navbar from '../Navbar Items/Navbar';
import { Typography } from '@mui/material';
import Box from "@mui/material/Box";

const Overview = () => {
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
            Overview Test
            </Typography>
          </Box>
        </div>
    )
}
export default 
Overview;