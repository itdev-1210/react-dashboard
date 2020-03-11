import React, { Component } from "react";
import {
  Grid,
  Card
} from "@material-ui/core";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { getCouponData } from "app/redux/actions/CouponActions";
import { getEventData } from "app/redux/actions/EventActions";
// import { getNotificationData } from "app/redux/actions/NotificationActions";

import {
  DefaultCard,
  EgretSidenavContainer,
  EgretSidenav,
  EgretSidenavContent
} from "egret";
import MarketSidenav from './MarketSidenav';
import MarketContainer from './MarketContainer';

class Marketing extends Component {
  state = {
    totalCoupon: "214",
    popularCountry: "Columbia",
    mostCoupon: "Free 10m",
    eventSchedule: "5",

    couponImgUrl: "/assets/images/market/coupon.svg",
    countryImgUrl: "/assets/images/market/country.svg",
    freeImgUrl: "/assets/images/market/free.svg",
    eventImgUrl: "/assets/images/market/event.svg",

    open: true,
    isActive: "1",
  };

  handlClickNavBar = (value) => {
    this.setState({isActive: value})
  }

  componentDidMount() {
    this.props.getCouponData()
    this.props.getEventData();
    // this.props.getNotificationData();
  }

  render() {
    let {
      totalCoupon,
      popularCountry,
      mostCoupon,
      eventSchedule,
      couponImgUrl,
      countryImgUrl,
      freeImgUrl,
      eventImgUrl,
      isActive
    } = this.state;

    let data = isActive === "1" ? this.props.coupon.data : isActive === "2" ? this.props.event.data : this.props.event.data;

    return (
      <div className="m-sm-30">
        <Grid container spacing={3}>
          <Grid item lg={3} md={3} sm={12} xs={12}>
            <DefaultCard title={totalCoupon} subtitle="Total Coupons" icon={couponImgUrl}/>
          </Grid>
          <Grid item lg={3} md={3} sm={12} xs={12}>
            <DefaultCard title={popularCountry} subtitle="Most Popular Country" icon={countryImgUrl}/>
          </Grid>
          <Grid item lg={3} md={3} sm={12} xs={12}>
            <DefaultCard title={mostCoupon} subtitle="Most Used Coupon" icon={freeImgUrl}/>
          </Grid>
          <Grid item lg={3} md={3} sm={12} xs={12}>
            <DefaultCard title={eventSchedule} subtitle="Events Scheduled" icon={eventImgUrl}/>
          </Grid>
        </Grid>

        <Card className="w-100 overflow-auto mt-24" elevation={6}>
          <EgretSidenavContainer>
            <EgretSidenav
              width="295px"
              open={this.state.open}
            >
              <MarketSidenav
                isActive={isActive}
                handlClickNavBar={this.handlClickNavBar}
                />
            </EgretSidenav>
            <div className={"border-height"}></div>
            <EgretSidenavContent>
              <MarketContainer
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
  coupon: state.coupon,
  event: state.event,
  // notification: state.notification,
  getCouponData: PropTypes.func.isRequired,
  getEventData: PropTypes.func.isRequired,
  // getNotificationData: PropTypes.func.isRequired,
});

export default connect(
  mapStateToProps,
  { getCouponData, getEventData }
)(Marketing);