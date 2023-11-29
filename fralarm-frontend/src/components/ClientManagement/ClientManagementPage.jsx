import React from 'react';
import ClientList from './ClientList';
import ClientAnalytics from "./ClientAnalytics";
import MainClientPage from './MainClientPage'; // Importing the new MainClientPage component
import { FaUsers, FaFilter, FaFileExport, FaCog, FaChartBar, FaHome } from 'react-icons/fa';

const ClientManagementPage = () => {
    const [activeComponent, setActiveComponent] = React.useState('mainClientPage'); // Default to MainClientPage

    return (


        <div className="flex flex-col md:flex-row min-h-screen bg-blue-50">
            {/* Sidebar */}
            <div className="md:w-1/5 bg-blue-100 p-4">
                <h3 className="font-semibold text-xl text-blue-700 mb-6">Client Management</h3>
                <ul className="flex flex-col">
                    <li className="mb-2">
                        <button
                            className="text-blue-700 font-semibold hover:bg-blue-200 p-2 rounded flex items-center"
                            onClick={() => setActiveComponent('mainClientPage')}>
                            <FaHome className="mr-2" /> Home
                        </button>
                    </li>
                    <li className="mb-2">
                        <button
                            className="text-blue-700 font-semibold hover:bg-blue-200 p-2 rounded flex items-center"
                            onClick={() => setActiveComponent('clientList')}>
                            <FaChartBar className="mr-2" /> Client List
                        </button>
                    </li>
                    <li className="mb-2">
                        <button
                            className="text-blue-700 font-semibold hover:bg-blue-200 p-2 rounded flex items-center"
                            onClick={() => setActiveComponent('clientAnalytics')}>
                            <FaChartBar className="mr-2" /> Client Analytics
                        </button>
                    </li>
                    <li className="mb-2">
                        <button
                            className="text-blue-700 font-semibold hover:bg-blue-200 p-2 rounded flex items-center"
                            onClick={() => setActiveComponent('settings')}>
                            <FaCog className="mr-2" /> Settings
                        </button>
                    </li>

                </ul>
            </div>

            {/* Main content */}
            <div className="flex-grow p-8">
                {activeComponent === 'mainClientPage' && <MainClientPage />}
                {activeComponent === 'clientList' && <ClientList />}
                {activeComponent === 'clientAnalytics' && <ClientAnalytics />}
                {/* Additional conditions for other components like settings, etc. */}
            </div>
        </div>
    );
};

export default ClientManagementPage;
