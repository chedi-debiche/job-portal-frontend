import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faUsers, faUser, faSearch } from '@fortawesome/free-solid-svg-icons';
import { AuthContext } from '../contexts/AuthContext';

const Header = () => {
  const { isAuthenticated, user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false); // Nouvel état pour contrôler la visibilité du menu

  const handleLogout = async () => {
    await logout();
    setMenuOpen(false); // Ferme le menu après déconnexion
    navigate('/login');
  };

  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-md">
      {/* Logo */}
      <div className="flex items-center space-x-4">
        <div className="text-blue-600 font-bold text-3xl tracking-wide" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)' }}>
          HireFlow
        </div>
        <nav className="hidden md:flex space-x-6">
          <Link to="/jobs" className="text-gray-700 hover:text-black">Trouver un job</Link>
          <Link to="/companies" className="text-gray-700 hover:text-black">Trouver une entreprise</Link>
          <Link to="/media" className="text-gray-700 hover:text-black">Média</Link>
        </nav>
      </div>

      {/* Barre de recherche */}
      <div className="hidden lg:flex items-center border rounded-full px-3 py-1 bg-gray-100">
        <FontAwesomeIcon icon={faSearch} className="text-gray-500" />
        <input
          type="text"
          placeholder="Cherchez un job, une entreprise..."
          className="ml-2 bg-transparent outline-none"
        />
      </div>

      {/* Liens et boutons */}
      <div className="flex items-center space-x-6">
        <Link to="/employers" className="border border-gray-300 rounded-full px-3 py-1 hover:bg-gray-100">
          Employeurs
        </Link>

        {/* Icônes de navigation */}
        <Link to="/applications" className="text-gray-700 hover:text-black">
          <FontAwesomeIcon icon={faBriefcase} className="mr-1" /> Candidatures
        </Link>
        <Link to="/proposals" className="text-gray-700 hover:text-black">
          <FontAwesomeIcon icon={faUsers} className="mr-1" /> Propositions
        </Link>

        {/* Affichage conditionnel des options de connexion / profil */}
        {isAuthenticated ? (
          <div className="relative">
            <button
              className="text-gray-700 hover:text-black flex items-center"
              onClick={() => setMenuOpen(!menuOpen)} // Toggle visibility on click
            >
              <span className="mr-2">{user?.name || 'Mon espace'}</span>
              <FontAwesomeIcon icon={faUser} />
            </button>
            {/* Menu déroulant contrôlé par l'état `menuOpen` */}
            {menuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg">
                <Link
                  to="/profile"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  onClick={() => setMenuOpen(false)} // Ferme le menu après clic
                >
                  Mon profil
                </Link>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Déconnexion
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            <Link to="/login" className="text-gray-700 hover:text-black">
              <FontAwesomeIcon icon={faUser} className="mr-1" /> Se connecter
            </Link>
            <Link to="/signup" className="border border-blue-500 text-blue-500 rounded-full px-4 py-1 hover:bg-blue-500 hover:text-white">
              S'inscrire
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
