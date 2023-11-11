import React, { useEffect } from "react";
import SignIn from "./Components/SignIn";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
import Dashboard from "./Dashboard";
import Calendar from "./Components/Pages/Calendar";
import Overview from "./Components/Pages/Overview";
import Wallet from "./Components/Pages/Wallet";
import Messaging from "./Components/Pages/MessagingPage/Messaging";
import AudioVisual from "./Components/Pages/AudioVisual";
import History from "./Components/Pages/HistoryComponents/History";
import TechSupport from "./Components/Pages/UserHelp/TechSupport";
import Register from "./Components/Register";
import Settings from "./Components/Pages/Setting Components/Settings";
import ContactUs from "./Components/Pages/UserHelp/ContactUs";
import Confirm from "./Components/Pages/UserHelp/Confirm";

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { setUser, clearUser } from "./Redux/Actions/user_action";
import ChatPage from "./Components/Pages/ChatPage/ChatPage";
<<<<<<< HEAD
import LoginPage from "./Components/Pages/LoginPage/LoginPage";
import RegisterPage from "./Components/Pages/RegisterPage/RegisterPage";
import Blog from './Components/Pages/WelcomePage/Blog';
=======
>>>>>>> origin/Master

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
        <Route path="/blog" element={<Blog />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/wallet" element={<Wallet />} />
        {/* <Route path="/messaging" element={<Messaging />} /> */}
        <Route path="/audio-visual" element={<AudioVisual />} />
        <Route path="/history" element={<History />} />
        <Route path="/tech-support" element={<TechSupport />} />
        <Route path="/reg" element={<Register />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/confirm" element={<Confirm />} />
        <Route path="/chat" element={<ChatPage />} />
      </Routes>
    );
    //   </BrowserRouter>
    // </div>
    // );
  }
}

export default App;
