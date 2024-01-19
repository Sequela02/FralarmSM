import React from 'react';
import PropTypes from 'prop-types';

const DashboardCard = ({
                           icon: Icon,
                           title,
                           subtitle,
                           ChartComponent,
                           backgroundColor = 'white', // Default background color
                           footerContent
                       }) => (
    <div className={`rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:shadow-xl hover:scale-105 ${backgroundColor}`}>
        <div className="p-4 flex flex-col items-center text-center">
            <div className="hover:animate-bounce">
                <Icon className="text-blue-600 text-3xl mb-2" />
            </div>
            <h4 className="font-semibold text-lg text-black">{title}</h4>
            <p className="text-gray-600">{subtitle}</p>
        </div>
        {ChartComponent && (
            <div className="bg-blue-100 p-4">
                <ChartComponent />
            </div>
        )}
        {footerContent && (
            <div className="bg-gray-200 p-2 text-sm text-gray-700">
                {footerContent}
            </div>
        )}
    </div>
);

DashboardCard.propTypes = {
    icon: PropTypes.elementType.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    ChartComponent: PropTypes.elementType,
    backgroundColor: PropTypes.string,
    footerContent: PropTypes.node
};

export default DashboardCard;