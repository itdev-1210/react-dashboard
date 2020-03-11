import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  Icon,
  Grid,
  Slider,
  Checkbox,
  FormControlLabel,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";

const styles = {
  table: {
    minWidth: 750,
  },
};

const marks = [
  {
    value: 100,
  },
  {
    value: 200,
  },
  {
    value: 500,
  },
  {
    value: 600,
  },
  {
    value: 700
  }
];

const Plan = ({ type, hourly, content}) => {
  return (
    <div className="plan-item">
      <div className="item-bar"></div>
      <div className="flex flex-middle flex-column item-content">
        <div className="flex flex-column item-description">
          <div className="type">{type}</div>
          <div className="hourly">
            <span className="value">${hourly} / </span>
            <span className="month">month</span>
          </div>
        </div>
        <div className="item-text">
          Lorem Ipsum is simply dummy text of
          the printing and typesetting industry.
          Lorem Ipsum has been
        </div>
      </div>
    </div>
  );
}

function AirbnbThumbComponent(props) {
  return (
    <span {...props}>
      <span className="valueLabel">
        <span className="valueLabel-circle">
          <span className="valueLabel-label">{props['aria-valuenow']}</span>
        </span>
      </span>
    </span>
  );
}

class MyPlan extends Component {
  state = {
  }

  render() {
    const { classes } = this.props;

    return (
      <div className="my-plan">
        <div className="info-container">
          <div className="title pl-10 py-20">Choose Plan</div>
          <Grid container className="mb-20">
            <Grid item lg={6} md={6} sm={12} xs={12} className="px-10">
              <Plan
                type="Professional"
                hourly="19.99"
              />
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12} className="px-10">
              <Plan
                type="Heading"
                hourly="39.99"
              />
            </Grid>
          </Grid>

          <Grid container className="mt-20">
            <Grid item lg={6} md={6} sm={12} xs={12} className="px-10">
              <div className="slider-container">
                <div className="slider-text py-10">Vehicles</div>
                <Slider
                  defaultValue={200}
                  aria-labelledby="discrete-slider-always"
                  min={0}
                  max={1000}
                  step={100}
                  marks={marks}
                  valueLabelDisplay="on"
                  ThumbComponent={AirbnbThumbComponent}
                />
              </div>
              <div className="slider-container mt-40">
                <div className="slider-text py-10">Users</div>
                <Slider
                  defaultValue={500}
                  aria-labelledby="discrete-slider-always"
                  min={0}
                  max={1000}
                  step={100}
                  marks={marks}
                  valueLabelDisplay="on"
                  ThumbComponent={AirbnbThumbComponent}
                />
              </div>
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12} className="flex flex-column px-10">
              <div className="flex flex-column total-container">
                <div className="flex">
                  <FormControlLabel
                    control={<Checkbox color="primary" />}
                    label="Insurance"
                  />
                  <div className="flex flex-column item-description ml-20">
                    <div className="type">Total</div>
                    <div className="hourly">
                      <span className="value">$233.99 / </span>
                      <span className="month">month</span>
                    </div>
                  </div>
                </div>
                <Button className="buy-btn mt-30" variant="outlined">Buy</Button>
              </div>
            </Grid>
          </Grid>
        </div>

        <div className="info-container mt-30">
          <div className="flex flex-space-between px-10">
            <div className="title py-10">Payment History</div>
          </div>
          <div className="flex flex-space-between mt-20 px-10">
            <Table
              className={classes.table}
              aria-labelledby="tableTitle"
              size={'medium'}
              aria-label="User table"
            >
              <TableHead>
                <TableRow className={classes.tableRow}>
                  <TableCell padding={'default'}>Price</TableCell>
                  <TableCell padding={'default'}>Date</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow className={classes.tableRow}>
                  <TableCell padding={'default'}>$20</TableCell>
                  <TableCell padding={'default'}>Dec 24, 2019 8:13 PM</TableCell>
                </TableRow>
                <TableRow className={classes.tableRow}>
                  <TableCell padding={'default'}>$20</TableCell>
                  <TableCell padding={'default'}>Dec 24, 2019 8:13 PM</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(MyPlan);