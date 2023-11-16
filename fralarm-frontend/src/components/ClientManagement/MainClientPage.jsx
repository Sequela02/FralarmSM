import React from 'react';
import { FaChartPie, FaRegListAlt, FaCalendarAlt, FaUserTie, FaBriefcase, FaClipboardList, FaRegBell } from 'react-icons/fa';

const MainClientPage = () => {
    return (
        <div className="space-y-8 bg-gray-50 p-6">
            <h2 className="text-4xl font-bold text-gray-800 leading-tight mb-6">Welcome to Client Management</h2>

            {/* Hero Section with Interactive Elements */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6 rounded-lg shadow-md text-white">
                <h3 className="text-2xl font-semibold mb-4">Get Insights at a Glance</h3>
                <p>Explore your client management dashboard for real-time analytics and updates.</p>
                {/* Interactive elements or buttons for quick actions */}
            </div>

            {/* Grid Section for Dashboard Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {/* Unique Card Design */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-500">
                    <div className="p-4">
                        <FaUserTie className="text-blue-600 text-3xl"/>
                        <h4 className="font-semibold text-lg text-black mt-2">New Clients</h4>
                        <p className="text-gray-600">24 New this week</p>
                    </div>
                    <div className="bg-blue-100 p-4">
                        {/* Mini chart or key metric */}
                    </div>
                </div>

                {/* Repeat similar cards with unique designs */}
                {/* ... other cards ... */}
            </div>

            {/* Interactive Shortcuts with Animation */}
            <div className="flex flex-wrap gap-4 justify-center">
                <div className="group bg-white rounded-lg p-3 cursor-pointer transition duration-300 ease-in-out border border-gray-300 hover:shadow-lg">
                    <FaBriefcase className="text-blue-700 text-2xl mr-2 group-hover:text-blue-800"/>
                    <span className="font-medium text-black group-hover:text-blue-800">Manage Projects</span>
                </div>

                {/* ... other shortcuts ... */}
            </div>

            {/* Additional Creative Sections */}
            {/* Consider adding a collapsible FAQ section, interactive graphs, or a live feed of client activities */}

        </div>
    );
};

export default MainClientPage;
