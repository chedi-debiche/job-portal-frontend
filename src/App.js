import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AuthProvider from './contexts/AuthContext';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
const App = () => {
  return (
    <AuthProvider>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />

        {/* Ajoute d'autres routes ici pour les autres pages */}
      </Routes>
    </Router>
     </AuthProvider>
  );
};

export default App;
