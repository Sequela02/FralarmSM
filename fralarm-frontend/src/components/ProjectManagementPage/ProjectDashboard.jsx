import React from 'react';
import ProjectList from './projectList';
import { FaProjectDiagram, FaFilter, FaFileExport, FaCog, FaChartLine } from 'react-icons/fa'; // Importing icons for project management

const ProjectDashboard = () => {
    return (
        <div className="flex flex-col md:flex-row min-h-screen bg-blue-50">
            {/* Sidebar */}
            <div className="md:w-1/5 bg-blue-100 p-4">
                <h3 className="font-semibold text-xl text-blue-700 mb-6">Project Management</h3>
                <ul className="flex flex-col">
                    {/* Sidebar items for project management */}
                    <li className="mb-2">
                        <button className="text-blue-700 font-semibold hover:bg-blue-200 p-2 rounded flex items-center">
                            <FaProjectDiagram className="mr-2" /> Project Categories
                        </button>
                    </li>
                    <li className="mb-2">
                        <button className="text-blue-700 font-semibold hover:bg-blue-200 p-2 rounded flex items-center">
                            <FaFilter className="mr-2" /> Quick Filters
                        </button>
                    </li>
                    <li className="mb-2">
                        <button className="text-blue-700 font-semibold hover:bg-blue-200 p-2 rounded flex items-center">
                            <FaChartLine className="mr-2" /> Project Reports
                        </button>
                    </li>
                    <li className="mb-2">
                        <button className="text-blue-700 font-semibold hover:bg-blue-200 p-2 rounded flex items-center">
                            <FaFileExport className="mr-2" /> Import/Export
                        </button>
                    </li>
                    <li className="mb-2">
                        <button className="text-blue-700 font-semibold hover:bg-blue-200 p-2 rounded flex items-center">
                            <FaCog className="mr-2" /> Settings & Preferences
                        </button>
                    </li>
                    {/* ... other sidebar items ... */}
                </ul>
            </div>

            {/* Main content */}
            <div className="flex-grow p-8">
                <div className="mb-4">
                    <h2 className="text-3xl font-semibold text-blue-700 leading-tight">Project Dashboard</h2>
                </div>

                <div className="py-4">
                    {/* Project List Component */}
                    <ProjectList />
                </div>
            </div>
        </div>
    );
};

export default ProjectDashboard;
