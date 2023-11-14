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
        <div>
            {clients.length ? (
                <ul>
                    {clients.map(client => (
                        <li key={client.id}>{client.name}</li> // Replace 'client.name' with actual data fields
                    ))}
                </ul>
            ) : (
                <p>No clients found.</p>
            )}
        </div>
    );
};

export default ClientList;
