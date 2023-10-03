import React from 'react';
import SignIn from './Components/SignIn'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './Dashboard';
import Calendar from './Components/Pages/Calendar';
import Overview from './Components/Pages/Overview';
import Wallet from './Components/Pages/Wallet';
import Messaging from './Components/Pages/Messaging';
import AudioVisual from './Components/Pages/AudioVisual';
import History from './Components/Pages/History';
import TechSupport from './Components/Pages/TechSupport';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
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
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
