import React, { useState } from 'react';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar/NavBar';
import Black from './pages/Black/Black';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Confirmation from './Components/Confirmation';
function App() {
  const [step, setStep] = useState(1);
  return (
    <BrowserRouter>
      <NavBar step={step} setStep={setStep} />
      <Routes>
        <Route path="/" element={<Black step={step} setStep={setStep} />} />
        <Route path="/confirm/:uniqueIdentifier" element={<Confirmation />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
