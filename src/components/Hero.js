import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye, faLightbulb, faUser, faSearch } from '@fortawesome/free-solid-svg-icons';
import { AuthContext } from '../contexts/AuthContext';

const HeroSection = () => {
  const { user } = useContext(AuthContext);

  return (
    <section className="bg-purple-700 text-white py-16 px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        
        {/* Texte principal */}
        <div className="flex-1 mb-8 md:mb-0 text-center md:text-left">
          <h1 className="text-5xl font-bold leading-tight">
            {user ? `Hello, ${user.username}` : 'THE JOB IS YOURS'}
          </h1>
        </div>

        {/* Colonnes d'information */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-8 text-black">
          <div className="flex flex-col items-start">
            <FontAwesomeIcon icon={faBullseye} className="text-yellow-500 text-2xl mb-2" />
            <h2 className="text-lg font-semibold">RECHERCHE SIMPLIFIÉE</h2>
            <p className="text-gray-200">
              Accédez en un clin d'œil aux informations clés du poste et du recrutement.
            </p>
          </div>
          <div className="flex flex-col items-start">
            <FontAwesomeIcon icon={faLightbulb} className="text-yellow-500 text-2xl mb-2" />
            <h2 className="text-lg font-semibold">CHOIX ÉCLAIRÉ</h2>
            <p className="text-gray-200">
              Explorez les entreprises, découvrez les équipes, pour choisir selon vos critères.
            </p>
          </div>
          <div className="flex flex-col items-start">
            <FontAwesomeIcon icon={faUser} className="text-yellow-500 text-2xl mb-2" />
            <h2 className="text-lg font-semibold">ESPACE PERSONNALISÉ</h2>
            <p className="text-gray-200">
              Créez un compte gratuit et accélérez votre recherche avec le Comparateur de jobs.
            </p>
          </div>
        </div>
      </div>

      {/* Barre de recherche */}
      <div className="mt-12 flex justify-center">
        <div className="flex items-center bg-white text-gray-700 rounded-full shadow-lg overflow-hidden w-full max-w-md">
          <FontAwesomeIcon icon={faSearch} className="ml-4 text-gray-400" />
          <input
            type="text"
            placeholder="Cherchez un job par intitulé de poste, mot-clé ou entreprise"
            className="flex-grow px-4 py-2 text-sm bg-transparent outline-none"
          />
          <button className="bg-black text-white px-6 py-2 font-semibold hover:bg-gray-800">
            Explorer les jobs
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
