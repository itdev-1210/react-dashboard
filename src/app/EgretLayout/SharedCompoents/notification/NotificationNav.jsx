import React from 'react';

const NotificationNavBox = ({
    comment,
    count,
    isActive,
    handleClickNavBar,
    value
}) => {
    return (
        <div className={"px-22 py-9 flex flex-space-between font-weight-500 peple-nav-box " + (isActive ? 'is-active': '')} onClick={() => handleClickNavBar(value)}>
            <div>{comment}</div>
            <div>{count}</div>
        </div>
    )
}

const NotificationNav = ({
    isActive,
    handleClickNavBar
}) => {
    return (
        <div className="px-20 py-30 bg-white">
            <NotificationNavBox
                comment="All"
                isActive={isActive==="1" ? true: false}
                handleClickNavBar={handleClickNavBar}
                count={3}
                value="1"
            />
            <NotificationNavBox
                comment="Team"
                isActive={isActive==="2" ? true: false}
                handleClickNavBar={handleClickNavBar}
                count={5}
                value="2"
            />
            <NotificationNavBox
                comment="System Alerts"
                isActive={isActive==="3" ? true: false}
                handleClickNavBar={handleClickNavBar}
                count={5}
                value="3"
            />
            <NotificationNavBox
                comment="Cosmic"
                isActive={isActive==="4" ? true: false}
                handleClickNavBar={handleClickNavBar}
                count={5}
                value="4"
            />
        </div>
    )
}

export default NotificationNav