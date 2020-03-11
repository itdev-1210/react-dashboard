import React, { Component } from "react";
import {
  Card,
} from "@material-ui/core";

import {
  EgretSidenavContainer,
  EgretSidenav,
  EgretSidenavContent
} from "egret";
import MessageNav from './MessageNav';
import MessageContainer from './MessageContainer';

class Message extends Component {
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
          <MessageNav 
            isActive={isActive}
            handleClickNavBar={this.handleClickNavBar}
          />
        </EgretSidenav>
        <div className={"border-height"}></div>
        <EgretSidenavContent>
          <MessageContainer 
            isActive={isActive}
          />
        </EgretSidenavContent>
      </EgretSidenavContainer>
    );
  }
}

export default Message;