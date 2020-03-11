import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
    title: {
        fontSize: "14px",
        fontWeight: "500",
        color: "#30304e",
        letterSpacing: "0.3px",
        paddingBottom: "8px",
    },
}));

const followStyles = makeStyles(theme => ({
    avatar: {
        width: "38px",
        height: "38px",
        borderRadius: "50%"
    },
    name: {
        fontSize: "13px",
        letterSpacing: "0.02px",
        color: "#55585c"
    },
    email: {
        fontSize: "11px",
        fontWeight: "500",
        letterSpacing: "0.02px",
        color: "#a1a1a1"
    },
    followers: {
        padding: "4px",
        borderRadius: "4px",
        backgroundColor: "#e5f0fc",
        fontSize: "12px",
        fontWeight: "500",
        letterSpacing: "0.23px",
        color: "#006ce6",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    }
}));

const FollowItem = ({
    userData
}) => {
    const classes = followStyles();
    return (
        <Link className="flex" to="/user-profile">
            <img className={classes.avatar} src={userData.avatar_src} alt=""/>
            <div className="px-16">
                <div className={classes.name}>{userData.name}</div>
                <div className={classes.email}>{userData.email}</div>
            </div>
            {userData.followers > 0 ? <div className={classes.followers + ' my-4'}>{userData.followers}</div> : null}
        </Link>
    )
}

const Follow = ({
    followData
}) => {
    const classes = useStyles();
    return (
        <div className="py-32">
            <div className={classes.title}>Following</div>
            {followData && followData.map((userData, key) => (
                <div className="py-12" key={key}>
                    <FollowItem userData={userData}/>
                </div>
            ))}
        </div>
    )
}

export default Follow;