import React from 'react';
import Navbar from '../../Navbar Items/Navbar';
import { Typography } from '@mui/material';
import Box from "@mui/material/Box";
import FullCalendar from './FullCalendar';
import Header from '../../Header';


const Calendar = () => {
    return (
        <div style={{marginLeft: '330px'}}>
          <Header />
            <Navbar />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginBottom:"70px"
              }}
            >
        
            </Box>
            <FullCalendar />
        </div>
    )
}
export default Calendar;