import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white shadow">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-2xl font-bold">DWM Form</h1>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">Today's</Link>
          <Link to="/pending" className="hover:underline">Pending</Link>
          <Link to="/saved" className="hover:underline">Saved</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;