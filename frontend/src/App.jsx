import React, { useEffect } from "react";
import SignIn from "./Components/SignIn";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Calendar from "./Components/Pages/Calendar";
import Overview from "./Components/Pages/Overview";

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
        <Route path="/" element={<Dashboard />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/calendar" element={<Calendar />} />
<<<<<<< HEAD
        <Route path="/messaging" element={<Messaging />} />
=======
        <Route path="/wallet" element={<Wallet />} />
        {/* <Route path="/messaging" element={<Messaging />} /> */}
>>>>>>> 0ca06e4cea623aa1fa728c84a374082975d57e4c
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
