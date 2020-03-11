import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Select from "react-select";
import {
  Icon,
  InputBase,
  MenuItem,
  withStyles,
  MuiThemeProvider
} from "@material-ui/core";
import { connect } from "react-redux";
import { setLayoutSettings } from "app/redux/actions/LayoutActions";
import { logoutUser } from "app/redux/actions/UserActions";
import { PropTypes } from "prop-types";
import { EgretMenu } from "egret";
import NotificationDrawer from "../SharedCompoents/NotificationDrawer";
import Rating from "../SharedCompoents/Rating";
import { Link } from "react-router-dom";

const regions = [
  { label: "All Region" },
  { label: "Aland Islands" },
  { label: "Albania" },
  { label: "Algeria" },
  { label: "American Samoa" },
  { label: "Andorra" }
].map(suggestion => ({
  value: suggestion.label,
  label: suggestion.label
}));

const styles = theme => ({
  root: {
    
  },
});

const selectStyles = {
  menu: (provided, state) => ({
    ...provided,
    width: 200,
    color: state.selectProps.menuColor,
    padding: 5,
    marginTop: '3px',
  }),
  container: () => ({
    width: 200,
  }),
  control: (provided, state) => ({
    ...provided,
    width: 200,
    height: '50px',
    borderRadius: '12px',
    backgroundColor: '#f5f5fb'
  }),
};

class Layout1Topbar extends Component {
  state = {};

  updateSidebarMode = sidebarSettings => {
    let { settings, setLayoutSettings } = this.props;

    setLayoutSettings({
      ...settings,
      layout1Settings: {
        ...settings.layout1Settings,
        leftSidebar: {
          ...settings.layout1Settings.leftSidebar,
          ...sidebarSettings
        }
      }
    });
  };

  handleSignOut = () => {
    this.props.logoutUser();
  };

  render() {
    let { theme, settings } = this.props;
    const topbarTheme =
      settings.themes[settings.layout1Settings.topbar.theme] || theme;
    return (
      <MuiThemeProvider theme={topbarTheme}>
        <div className="topbar">
          <div className={`topbar-hold`}>
            <div className="flex flex-space-between flex-middle h-100">
              <div className="flex">
                <Select
                  styles={selectStyles}
                  placeholder="Select Region"
                  options={regions}
                  // value={single}
                  // onChange={handleChangeSingle}
                />
                <div className="flex flex-middle search-container">
                  <Icon className="icon">search</Icon>
                  <InputBase
                    placeholder="Search Users, Vehicles & Move..."
                    inputProps={{
                      style: {
                        fontSize: '14px',
                        color: '#30304e'
                      }  
                    }}
                    fullWidth
                  />
                </div>
              </div>
              <div className="flex flex-middle">
                <NotificationDrawer />

                <Rating />

                <EgretMenu
                  menuButton={
                    <img
                      className="ml-8 text-middle avatar-image-small cursor-pointer"
                      src="/assets/images/face-7.jpg"
                      alt="user"
                    />
                  }
                >
                  <MenuItem style={{ minWidth: 185 }}>
                    <Link
                      className="flex flex-middle"
                      to="/profile"
                    >
                      <span className="pl-16"> My Profile </span>
                    </Link>
                  </MenuItem>
                  <MenuItem
                    onClick={this.handleSignOut}
                    className="flex flex-middle"
                    style={{ minWidth: 185 }}
                  >
                    <span className="pl-16"> Logout </span>
                  </MenuItem>
                </EgretMenu>
              </div>
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

Layout1Topbar.propTypes = {
  setLayoutSettings: PropTypes.func.isRequired,
  logoutUser: PropTypes.func.isRequired,
  settings: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  setLayoutSettings: PropTypes.func.isRequired,
  logoutUser: PropTypes.func.isRequired,
  settings: state.layout.settings
});

export default withStyles(styles, { withTheme: true })(
  withRouter(
    connect(
      mapStateToProps,
      { setLayoutSettings, logoutUser }
    )(Layout1Topbar)
  )
);
