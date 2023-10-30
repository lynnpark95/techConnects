import React, { useEffect } from "react";
import SignIn from "./Components/SignIn";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Calendar from "./Components/Pages/Calendar";
import Overview from "./Components/Pages/Overview";
import Wallet from "./Components/Pages/Wallet";
import Messaging from "./Components/Pages/MessagingPage/Messaging";
import AudioVisual from "./Components/Pages/AudioVisual";
import History from "./Components/Pages/History";
import TechSupport from "./Components/Pages/TechSupport";
import Register from "./Components/Register";
import ContactUs from "./Components/Pages/ContactUs";

import { getAuth, onAuthStateChanged } from "firebase/auth";
import Bill from "./Components/Pages/Bill";
import { useDispatch, useSelector } from "react-redux";
import { setUser, clearUser } from "./Redux/Actions/user_action";
import ChatPage from "./Components/Pages/ChatPage/ChatPage";
import LoginPage from "./Components/Pages/LoginPage/LoginPage";
import RegisterPage from "./Components/Pages/RegisterPage/RegisterPage";

// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>

function App(props) {
  const navigate = useNavigate();
  let dispatch = useDispatch();
  const isLoading = useSelector((state) => state.user.isLoading);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      // if (user) {
      //   navigate("/");
      //   dispatch(setUser(user));

      //   // User is signed in, see docs for a list of available properties
      //   // https://firebase.google.com/docs/reference/js/firebase.User
      //   const uid = user.uid;
      //   // ...
      // } else {
      navigate("/chatPage");
      dispatch(setUser(user));
      // dispatch(clearUser());
      // User is signed out
      // ...
    });
  }, []);

  if (isLoading) {
    return <div>...loading</div>;
  } else {
    return (
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/messaging" element={<Messaging />} />
        <Route path="/audio-visual" element={<AudioVisual />} />
        <Route path="/history" element={<History />} />
        <Route path="/tech-support" element={<TechSupport />} />
        <Route path="/reg" element={<Register />} />
        <Route path="/contact" element={<ContactUs />} />

        <Route path="/bill" element={<Bill />} />
        <Route path="/chatPage" element={<ChatPage />} />
        <Route path="/loginPage" element={<LoginPage />} />
        <Route path="/registerPage" element={<RegisterPage />} />
      </Routes>
    );
    //   </BrowserRouter>
    // </div>
    // );
  }
}

export default App;
