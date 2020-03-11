import React, { Component } from "react";
import {
  Grid,
  Card,
  Icon,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio
} from "@material-ui/core";
import LineChart from "./LineChart";
import DoughnutChart from "./Doughnut";
import DashboardCard from "./DefaultCard";
import { withStyles } from "@material-ui/styles";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";

const styles = {
  checked: {
    color: '#006ce6 !important'
  }
}

class Dashboard extends Component {
  state = {
    data: new Date(),
  };

  handleDateChange = date => {
    this.setState({ date });
  };

  render() {
    let { theme, classes } = this.props;
    let { date } = this.state;
    return (
      <div className="sales m-sm-30">
        <Card className="p-30">
          <div className="flex flex-space-between flex-middle mb-12">
            <div style={{ color: '#30304e' }}>My Earnings</div>
            <div className="flex flex-middle">
              <div className="datepicker-container">
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    disableToolbar
                    className="w-100"
                    margin="none"
                    format="MM/dd/yyyy"
                    id="date-picker-inline"
                    inputVariant="standard"
                    type="text"
                    value={date}
                    onChange={this.handleDateChange}
                    KeyboardButtonProps={{ "aria-label": "change date" }}
                  />
                </MuiPickersUtilsProvider>
              </div>
              <Button className="ml-20" variant="outlined" style={{ width: '100px' }}>
                <span className="capitalize">Daily</span>
              </Button>
              <Button className="ml-10" variant="outlined" style={{ width: '100px' }}>
                <span className="capitalize">Monthly</span>
              </Button>
              <Button className="ml-10" variant="outlined" style={{ width: '100px' }}>
                <span className="capitalize">Yearly</span>
              </Button>
            </div>
          </div>
          <LineChart
            height="350px"
            color={[theme.palette.primary.main, theme.palette.primary.light]}
          />
          <div className="flex flex-space-between flex-middle" style={{ paddingLeft: '60px' }}>
            <RadioGroup
              name="value"
              onChange={this.handleChange}
              row
            >
              <FormControlLabel
                value="total"
                control={<Radio classes={{checked: classes.checked}} />}
                label="Total"
                labelPlacement="end"
              />
              <FormControlLabel
                className="ml-30"
                value="earn"
                control={<Radio classes={{checked: classes.checked}} />}
                label="How much I earned"
                labelPlacement="end"
              />
            </RadioGroup>
            <Button className="ml-20" variant="outlined" style={{ width: '100px' }}>
              <span className="pl-10 capitalize">Payouts</span>
              <Icon>chevron_right</Icon>
            </Button>
          </div>
        </Card>
        <div className="py-12" />
        <Grid container spacing={3}>
          <Grid item lg={5} md={5} sm={12} xs={12}>
            <Card elevation={3} className="p-30 h-100">
              <div className="flex flex-middle flex-container">
                <div className="calc-container">
                  <div className="title">412</div>
                  <span className="description">Recurring Riders</span>
                </div>
                <div className="calc-container">
                  <div className="title">31</div>
                  <span className="description">Active Rides</span>
                </div>
              </div>
              <div className="flex flex-middle flex-container">
                <div className="calc-container">
                  <div className="title">271</div>
                  <span className="description">Total Fleet</span>
                </div>
                <div className="calc-container">
                  <div className="title">2</div>
                  <span className="description">Stolen Scooters</span>
                </div>
              </div>
              <Button variant="outlined" style={{ width: '200px', marginTop: '30px' }}>
                <span className="pl-8 capitalize">Manage My Fleet</span>
                <Icon>chevron_right</Icon>
              </Button>
            </Card>
          </Grid>

          <Grid item lg={4} md={4} sm={12} xs={12}>
            <Card className="h-100">
              <div className="flex flex-space-between pie-chart-content">
                <span className="title">Client's satisfaction</span>
                <span className="details">Details</span>
              </div>
              <DoughnutChart
                height="200px"
                color={[
                  theme.palette.primary.dark,
                  theme.palette.primary.main,
                  theme.palette.primary.light
                ]}
              />
            </Card>
          </Grid>

          <Grid item lg={3} md={3} sm={12} xs={12}>
            <div>
              <DashboardCard 
                title="6 min"
                subtitle="Average Ride Time"
                icon="schedule"
                backgroundClass="average"
              />
              <div className="py-10" />
              <DashboardCard 
                title="79"
                subtitle="MSG Stats"
                icon="schedule"
                backgroundClass="stats"
              />
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Dashboard);
