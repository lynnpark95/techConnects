// import * as React from "react";
// import Button from "@mui/material/Button";
// import CssBaseline from "@mui/material/CssBaseline";
// import TextField from "@mui/material/TextField";
// import { Link } from "react-router-dom";
// import Grid from "@mui/material/Grid";
// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
// import Container from "@mui/material/Container";
// import Header from "../../Header";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import Navbar from "../../Navbar Items/Navbar";

// function Copyright(props) {
//   return (
//     <Typography
//       variant="body2"
//       color="text.secondary"
//       align="center"
//       {...props}
//     >
//       {"Copyright © "}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{" "}
//       {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// }

// // TODO remove, this demo shouldn't need to reset the theme.

// const defaultTheme = createTheme();

// export default function ContactUs() {
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     console.log({
//       email: data.get("email"),
//       password: data.get("password"),
//     });
//   };

//   return (
//     <ThemeProvider theme={defaultTheme}>
//       <Header />
//       <Navbar />
//       <Container component="main" maxWidth="md" width="100%">
//         <CssBaseline />
//         <Box
//           sx={{
//             marginTop: 12,
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             marginLeft: 30,
//             marginRight: 0,
//           }}
//         >
//           <Typography component="h1" variant="h2">
//             Contact Us
//           </Typography>
//           <Typography component="p" variant="p">
//             Any questions or concerns? Please write us a message, and we will
//             get back to you as soon as possible.
//           </Typography>
//           <Box
//             component="form"
//             noValidate
//             onSubmit={handleSubmit}
//             sx={{ mt: 3 }}
//           >
//             <Grid container spacing={2}>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   autoComplete="given-name"
//                   name="firstName"
//                   required
//                   fullWidth
//                   id="firstName"
//                   label="First Name"
//                   autoFocus
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   required
//                   fullWidth
//                   id="lastName"
//                   label="Last Name"
//                   name="lastName"
//                   autoComplete="family-name"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   id="email"
//                   label="Email Address"
//                   name="email"
//                   autoComplete="email"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   name="phone"
//                   label="Phone"
//                   id="phone"
//                   autoComplete="new-password"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   id="message"
//                   label="Write Your Message"
//                   name="message"
//                   multiline // Enable multiline input
//                   rows={4} // Adjust the number of rows as needed
//                   autoComplete="message"
//                   sx={{ minHeight: "120px" }} // Customize the minimum height
//                 />
//               </Grid>
//             </Grid>
//             <Link to="/confirm">
//               <Button
//                 type="submit"
//                 fullWidth
//                 variant="contained"
//                 sx={{ mt: 3, mb: 2 }}
//               >
//                 Send Message
//               </Button>
//             </Link>
//             <Grid container justifyContent="flex-end"></Grid>
//           </Box>
//         </Box>
//       </Container>
//     </ThemeProvider>
//   );
// }

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "../../Header";
import Navbar from "../../Navbar Items/Navbar";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: "#007bff",
    },
  },
});

export const ContactUs = () => {
  const form = useRef();
  const [open, setOpen] = useState(false); // State to handle Snackbar display

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_45gzy5c",
        "template_2193udg",
        form.current,
        "LL6pyDREPaUyhzQ3e"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent!");
          e.target.reset();
          setOpen(true); // Show Snackbar on successful submission
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleClose = () => {
    setOpen(false); // Close Snackbar
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <Navbar />
      <Container component="main" maxWidth="md" width="100%">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 12,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginLeft: 30,
            marginRight: 0,
          }}
        >
          <Typography component="h1" variant="h2" sx={{ mb: 2 }}>
            Contact Us
          </Typography>
          <Typography
            component="p"
            variant="body2"
            align="center"
            sx={{ mb: 2 }}
          >
            Any questions or concerns? <br></br>Please write us a message, and
            we will get back to you as soon as possible.
          </Typography>
          <Box
            component="form"
            ref={form}
            onSubmit={sendEmail}
            noValidate
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              {/* Add your form fields here */}
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="user_name"
                  label="Name"
                  name="user_name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="user_email"
                  label="Email"
                  name="user_email"
                  type="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="message"
                  label="Message"
                  name="message"
                  multiline
                  rows={4}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              color="primary"
            >
              Send Message
            </Button>
            {/* Snackbar for successful message submission */}
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
              <MuiAlert
                onClose={handleClose}
                severity="success"
                elevation={6}
                variant="filled"
              >
                Message sent successfully!
              </MuiAlert>
            </Snackbar>
            {/* Optionally, you can use Link to navigate after sending the message */}
            {/* <Link to="/confirm">Confirmation Page</Link> */}
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default ContactUs;
