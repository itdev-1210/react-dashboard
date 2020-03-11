import React, { Component } from "react";
import {
  Card,
  Grid,
} from "@material-ui/core";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { getRideData } from "app/redux/actions/RideActions";
import { getRenterData } from "app/redux/actions/RenterActions";

import {
  DefaultCard,
  EgretSidenavContainer,
  EgretSidenav,
  EgretSidenavContent
} from "egret";

import RideSidenav from './RideSidenav';
import RideContainer from './RideContainer';

class Rides extends Component {
  state = {
    totalRide: "486",
    todayRide: "23",
    totalRideUrl: "/assets/images/rides/total.svg",
    todayRideUrl: "/assets/images/rides/today.svg",
    open: true,
    isActive: "1",
  };

  handlClickNavBar = (value) => {
    if (value === "1") {
      this.props.getRideData()
    } else {
      this.props.getRenterData()
    }
    this.setState({
      isActive: value,
    })
  }

  componentWillMount() {
    this.props.getRideData()
    this.props.getRenterData();
  }

  render() {
    let {
      totalRide,
      todayRide,
      totalRideUrl,
      todayRideUrl,
      isActive,
    } = this.state;

    let data = isActive === "1" ? this.props.ride.rideData : this.props.renter.renterData;

    return (
      <div className="m-sm-30">
        <Grid container spacing={3}>
          <Grid item lg={3} md={3} sm={12} xs={12}>
            <DefaultCard title={totalRide} subtitle="Total Rides" icon={totalRideUrl}/>
          </Grid>
          <Grid item lg={3} md={3} sm={12} xs={12}>
            <DefaultCard title={todayRide} subtitle="Rides today" icon={todayRideUrl}/>
          </Grid>
        </Grid>

        <Card className="w-100 overflow-auto mt-24" elevation={6}>
          <EgretSidenavContainer>
            <EgretSidenav
              width="295px"
              open={this.state.open}
            >
              <RideSidenav
                isActive={isActive}
                handlClickNavBar={this.handlClickNavBar}
                />
            </EgretSidenav>
            <div className={"border-height"}></div>
            <EgretSidenavContent>
              <RideContainer
                data={data}
              />
            </EgretSidenavContent>
          </EgretSidenavContainer>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ride: state.ride,
  renter: state.renter,
  getRideData: PropTypes.func.isRequired,
  getRenterData: PropTypes.func.isRequired,
});

export default connect(
  mapStateToProps,
  { getRideData, getRenterData }
)(Rides);