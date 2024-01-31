import React, { useEffect, useState } from 'react';
import { fetchClients } from '../../services/clientService';
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import { FaSearch, FaEye, FaEdit, FaTrashAlt } from 'react-icons/fa';
import AddNewClientForm from "./CRUDClientForms/AddNewClientForm";
import EditClientForm from "./CRUDClientForms/EditClientForm";
import DeleteClientForm from "./CRUDClientForms/DeleteClientForm";
import ViewClientForm from "./CRUDClientForms/ViewClientForm";

// Import additional libraries for sorting, exporting, etc.

const ClientList = () => {
    const [clients, setClients] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    // Placeholder state for sort configuration
    const [sortConfig, setSortConfig] = useState(null);

    const [clientToDelete, setClientToDelete] = useState(null); // Add this line

    useEffect(() => {
        fetchClients().then(response => {
            // Assuming response.data is the array of clients
            setClients(response.data);
        }).catch(error => {
            console.error('Error fetching clients:', error);
        });
    }, []);

    const { isOpen, onOpen, onClose } = useDisclosure();

    const [selectedClient, setSelectedClient] = useState(null); // Add this line
    const [clientToView, setClientToView] = useState(null);
    return (
        <div className="container mx-auto p-4">
            <h2 className="text-3xl font-bold text-center mb-8">Client Management</h2>

            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                <Button onPress={onOpen}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >Add New Client</Button>
                <Modal isOpen={isOpen} onClose={onClose} isDismissable={false}>
                    <ModalContent>
                        {(onClose) => (
                            <>

                                <ModalBody>
                                    <AddNewClientForm closeForm={onClose} /> {/* Display the AddNewClientForm */}
                                </ModalBody>

                            </>
                        )}
                    </ModalContent>
                </Modal>
                <div className="relative w-full md:w-1/3 mb-4 md:mb-0">
                    <input
                        type="text"
                        placeholder="Search clients..."
                        className="border p-2 rounded w-full"
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                    />
                    <FaSearch className="absolute right-3 top-3 text-gray-600" />
                </div>

                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                    Export Data
                </button>
            </div>

            <div className="overflow-x-auto shadow-md sm:rounded-lg">
                <table className="min-w-full leading-normal">
                    <thead>
                    <tr>
                        <th className="px-5 py-3 border-b-2 border-blue-200 bg-blue-100 text-center text-xs font-semibold text-blue-600 uppercase tracking-wider">
                            Name
                        </th>
                        <th className="px-5 py-3 border-b-2 border-blue-200 bg-blue-100 text-center text-xs font-semibold text-blue-600 uppercase tracking-wider">
                            Email
                        </th>
                        <th className="px-5 py-3 border-b-2 border-blue-200 bg-blue-100 text-center text-xs font-semibold text-blue-600 uppercase tracking-wider">
                            Address
                        </th>
                        <th className="px-5 py-3 border-b-2 border-blue-200 bg-blue-100 text-center text-xs font-semibold text-blue-600 uppercase tracking-wider">
                            Phone Number
                        </th>
                        <th className="px-5 py-3 border-b-2 border-blue-200 bg-blue-100 text-center text-xs font-semibold text-blue-600 uppercase tracking-wider">
                            Company
                        </th>
                        <th className="px-5 py-3 border-b-2 border-blue-200 bg-blue-100 text-center text-xs font-semibold text-blue-600 uppercase tracking-wider">
                            Actions
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {clients.map(client => (
                        <tr key={client.id} className="hover:bg-blue-50">
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
                                <p className="text-gray-900 whitespace-no-wrap">
                                    {client.company ? client.company.name : 'No Company'}
                                </p>

                            </td>

                            <td className="px-5 py-5 border-b border-blue-200 bg-white text-sm">
                                <div className="flex justify-center">
                                    {/* Inside your map function for clients */}
                                    <Modal isOpen={!!clientToView} onClose={() => setClientToView(null)}
                                           isDismissable={false}
                                    size="5xl"
                                    >
                                        <ModalContent>
                                            {(onClose) => (
                                                <ModalBody>
                                                    {clientToView &&
                                                        <ViewClientForm closeForm={onClose} client={clientToView}/>}
                                                </ModalBody>
                                            )}
                                        </ModalContent>
                                    </Modal>
                                    <button
                                        onClick={() => {
                                            console.log(client); // Add this line
                                            setClientToView(client);
                                        }}
                                        className="text-blue-500 hover:text-blue-700 mr-3"
                                    >
                                        <FaEye className="inline mr-1"/> View
                                    </button>
                                    <Modal isOpen={!!selectedClient} onClose={() => setSelectedClient(null)}
                                           isDismissable={false}>
                                        <ModalContent>
                                            {(onClose) => (
                                                <ModalBody>
                                                    {selectedClient &&
                                                        <EditClientForm closeForm={onClose} client={selectedClient}/>}
                                                </ModalBody>
                                            )}
                                        </ModalContent>
                                    </Modal>

                                    <button
                                        onClick={() => setSelectedClient(client)} // Set the selected client when the "Edit" button is clicked
                                        className="text-green-500 hover:text-green-700 mr-3"
                                    >
                                        <FaEdit className="inline mr-1"/> Edit
                                    </button>
                                    <Modal isOpen={!!clientToDelete} onClose={() => setClientToDelete(null)}
                                           isDismissable={false}>
                                        <ModalContent>
                                            {(onClose) => (
                                                <ModalBody>
                                                    {clientToDelete &&
                                                        <DeleteClientForm closeForm={onClose} client={clientToDelete}/>}
                                                </ModalBody>
                                            )}
                                        </ModalContent>
                                    </Modal>
                                    <button
                                        onClick={() => setClientToDelete(client)} // Set the client to delete when the "Delete" button is clicked
                                        className="text-red-500 hover:text-red-700"
                                    >
                                        <FaTrashAlt className="inline mr-1"/> Delete
                                    </button>

                                </div>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );


};

export default ClientList;