import React, { useState, useEffect } from 'react';

// InputField is a reusable component for creating input fields.
const InputField = ({ id, type, value, onChange, label }) => (
    <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={id}>
            {label}
        </label>
        <input
            id={id}
            type={type}
            value={value}
            onChange={onChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
    </div>
);

// EditClientForm is a form for editing existing clients.
const EditClientForm = ({ closeForm, client: initialClient }) => {
    // client state holds the form data.
    const [client, setClient] = useState(initialClient);

    // handleChange updates the client state when an input field changes.
    const handleChange = (e) => {
        setClient({
            ...client,
            [e.target.id]: e.target.value
        });
    };

    // handleSubmit handles the form submission.
    const handleSubmit = async (e) => {
        e.preventDefault();
        // Form validation: all fields must be filled.
        if (!client.name || !client.email || !client.address || !client.phoneNumber) {
            alert('Please fill in all fields');
            return;
        }
        // Logic to update the client data goes here.
        // Example:
        // await updateClient(client);
        closeForm(); // Close the form upon successful submission
    };

    // The form layout.
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <InputField id="name" type="text" value={client.name} onChange={handleChange} label="Name" />
                <InputField id="email" type="email" value={client.email} onChange={handleChange} label="Email" />
                <InputField id="address" type="text" value={client.address} onChange={handleChange} label="Address" />
                <InputField id="phoneNumber" type="text" value={client.phoneNumber} onChange={handleChange} label="Phone Number" />
                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Update Client
                    </button>
                    <button onClick={closeForm} className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EditClientForm;