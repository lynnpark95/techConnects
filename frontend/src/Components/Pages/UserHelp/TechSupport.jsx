import React from "react";
import Navbar from "../../Navbar Items/Navbar";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import BasicAccordion from "./BasicAccordion";
import Header from "../../Header";
import { Link } from "react-router-dom";

const TechSupport = () => {
  return (
    <div style={{ maginLeft: "500px" }}>
      <Navbar />
      <Header />

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100vh",
          marginLeft: 50,
        }}
      >
        <Typography variant="h3" component="h1" marginTop={15} marginBottom={5}>
          Tech Support
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100vh",
          marginLeft: 50,
        }}
      >
        <BasicAccordion />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100vh",
          marginLeft: 50,
        }}
      >
        <Typography variant="h7" component="p" marginTop={2} marginBottom={5} fontSize={'18px'}>
          Can't find what you're looking for? Send us an email{" "}
          <Link to="/contact">here</Link>
        </Typography>
      </Box>
    </div>
  );
};
export default TechSupport;
