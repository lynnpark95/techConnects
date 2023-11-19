import React from "react";
import SignIn from "./Components/SignIn";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Dashboard from "./Dashboard";
import Calendar from "./Components/Pages/Calendar";
import Overview from "./Components/Pages/Overview";
import Wallet from "./Components/Pages/WalletComponents/Wallet";
import Messaging from "./Components/Pages/MessagingPage/Messaging";
import AudioVisual from "./Components/Pages/AudioVisual";
import History from "./Components/Pages/HistoryComponents/History";
import TechSupport from "./Components/Pages/UserHelp/TechSupport";
import Register from "./Components/Register";
import ContactUs from "./Components/Pages/ContactUs";
import Album from "./Album";
import Settings from "./Components/Pages/Settings Components/Settings";
import Confirm from "./Components/Pages/UserHelp/Confirm";
import TestFetch from "./Components/Pages/Settings Components/TestFetch";



<Routes location>
  <Route />
</Routes>;

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} >
            <Route path="signin" element={<SignIn />} />
            <Route path="overview" element={<Overview />} />
            <Route path="calendar" element={<Calendar />} />
            <Route path="wallet" element={<Wallet />} />
            <Route path="messaging" element={<Messaging />} />
            <Route path="audio-visual" element={<AudioVisual />} />
            <Route path="history" element={<History />} />
            <Route path="tech-support" element={<TechSupport />} />
            </Route>
          <Route path="/reg" element={<Register />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/confirm" element={<Confirm />} />
          {/* <Route path="/talklogin" exact component={Login}/>  */}
          <Route path="/mynetwork" element={<userNetwork/>}/>
          
          <Route path="/test" element={<TestFetch />} />
          
        

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
