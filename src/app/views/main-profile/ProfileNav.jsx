import React from 'react';
import { makeStyles } from "@material-ui/core/styles";

const ProfileNavBox = ({
    comment,
    asset,
    isActive,
    handleClickNavBar,
    value
}) => {
    return (
        <div className={"px-22 py-9 flex flex-middle peple-nav-box " + (isActive ? 'is-active': '')} onClick={() => handleClickNavBar(value)}>
            <img src={asset} alt="" />
            <div className="pl-16">{comment}</div>
        </div>
    )
}

const ProfileNav = ({
    isActive,
    handleClickNavBar
}) => {
    return (
        <div className="px-26 py-33 bg-white">
            <ProfileNavBox
                comment="General Profile"
                isActive={isActive==="1" ? true: false}
                handleClickNavBar={handleClickNavBar}
                asset={`/assets/images/main-profile/${isActive === "1" ? 'user_active.svg' : 'user.svg'}`}
                value="1"
            />
            <ProfileNavBox
                comment="Billing info"
                isActive={isActive==="2" ? true: false}
                handleClickNavBar={handleClickNavBar}
                asset={`/assets/images/main-profile/${isActive === "2" ? 'card_active.svg' : 'card.svg'}`}
                value="2"
            />
            <ProfileNavBox
                comment="Notifications"
                isActive={isActive==="3" ? true: false}
                handleClickNavBar={handleClickNavBar}
                asset={`/assets/images/main-profile/${isActive === "3" ? 'metric_active.svg' : 'metric.svg'}`}
                value="3"
            />
            <ProfileNavBox
                comment="Settings"
                isActive={isActive==="4" ? true: false}
                handleClickNavBar={handleClickNavBar}
                asset={`/assets/images/main-profile/${isActive === "4" ? 'settings_active.svg' : 'settings.svg'}`}
                value="4"
            />
            <ProfileNavBox
                comment="My Plans"
                isActive={isActive==="5" ? true: false}
                handleClickNavBar={handleClickNavBar}
                asset={`/assets/images/main-profile/${isActive === "5" ? 'briefcase_active.svg' : 'briefcase.svg'}`}
                value="5"
            />
        </div>
    )
}

export default ProfileNav