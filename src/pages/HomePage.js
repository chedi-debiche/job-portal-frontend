import React from 'react';
import Header from '../components/Header';
import JobCard from '../components/JobCard';
import Footer from '../components/Footer';
import Hero from '../components/Hero';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Section Hero */}
      <Hero />

      <main className="flex-grow container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center mb-8">Les Dernières Offres d'Emploi</h1>
        
        {/* Grille des offres d'emploi */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Exemple de cartes d'offres d'emploi */}
          <JobCard title="Développeur Frontend" company="TechCorp" location="Paris" />
          <JobCard title="Data Analyst" company="DataCorp" location="Lyon" />
          <JobCard title="Product Manager" company="Innovate Inc." location="Marseille" />
          {/* Plus de JobCards ici */}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
