import React from 'react';
import { FaHome, FaUsers, FaProjectDiagram, FaWarehouse, FaSignInAlt } from 'react-icons/fa'; // Icons for menu items

const Header = () => {
    return (
        <header className="bg-gradient-to-r from-blue-800 to-blue-500 shadow-lg">
            <div className="container mx-auto px-6 py-3 flex justify-between items-center">
                <a href="/" className="text-lg font-semibold text-white flex items-center">
                    {/* Replace with your actual logo if you have one */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-8 h-8 mr-2"
                    >
                        {/* Example SVG logo */}
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 16h-1v-4h-1l5-5 5 5h-1v4h-1"
                        />
                    </svg>
                    FrAlarm
                </a>

                <nav className="block">
                    <ul className="flex items-center space-x-6">
                        <li>
                            <a href="/" className="text-white hover:text-blue-300 transition duration-300 flex items-center">
                                <FaHome className="mr-1" /> Home
                            </a>
                        </li>
                        <li>
                            <a href="/clients" className="text-white hover:text-blue-300 transition duration-300 flex items-center">
                                <FaUsers className="mr-1" /> Clients
                            </a>
                        </li>
                        <li>
                            <a href="/projects" className="text-white hover:text-blue-300 transition duration-300 flex items-center">
                                <FaProjectDiagram className="mr-1" /> Projects
                            </a>
                        </li>
                        <li>
                            <a href="/inventory" className="text-white hover:text-blue-300 transition duration-300 flex items-center">
                                <FaWarehouse className="mr-1" /> Inventory
                            </a>
                        </li>
                        {/* Add more navigation items here */}
                    </ul>
                </nav>

                <div className="flex items-center">
                    <button className="bg-blue-800 hover:bg-blue-700 transition duration-300 text-white px-4 py-2 rounded flex items-center focus:outline-none">
                        <FaSignInAlt className="mr-1" /> Login
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
