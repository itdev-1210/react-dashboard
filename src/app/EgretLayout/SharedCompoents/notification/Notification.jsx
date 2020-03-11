import React, { Component } from "react";
import {
  Card,
} from "@material-ui/core";

import {
  EgretSidenavContainer,
  EgretSidenav,
  EgretSidenavContent
} from "egret";
import NotificationNav from './NotificationNav';
import NotificationContainer from './NotificationContainer';

class Notification extends Component {
  state = {
    open: true,
    isActive: "1",
  };

  handleClickNavBar = (value) => {
    this.setState({isActive: value})
  }

  render() {
    const { isActive } = this.state;
    return (
      <EgretSidenavContainer className="p-24">
        <EgretSidenav
          width="295px"
          open={this.state.open}
          bgClass="bg-white"
        >
          <NotificationNav 
            isActive={isActive}
            handleClickNavBar={this.handleClickNavBar}
          />
        </EgretSidenav>
        <div className={"border-height"}></div>
        <EgretSidenavContent>
          <NotificationContainer 
            isActive={isActive}
          />
        </EgretSidenavContent>
      </EgretSidenavContainer>
    );
  }
}

export default Notification;