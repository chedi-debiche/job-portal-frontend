import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import googleLogo from '../assets/google-logo.png';
import linkedinLogo from '../assets/linkedin-logo.png';
import signupvector from '../assets/vector.jpg';
import Header from '../components/Header';
import Footer from '../components/Footer';

const SignupPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    role: 'candidat',
    phone: '',
    location: '',
    skills: '',
    experience: '',
    linkedin: '',
    cv: null,
    companyName: '',
    website: '',
    logo: null,
    companyDescription: '',
    contactName: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    for (const key in formData) {
      if (formData[key]) {
        data.append(key, formData[key]);
      }
    }

    try {
      const response = await axios.post('http://localhost:5000/api/auth/signup', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response ? error.response.data.message : 'Une erreur est survenue');
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-blue-100">
      <Header />

      <div className="flex items-center justify-center flex-grow p-4">
        <div className="w-full md:w-3/4 lg:w-1/2 bg-white rounded-lg shadow-lg p-8 md:p-16">
          <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">Inscription</h2>
          {message && <p className="text-red-500 mb-4">{message}</p>}

          {/* Boutons de connexion avec Google et LinkedIn */}
          <div className="flex justify-center space-x-4 mb-6">
            <button onClick={() => console.log("Inscription avec Google")} className="flex items-center space-x-2 border border-gray-300 rounded-lg px-4 py-2">
              <img src={googleLogo} alt="Google Logo" className="w-5 h-5" />
              <span>Inscription avec Google</span>
            </button>
            <button onClick={() => console.log("Inscription avec LinkedIn")} className="flex items-center space-x-2 border border-gray-300 rounded-lg px-4 py-2">
              <img src={linkedinLogo} alt="LinkedIn Logo" className="w-5 h-5" />
              <span>Inscription avec LinkedIn</span>
            </button>
          </div>

          <div className="border-b border-gray-300 mb-6"></div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <label className="block">Nom d'utilisateur</label>
            <input type="text" name="username" value={formData.username} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" required />

            <label className="block">Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" required />

            <label className="block">Mot de passe</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" required />

            <label className="block">Rôle</label>
          

            <label className="block">Téléphone</label>
            <input type="text" name="phone" value={formData.phone} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" />

            <label className="block">Localisation</label>
            <input type="text" name="location" value={formData.location} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" />

            <label className="block">Compétences</label>
            <input type="text" name="skills" value={formData.skills} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" />

            <label className="block">Expérience</label>
            <input type="text" name="experience" value={formData.experience} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" />

            <label className="block">LinkedIn</label>
            <input type="text" name="linkedin" value={formData.linkedin} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" />

            <label className="block">CV (fichier PDF)</label>
            <input type="file" name="cv" accept=".pdf" onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" />

            <select name="role" value={formData.role} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded">
              <option value="candidat">Candidat</option>
              <option value="recruteur">Recruteur</option>
            </select>

            {formData.role === 'recruteur' && (
              <>
                <label className="block">Nom de l'entreprise</label>
                <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" />

                <label className="block">Site Web</label>
                <input type="url" name="website" value={formData.website} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" />

                <label className="block">Logo (image)</label>
                <input type="file" name="logo" accept="image/*" onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" />

                <label className="block">Nom du contact</label>
                <input type="text" name="contactName" value={formData.contactName} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" />

                <label className="block">Description de l'entreprise</label>
                <textarea name="companyDescription" value={formData.companyDescription} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" rows="3" />
              </>
            )}

            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">S'inscrire</button>
          </form>

          <p className="text-center mt-6">
            Déjà inscrit ? <Link to="/login" className="text-blue-600 hover:underline">Se connecter</Link>
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SignupPage;
