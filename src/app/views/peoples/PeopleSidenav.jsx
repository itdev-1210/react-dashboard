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

const PeopleNavBox = ({
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
const PeopleSidenav = ({
    data, 
    follow,
    isActive,
    handlClickNavBar
}) => {
    const classes = useStyles();
    return (
        <div className="px-26 py-33 bg-white">
            <PeopleNavBox
                comment="All Users"
                count={data.length}
                isActive={isActive==="1" ? true: false}
                handlClickNavBar={handlClickNavBar}
                value="1"
            />
            <PeopleNavBox
                comment="Admin"
                count={12}
                isActive={isActive==="2" ? true: false}
                handlClickNavBar={handlClickNavBar}
                value="2"
            />
            <PeopleNavBox
                comment="Network Monitoring"
                count={2}
                isActive={isActive==="3" ? true: false}
                handlClickNavBar={handlClickNavBar}
                value="3"
            />
            <PeopleNavBox
                comment="In-field Team"
                count={13}
                isActive={isActive==="4" ? true: false}
                handlClickNavBar={handlClickNavBar}
                value="4"
            />
            <PeopleNavBox
                comment="Customer Service"
                count={13}
                isActive={isActive==="5" ? true: false}
                handlClickNavBar={handlClickNavBar}
                value="5"
            />
            <PeopleNavBox
                comment="Marketing"
                count={5}
                isActive={isActive==="6" ? true: false}
                handlClickNavBar={handlClickNavBar}
                value="6"
            />
            <div className="px-22 py-9 peple-nav-box text-blue">
                <div>{"Schedules"}</div>
            </div>
            <div className="border-line"></div>
            <PeopleNavBox
                comment="Riders"
                count={5}
                isActive={isActive==="7" ? true: false}
                handlClickNavBar={handlClickNavBar}
                value="7"
            />

            <ColorButton variant="contained" color="primary">
                Add Member
                <Icon className={classes.plus}>add</Icon>
            </ColorButton>

            <Follow followData={follow}/>
        </div>
    )
}

export default PeopleSidenav