import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Grid,
  Card
} from "@material-ui/core";

import PropTypes from "prop-types";
import { getPeopleData } from "app/redux/actions/PeopleActions";
import { getFollowData } from "app/redux/actions/FollowActions";
import {
  DefaultCard,
  EgretSidenavContainer,
  EgretSidenav,
  EgretSidenavContent
} from "egret";
import PeopleSidenav from './PeopleSidenav';
import PeopleContainer from './PeopleContainer';

class People extends Component {
  state = {
    userData: "86/22",
    memberData: "15",
    multiUser: "80%",
    moneyData: "$20",

    userImgUrl: "/assets/images/people/user.svg",
    memberImgUrl: "/assets/images/people/member.svg",
    multiImgUrl: "/assets/images/people/multi.svg",
    moneyImgUrl: "/assets/images/people/money.svg",

    open: true,
    isActive: "1",
  };

  handlClickNavBar = (value) => {
    this.setState({isActive: value})
  }
  componentDidMount() {
    this.props.getFollowData()
    this.props.getPeopleData()
  }

  render() {
    let {
      userData,
      memberData,
      multiUser,
      moneyData,
      userImgUrl,
      memberImgUrl,
      multiImgUrl,
      moneyImgUrl,
      isActive
    } = this.state;

    return (
      <div className="m-sm-30">
        <Grid container spacing={3}>
          <Grid item lg={3} md={3} sm={12} xs={12}>
            <DefaultCard title={userData} subtitle="Total / New Riders" icon={userImgUrl}/>
          </Grid>
          <Grid item lg={3} md={3} sm={12} xs={12}>
            <DefaultCard title={memberData} subtitle="Member Get Member" icon={memberImgUrl}/>
          </Grid>
          <Grid item lg={3} md={3} sm={12} xs={12}>
            <DefaultCard title={multiUser} subtitle="Recurring Riders" icon={multiImgUrl}/>
          </Grid>
          <Grid item lg={3} md={3} sm={12} xs={12}>
            <DefaultCard title={moneyData} subtitle="Average Income Per Rider" icon={moneyImgUrl}/>
          </Grid>
        </Grid>
        <Card className="w-100 overflow-auto mt-24" elevation={6}>
          <EgretSidenavContainer>
            <EgretSidenav
              width="295px"
              open={this.state.open}
            >
              <PeopleSidenav
                data={this.props.people.all_users}
                follow={this.props.follow.follow_users}
                isActive={isActive}
                handlClickNavBar={this.handlClickNavBar}
                />
            </EgretSidenav>
            <div className={"border-height"}></div>
            <EgretSidenavContent>
              <PeopleContainer
                data={this.props.people.all_users}
              />
            </EgretSidenavContent>
          </EgretSidenavContainer>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  people: state.people,
  follow: state.follow,
  getPeopleData: PropTypes.func.isRequired,
  getFollowData: PropTypes.func.isRequired,
});

export default connect(
  mapStateToProps,
  { getPeopleData, getFollowData }
)(People);
