import React from 'react';
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import Icon from '@material-ui/core/Icon';

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
const MarketSidenav = ({
    isActive,
    handlClickNavBar
}) => {
    const classes = useStyles();
    return (
        <div className="px-26 py-33 bg-white">
            <NavBox
                comment="Coupons"
                isActive={isActive==="1" ? true: false}
                handlClickNavBar={handlClickNavBar}
                value="1"
            />
            <NavBox
                comment="Events"
                isActive={isActive==="2" ? true: false}
                handlClickNavBar={handlClickNavBar}
                value="2"
            />
            <NavBox
                comment="Notifications"
                isActive={isActive==="3" ? true: false}
                handlClickNavBar={handlClickNavBar}
                value="3"
            />

            <ColorButton variant="contained" color="primary">
                Add Member
                <Icon className={classes.plus}>add</Icon>
            </ColorButton>
        </div>
    )
}

export default MarketSidenav