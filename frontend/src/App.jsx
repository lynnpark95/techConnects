import React, { useEffect } from "react";
import SignIn from "./Components/SignIn";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";

import Calendar from "./Components/Pages/CalendarComponents/Calendar";
import Wallet from "./Components/Pages/Wallet";
import Messaging from "./Components/Pages/MessagingPage/Messaging";

import TechSupport from "./Components/Pages/UserHelp/TechSupport";
import Register from "./Components/Register";
import Settings from "./Components/Pages/Setting Components/Settings";
import ContactUs from "./Components/Pages/UserHelp/ContactUs";
import Confirm from "./Components/Pages/UserHelp/Confirm";
import Profile from "./Components/Pages/UserProfile/Profile";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { setUser, clearUser } from "./Redux/Actions/user_action";
import ChatPage from "./Components/Pages/ChatPage/ChatPage";
import Welcome from "./Components/Pages/WelcomePage/Welcome";

// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>

function App(props) {
  const navigate = useNavigate();
  const location = useLocation();
  let dispatch = useDispatch();
  const isLoading = useSelector((state) => state.user.isLoading);

  if (isLoading) {
    return <div>...loading</div>;
  } else {
    return (
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/reg" element={<Register />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/tech-support" element={<TechSupport />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/confirm" element={<Confirm />} />
        {/* <Route path="/messaging" element={<Messaging />} /> */}
      </Routes>
    );
    //   </BrowserRouter>
    // </div>
    // );
  }
}

export default App;
