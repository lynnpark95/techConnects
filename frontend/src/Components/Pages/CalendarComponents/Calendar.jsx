import React from "react";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";

const Calendar = () => {
  const [value, setValue] = React.useState(dayjs("2022-04-07"));

  return (
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
  );
};

export default Calendar;
import React from "react";
import Navbar from "../../Navbar Items/Navbar";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import FullCalendar from "./FullCalendar";
import Header from "../../Header";

const Calendar = () => {
  return (
    <div style={{ marginLeft: "330px" }}>
      <Header />
      <Navbar />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginBottom: "70px",
        }}
      ></Box>
      <FullCalendar />
    </div>
  );
};
export default Calendar;
