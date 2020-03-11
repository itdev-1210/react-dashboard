import React from "react";
import {
  Icon,
  Badge,
  MuiThemeProvider,
  Card,
  IconButton,
  MenuItem,
} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import { getTimeDifference } from "utils.js";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import {
  getNotification,
  deleteAllNotification,
  deleteNotification
} from "../../redux/actions/NotificationActions";
import { EgretMenu } from "egret";

function NotificationBar(props) {
  const {
    theme,
    settings,
    notification: notifcationList = [],
    getNotification,
  } = props;

  React.useEffect(() => {
    getNotification();
  }, []);

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
      <EgretMenu
        menuButton={
          <StyledBadge
            color="primary"
            badgeContent={notifcationList.length}
          >
            <IconButton
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
        }
      >
        {notifcationList.map(notification => (
          <MenuItem
            className="flex flex-middle"
            style={{ minWidth: 185 }}
            key={notification.id}
          >
            <div
              key={notification.id}
              className="notification__card position-relative w-100"
            >
              <Card elevation={3}>
                <div className="card__topbar flex flex-middle flex-space-between p-8 bg-light-gray">
                  <div className="flex">
                    <div className="card__topbar__button">
                      <Icon
                        className="card__topbar__icon"
                        fontSize="small"
                        color={notification.icon.color}
                      >
                        {notification.icon.name}
                      </Icon>
                    </div>
                    <span className="ml-4 font-weight-500 text-muted">
                      {notification.heading}
                    </span>
                  </div>
                  <small className="card__topbar__time text-muted">
                    {getTimeDifference(new Date(notification.timestamp))} ago
                  </small>
                </div>
                <div className="px-16 pt-8 pb-16">
                  <p className="m-0">{notification.title}</p>
                  <small className="text-muted">
                    {notification.subtitle}
                  </small>
                </div>
              </Card>
            </div>
            </MenuItem>
          ))}
      </EgretMenu>
    </MuiThemeProvider>
  );
}

NotificationBar.propTypes = {
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
  )(NotificationBar)
);
