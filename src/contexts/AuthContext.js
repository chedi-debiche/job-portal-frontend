// src/contexts/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    try {
      // Récupérer les données de `localStorage` et vérifier leur validité
      const savedUser = localStorage.getItem('user');
      if (savedUser && savedUser !== 'undefined') {
        const parsedUser = JSON.parse(savedUser);
        if (parsedUser) {
          setUser(parsedUser);
          setIsAuthenticated(true);
        }
      }
    } catch (error) {
      console.error("Erreur lors du parsing des données JSON de l'utilisateur:", error);
      // Supprimer les données corrompues du `localStorage`
      localStorage.removeItem('user');
    }
  }, []);

  const login = (userData) => {
    console.log("Logging in user:", userData); // Vérifiez que userData contient les bonnes informations
    if (userData) {
      setUser(userData);
      setIsAuthenticated(true);
      localStorage.setItem('user', JSON.stringify(userData));
    }
  };

  const logout = async () => {
    try {
      // Appel à la route de déconnexion du backend
      await axios.post('http://localhost:5000/api/auth/logout');
      
      // Suppression des données de l'utilisateur dans le contexte et le localStorage
      setUser(null);
      setIsAuthenticated(false);
      localStorage.removeItem('user');
      localStorage.removeItem('token');
    } catch (error) {
      console.error('Erreur lors de la déconnexion :', error);
    }
  };
  

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
