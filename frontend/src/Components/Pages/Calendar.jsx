import React from 'react';
import Header from "./../Header";
import Navbar from '../Navbar Items/Navbar';
import { Typography } from '@mui/material';
import Box from "@mui/material/Box";
import './Calendar.css';

const Calendar = () => {
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    const generateCalendarDays = () => {
        const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
        const firstDay = new Date(currentYear, currentMonth, 1).getDay();
        
       
        const startingDay = firstDay === 0 ? 6 : firstDay - 1;

        const calendarDays = [];

        for (let i = 0; i < startingDay; i++) {
            calendarDays.push(null);
        }

        for (let day = 1; day <= daysInMonth; day++) {
            calendarDays.push(day);
        }

        return calendarDays;
    }

    return (
        <div className="calendar-container">
            <Header />
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

export default Calendar;
