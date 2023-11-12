import React from 'react';
import Navbar from '../../Navbar Items/Navbar';
import { Typography } from '@mui/material';
import Box from "@mui/material/Box";
import FullCalendar from './FullCalendar';

const Calendar = () => {
    return (
        <div style={{marginLeft: '330px'}}>
            <Navbar />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
        
            </Box>
            <FullCalendar />
        </div>
    )
}
export default Calendar;
