import React, { useEffect, useState } from 'react';
import { fetchClients } from '../../services/projectsService';
// Import additional libraries for sorting, exporting, etc.

const ProjectList = () => {
    const [projects, setProjects] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    // Placeholder state for sort configuration
    const [sortConfig, setSortConfig] = useState(null);

    useEffect(() => {
        fetchClients().then(response => {
            // Assuming response.data is the array of clients
            setProjects(response.data);
        }).catch(error => {
            console.error('Error fetching clients:', error);
        });
    }, []);

    // Placeholder function for sorting
    const sortData = (field) => {
        // Implement sorting logic here...
    };

    // Placeholder function for exporting data
    const exportData = () => {
        // Implement data export logic here...
    };
    // Function to handle client deletion
    const handleDelete = (clientId) => {
        // Confirm with the user
        if (window.confirm('Are you sure you want to delete this client?')) {


        }
    };

    return (
        <div className="overflow-hidden shadow-md sm:rounded-lg">
            {/* Add Client Button and Search Bar Container */}
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

            {/* Client List Table */}
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
                        Name
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
                            <p className="text-gray-900 whitespace-no-wrap">{project.name}</p>
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
