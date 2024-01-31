import React, { useEffect, useState } from 'react';
import { fetchClients } from '../../services/clientService';
import { Bar} from 'react-chartjs-2';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';

// Registering necessary components for charts
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
);

const ClientAnalytics = () => {
    const [clients, setClients] = useState([]);
    const [clientProjectsStatusData, setClientProjectsStatusData] = useState({
        labels: [],
        datasets: []
    });
    const [searchTerm, setSearchTerm] = useState('');
    const [filterStatus, setFilterStatus] = useState('All');

    useEffect(() => {
        fetchClients().then(response => {
            setClients(response.data || []);
            prepareClientProjectsStatusData(response.data || []);
        }).catch(error => {
            console.error('Error fetching clients:', error);
        });
    }, []);
    // Define a function to calculate the minimum width of the chart based on the number of clients
    const getChartMinWidth = () => {
        const minWidthPerClient = 150; // Adjust this value based on your design
        const totalWidth = clients.length * minWidthPerClient;
        return Math.max(totalWidth, 1000); // Ensure a minimum width
    };

    const prepareClientProjectsStatusData = (clientsData) => {
        const projectStatuses = ['IN_PROGRESS', 'COMPLETED', 'PLANNING', 'ON_HOLD'];
        const statusData = projectStatuses.map(status => {
            return {
                label: status,
                data: clientsData.map(client =>
                    client.projects.filter(project => project.status === status).length
                ),
                backgroundColor: getRandomColor()
            };
        });

        setClientProjectsStatusData({
            labels: clientsData.map(client => client.name),
            datasets: statusData
        });
    };



    const getRandomColor = () => {
        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);
        return `rgba(${r}, ${g}, ${b}, 0.5)`;
    };
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleFilterChange = (event) => {
        setFilterStatus(event.target.value);
    };


    return (

        <div className="container mx-auto p-4">
            <h2 className="text-3xl font-bold text-center mb-8">Client Analytics Dashboard</h2>

            {/* Search and Filter Section */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                <input
                    type="text"
                    placeholder="Search by client name"
                    onChange={handleSearchChange}
                    className="p-2 border border-gray-300 rounded mb-4 md:mb-0 w-full md:w-auto"
                />
                <select
                    onChange={handleFilterChange}
                    defaultValue="All"
                    className="p-2 border border-gray-300 rounded w-full md:w-auto"
                >
                    <option value="All">All Statuses</option>
                    <option value="IN_PROGRESS">In Progress</option>
                    <option value="COMPLETED">Completed</option>
                    {/* ... other status options ... */}
                </select>
            </div>

            {/* Chart Section with Conditional Horizontal Scrollbar */}
            <div className="mb-8 shadow-lg rounded-lg overflow-hidden">
                <h3 className="text-lg font-semibold p-4 bg-gray-100">Projects per Client (Status Categorized)</h3>
                <div className={`overflow-x-auto ${clients.length > 4 ? 'scrollbar' : ''}`}>
                    <div style={{ minWidth: `${getChartMinWidth()}px` }}>
                        <Bar data={clientProjectsStatusData} options={{ responsive: true, maintainAspectRatio: true }} />
                    </div>
                </div>
            </div>

            {/* ... other sections ... */}
        </div>

    );
};

export default ClientAnalytics;
