import React from 'react';
import Scrollbar from "react-perfect-scrollbar";
import GeneralProfile from './GeneralProfile';
import BillingInfo from './BillingInfo';
import Notification from './Notification';
import Setting from './Setting';
import MyPlan from './MyPlan';

function ProfileContainer ({ isActive }) {
    
    return (
        <div className="p-26 bg-white profile">
            <Scrollbar className="scrollable-content h-700">
                {isActive === "1" && <GeneralProfile />}
                {isActive === "2" && <BillingInfo />}
                {isActive === "3" && <Notification />}
                {isActive === "4" && <Setting />}
                {isActive === "5" && <MyPlan />}
            </Scrollbar>
        </div>
    )
}

export default ProfileContainer