import React, { useEffect, useState } from 'react';
import { fetchClients } from '../../services/clientService';
import { Card, Avatar, Badge, Progress, Tooltip, Link, Spacer, Accordion } from '@nextui-org/react';

const ClientAnalytics = () => {
    const [clients, setClients] = useState([]);

    useEffect(() => {
        fetchClients().then(response => {
            setClients(response.data); // Assuming the data is in the same format as your JSON
        }).catch(error => {
            console.error('Error fetching clients:', error);
        });
    }, []);

    const getActiveProjectsCount = (projects) => {
        return projects.filter(project => project.status === 'IN_PROGRESS').length;
    };

    const calculateProgress = (startDate, endDate) => {
        const start = new Date(startDate);
        const end = new Date(endDate);
        const now = new Date();

        const totalDuration = end.getTime() - start.getTime();
        const progressDuration = now.getTime() - start.getTime();
        const progressPercentage = (progressDuration / totalDuration) * 100;

        return Math.min(Math.max(progressPercentage, 0), 100); // Clamps the value between 0 and 100
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-semibold mb-4">Client Analytics</h2>
            {clients.map(client => (
                <div key={client.id} className="bg-white shadow-md rounded-lg p-4 mb-4">
                    <h3 className="text-xl font-semibold">{client.name} - {client.company.name}</h3>
                    <p>Email: {client.email}</p>
                    <p>Address: {client.address}</p>
                    <p>Phone Number: {client.phoneNumber}</p>
                    <p>Company Contact Number: {client.company.contactNumber}</p>
                    <p>Active Projects: {getActiveProjectsCount(client.projects)}</p>
                    {client.projects.map(project => (
                        <div key={project.id} className="mt-2">
                            <p className="font-medium">Project Name: {project.name}</p>
                            <p>Description: {project.description}</p>
                            <p>Status: {project.status}</p>
                            <p>Start Date: {project.startDate}</p>
                            <p>End Date: {project.endDate}</p>
                            <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
                                <div className="bg-blue-600 h-4 rounded-full" style={{ width: `${calculateProgress(project.startDate, project.endDate)}%` }}></div>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default ClientAnalytics;