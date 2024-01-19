import React, {useEffect, useState} from 'react';
import {
    FaChartPie,
    FaRegListAlt,
    FaCalendarAlt,
    FaUserTie,
    FaBriefcase,
    FaClipboardList,
    FaRegBell,
    FaStar,
    FaProjectDiagram,
    FaPlus,
    FaFileAlt,
    FaCommentDots,
    FaUserEdit,
    FaHourglassHalf,
    FaChartBar,
    FaHeadset,
    FaChartLine, FaEye
} from 'react-icons/fa';
import { fetchClients } from '../../services/clientService';
import DashboardCard from '../util/DashboardCard';



// ShortcutButton Component
const ShortcutButton = ({ icon: Icon, label }) => (
    <div className="group bg-white rounded-lg p-3 cursor-pointer transition duration-300 ease-in-out border border-gray-300 hover:shadow-lg">
        <Icon className="text-blue-700 text-2xl mr-2 group-hover:text-blue-800"/>
        <span className="font-medium text-black group-hover:text-blue-800">{label}</span>
    </div>
);

// MainClientPage Component
const MainClientPage = () => {
    const [clients, setClients] = useState([]);
    const [dashboardMetrics, setDashboardMetrics] = useState({
        clientsWithProjects: 0,
        clientsInPlanning: 0,
        clientsWithLongTermProjects: 0
    });

    const calculateMetrics = (clientsData) => {
        const clientsWithProjects = clientsData.filter(client => client.projects && client.projects.length > 0).length;
        const clientsInPlanning = clientsData.filter(client =>
            client.projects.some(project => project.status === 'PLANNING')
        ).length;
        const clientsWithLongTermProjects = clientsData.filter(client =>
            client.projects.some(project => {
                const startDate = new Date(project.startDate);
                const endDate = new Date(project.endDate);
                return (endDate - startDate) / (1000 * 3600 * 24) > 365;
            })
        ).length;

        return { clientsWithProjects, clientsInPlanning, clientsWithLongTermProjects };
    };

    useEffect(() => {
        fetchClients().then(response => {
            setClients(response.data);
            setDashboardMetrics(calculateMetrics(response.data));
        }).catch(error => {
            console.error('Error fetching clients:', error);
        });
    }, []);
    // Destructure the necessary properties from dashboardMetrics
    const { clientsWithProjects, clientsInPlanning, clientsWithLongTermProjects } = dashboardMetrics;

    return (
        <div className="space-y-6 bg-gray-50 p-4">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Welcome to Client Management</h2>

            {/* Hero Section with Interactive Elements */}
            <div
                className="bg-gradient-to-r from-blue-600 to-blue-800 p-4 rounded-lg shadow-lg text-white flex items-center justify-between">
                <div>
                    <h3 className="text-xl font-semibold mb-2 flex items-center"><FaEye className="mr-2"/> Get Insights
                        at a Glance</h3>
                    <p>Explore your client management dashboard for real-time analytics and updates.</p>
                </div>
                <FaChartLine className="text-4xl opacity-75"/> {/* Decorative icon */}
            </div>
            {/* Grid Section for Dashboard Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                <DashboardCard
                    icon={FaUserTie}
                    title="Total Clients"
                    subtitle={`${clients.length} Total`}
                    backgroundColor="bg-blue-100" // Example of using different background colors
                    footerContent={<button className="text-blue-500 hover:text-blue-700">View
                        Details</button>} // Optional quick action
                />
                <DashboardCard
                    icon={FaHourglassHalf}
                    title="Long-term Projects"
                    subtitle={`${clientsWithLongTermProjects} Clients`}
                    backgroundColor="bg-green-100"
                    footerContent={<button className="text-green-500 hover:text-green-700">View Projects</button>}

                />
                <DashboardCard
                    icon={FaProjectDiagram}
                    title="Clients with Projects"
                    subtitle={`${clientsWithProjects} Clients`}
                    backgroundColor="bg-green-100"
                    footerContent={<button className="text-green-500 hover:text-green-700">View Projects</button>}
                />
                <DashboardCard
                    icon={FaClipboardList}
                    title="Clients in Planning "
                    subtitle={`${clientsInPlanning} Clients`}
                    backgroundColor="bg-yellow-100"
                    footerContent={<button className="text-yellow-500 hover:text-yellow-700">Planning Overview</button>}
                />
                {/* ...other cards... */}
            </div>

            {/* Interactive Shortcuts with Animation */}
            {/* Separate Shortcuts Section */}
            <div className="flex flex-wrap gap-4 justify-center">
                <ShortcutButton icon={FaUserEdit} label="Update Client Info"/>
                <ShortcutButton icon={FaCalendarAlt} label="Schedule Meeting"/>
                <ShortcutButton icon={FaCommentDots} label="Client Feedback"/>
                <ShortcutButton icon={FaChartBar} label="Client Analytics"/>
                <ShortcutButton icon={FaHeadset} label="Contact Support"/>
            </div>
        </div>
    );
};

export default MainClientPage;
