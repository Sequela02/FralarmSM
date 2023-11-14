import React, { useEffect, useState } from 'react';
import { fetchClients } from '../../services/clientService';

const ClientList = () => {
    const [clients, setClients] = useState([]);

    useEffect(() => {
        fetchClients().then(response => {
            setClients(response.data);
        }).catch(error => {
            console.error('Error fetching clients:', error);
            // Handle error appropriately
        });
    }, []);

    return (
        <div className="overflow-hidden shadow-md sm:rounded-lg">
            {clients.length > 0 ? (
                <table className="min-w-full leading-normal">
                    <thead>
                    <tr>
                        <th className="px-5 py-3 border-b-2 border-blue-200 bg-blue-100 text-left text-xs font-semibold text-blue-600 uppercase tracking-wider">
                            Name
                        </th>
                        <th className="px-5 py-3 border-b-2 border-blue-200 bg-blue-100 text-left text-xs font-semibold text-blue-600 uppercase tracking-wider">
                            Email
                        </th>
                        <th className="px-5 py-3 border-b-2 border-blue-200 bg-blue-100 text-left text-xs font-semibold text-blue-600 uppercase tracking-wider">
                            Address
                        </th>
                        <th className="px-5 py-3 border-b-2 border-blue-200 bg-blue-100 text-left text-xs font-semibold text-blue-600 uppercase tracking-wider">
                            Phone Number
                        </th>
                        <th className="px-5 py-3 border-b-2 border-blue-200 bg-blue-100 text-left text-xs font-semibold text-blue-600 uppercase tracking-wider">
                            Company
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {clients.map(client => (
                        <tr key={client.id}>
                            <td className="px-5 py-5 border-b border-blue-200 bg-white text-sm">
                                <p className="text-gray-900 whitespace-no-wrap">{client.name}</p>
                            </td>
                            <td className="px-5 py-5 border-b border-blue-200 bg-white text-sm">
                                <p className="text-gray-900 whitespace-no-wrap">{client.email}</p>
                            </td>
                            <td className="px-5 py-5 border-b border-blue-200 bg-white text-sm">
                                <p className="text-gray-900 whitespace-no-wrap">{client.address}</p>
                            </td>
                            <td className="px-5 py-5 border-b border-blue-200 bg-white text-sm">
                                <p className="text-gray-900 whitespace-no-wrap">{client.phoneNumber}</p>
                            </td>
                            <td className="px-5 py-5 border-b border-blue-200 bg-white text-sm">
                                <p className="text-gray-900 whitespace-no-wrap">{client.company}</p>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            ) : (
                <div className="px-5 py-5 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">No clients found.</p>
                </div>
            )}
        </div>
    );
};

export default ClientList;
