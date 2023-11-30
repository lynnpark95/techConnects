import React, { useCallback, useState, useEffect } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  TextField,
  Grid,
} from "@mui/material";
import { getAuth, updateProfile } from "firebase/auth";
import { getDatabase, ref, update, get } from "firebase/database";

const AccountProfileDetails = () => {
  const [values, setValues] = useState({
    first: "",
    last: "",
    phone: ""
  });

  const handleChange = useCallback((event) => {
    setValues((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  }, []);

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
        window.location.reload();
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
  }, []);

  return (
    <form autoComplete="off" noValidate onSubmit={handleSubmit}>
      <Card sx={{ boxShadow: "none" }}>
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

export default AccountProfileDetails;
