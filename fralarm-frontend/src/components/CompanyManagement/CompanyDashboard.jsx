import React from 'react';
import CompanyList from './companyList'; // Placeholder for the company list component
import { FaBuilding, FaSearch, FaChartPie, FaFileImport, FaTools } from 'react-icons/fa'; // Importing icons for company management

const CompanyDashboard = () => {
    return (
        <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
            {/* Sidebar */}
            <div className="md:w-1/5 bg-gray-100 p-4">
                <h3 className="font-semibold text-xl text-gray-700 mb-6">Company Management</h3>
                <ul className="flex flex-col">
                    {/* Sidebar items for company management */}
                    <li className="mb-2">
                        <button className="text-gray-700 font-semibold hover:bg-gray-200 p-2 rounded flex items-center">
                            <FaBuilding className="mr-2" /> Company Profiles
                        </button>
                    </li>
                    <li className="mb-2">
                        <button className="text-gray-700 font-semibold hover:bg-gray-200 p-2 rounded flex items-center">
                            <FaSearch className="mr-2" /> Search Companies
                        </button>
                    </li>
                    <li className="mb-2">
                        <button className="text-gray-700 font-semibold hover:bg-gray-200 p-2 rounded flex items-center">
                            <FaChartPie className="mr-2" /> Performance Reports
                        </button>
                    </li>
                    <li className="mb-2">
                        <button className="text-gray-700 font-semibold hover:bg-gray-200 p-2 rounded flex items-center">
                            <FaFileImport className="mr-2" /> Import/Export Data
                        </button>
                    </li>
                    <li className="mb-2">
                        <button className="text-gray-700 font-semibold hover:bg-gray-200 p-2 rounded flex items-center">
                            <FaTools className="mr-2" /> Settings & Administration
                        </button>
                    </li>
                    {/* ... other sidebar items ... */}
                </ul>
            </div>

            {/* Main content */}
            <div className="flex-grow p-8">
                <div className="mb-4">
                    <h2 className="text-3xl font-semibold text-gray-700 leading-tight">Company Dashboard</h2>
                </div>

                <div className="py-4">
                    {/* Company List Component */}
                    <CompanyList />
                </div>
            </div>
        </div>
    );
};

export default CompanyDashboard;
