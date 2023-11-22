import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import md5 from "md5";
import { getDatabase, ref, set } from "firebase/database";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function SignUp() {
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();

  const [errorFromSubmit, setErrorFromSubmit] = useState("");
  const [loading, setLoading] = useState(false);

  const password = useRef();
  password.current = watch("password");

  const onSubmit = async (data) => {
    try {
      setLoading(true);
  
      const auth = getAuth();
      let createdUser = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
  
      await updateProfile(auth.currentUser, {
        displayName: data.firstName + " " + data.lastName,
        photoURL: `http://gravatar.com/avatar/${md5(
          createdUser.user.email
        )}?d=identicon`,
      });
  
      // Firebase save in DB
      const db = getDatabase();
      const userRef = ref(db, `users/${createdUser.user.uid}`);
      // What is being saved for the user
      const userData = {
        first: data.firstName,
        last: data.lastName,
        email: data.email,
        phone: data.phone,
        image: createdUser.user.photoURL,
      };
  
      console.log('Created User:', createdUser.user);
      console.log('User data to be saved: ', userData);
  
      // Separate function for database update
      await saveUserData(userRef, userData);
  
      setLoading(false);
  
      navigate("/signin");
    } catch (error) {
      setErrorFromSubmit(error.message);
      setLoading(false);
      setTimeout(() => {
        setErrorFromSubmit("");
      }, 8000);
    }
  };
  
  // New function for database update
  const saveUserData = async (userRef, userData) => {
    try {
      await set(userRef, userData);
      console.log('User data saved successfully');
    } catch (error) {
      console.error('Error saving user data:', error.message);
      // Handle the error as needed
    }
  };
  

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "green" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  {...register("firstName", { required: true, maxLength: 10 })}
                />
                {errors.firstName && errors.firstName.type === "required" && (
                  <p>This firstName field is required</p>
                )}
                {errors.firstName && errors.firstName.type === "maxLength" && (
                  <p>Your input exceed maximum length</p>
                )}
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  {...register("lastName", { required: true, maxLength: 10 })}
                />
                {errors.lastName && errors.lastName.type === "required" && (
                  <p>This lastName field is required</p>
                )}
                {errors.lastName && errors.lastName.type === "maxLength" && (
                  <p>Your input exceed maximum length</p>
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  {...register("email", {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                />
                {errors.email && <p>This email field is required</p>}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  {...register("password", { required: true, minLength: 6 })}
                />
                {errors.password && errors.password.type === "required" && (
                  <p>This password field is required</p>
                )}
                {errors.password && errors.password.type === "minLength" && (
                  <p>Password must have at least 6 characters</p>
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password_confirm"
                  label="Password Confirm"
                  type="password"
                  id="password_confirm"
                  autoComplete="new-password"
                  {...register("password_confirm", {
                    required: true,
                    validate: (value) => value === password.current,
                  })}
                />
                {errors.password_confirm &&
                  errors.password_confirm.type === "required" && (
                    <p>This password confirm field is required</p>
                  )}
                {errors.password_confirm &&
                  errors.password_confirm.type === "validate" && (
                    <p>The passwords do not match</p>
                  )}
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="phone"
                  required
                  fullWidth
                  id="phone"
                  label="Phone Number"
                  {...register("phone", { required: true, maxLength: 20 })}
                />
                {errors.phone && errors.phone.type === "required" && (
                  <p>This phone field is required</p>
                )}
                {errors.phone && errors.phone.type === "maxLength" && (
                  <p>Your input exceed maximum length</p>
                )}
              </Grid>
              {/* <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I agree to let this program steal my identity."
                />
              </Grid> */}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={loading}
            >
              Sign Up
            </Button>
            {errorFromSubmit && <p>{errorFromSubmit}</p>}

            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/signin" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
