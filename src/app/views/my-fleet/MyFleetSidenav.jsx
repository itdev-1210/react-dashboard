import React from 'react';
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import Icon from '@material-ui/core/Icon';

import Follow from './Follow'

const useStyles = makeStyles(theme => ({
    plus: {
        position: "absolute",
        right: "14px"
    },
}));

const ColorButton = withStyles(theme => ({
    root: {
        backgroundColor: "#3ac068",
        marginTop: "8px",
        width: "100%",
        color: "#ffffff",
        fontSize: "15px",
        borderRadius: "3px",
        padding: "8px",
        '&:hover': {
            backgroundColor: "#3ac068a1",
        },
    },
}))(Button);

const FleetNavBox = ({
    comment,
    count,
    isActive,
    handlClickNavBar,
    value
}) => {
    return (
        <div className={"px-22 py-9 flex flex-space-between peple-nav-box " + (isActive ? 'is-active': '')} onClick={() => handlClickNavBar(value)}>
            <div>{comment}</div>
            <div>{count}</div>
        </div>
    )
}
const FleetSidenav = ({
    data, 
    follow,
    isActive,
    handlClickNavBar
}) => {
    const classes = useStyles();
    return (
        <div className="px-26 py-33 bg-white">
            <FleetNavBox
                comment="Live Ops"
                count={data.length}
                isActive={isActive==="1" ? true: false}
                handlClickNavBar={handlClickNavBar}
                value="1"
            />
            <FleetNavBox
                comment="Inventory"
                count={12}
                isActive={isActive==="2" ? true: false}
                handlClickNavBar={handlClickNavBar}
                value="2"
            />
            <FleetNavBox
                comment="Maintenance"
                count={2}
                isActive={isActive==="3" ? true: false}
                handlClickNavBar={handlClickNavBar}
                value="3"
            />
            <FleetNavBox
                comment="SIMS & Data"
                count={13}
                isActive={isActive==="4" ? true: false}
                handlClickNavBar={handlClickNavBar}
                value="4"
            />
            <FleetNavBox
                comment="Insurance"
                count={13}
                isActive={isActive==="5" ? true: false}
                handlClickNavBar={handlClickNavBar}
                value="5"
            />

            <ColorButton variant="contained" color="primary">
                Add Vehicle
                <Icon className={classes.plus}>add</Icon>
            </ColorButton>

            <Button className="mt-20 w-100" variant="outlined">Settings</Button>

            <Follow followData={follow}/>
        </div>
    )
}

export default FleetSidenav