import React from 'react';
import Scrollbar from "react-perfect-scrollbar";
import NotificationContent from './NotificationContent';

function NotificationContainer ({ isActive }) {
    
    return (
        <div className="p-26 bg-white profile">
            <Scrollbar className="scrollable-content h-800">
                {isActive === "1" && <NotificationContent />}
            </Scrollbar>
        </div>
    )
}

export default NotificationContainer