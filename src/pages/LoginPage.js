import React, { useState , useContext } from 'react';
import { Link , useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../contexts/AuthContext';

import Header from '../components/Header';
import Footer from '../components/Footer';

const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', formData);
      const { user, token } = response.data;
          // Stocker le token dans le localStorage
    localStorage.setItem('token', token);

      login(user); // Stocke les informations de l'utilisateur dans le contexte
      navigate('/'); // Redirige vers la page d'accueil
    } catch (error) {
      setMessage(error.response ? error.response.data.message : 'Une erreur est survenue');
    }
  };
  
    return (
    <div className="flex flex-col min-h-screen bg-blue-100">
      <Header />

      <div className="flex items-center justify-center flex-grow p-4">
        <div className="w-full md:w-3/4 lg:w-1/2 bg-white rounded-lg shadow-lg p-8 md:p-16">
          <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">Connexion</h2>
          {message && <p className="text-red-500 mb-4">{message}</p>}

          <form onSubmit={handleSubmit} className="space-y-4">
            <label className="block">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />

            <label className="block">Mot de passe</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />

            <div className="flex justify-between items-center mt-2">
              <Link to="/forgot-password" className="text-blue-600 hover:underline">
                Mot de passe oublié ?
              </Link>
            </div>

            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 mt-4">
              Se connecter
            </button>
          </form>

          <p className="text-center mt-6">
            Pas encore de compte ? <Link to="/signup" className="text-blue-600 hover:underline">Inscrivez-vous</Link>
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LoginPage;
