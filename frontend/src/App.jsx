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
import TechSupport from "./Components/Pages/UserHelp/TechSupport";
import Register from "./Components/Register";
import Settings from "./Components/Pages/Setting Components/Settings";
import ContactUs from "./Components/Pages/UserHelp/ContactUs";
import Profile from "./Components/Pages/UserProfile/Profile";
import { useDispatch, useSelector } from "react-redux";
import ChatPage from "./Components/Pages/ChatPage/ChatPage";
import Welcome from "./Components/Pages/WelcomePage/Welcome";
import NeedsLogin from "./Components/NeedsLogin";

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
      </Routes>
    );
  }
}

export default App;
