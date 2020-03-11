import React, { Component } from 'react';
import Select from 'react-select';
import Scrollbar from "react-perfect-scrollbar";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker
} from "@material-ui/pickers";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import MapTab from './MapTab';
import PeakHoursChart from './PeakHoursChart';

const countries = [
  { label: "All Country" },
  { label: "Aland Islands" },
  { label: "Albania" },
  { label: "Algeria" },
  { label: "American Samoa" },
  { label: "Andorra" }
].map(suggestion => ({
  value: suggestion.label,
  label: suggestion.label
}));

const vehicles = [
  { label: "All Vehicles" },
  { label: "Aland Islands" },
  { label: "Albania" },
  { label: "Algeria" },
  { label: "American Samoa" },
  { label: "Andorra" }
].map(suggestion => ({
  value: suggestion.label,
  label: suggestion.label
}));
  
const selectStyles = {
  menu: (provided, state) => ({
    ...provided,
    width: 160,
    color: state.selectProps.menuColor,
    padding: 5
  }),
  container: () => ({
    width: 160,
    marginLeft: 20
  }),
  control: (provided, state) => ({
    ...provided,
    width: 160,
    height: '50px',
    borderRadius: '12px'
  }),
};

const styles = theme => ({
  input: {
    color: "red"
  },
  root: {
    width: '100%',
  },
  table: {
      minWidth: 750,
  },
  tableRow: {
      height: "30px",
  },
});

const data = [
  { time: "00:00", Rides: 2400 },
  { time: "01:00", Rides: 1398 },
  { time: "02:00", Rides: 2800 },
  { time: "03:00", Rides: 2908 },
  { time: "04:00", Rides: 2800 },
  { time: "05:00", Rides: 2800 },
  { time: "06:00", Rides: 2300 },
  { time: "07:00", Rides: 1398 },
  { time: "08:00", Rides: 2800 },
  { time: "09:00", Rides: 2908 },
  { time: "10:00", Rides: 2800 },
  { time: "11:00", Rides: 2800 },
  { time: "12:00", Rides: 2400 },
  { time: "13:00", Rides: 1398 },
  { time: "14:00", Rides: 2800 },
  { time: "15:00", Rides: 2908 },
  { time: "16:00", Rides: 2800 },
  { time: "17:00", Rides: 2800 },
  { time: "18:00", Rides: 2300 },
  { time: "19:00", Rides: 1398 },
  { time: "20:00", Rides: 2800 },
  { time: "21:00", Rides: 2908 },
  { time: "22:00", Rides: 2800 },
  { time: "23:00", Rides: 2800 }
];

class LiveContainer extends Component {
  state = {
    data: new Date(),
  };

  handleDateChange = date => {
    this.setState({ date });
  };

  render() {
    let { date } = this.state;
    const { classes } = this.props;

    return (
      <Scrollbar className="scrollable-content h-700">
        <div className="px-26 pt-33 bg-white live">
          <div className="py-3 flex flex-middle button-container">
            <Select
              styles={selectStyles}
              placeholder="Select Countory"
              options={countries}
              // value={single}
              // onChange={handleChangeSingle}
            />
            <Select
              styles={selectStyles}
              placeholder="Select Vehicle"
              options={vehicles}
              // value={single}
              // onChange={handleChangeSingle}
            />
            <div className="datepicker-container ml-20">
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
          </div>

          <div className="flex flex-middle flex-container">
            <div className="calc-container">
              <div className="title">212</div>
              <span className="description">Active Rides</span>
            </div>
            <div className="calc-container">
              <div className="title">4 min</div>
              <span className="description">Average ride time</span>
            </div>
          </div>

          <MapTab />

          <div className="mt-4">
            <div className="container-title mb-10">Peak Hours</div>
            <PeakHoursChart chartData={data}/>
          </div>

          <div className="mt-4 mb-30">
            <div className="flex flex-space-between mb-10">
              <span className="container-title">Team Members</span>
              <Button variant="outlined" style={{ width: '115px' }}>
                <span className="capitalize">Add New</span>
              </Button>
            </div>
            <Table
              className={classes.table}
              aria-labelledby="tableTitle"
              size={'medium'}
              aria-label="User table"
            >
              <TableHead>
                <TableRow className={classes.tableRow}>
                  <TableCell padding={'default'}>Name</TableCell>
                  <TableCell padding={'default'}>Team</TableCell>
                  <TableCell padding={'default'}>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow className={classes.tableRow}>
                  <TableCell padding={'default'}>Tom Jackson</TableCell>
                  <TableCell padding={'default'}>Marketing</TableCell>
                  <TableCell padding={'default'}>Active</TableCell>
                </TableRow>
                <TableRow className={classes.tableRow}>
                  <TableCell padding={'default'}>Alexandru Park</TableCell>
                  <TableCell padding={'default'}>Barcelona</TableCell>
                  <TableCell padding={'default'}>Active</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <div className="mt-4 mb-30">
            <div className="flex flex-space-between mb-10">
              <span className="container-title">Events</span>
              <Button variant="outlined" style={{ width: '115px' }}>
                <span className="capitalize">Add New</span>
              </Button>
            </div>
            <Table
              className={classes.table}
              aria-labelledby="tableTitle"
              size={'medium'}
              aria-label="User table"
            >
              <TableHead>
                <TableRow className={classes.tableRow}>
                  <TableCell padding={'default'}>Name</TableCell>
                  <TableCell padding={'default'}>Coupon Name</TableCell>
                  <TableCell padding={'default'}>Date</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow className={classes.tableRow}>
                  <TableCell padding={'default'}>It's Chirsmas get 50% Off</TableCell>
                  <TableCell padding={'default'}>M12HPNEW</TableCell>
                  <TableCell padding={'default'}>DEC 24, 2019 ~ DEC 28, 2019</TableCell>
                </TableRow>
                <TableRow className={classes.tableRow}>
                  <TableCell padding={'default'}>It's Chirsmas get 50% Off</TableCell>
                  <TableCell padding={'default'}>M12HPNEW</TableCell>
                  <TableCell padding={'default'}>DEC 24, 2019 ~ DEC 28, 2019</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </Scrollbar>
    )
  }
}

export default withStyles(styles, { withTheme: true })(LiveContainer);