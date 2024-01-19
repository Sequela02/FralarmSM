import React from 'react';
import { FaHome, FaCamera, FaUsers, FaProjectDiagram, FaWarehouse, FaSignInAlt, FaBuilding } from 'react-icons/fa'; // Import FaBuilding for Companies
const Header = () => {
    return (
        <header className="bg-gradient-to-r from-blue-800 to-blue-500 shadow-lg">
            <div className="container mx-auto px-6 py-3 flex justify-between items-center">
                <a href="/" className="flex items-center text-lg font-semibold text-white">
                    <img src="/ea.jpg" alt="Logo" className="max-h-12 mr-2"/> {/* Scale image to fit the <a> tag */}

                </a>

                <nav className="block">
                    <ul className="flex items-center space-x-6">
                        <li>
                            <a href="/"
                               className="text-white hover:text-blue-300 transition duration-300 flex items-center">
                                <FaHome className="mr-1"/> Home
                            </a>
                        </li>
                        <li>
                            <a href="/clients"
                               className="text-white hover:text-blue-300 transition duration-300 flex items-center">
                                <FaUsers className="mr-1"/> Clients
                            </a>
                        </li>
                        <li>
                            <a href="/projects"
                               className="text-white hover:text-blue-300 transition duration-300 flex items-center">
                                <FaProjectDiagram className="mr-1"/> Projects
                            </a>
                        </li>
                        <li>
                            <a href="/inventory"
                               className="text-white hover:text-blue-300 transition duration-300 flex items-center">
                                <FaWarehouse className="mr-1"/> Inventory
                            </a>
                        </li>
                        <li>
                            <a href="/companies"
                               className="text-white hover:text-blue-300 transition duration-300 flex items-center">
                                <FaBuilding className="mr-1"/> Companies
                            </a>
                        </li>
                        {/* Additional navigation items can be added here */}
                    </ul>
                </nav>


                <div className="flex items-center">
                    <button
                        className="bg-blue-800 hover:bg-blue-700 transition duration-300 text-white px-4 py-2 rounded flex items-center focus:outline-none">
                        <FaSignInAlt className="mr-1"/> Login
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
