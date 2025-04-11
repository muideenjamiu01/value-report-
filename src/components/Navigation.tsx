import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? 'bg-indigo-700' : '';
  };

  return (
    <nav className="bg-indigo-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-4">
          <Link to="/cover" className={`px-3 py-2 rounded-md ${isActive('/')}`}>Cover</Link>
          <Link to="/profile" className={`px-3 py-2 rounded-md ${isActive('/profile')}`}>Profile</Link>
          <Link to="/results" className={`px-3 py-2 rounded-md ${isActive('/results')}`}>Results</Link>
          <Link to="/key-facts" className={`px-3 py-2 rounded-md ${isActive('/key-facts')}`}>Key Facts</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;