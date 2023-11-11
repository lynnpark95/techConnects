import React from 'react';
import Header from "../../Header";
import Navbar from '../../Navbar Items/Navbar';
import { Typography } from '@mui/material';
import Box from "@mui/material/Box";

const Calendar = () => {
  const [value, setValue] = React.useState(dayjs('2023-11-10'));

  <LocalizationProvider dateAdapter={AdapterDayjs}>
  <StaticDatePicker
    orientation="landscape"
    openTo="day"
    value={value}
    onChange={(newValue) => {
      setValue(newValue);
    }}
    renderInput={(params) => <TextField {...params} />}
  />
</LocalizationProvider>
};



export default Calendar;