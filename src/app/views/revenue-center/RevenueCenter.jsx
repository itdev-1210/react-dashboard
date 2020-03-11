import React, { Component } from "react";
import {
  Card,
  Grid,
} from "@material-ui/core";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { getRevenueData } from "app/redux/actions/RevenueActions";

import {
  DefaultCard,
  EgretSidenavContainer,
  EgretSidenav,
  EgretSidenavContent
} from "egret";

import RevenueSidenav from './RevenueSidenav';
import RevenueContainer from './RevenueContainer';

class RevenueCenter extends Component {
  state = {
    totalIncome: "486",
    failedPayment: "23",
    totalIncomeImgUrl: "/assets/images/revenue/money.svg",
    failedImgUrl: "/assets/images/revenue/fail.svg",
    open: true,
    isActive: "1",
  };

  handlClickNavBar = (value) => {
    this.setState({
      isActive: value,
    })
  }

  componentDidMount() {
    this.props.getRevenueData()
  }

  render() {
    let {
      totalIncome,
      failedPayment,
      totalIncomeImgUrl,
      failedImgUrl,
      isActive,
    } = this.state;
    let payoutData = [
      {
        id: 1,
        bank_card: "Bank of America,  — 3981",
        amount: "50",
        date: "Dev 24, 2019 8:13 PM",
        status_id: 1,
        status: "Paid",
      },
      {
        id: 2,
        bank_card: "Bank of America,  — 3981",
        amount: "50",
        date: "Dev 24, 2019 8:13 PM",
        status_id: 2,
        status: "Withdrawn",
      },
    ]
    return (
      <div className="m-sm-30">
        <Grid container spacing={3}>
          <Grid item lg={3} md={3} sm={12} xs={12}>
            <DefaultCard title={totalIncome} subtitle="Total Income" icon={totalIncomeImgUrl}/>
          </Grid>
          <Grid item lg={3} md={3} sm={12} xs={12}>
            <DefaultCard title={failedPayment} subtitle="Failed Payment" icon={failedImgUrl}/>
          </Grid>
        </Grid>
        <Card className="w-100 overflow-auto mt-24" elevation={6}>
          <EgretSidenavContainer>
            <EgretSidenav
              width="295px"
              open={this.state.open}
            >
              <RevenueSidenav
                isActive={isActive}
                handlClickNavBar={this.handlClickNavBar}
                />
            </EgretSidenav>
            <div className={"border-height"}></div>
            <EgretSidenavContent>
              <RevenueContainer
                data={isActive === "3" ? payoutData : this.props.revenue.data}
                isActive={isActive}
              />
            </EgretSidenavContent>
          </EgretSidenavContainer>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  revenue: state.revenue,
  getRevenueData: PropTypes.func.isRequired,
});

export default connect(
  mapStateToProps,
  { getRevenueData }
)(RevenueCenter);
