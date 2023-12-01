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
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import InputLabel from "@mui/material/InputLabel";
import { Select, MenuItem } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { saveUserData } from "../Api/saveUser";
import { setUser } from "../Redux/Actions/user_action";
import { useDispatch } from 'react-redux';


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
  const dispatch = useDispatch();

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
        displayName: data.first + data.last,
        photoURL: `http://gravatar.com/avatar/${md5(
          createdUser.user.email
        )}?d=identicon`,
      });
      const userData = {
        first: data.first,
        last: data.last,
        email: data.email,
        phone: data.phone,
        role: data.role,
        image: createdUser.user.photoURL,
        events: [],
        
      };
      await saveUserData(userData, createdUser.user.uid)

      dispatch(setUser(userData));
      setLoading(false);

      navigate("/signin");
    } catch (error) {
      // This will show Email is already in use instead of firebase error message - John
      if (error.code === "auth/email-already-in-use") {
        setErrorFromSubmit(
          "Email is already in use. Please use another email."
        );
      } else {
        // Avoid exposing detailed error messages to users
        setErrorFromSubmit("An error occurred. Please try again later.");
        // Log detailed error information on the server side
        console.error("Error:", error);
      }

      setTimeout(() => {
        setErrorFromSubmit("");
      }, 8000);
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
                  name="first"
                  required
                  fullWidth
                  id="first"
                  label="First Name"
                  autoFocus
                  {...register("first", { required: true, maxLength: 10 })}
                />
                {errors.first && errors.first.type === "required" && (
                  <p>This first name field is required</p>
                )}
                {errors.first && errors.first.type === "maxLength" && (
                  <p>Your input exceed maximum length</p>
                )}
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="last"
                  label="Last Name"
                  name="last"
                  autoComplete="family-name"
                  {...register("last", { required: true, maxLength: 10 })}
                />
                {errors.last && errors.last.type === "required" && (
                  <p>This last name field is required</p>
                )}
                {errors.last && errors.last.type === "maxLength" && (
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
                {errors.email && <p>Email is required</p>}
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
                  <p>Password is required</p>
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
                    <p>Confirm password is required</p>
                  )}
                {errors.password_confirm &&
                  errors.password_confirm.type === "validate" && (
                    <p>The passwords do not match</p>
                  )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="phone"
                  label="Phone"
                  name="phone"
                  {...register("phone", { required: true, maxLength: 15 })}
                />
                {errors.phone && errors.phone.type === "required" && (
                  <p>This phone field is required</p>
                )}
                {errors.phone && errors.phone.type === "maxLength" && (
                  <p>Your input exceed maximum length</p>
                )}
              </Grid>
              <Grid item xs={12}>
                <InputLabel id="role-label">Role</InputLabel>
                <Select
  labelId="role-label"
  id="role"
  fullWidth
  {...register("role", { required: true, defaultValue: "Care Receiver" })}
>
  <MenuItem value="Care Receiver">Care Receiver</MenuItem>
  <MenuItem value="Care Giver">Care Giver</MenuItem>
  <MenuItem value="Care Taker">Care Taker</MenuItem>
  <MenuItem value="Care Sponsor">Care Sponsor</MenuItem>
</Select>
                {errors.role && <p>This role field is required</p>}
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
