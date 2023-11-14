import React from 'react';
import ClientList from './ClientList';
// Import other components if necessary

const ClientManagementPage = () => {
    return (
        <div className="min-h-screen bg-gray-100 text-gray-900">
            <div className="container mx-auto px-4 sm:px-8 max-w-3xl">
                <div className="py-8">
                    <div>
                        <h2 className="text-2xl font-semibold leading-tight">Clients</h2>
                    </div>

                    <div className="py-4">
                        {/* Client List Component */}
                        <ClientList />
                    </div>
                    {/* You can add more components here, like buttons for adding new clients or filters */}
                </div>
            </div>
        </div>
    );
};

export default ClientManagementPage;
