import React from 'react';
import Navbar from '../Navbar Items/Navbar';
import { Typography } from '@mui/material';
import Box from "@mui/material/Box";

import DataTableHistory from './DataTableHistory';
import Header from '../Header';

const History = () => {
    return (
        <div style={{maginLeft: '500px'}}>
            <Header />
            <Navbar />
            <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginTop: 15
            }}
          >
              <DataTableHistory />
          </Box>
        </div>
    )
}

export default History;