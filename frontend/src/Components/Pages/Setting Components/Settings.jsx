import React from "react";
import Navbar from "../../Navbar Items/Navbar";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Gridv2 from "./Gridv2";
import Header from "../../Header";

const Settings = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Header />
      <Navbar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: 40,
        }}
      >
        <Box 
            sx={{
                alignItems: "left",
                display:"flex",
            }}>
        <Typography variant="h3" component="h1" marginTop={15} marginBottom={5}>
          User Settings
        </Typography>
        </Box>
        <Gridv2 sx={{ marginTop: 10 }}></Gridv2>
      </Box>
    </div>
  );
};

export default Settings;