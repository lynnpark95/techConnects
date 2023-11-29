<<<<<<< HEAD
import React, { useCallback, useState } from "react";
=======
import React, { useCallback, useState, useEffect } from "react";
>>>>>>> origin/Master
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  TextField,
<<<<<<< HEAD
  Unstable_Grid2 as Grid,
} from "@mui/material";

export const AccountProfileDetails = () => {
  const [values, setValues] = useState({
    firstName: "Jacob",
    lastName: "Wilson",
    email: "JacobWilson@gmail.com",
    password: "", // Replace phone with password
=======
  Grid,
} from "@mui/material";
import { getAuth, updateProfile } from "firebase/auth";
import { getDatabase, ref, update, get } from "firebase/database";

const AccountProfileDetails = () => {
  const [values, setValues] = useState({
    first: "",
    last: "",
    phone: ""
>>>>>>> origin/Master
  });

  const handleChange = useCallback((event) => {
    setValues((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  }, []);

<<<<<<< HEAD
  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    // Add logic to handle form submission, e.g., dispatching an action
=======
  const handleSubmit = useCallback(async (event) => {
    event.preventDefault();
  
    const auth = getAuth();
    const db = getDatabase();
  
    // Get the currently authenticated user from Firebase
    const user = auth.currentUser;
  
    if (user) {
      try {
        // Update user information in Firebase Realtime Database using update
        const userRef = ref(db, `/users/${user.uid}`);
        await update(userRef, {
          first: values.first,
          last: values.last,
          phone: values.phone
        });
  
        // Update user profile in Firebase Authentication
        await updateProfile(user, {
          displayName: `${values.first} ${values.last}`,
        });
  
        alert("User information saved!");
      } catch (error) {
        console.error("Error updating user information:", error.message);
        alert("Failed to save user information. Please try again.");
      }
    } else {
      alert("User not authenticated. Please log in.");
    }
  }, [values]);

  // Fetch user data when the component mounts
  useEffect(() => {
    const auth = getAuth();
    const db = getDatabase();

    const fetchData = async () => {
      const user = auth.currentUser;

      if (user) {
        const userRef = ref(db, `/users/${user.uid}`);
        const snapshot = await get(userRef);

        if (snapshot.exists()) {
          const userData = snapshot.val();
          setValues(userData);
        }
      }
    };

    fetchData();
>>>>>>> origin/Master
  }, []);

  return (
    <form autoComplete="off" noValidate onSubmit={handleSubmit}>
      <Card sx={{ boxShadow: "none" }}>
<<<<<<< HEAD
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
=======
        <CardHeader title="Edit Profile" />
        <CardContent sx={{ pt: 0 }}>
          <Box sx={{ m: -1.5 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="First name"
                  name="first"
                  onChange={handleChange}
                  required
                  value={values.first}
                  placeholder="Enter your first name"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Last name"
                  name="last"
                  onChange={handleChange}
                  required
                  value={values.last}
                  placeholder="Enter your last name"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Phone"
                  name="phone"
                  onChange={handleChange}
                  value={values.phone}
                  placeholder="Enter your phone number"
>>>>>>> origin/Master
                />
              </Grid>
            </Grid>
          </Box>
        </CardContent>
        <Divider />
        <CardActions sx={{ justifyContent: "flex-end" }}>
          <Button variant="contained" type="submit">
            Save details
          </Button>
        </CardActions>
      </Card>
    </form>
  );
};
<<<<<<< HEAD
=======

export default AccountProfileDetails;
>>>>>>> origin/Master
