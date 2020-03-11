import React from 'react';
const NavBox = ({
    comment,
    isActive,
    handlClickNavBar,
    value
}) => {
    return (
        <div className={"px-22 py-9 flex peple-nav-box " + (isActive ? 'is-active': '')} onClick={() => handlClickNavBar(value)}>
            <div>{comment}</div>
        </div>
    )
}
const RevenueSidenav = ({
    isActive,
    handlClickNavBar
}) => {
    return (
        <div className="px-26 py-33 bg-white">
            <NavBox
                comment="All transactions"
                isActive={isActive==="1" ? true: false}
                handlClickNavBar={handlClickNavBar}
                value="1"
            />
            <NavBox
                comment="Payments"
                isActive={isActive==="2" ? true: false}
                handlClickNavBar={handlClickNavBar}
                value="2"
            />
            <NavBox
                comment="Payouts"
                isActive={isActive==="3" ? true: false}
                handlClickNavBar={handlClickNavBar}
                value="3"
            />
        </div>
    )
}

export default RevenueSidenav