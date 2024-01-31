import React from 'react';
import { Accordion, AccordionItem } from '@nextui-org/react';
import { AiOutlineInfoCircle, AiOutlineProject } from 'react-icons/ai';

const MonitorMobileIcon = AiOutlineInfoCircle; // Placeholder for actual icon
const ShieldSecurityIcon = AiOutlineProject; // Placeholder for actual icon

const DetailField = ({ label, value }) => (
    <div className="mb-3">
        <label className="block text-gray-800 font-semibold mb-1 text-sm">
            {label}
        </label>
        <p className="border rounded w-full py-2 px-3 text-gray-700 bg-white">
            {value}
        </p>
    </div>
);

const ViewClientForm = ({ client }) => {
    if (!client || !client.projects) {
        return null;
    }

    const { name, email, projects } = client;

    return (
        <div className="bg-gradient-to-br from-blue-100 to-blue-50 shadow-xl rounded-lg p-4 max-w-6xl mx-auto my-8 flex flex-col md:flex-row gap-4">
            <div className="flex-1">
                <Accordion bordered>
                    <AccordionItem key="details" title="Client Details" icon={<MonitorMobileIcon className="text-blue-600" />}>
                        <div className="p-4 bg-white rounded-lg shadow-sm">
                            <DetailField label="Name" value={name} />
                            <DetailField label="Email" value={email} />
                            <DetailField label="Number of Projects" value={projects.length} />
                        </div>
                    </AccordionItem>
                </Accordion>
            </div>
            <div className="flex-1 max-h-[500px] overflow-auto">
                <Accordion bordered>
                    <AccordionItem key="projects" title="Client Projects" icon={<ShieldSecurityIcon className="text-green-600" />}>
                        <div className="p-4 bg-white rounded-lg shadow-sm">
                            {projects.map((project, index) => (
                                <div key={index} className="mb-3">
                                    <h4 className="text-md font-semibold text-gray-800 mb-2">Project {project.id}</h4>
                                    <DetailField label="Name" value={project.name} />
                                    <DetailField label="End Date" value={project.endDate} />
                                </div>
                            ))}
                        </div>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    );
};

export default ViewClientForm;
