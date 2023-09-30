// Sidebar.js

import React from 'react';

const Sidebar = () => {
    return (
        <div className="bg-gray-800 text-white h-screen w-64 p-4">
            <ul className="space-y-2">
                <li className="py-2 hover:bg-gray-600">Dashboard</li>
                <li className="py-2 hover:bg-gray-600">Analytics</li>
                <li className="py-2 hover:bg-gray-600">Settings</li>
            </ul>
        </div>
    );
}

export default Sidebar;
