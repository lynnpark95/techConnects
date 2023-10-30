import React from "react";
import Navbar from "../../Navbar Items/Navbar";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Header from "../../Header";
import { styled } from "@mui/material/styles";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const TextWithShadow = styled(Typography)({
  textShadow: "1px 1px 2px rgba(0,0,0,0.6)",
  color: "white",
  marginTop: "0%",
  textAlign: "center",
});
const IconWrapper = styled("div")({
  color: "#ffffff",
  marginBottom: "0",
  marginTop: "8%",
  textShadow: "1px 1px 2px rgba(0,0,0,0.6)",
  fontSize: "40px",
  textAlign: "center"
});
const iconStyles = {
  fontSize: "10rem",
};

const Confirm = () => {
  return (
    <div style={{ maginLeft: "100px" }}>
      <Navbar />
      <Header />

      <div
        style={{
          height: "80vh",
          width: "50%",
          alignItems: "center",
          marginLeft: "500px",
          marginTop: "130px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              width: 900,
              height: 400,
              backgroundColor: "rgba(117, 169, 222, 1)",
            },
          }}
        >
          <Paper elevation={8}>
          <IconWrapper><EmailOutlinedIcon style={iconStyles}/></IconWrapper>
            <TextWithShadow variant="h2">Thanks for the email!</TextWithShadow>
            <TextWithShadow variant="h5" component="p" sx={{
              textShadow: "1px 1px 2px rgba(0,0,0,0.6)",
              color: "white",
              marginTop: "1%",
              textAlign: "center",
            }}>We'll get back to you as soon as we can!</TextWithShadow>
           
          </Paper>
        </Box>
      </div>
    </div>
  );
};
export default Confirm;
