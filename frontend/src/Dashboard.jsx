import React from "react";
import Navbar from "./Components/Navbar Items/Navbar";
import NeedsLogin from "./Components/NeedsLogin";

import { Typography } from '@mui/material';
import Box from "@mui/material/Box";

const Dashboard = () => {
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
            Calendar Test
            </Typography>
          </Box>
        </div>
    )
}
export default Dashboard;