

import React from "react";
import Navbar from "../../Navbar Items/Navbar";
import { Typography, TextField } from "@mui/material";
import BasicAccordion from "./BasicAccordion";
import Header from "../../Header";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const TechSupport = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start", // Adjusted to align items at the top
          marginLeft: '280px', // Adjusted left padding
          marginTop: '40px'
          
      }}
    >
      <Navbar />
      <Header />

      <Typography
        variant="h4" // Adjusted font size
        component="h1"
        marginTop={10}
        marginBottom={5}
        style={{ fontFamily: "Sura", fontSize: "70px" }}
      >
        Frequently Asked Questions 
      </Typography>

      <TextField
        label="e.g create account"
        variant="outlined"
        InputProps={{
          style: {
            borderRadius: "20px",
            backgroundColor: "#4B87C5",
            color: "white", // Change the font color to white
          },
        }}
        InputLabelProps={{
          style: {
            color: "white", // Change the font color to white
            fontSize: "19px",
          },
        }}
        fullWidth
        style={{
          marginBottom: "20px",
          width: "650px",
        }}
      />

      <BasicAccordion />

      <Typography
        variant="h7"
        component="p"
        marginTop={10}
        marginBottom={5}
        fontSize={"45px"}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: 1, // Adjusted top margin
        }}
      >
        <Link to="/contact" style={{ color: "black" }}>
          Contact Us <ArrowForwardIosIcon></ArrowForwardIosIcon>
        </Link>
        <Typography style={{ marginTop: "10px", textAlign: "center" }}>
          Monday to Thursday: 9:00 AM - 5:30 PM (Western Time) <br />
          Friday: 9:00 AM - 4:00 PM (Western Time)
        </Typography>
      </Typography>
    </div>
  );
};

export default TechSupport;
