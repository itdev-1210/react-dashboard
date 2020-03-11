import React from 'react';
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Button, Icon } from "@material-ui/core";

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

const TaskNavBox = ({
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

const TaskNav = ({
    isActive,
    handleClickNavBar
}) => {
    const classes = useStyles();
    return (
        <div className="px-20 py-30 bg-white">
            <TaskNavBox
                comment="Received"
                isActive={isActive==="1" ? true: false}
                handleClickNavBar={handleClickNavBar}
                count={2}
                value="1"
            />
            <TaskNavBox
                comment="Sent"
                isActive={isActive==="2" ? true: false}
                handleClickNavBar={handleClickNavBar}
                count={5}
                value="2"
            />
            <ColorButton variant="contained" color="primary" className="mt-20">
                New Task
                <Icon className={classes.plus}>add</Icon>
            </ColorButton>
        </div>
    )
}

export default TaskNav