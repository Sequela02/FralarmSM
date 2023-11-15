import React, { useEffect, useState } from 'react';
import { fetchClients } from '../../services/inventoryService';
import { Toaster, toast } from 'sonner';
import { FaSearch, FaEye, FaEdit, FaTrashAlt } from 'react-icons/fa';

// Import additional libraries for sorting, exporting, etc.

const InventoryList = () => {
    const [items, setItems] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    // Placeholder state for sort configuration
    const [sortConfig, setSortConfig] = useState(null);

    useEffect(() => {
        fetchClients().then(response => {
            // Assuming response.data is the array of clients
            setItems(response.data);
        }).catch(error => {
            console.error('Error fetching clients:', error);
        });
    }, []);

    // Placeholder function for sorting

    // Function to handle client deletion


    return (
        <div className="overflow-hidden shadow-md sm:rounded-lg">
            {/* Add Client Button and Search Bar Container */}
            <div className="bg-white p-4 flex justify-between items-center">
                <div className="flex basis-2/3">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Add New Item
                    </button>
                    <div className="ml-4 relative">
                        <input
                            type="text"
                            placeholder="Search item..."
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
                        Name
                    </th>
                    <th className="px-5 py-3 border-b-2 border-blue-200 bg-blue-100 text-center text-xs font-semibold text-blue-600 uppercase tracking-wider">
                        Description
                    </th>
                    <th className="px-5 py-3 border-b-2 border-blue-200 bg-blue-100 text-center text-xs font-semibold text-blue-600 uppercase tracking-wider">
                        Price
                    </th>
                    <th className="px-5 py-3 border-b-2 border-blue-200 bg-blue-100 text-center text-xs font-semibold text-blue-600 uppercase tracking-wider">
                        Quantity
                    </th>
                    <th className="px-5 py-3 border-b-2 border-blue-200 bg-blue-100 text-center text-xs font-semibold text-blue-600 uppercase tracking-wider">
                        Actions
                    </th>
                </tr>
                </thead>
                <tbody>
                {items.map(item => (
                    <tr key={item.id} className="hover:bg-blue-50">
                        <td className="px-5 py-5 border-b border-blue-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">{item.id}</p>
                        </td>
                        <td className="px-5 py-5 border-b border-blue-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">{item.name}</p>
                        </td>
                        <td className="px-5 py-5 border-b border-blue-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">{item.description}</p>
                        </td>
                        <td className="px-5 py-5 border-b border-blue-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">{item.price}</p>
                        </td>
                        <td className="px-5 py-5 border-b border-blue-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">{item.quantity}</p>
                        </td>
                        <td className="px-5 py-5 border-b border-blue-200 bg-white text-sm">
                            <div className="flex justify-center">
                                {/* Inside your map function for clients */}
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

export default InventoryList;
