// import React from "react";
// import { sendPasswordResetEmail, auth } from "../../firebase"; // Import from FirebaseConfig.js
// import { useNavigate } from "react-router-dom";

// function ForgotPassword() {
//   const history = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const emailVal = e.target.email.value;
//       await sendPasswordResetEmail(auth, emailVal);
//       alert("Check your email for password reset instructions");
//       history("/signin");
//     } catch (error) {
//       console.error("Error sending reset email:", error);
//       alert("An error occurred. Please try again.");
//     }
//   };

//   return (
//     <div className="App">
//       <h1>Forgot Password</h1>
//       <form onSubmit={(e) => handleSubmit(e)}>
//         <input name="email" />
//         <br />
//         <br />
//         <button>Reset</button>
//       </form>
//     </div>
//   );
// }

// export default ForgotPassword;

import React from "react";
import { sendPasswordResetEmail, auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
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

const defaultTheme = createTheme();

function ForgotPassword() {
  const history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const emailVal = e.target.email.value;
      await sendPasswordResetEmail(auth, emailVal);
      alert("Check your email for password reset instructions");
      history("/signin");
    } catch (error) {
      console.error("Error sending reset email:", error);
      alert("An error occurred. Please try again.");
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
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Forgot Password
          </Typography>
          <Box
            component="form"
            onSubmit={(e) => handleSubmit(e)}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Reset
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default ForgotPassword;
