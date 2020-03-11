import React, { Component } from "react";
import {
  Card,
} from "@material-ui/core";

import {
  EgretSidenavContainer,
  EgretSidenav,
  EgretSidenavContent
} from "egret";
import TaskNav from './TaskNav';
import TaskContainer from './TaskContainer';

class Task extends Component {
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
          <TaskNav 
            isActive={isActive}
            handleClickNavBar={this.handleClickNavBar}
          />
        </EgretSidenav>
        <div className={"border-height"}></div>
        <EgretSidenavContent>
          <TaskContainer 
            isActive={isActive}
          />
        </EgretSidenavContent>
      </EgretSidenavContainer>
    );
  }
}

export default Task;