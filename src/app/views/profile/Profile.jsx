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
  };

  render() {
    return (
      <div className="m-sm-30">
        <Card className="w-100 overflow-auto mt-24" elevation={6}>
          <EgretSidenavContainer className="p-24">
            <EgretSidenav
              width="446px"
              open={this.state.open}
              className="p-4"
            >
              <ProfileNav/>
            </EgretSidenav>
            <div className={"border-height"}></div>
            <EgretSidenavContent>
              <ProfileContainer/>
            </EgretSidenavContent>
          </EgretSidenavContainer>
        </Card>
      </div>
    );
  }
}

// const mapStateToProps = state => ({
// });

export default Profile;
// export default connect(
//   mapStateToProps,
//   { getRideData, getRenterData }
// )(Profile);