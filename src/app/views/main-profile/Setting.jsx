import React, { Component } from "react";
import Select from 'react-select';
import { withStyles } from "@material-ui/core/styles";
import {
  Icon,
  Button,
  Grid,
  TextField,
  InputAdornment,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const styles = {
  table: {
    minWidth: 750,
  },
};

const selectStyles = {
  menu: (provided, state) => ({
    ...provided,
    width: "280px",
    color: state.selectProps.menuColor,
    padding: 5,
    top: "inherit",
    zIndex: "100"
  }),
  container: () => ({
    width: "280px",
    margin: 10,
    position: "relative",
  }),
  control: (provided, state) => ({
    ...provided,
    width: "280px",
    height: '50px',
    borderRadius: '12px',
  }),
};
const languages = [
  { label: "English" },
  { label: "Russian" },
  { label: "Polish" },
].map(suggestion => ({
  value: suggestion.label,
  label: suggestion.label
}));

const CustomTextField = withStyles({
  root: {
    padding: "10px",
    width: "100%",
    '& label': {
      top: "inherit",
      left: "inherit",
      color: "#666666",
      fontSize: "13px",
    },
    '& fieldset': {
      borderRadius: "12px",
      border: "solid 1px #e5e5e5",
    },
  },
})(TextField);

class Setting extends Component {
  state = {
    password: '',
    showPassword: false
  }

  handleClickShowPassword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  };

  handleMouseDownPassword = event => {
    event.preventDefault();
  };

  render() {
    const { classes } = this.props;
    const { password, showPassword } = this.state;

    return (
      <div className="setting">
        <div className="info-container">
          <div className="title pl-10 py-10">Change Password</div>
          <Grid container>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <CustomTextField 
                type={showPassword ? 'text' : 'password'}
                label="New password"
                variant="outlined"
                InputProps={{
                  endAdornment: <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={this.handleClickShowPassword}
                      onMouseDown={this.handleMouseDownPassword}
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }}
              />
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <CustomTextField 
                type={showPassword ? 'text' : 'password'}
                label="Confirm password"
                variant="outlined"
                InputProps={{
                  endAdornment: <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={this.handleClickShowPassword}
                      onMouseDown={this.handleMouseDownPassword}
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }}
              />
            </Grid>
          </Grid>
        </div>
        <div className="info-container">
          <div className="title pl-10 py-10">Language</div>
          <Select
            styles={selectStyles}
            placeholder="Language"
            options={languages}
            // value={activity}
            // onChange={handleChangeActivity}
          />
        </div>

        <div className="border-width"></div>

        <div className="info-container mt-20">
          <div className="flex flex-space-between px-10">
            <div className="title py-10">Two-step authentication</div>
            <Button variant="outlined">
              Add authentication
              <Icon>add</Icon>
            </Button>
          </div>
          <div className="flex flex-space-between two-authentication mt-20 mb-20 mx-10">
            <div>
              <div className="sms">SMS</div>
              <div className="phone-number">+995 597 015-307</div>
            </div>
            <div className="flex flex-middle">
              <span className="event">UPDATE</span>
              <Icon className="delete">delete_outline</Icon>
            </div>
          </div>
        </div>

        <div className="border-width"></div>

        <div className="info-container mt-20">
          <div className="flex flex-space-between px-10">
            <div className="title py-10">Login Sessions</div>
            <Button variant="outlined">
              Sign out all other session
            </Button>
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
                  <TableCell padding={'default'}>Location</TableCell>
                  <TableCell padding={'default'}>Device</TableCell>
                  <TableCell padding={'default'}>IP Address</TableCell>
                  <TableCell padding={'default'}>Time</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow className={classes.tableRow}>
                  <TableCell padding={'default'}>Columbia</TableCell>
                  <TableCell padding={'default'}>Chrome-Mac OS</TableCell>
                  <TableCell padding={'default'}>188.21.201.40</TableCell>
                  <TableCell padding={'default'}>Dec 24, 2019 8:13 PM</TableCell>
                </TableRow>
                <TableRow className={classes.tableRow}>
                  <TableCell padding={'default'}>Columbia</TableCell>
                  <TableCell padding={'default'}>Chrome-Mac OS</TableCell>
                  <TableCell padding={'default'}>188.21.201.40</TableCell>
                  <TableCell padding={'default'}>Dec 24, 2019 8:13 PM</TableCell>
                </TableRow>
                <TableRow className={classes.tableRow}>
                  <TableCell padding={'default'}>Columbia</TableCell>
                  <TableCell padding={'default'}>Chrome-Mac OS</TableCell>
                  <TableCell padding={'default'}>188.21.201.40</TableCell>
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

export default withStyles(styles, { withTheme: true })(Setting);