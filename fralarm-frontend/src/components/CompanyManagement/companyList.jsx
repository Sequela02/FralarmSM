import React, { useEffect, useState } from 'react';
import { fetchCompanies } from '../../services/companyServices'; // Adjusted service import
import { Toaster, toast } from 'sonner';
import { FaSearch, FaEye, FaEdit, FaTrashAlt } from 'react-icons/fa';

const CompanyList = () => {
    const [companies, setCompanies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    // Placeholder state for sort configuration
    const [sortConfig, setSortConfig] = useState(null);

    useEffect(() => {
        fetchCompanies().then(response => {
            // Assuming response.data is the array of companies
            setCompanies(response.data);
        }).catch(error => {
            console.error('Error fetching companies:', error);
        });
    }, []);

    // Placeholder function for sorting

    // Function to handle company deletion

    return (
        <div className="overflow-hidden shadow-md sm:rounded-lg">
            {/* Add Company Button and Search Bar Container */}
            <div className="bg-white p-4 flex justify-between items-center">
                <div className="flex basis-2/3">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Add New Company
                    </button>
                    <div className="ml-4 relative">
                        <input
                            type="text"
                            placeholder="Search company..."
                            className="border p-2 rounded w-full"
                            value={searchTerm}
                            onChange={e => setSearchTerm(e.target.value)}
                        />
                        {/* Search Icon */}
                        <div className="absolute right-3 top-3">
                            <FaSearch className="w-4 h-4 text-gray-600" />
                        </div>
                    </div>
                </div>
                {/* Export Data Button */}
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                    Export Data
                </button>
            </div>

            {/* Company List Table */}
            <table className="min-w-full leading-normal">
                <thead>
                <tr>
                    {/* Adjusted column headers for companies */}
                    <th className="px-5 py-3 border-b-2 border-blue-200 bg-blue-100 text-center text-xs font-semibold text-blue-600 uppercase tracking-wider">
                        ID
                    </th>
                    <th className="px-5 py-3 border-b-2 border-blue-200 bg-blue-100 text-center text-xs font-semibold text-blue-600 uppercase tracking-wider">
                        Name
                    </th>
                    <th className="px-5 py-3 border-b-2 border-blue-200 bg-blue-100 text-center text-xs font-semibold text-blue-600 uppercase tracking-wider">
                        Address
                    </th>
                    <th className="px-5 py-3 border-b-2 border-blue-200 bg-blue-100 text-center text-xs font-semibold text-blue-600 uppercase tracking-wider">
                        Contact Number
                    </th>
                    <th className="px-5 py-3 border-b-2 border-blue-200 bg-blue-100 text-center text-xs font-semibold text-blue-600 uppercase tracking-wider">
                        Actions
                    </th>
                </tr>
                </thead>
                <tbody>
                {companies.map(company => (
                    <tr key={company.id} className="hover:bg-blue-50">
                        {/* Adjusted table cells for companies */}
                        <td className="px-5 py-5 border-b border-blue-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">{company.id}</p>
                        </td>
                        <td className="px-5 py-5 border-b border-blue-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">{company.name}</p>
                        </td>
                        <td className="px-5 py-5 border-b border-blue-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">{company.address}</p>
                        </td>
                        <td className="px-5 py-5 border-b border-blue-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">{company.contactNumber}</p>
                        </td>
                        <td className="px-5 py-5 border-b border-blue-200 bg-white text-sm">
                            <div className="flex justify-center">
                                {/* Action buttons */}
                                <button className="text-blue-500 hover:text-blue-700 mr-3">
                                    <FaEye className="inline mr-1" /> View
                                </button>
                                <button className="text-green-500 hover:text-green-700 mr-3">
                                    <FaEdit className="inline mr-1" /> Edit
                                </button>
                                <button className="text-red-500 hover:text-red-700">
                                    <FaTrashAlt className="inline mr-1" /> Delete
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

export default CompanyList;
