import React from "react";
import {
  Icon,
  Badge,
  MuiThemeProvider,
  Card,
  Button,
  IconButton,
  Drawer,
  Fab
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import { getTimeDifference } from "utils.js";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import {
  getNotification,
  deleteAllNotification,
  deleteNotification
} from "../../redux/actions/NotificationActions";
import Notification from './notification/Notification';
import Message from './message/Message';
import Task from './task/Task';

function NotificationDrawer(props) {
  const {
    container,
    theme,
    settings,
    notification: notifcationList = [],
    getNotification,
    deleteAllNotification,
    deleteNotification
  } = props;

  const [panelOpen, setPanelOpen] = React.useState(false);
  const [tabIndex, setTabIndex] = React.useState(1);

  React.useEffect(() => {
    getNotification();
  }, []);

  function handleDrawerToggle() {
    if (!panelOpen) {
      getNotification();
    }
    setPanelOpen(!panelOpen);
  }

  const handleTabIndex = (index) => () => {
    setTabIndex(index);
  };

  const parentThemePalette = theme.palette;
  const StyledBadge = withStyles({
    badge: {
      backgroundColor: '#ff6869',
      width: '15px',
      minWidth: '15px',
      height: '15px',
      fontSize: '11px'
    },
  })(Badge);

  return (
    <MuiThemeProvider theme={settings.themes[settings.activeTheme]}>
      <StyledBadge
        color="primary"
        badgeContent={notifcationList.length}
      >
        <IconButton
          onClick={handleDrawerToggle}
          style={{
            color:
              parentThemePalette.type === "light"
                ? parentThemePalette.text.secondary
                : parentThemePalette.text.primary,
            backgroundColor: '#ffffff',
            borderRadius: '10px',
            width: '35px',
            height: '35px',
            padding: '6px'
          }}
        >
          <Icon style={{ fontSize: '18px', color: '#b2b2cc' }}>notifications</Icon>
        </IconButton>
      </StyledBadge>

      <Drawer
        width={"100px"}
        container={container}
        variant="temporary"
        anchor={"right"}
        open={panelOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true
        }}
      >
        <div className="notification-container">
          <div className="flex flex-space-between notification-header">
            <div className="flex flex-middle">
              <div className={`tab notifications ${tabIndex === 1 ? 'active' : ''}`} onClick={handleTabIndex(1)}>
                <span className="notification-name">Notifications</span>
                <span className="ml-10 notification-badge">{notifcationList.length}</span>
              </div>
              <div className={`tab messages ${tabIndex === 2 ? 'active' : ''}`} onClick={handleTabIndex(2)}>
                <span className="notification-name">Messages</span>
              </div>
              <div className={`tab tasks ${tabIndex === 3 ? 'active' : ''}`} onClick={handleTabIndex(3)}>
                <span className="notification-name">Tasks</span>
              </div>
            </div>
            <div className="left"></div>
            <div className="flex flex-middle close-btn">
              <IconButton
                onClick={() => setPanelOpen(!panelOpen)}
                style={{
                  color:
                    parentThemePalette.type === "light"
                      ? parentThemePalette.text.secondary
                      : parentThemePalette.text.primary,
                  backgroundColor: '#ffffff',
                  padding: '10px',
                  marginRight: '10px'
                }}
              >
                <Icon style={{ fontSize: '25px', color: '#000000' }}>close</Icon>
              </IconButton>
            </div>
          </div>
          <div className="notification-content">
            {tabIndex === 1 && <Notification />}
            {tabIndex === 2 && <Message />}
            {tabIndex === 3 && <Task />}
          </div>
        </div>
      </Drawer>
    </MuiThemeProvider>
  );
}

NotificationDrawer.propTypes = {
  settings: PropTypes.object.isRequired,
  notification: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  getNotification: PropTypes.func.isRequired,
  deleteNotification: PropTypes.func.isRequired,
  deleteAllNotification: PropTypes.func.isRequired,
  notification: state.notification,
  settings: state.layout.settings
});

export default withStyles({}, { withTheme: true })(
  connect(
    mapStateToProps,
    { getNotification, deleteNotification, deleteAllNotification }
  )(NotificationDrawer)
);
