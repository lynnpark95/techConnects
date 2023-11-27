import React, { useEffect, useCallback, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  TextField,
  Unstable_Grid2 as Grid,
} from "@mui/material";
import { getAuth, updateProfile, updateEmail, updatePassword } from "firebase/auth";

export const AccountProfileDetails = () => {
  const [values, setValues] = useState({
    firstName: "Jacob",
    lastName: "Wilson",
    email: "JacobWilson@gmail.com",
    password: "",//Replace phone with password
  });

  // Display the current name and email on the field
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setValues((prevValues) => ({
          ...prevValues,
          firstName: user.displayName ? user.displayName.split(" ")[0] : "",
          lastName: user.displayName ? user.displayName.split(" ")[1] : "",
          email: user.email || "",
        }));
      }
    });

    return () => unsubscribe();
  }, []);

  const handleChange = useCallback((event) => {
    setValues((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  }, []);

  const handleSaveDetails = async () => {
    const auth = getAuth();
    const user = auth.currentUser;

    try {
      // Update display name
      await updateProfile(user, {
        displayName: `${values.firstName} ${values.lastName}`,
      });

      // Update email
      await updateEmail(user, values.email);

      // Update password
      await updatePassword(user, values.password);

      console.log("User profile updated successfully");
    } catch (error) {
      console.error("Error updating user profile:", error.message);
    }
  };

  return (
    <form autoComplete="off" noValidate>
      <Card sx={{ boxShadow: "none" }}>
        <CardHeader title="Profile" />
        <CardContent sx={{ pt: 0 }}>
          <Box sx={{ m: -1.5 }}>
            <Grid container spacing={3}>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  helperText="Please specify the first name"
                  label="First name"
                  name="firstName"
                  onChange={handleChange}
                  required
                  value={values.firstName}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Last name"
                  name="lastName"
                  onChange={handleChange}
                  required
                  value={values.lastName}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Email Address"
                  name="email"
                  onChange={handleChange}
                  required
                  value={values.email}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Password"
                  name="password"
                  onChange={handleChange}
                  type="password"
                  required
                  value={values.password}
                />
              </Grid>
            </Grid>
          </Box>
        </CardContent>
        <Divider />
        <CardActions sx={{ justifyContent: "flex-end" }}>
          <Button variant="contained" onClick={handleSaveDetails}>
            Save details
          </Button>
        </CardActions>
      </Card>
    </form>
  );
};
