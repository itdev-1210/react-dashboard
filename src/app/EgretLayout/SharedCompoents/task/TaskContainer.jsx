import React from 'react';
import Scrollbar from "react-perfect-scrollbar";
import TaskContent from './TaskContent';

function TaskContainer ({ isActive }) {
    
    return (
        <div className="p-26 bg-white profile">
            <Scrollbar className="scrollable-content h-800">
                {isActive === "1" && <TaskContent />}
            </Scrollbar>
        </div>
    )
}

export default TaskContainer