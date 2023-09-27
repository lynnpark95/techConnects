import React from 'react';
import SignIn from './Components/SignIn'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './Dashboard';
import Calendar from './Dashboard';
import Overview from './Dashboard';
import Wallet from './Dashboard';
import Messaging from './Dashboard';
import AudioVisual from './Dashboard';
import History from './Dashboard';
import TechSupport from './Dashboard';

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
          <Route path="/audiovisual" element={<AudioVisual />} />
          <Route path="/history" element={<History />} />
          <Route path="/techsupport" element={<TechSupport />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
