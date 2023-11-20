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
import NeedsLogin from "./Components/NeedsLogin";

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
        <Route path="/calendar" element={<NeedsLogin><Calendar /></NeedsLogin>} />
        <Route path="/wallet" element={<NeedsLogin><Wallet /></NeedsLogin>} />
        <Route path="/chat" element={<NeedsLogin><ChatPage /></NeedsLogin>} />
        <Route path="/tech-support" element={<NeedsLogin><TechSupport /></NeedsLogin>} />
        <Route path="/contact" element={<NeedsLogin><ContactUs /></NeedsLogin>} />
        <Route path="/profile" element={<NeedsLogin><Profile /></NeedsLogin>} />
        <Route path="/settings" element={<NeedsLogin><Settings /></NeedsLogin>} />
        <Route path="/confirm" element={<NeedsLogin><Confirm /></NeedsLogin>} />
        {/* <Route path="/messaging" element={<Messaging />} /> */}
      </Routes>
    );
    //   </BrowserRouter>
    // </div>
    // );
  }
}

export default App;
