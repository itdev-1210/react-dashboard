import React, { Component, Fragment } from "react";
import Select from 'react-select';
import PropTypes from "prop-types";
import {
  Icon,
  withStyles,
  MuiThemeProvider,
  Button,
  Dialog
} from "@material-ui/core";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";

import { connect } from "react-redux";
import {
  setLayoutSettings,
  setDefaultSettings
} from "app/redux/actions/LayoutActions";
import { logoutUser } from "app/redux/actions/UserActions";
import { withRouter } from "react-router-dom";
import Sidenav from "../SharedCompoents/Sidenav";
import SidenavTheme from "../EgretTheme/SidenavTheme";
import { isMdScreen } from "utils";
import { fontWeight } from "@material-ui/system";

const styles = theme => ({
  plus: {
    marginRight: '10px'
  },
  root: {
    margin: 0,
    padding: theme.spacing(2)
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: '4px',
    color: theme.palette.grey[500]
  },
  modalTitle: {
    fontSize: '14px',
    fontWeight: 500,
    lineHeight: 1.5,
    color: '#30304e'
  }
});

const selectStyles = {
  menu: (provided, state) => ({
    ...provided,
    width: "100%",
    color: state.selectProps.menuColor,
    padding: 5,
    top: "inherit",
    zIndex: "100"
  }),
  container: () => ({
    width: "100%",
    margin: 10,
    position: "relative"
  }),
  control: (provided, state) => ({
    ...provided,
    width: "100%",
    height: '50px',
    borderRadius: '12px',
  }),
};
const selectContents = [
  { label: "New Coupon" },
].map(suggestion => ({
  value: suggestion.label,
  label: suggestion.label
}));

const ColorButton = withStyles(theme => ({
  root: {
      backgroundColor: "#006ce6",
      margin: "0 20px 30px",
      color: "#ffffff",
      fontSize: "15px",
      borderRadius: "12px",
      padding: "8px",
      '&:hover': {
          backgroundColor: "#006ce6a1",
      },
  },
}))(Button);

const CreateButton = withStyles(theme => ({
  root: {
      backgroundColor: "#006ce6",
      width: '200px',
      marginLeft: '20px',
      color: "#ffffff",
      fontSize: "15px",
      borderRadius: "12px",
      padding: "10px 30px",
      '&:hover': {
          backgroundColor: "#006ce6a1",
      },
  },
}))(Button);

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root}>
      <Typography className={classes.modalTitle}>{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="Close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  }
}))(MuiDialogContent);

class Layout1Sidenav extends Component {
  state = {
    sidenavToggleChecked: false,
    hidden: true,
    open: false
  };

  componentWillMount() {
    // CLOSE SIDENAV ON ROUTE CHANGE ON MOBILE
    this.unlistenRouteChange = this.props.history.listen((location, action) => {
      if (isMdScreen()) {
        this.updateSidebarMode({ mode: "close" });
      }
    });

    setTimeout(() => {
      this.setState({ hidden: false });
    }, 400);
  }

  componentWillUnmount() {
    this.unlistenRouteChange();
  }

  handleClickOpen = () => {
    this.setState({
      open: true
    });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  updateSidebarMode = sidebarSettings => {
    let { settings, setLayoutSettings, setDefaultSettings } = this.props;
    const updatedSettings = {
      ...settings,
      layout1Settings: {
        ...settings.layout1Settings,
        leftSidebar: {
          ...settings.layout1Settings.leftSidebar,
          ...sidebarSettings
        }
      }
    };
    setLayoutSettings(updatedSettings);
    setDefaultSettings(updatedSettings);
  };

  handleSignOut = () => {
    this.props.logoutUser();
  };

  renderUser = () => {
    return (
      <div className="sidenav__user">
        <div className="username-photo">
          <img src="/assets/images/sidebar/logo.svg" alt="user" />
        </div>
        <div className="weather_container">
          <div className="weather">
            <Icon className="weather_icon">wb_sunny_outlined</Icon>
          </div>
          <div className="weather_text">
            <div className="temperature">25 °C</div>
            <div className="description">in Bogota</div>
          </div>
        </div>
      </div>
    );
  };

  render() {
    let { theme, settings, classes } = this.props;
    const sidenavTheme =
      settings.themes[settings.layout1Settings.leftSidebar.theme] || theme;
    return (
      <MuiThemeProvider theme={sidenavTheme}>
        <SidenavTheme theme={sidenavTheme} settings={settings} />

        <div className="sidenav">
          <div className="sidenav__hold">
            {!this.state.hidden && (
              <Fragment>
                <Sidenav>{this.renderUser()}</Sidenav>
              </Fragment>
            )}
            <ColorButton
              variant="contained"
              color="primary"
              onClick={this.handleClickOpen}
            >
              <Icon className={classes.plus}>add</Icon>
              Add New
            </ColorButton>
            <Dialog
              onClose={this.handleClose}
              aria-labelledby="customized-dialog-title"
              open={this.state.open}
            >
              <DialogTitle id="customized-dialog-title" onClose={this.handleClose}>
                Choose what to Add
              </DialogTitle>
              <DialogContent style={{ width: '500px' }}>
                <div className="flex flex-middle" style={{ height: '200px' }}>
                  <Select
                    styles={selectStyles}
                    placeholder="Choose"
                    options={selectContents}
                    // value={activity}
                    // onChange={handleChangeActivity}
                  />
                  <CreateButton
                    variant="contained"
                    color="primary"
                  >
                    Create
                  </CreateButton>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

Layout1Sidenav.propTypes = {
  setLayoutSettings: PropTypes.func.isRequired,
  setDefaultSettings: PropTypes.func.isRequired,
  logoutUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  settings: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  setDefaultSettings: PropTypes.func.isRequired,
  setLayoutSettings: PropTypes.func.isRequired,
  logoutUser: PropTypes.func.isRequired,
  user: state.user,
  settings: state.layout.settings
});

export default withStyles(styles, { withTheme: true })(
  withRouter(
    connect(
      mapStateToProps,
      {
        setLayoutSettings,
        setDefaultSettings,
        logoutUser
      }
    )(Layout1Sidenav)
  )
);
