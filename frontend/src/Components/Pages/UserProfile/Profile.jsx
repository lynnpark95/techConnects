import React from "react";
import { Box, Container, Stack, Typography, Grid } from "@mui/material";
import { AccountProfile } from "./AccountProfile";
import { AccountProfileDetails } from "./AccountDetails";
import Navbar from "../../Navbar Items/Navbar";

const Profile = () => (
  <>
    {/* <Navbar /> */}
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
        marginLeft: "150px",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={4}>
              <AccountProfile />
            </Grid>
            <Grid item xs={12} md={6} lg={8}>
              {/* <AccountProfileDetails /> */}
            </Grid>
          </Grid>
        </Stack>
      </Container>
    </Box>
  </>
);

export default Profile;
