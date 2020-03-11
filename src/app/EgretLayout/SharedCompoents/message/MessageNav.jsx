import React from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Button, Icon } from "@material-ui/core";
import { getFollowData } from "app/redux/actions/FollowActions";
import Contact from "./Contact";

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

const MessageNavBox = ({
    comment,
    asset,
    count,
    isActive,
    handleClickNavBar,
    value
}) => {
    return (
        <div className={"px-22 py-9 flex flex-space-between font-weight-500 peple-nav-box " + (isActive ? 'is-active': '')} onClick={() => handleClickNavBar(value)}>
            <div className="flex flex-middle">
                <div style={{ width: '40px' }}>
                    <img src={asset} alt="" />
                </div>
                <div>{comment}</div>
            </div>
            <div>{count}</div>
        </div>
    )
}

const MessageNav = ({
    isActive,
    handleClickNavBar,
    follow,
    getFollowData
}) => {
    const classes = useStyles();
    React.useEffect(() => {
        getFollowData();
    }, []);

    return (
        <div className="px-20 py-30 bg-white">
            <MessageNavBox
                comment="Team"
                isActive={isActive==="1" ? true: false}
                handleClickNavBar={handleClickNavBar}
                asset={`/assets/images/notification/${isActive === "1" ? 'team_active.svg' : 'team.svg'}`}
                count={2}
                value="1"
            />
            <MessageNavBox
                comment="Personal"
                isActive={isActive==="2" ? true: false}
                handleClickNavBar={handleClickNavBar}
                asset={`/assets/images/notification/${isActive === "2" ? 'user_active.svg' : 'user.svg'}`}
                count={5}
                value="2"
            />
            <ColorButton variant="contained" color="primary" className="mt-20">
                New Message
                <Icon className={classes.plus}>add</Icon>
            </ColorButton>
            <Contact contactData={follow.follow_users} />
        </div>
    )
}

const mapStateToProps = state => ({
    follow: state.follow,
    getFollowData: PropTypes.func.isRequired,
  });
  
export default connect( mapStateToProps, { getFollowData })(MessageNav);