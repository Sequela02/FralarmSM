import React, { useEffect, useState } from 'react';
import { fetchProjects } from '../../services/projectsService';
import { fetchClients } from '../../services/clientService';

const ProjectList = () => {
    const [projects, setProjects] = useState([]);
    const [clients, setClients] = useState({});
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetchProjects().then(response => {
            setProjects(response.data);
        }).catch(error => {
            console.error('Error fetching projects:', error);
        });

        fetchClients().then(response => {
            const clientMap = {};
            response.data.forEach(client => {
                clientMap[client.id] = client.name;
            });
            setClients(clientMap);
        }).catch(error => {
            console.error('Error fetching clients:', error);
        });
    }, []);



    return (
        <div className="overflow-hidden shadow-md sm:rounded-lg">
              <div className="bg-white p-4 flex justify-between items-center">
            <div className="flex basis-2/3">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Add New Project
                </button>
                <div className="ml-4 relative">
                    <input
                        type="text"
                        placeholder="Search project..."
                        className="border p-2 rounded w-full"
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                    />
                    {/* Search Icon */}
                    <div className="absolute right-3 top-3">
                        <svg className="w-4 h-4 text-gray-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M21 21l-4.35-4.35m2.35-3.65a7 7 0 1 1-14 0 7 7 0 0 1 14 0z"></path>
                        </svg>
                    </div>
                </div>
            </div>
                {/* Export Data Button */}
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                Export Data
            </button>
        </div>

            <table className="min-w-full leading-normal">
                <thead>
                <tr>
                    <th className="px-5 py-3 border-b-2 border-blue-200 bg-blue-100 text-center text-xs font-semibold text-blue-600 uppercase tracking-wider">
                        ID
                    </th>
                    <th className="px-5 py-3 border-b-2 border-blue-200 bg-blue-100 text-center text-xs font-semibold text-blue-600 uppercase tracking-wider">
                        Description
                    </th>
                    <th className="px-5 py-3 border-b-2 border-blue-200 bg-blue-100 text-center text-xs font-semibold text-blue-600 uppercase tracking-wider">
                        Start Date
                    </th>
                    <th className="px-5 py-3 border-b-2 border-blue-200 bg-blue-100 text-center text-xs font-semibold text-blue-600 uppercase tracking-wider">
                        Client Name
                    </th>
                    <th className="px-5 py-3 border-b-2 border-blue-200 bg-blue-100 text-center text-xs font-semibold text-blue-600 uppercase tracking-wider">
                        Status
                    </th>
                    <th className="px-5 py-3 border-b-2 border-blue-200 bg-blue-100 text-center text-xs font-semibold text-blue-600 uppercase tracking-wider">
                        End Date
                    </th>
                    <th className="px-5 py-3 border-b-2 border-blue-200 bg-blue-100 text-center text-xs font-semibold text-blue-600 uppercase tracking-wider">
                        Actions
                    </th>
                </tr>
                </thead>
                <tbody>
                {projects.map(project => (
                    <tr key={project.id} className="hover:bg-blue-50">
                        <td className="px-5 py-5 border-b border-blue-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">{project.id}</p>
                        </td>
                        <td className="px-5 py-5 border-b border-blue-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">{project.description}</p>
                        </td>
                        <td className="px-5 py-5 border-b border-blue-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">{project.startDate}</p>
                        </td>
                        <td className="px-5 py-5 border-b border-blue-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">
                                {project.client.name}

                            </p>

                        </td>
                        <td className="px-5 py-5 border-b border-blue-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">{project.status}</p>
                        </td>
                        <td className="px-5 py-5 border-b border-blue-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">{project.endDate}</p>
                        </td>
                        <td className="px-5 py-5 border-b border-blue-200 bg-white text-sm">
                            <div className="flex justify-center">
                                <button className="text-blue-500 hover:text-blue-700 mr-3">
                                    {/* Add an icon for view details */}
                                    View
                                </button>
                                <button className="text-green-500 hover:text-green-700 mr-3">
                                    {/* Add an icon for edit */}
                                    Edit
                                </button>
                                <button className="text-red-500 hover:text-red-700">
                                    {/* Add an icon for delete */}
                                    Delete
                                </button>
                            </div>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProjectList;
