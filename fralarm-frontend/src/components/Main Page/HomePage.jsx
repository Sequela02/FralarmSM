import React from 'react';
import { FaBell, FaUsers, FaProjectDiagram, FaClipboardList, FaChartLine } from 'react-icons/fa';

const FeatureCard = ({ icon, title, description, onClick }) => (
    <div className="max-w-sm bg-white rounded-lg shadow-lg p-6 flex items-start gap-4 cursor-pointer" onClick={onClick}>
        {icon}
        <div>
            <h2 className="text-2xl text-blue-800 mb-2">{title}</h2>
            <p className="text-gray-600 text-base">{description}</p>
        </div>
    </div>
);

const HomePage = () => {
    // Dummy functions for handling clicks - replace with actual navigation logic
    const navigateTo = (path) => {
        console.log(`Navigate to ${path}`);
    };

    return (
        <div className="container mx-auto p-8">
            <section className="text-center mb-20">
                <h1 className="text-5xl text-blue-900 font-bold mb-6">Welcome to FrAlarm</h1>
                <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                    Streamline your security management with our comprehensive dashboard.
                </p>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {/* Replace dummy text with dynamic content as needed */}
                <FeatureCard
                    icon={<FaClipboardList className="text-4xl text-blue-800" />}
                    title="Client Overview"
                    description="Quick stats and recent activities of your clients."
                    onClick={() => navigateTo('/clients')}
                />
                <FeatureCard
                    icon={<FaProjectDiagram className="text-4xl text-blue-800" />}
                    title="Project Summary"
                    description="Overview of your projects' status and progress."
                    onClick={() => navigateTo('/projects')}
                />
                <FeatureCard
                    icon={<FaChartLine className="text-4xl text-blue-800" />}
                    title="Inventory Alerts"
                    description="Current stock levels and critical inventory alerts."
                    onClick={() => navigateTo('/inventory')}
                />
                {/* Additional sections can be added as per the requirements */}
            </section>
            {/* Other sections like Task Calendar, Financial Management, etc., can be added here */}
        </div>
    );
};

export default HomePage;
