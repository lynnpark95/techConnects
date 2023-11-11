import React from 'react';
import Navbar from './Navbar Items/Navbar';
import { Typography } from '@mui/material';
import Box from "@mui/material/Box";
import Header from './Header'; 

const Dashboard = () => {
    return (
        <div style={{maginLeft: '500px'}}>
          <Header />
            <Navbar />
            <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography variant="body2" component="p" marginLeft={45}>
            Dashboard Test
            </Typography>
          </Box>
        </div>
    )
}
export default Dashboard;