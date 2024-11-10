import React from 'react';

const JobCard = ({ title, company, location }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-700">{company}</p>
      <p className="text-gray-500">{location}</p>
      <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
        Voir Détails
      </button>
    </div>
  );
};

export default JobCard;
