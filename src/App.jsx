import React, { useEffect } from "react";
import SignIn from "./Components/SignIn";
import {
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
import Calendar from "./Components/Pages/CalendarComponents/Calendar";
import Wallet from "./Components/Pages/Wallet";
import TechSupport from "./Components/Pages/UserHelp/TechSupport";
import Register from "./Components/Register";
import Settings from "./Components/Pages/Setting Components/Settings";
import ContactUs from "./Components/Pages/UserHelp/ContactUs";
import Confirm from "./Components/Pages/UserHelp/Confirm";
import Profile from "./Components/Pages/UserProfile/Profile";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import ChatPage from "./Components/Pages/ChatPage/ChatPage";
import Welcome from "./Components/Pages/WelcomePage/Welcome";

import ForgotPassword from "./Components/Pages/ForgotPassword";
// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>

function App(props) {
  const navigate = useNavigate();
  const location = useLocation();
  let dispatch = useDispatch();
  const isLoading = useSelector((state) => state.user.isLoading);

  useEffect(() => {
    const auth = getAuth();

    // Check if a user is authenticated
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is authenticated, allow navigation
        // You can customize this logic based on your requirements
      } else {
        // User is not authenticated, navigate to the welcome page or sign-in
        if (location.pathname !== "/" && location.pathname !== "/signin" && location.pathname !== "/reg" && location.pathname !== "/reset") {
          navigate("/");
        }
      }
    });

    // Clean up the subscription when the component unmounts
    return () => unsubscribe();
  }, [navigate, location.pathname]);

  if (isLoading) {
    return <div>...loading</div>;
  } else {
    return (
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/calender" element={<Calendar />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/wallet" element={<Wallet />} />
        {/* <Route path="/messaging" element={<Messaging />} /> */}

        <Route path="/tech-support" element={<TechSupport />} />
        <Route path="/reg" element={<Register />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/confirm" element={<Confirm />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="/reset" element={<ForgotPassword />} />
      </Routes>
    );
  }
}

export default App;
