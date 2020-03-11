import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Grid,
  Card
} from "@material-ui/core";
import PropTypes from "prop-types";
import { getFleetData } from "app/redux/actions/MyFleetActions";
import { getFollowData } from "app/redux/actions/FollowActions";
import {
  DefaultCard,
  EgretSidenavContainer,
  EgretSidenav,
  EgretSidenavContent
} from "egret";
import { withStyles } from "@material-ui/styles";
import MyFleetSidenav from './MyFleetSidenav';
import LiveContainer from './live/LiveContainer';
import InventoryContainer from './inventory/InventoryContainer';
import MaintenanceContainer from './maintenance/MaintenanceContainer';

const styles = {
  grid: {
    flexGrow: '0',
    maxWidth: '20%',
    flexBasis: '20%',
  }
}

class MyFleet extends Component {
  state = {
    totalData: "486",
    serviceData: "21",
    availableData: "86",
    stolenData: "$20",
    ridesData: "23",

    totalImgUrl: "/assets/images/fleet/total.svg",
    serviceImgUrl: "/assets/images/fleet/service.svg",
    availableImgUrl: "/assets/images/fleet/available.svg",
    stolenImgUrl: "/assets/images/fleet/stolen.svg",
    ridesImgUrl: "/assets/images/fleet/rides.svg",

    open: true,
    isActive: "1",
  };

  componentDidMount() {
    this.props.getFollowData()
    this.props.getFleetData()
  }

  handlClickNavBar = (value) => {
    this.setState({isActive: value})
  }

  render() {
    let {
      totalData,
      serviceData,
      availableData,
      stolenData,
      ridesData,
      totalImgUrl,
      serviceImgUrl,
      availableImgUrl,
      stolenImgUrl,
      ridesImgUrl,
      isActive
    } = this.state;
    const { classes } = this.props;

    return (
      <div className="m-sm-30">
        <Grid container spacing={3}>
          <Grid item 
            lg={3} md={3} sm={12} xs={12}
            classes={{
              'grid-lg-3': classes.grid,
              'grid-md-3': classes.grid
            }}
          >
            <DefaultCard title={totalData} subtitle="Total Fleet" icon={totalImgUrl}/>
          </Grid>
          <Grid item 
            lg={3} md={3} sm={12} xs={12}
            classes={{
              'grid-lg-3': classes.grid,
              'grid-md-3': classes.grid
            }}
          >
            <DefaultCard title={serviceData} subtitle="In Service" icon={serviceImgUrl}/>
          </Grid>
          <Grid item 
            lg={3} md={3} sm={12} xs={12}
            classes={{
              'grid-lg-3': classes.grid,
              'grid-md-3': classes.grid
            }}
          >
            <DefaultCard title={availableData} subtitle="Available" icon={availableImgUrl}/>
          </Grid>
          <Grid item 
            lg={3} md={3} sm={12} xs={12}
            classes={{
              'grid-lg-3': classes.grid,
              'grid-md-3': classes.grid
            }}
          >
            <DefaultCard title={stolenData} subtitle="Stolen" icon={stolenImgUrl}/>
          </Grid>
          <Grid item 
            lg={3} md={3} sm={12} xs={12}
            classes={{
              'grid-lg-3': classes.grid,
              'grid-md-3': classes.grid
            }}
          >
            <DefaultCard title={ridesData} subtitle="Rides Today" icon={ridesImgUrl}/>
          </Grid>
        </Grid>

        <Card className="w-100 overflow-auto mt-24" elevation={6}>
          <EgretSidenavContainer>
            <EgretSidenav
              width="295px"
              open={this.state.open}
            >
              <MyFleetSidenav
                data={this.props.fleet.all_fleets}
                follow={this.props.follow.follow_users}
                isActive={isActive}
                handlClickNavBar={this.handlClickNavBar}
                />
            </EgretSidenav>
            <div className={"border-height"}></div>
            <EgretSidenavContent>
              {isActive === '1' && <LiveContainer />}
              {isActive === '2' && <InventoryContainer />}
              {isActive === '3' && <MaintenanceContainer />}
            </EgretSidenavContent>
          </EgretSidenavContainer>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  fleet: state.fleet,
  follow: state.follow,
  getFleetData: PropTypes.func.isRequired,
  getFollowData: PropTypes.func.isRequired,
});

export default connect(
  mapStateToProps,
  { getFleetData, getFollowData }
)(withStyles(styles, { withTheme: true })(MyFleet));
