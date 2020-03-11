import React from 'react';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    title: {
        fontSize: "14px",
        fontWeight: "500",
        color: "#30304e",
        letterSpacing: "0.3px",
        paddingBottom: "8px",
    },
    topBorder: {
        padding: '30px 20px',
        margin: '60px -20px 30px',
        borderTop: '1px solid #e9e9e9'
    }
}));

const contractStyles = makeStyles(theme => ({
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
    contracters: {
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

const ContractItem = ({
    userData
}) => {
    const classes = contractStyles();
    return (
        <div className="flex">
            <img className={classes.avatar} src={userData.avatar_src} alt=""/>
            <div className="px-16">
                <div className={classes.name}>{userData.name}</div>
                <div className={classes.email}>{userData.email}</div>
            </div>
            {userData.contracters > 0 ? <div className={classes.contracters + ' my-4'}>{userData.contracters}</div> : null}
        </div>
    )
}

const Contact = ({
    contactData
}) => {
    const classes = useStyles();
    return (
        <div className={classes.topBorder}>
            <div className={classes.title}>Recently Contacted</div>
            {contactData && contactData.map((userData, key) => (
                <div className="py-12" key={key}>
                    <ContractItem userData={userData}/>
                </div>
            ))}
        </div>
    )
}

export default Contact;