import React, { Component } from "react";
import {
  Card,
} from "@material-ui/core";

import {
  EgretSidenavContainer,
  EgretSidenav,
  EgretSidenavContent
} from "egret";
import ProfileNav from './ProfileNav';
import ProfileContainer from './ProfileContainer';

class Profile extends Component {
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
      <div className="m-sm-30">
        <Card className="w-100 overflow-auto mt-24" elevation={6}>
          <EgretSidenavContainer className="p-24">
            <EgretSidenav
              width="295px"
              open={this.state.open}
              className="p-4"
            >
              <ProfileNav 
                isActive={isActive}
                handleClickNavBar={this.handleClickNavBar}
              />
            </EgretSidenav>
            <div className={"border-height"}></div>
            <EgretSidenavContent>
              <ProfileContainer 
                isActive={isActive}
              />
            </EgretSidenavContent>
          </EgretSidenavContainer>
        </Card>
      </div>
    );
  }
}

export default Profile;