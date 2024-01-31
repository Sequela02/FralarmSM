import React from 'react';
import { Button } from "@nextui-org/react";

/**
 * DeleteClientForm is a form for confirming the deletion of a client.
 *
 * @param {Object} props The properties passed to the component.
 * @param {Function} props.closeForm A function to close the form.
 * @param {Object} props.client The client to be deleted.
 */
const DeleteClientForm = ({ closeForm, client }) => {
    // handleSubmit handles the form submission.
    const handleSubmit = async (e) => {
        e.preventDefault();
        // Logic to delete the client data goes here.
        // Example:
        // await deleteClient(client);
        closeForm(); // Close the form upon successful submission
    };

    // The form layout.
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-md mx-auto">
                <h2 className="block text-gray-700 text-sm font-bold mb-4 text-center">
                    Are you sure you want to delete the following client?
                </h2>
                <h3 className="block text-gray-700 text-lg font-bold mb-4 text-center">
                    {client.name}
                </h3>
                <div className="flex items-center justify-between mt-8">
                    <Button
                        type="submit"
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Delete
                    </Button>
                    <Button onClick={closeForm} className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
                        Cancel
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default DeleteClientForm;