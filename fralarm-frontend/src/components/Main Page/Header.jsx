import React from 'react';
// Import other components or assets if necessary, like a logo

const Header = () => {
    return (
        <header className="bg-blue-900 shadow-lg">
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
                            <a href="/" className="text-white hover:text-blue-300 transition duration-300">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="/clients" className="text-white hover:text-blue-300 transition duration-300">
                                Clients
                            </a>
                        </li>
                        <li>
                            <a href="/projects" className="text-white hover:text-blue-300 transition duration-300">
                                Projects
                            </a>
                        </li>
                        <li>
                            <a href="/inventory" className="text-white hover:text-blue-300 transition duration-300">
                                Inventory
                            </a>
                        </li>
                        {/* Add more navigation items here */}
                    </ul>
                </nav>

                {/* Placeholder for user account or settings */}
                <div className="flex items-center">
                    <button className="bg-blue-800 hover:bg-blue-700 transition duration-300 text-white px-4 py-2 rounded focus:outline-none">
                        Login
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
