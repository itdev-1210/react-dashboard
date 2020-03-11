import React from 'react';
import Scrollbar from "react-perfect-scrollbar";
import MessageContent from './MessageContent';

function MessageContainer ({ isActive }) {
    
    return (
        <div className="p-26 bg-white profile">
            <Scrollbar className="scrollable-content h-800">
                {isActive === "1" && <MessageContent />}
            </Scrollbar>
        </div>
    )
}

export default MessageContainer