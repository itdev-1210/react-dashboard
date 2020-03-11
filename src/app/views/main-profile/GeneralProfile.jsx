import React, { Component } from "react";
import Select from 'react-select';
import { withStyles } from "@material-ui/core/styles";
import {
  Icon,
  Grid,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button
} from "@material-ui/core";

const selectStyles = {
  menu: (provided, state) => ({
    ...provided,
    width: "144px",
    color: '#006ce6',
    padding: 5,
    top: "inherit",
    zIndex: "100"
  }),
  container: () => ({
    width: "144px",
    margin: 10,
    position: "relative",
    color: '#006ce6',
  }),
  control: (provided, state) => ({
    ...provided,
    width: "144px",
    height: '41px',
    borderRadius: '12px',
    color: '#006ce6',
    borderColor: 'rgba(0, 108, 230, 0.1)',
    backgroundColor: 'rgba(0, 108, 230, 0.1)',
  }),
  placeholder: base => ({
    ...base,
    color: 'rgba(0, 108, 230, 0.6)',
  }),
  singleValue: () => ({
    color: '#006ce6',
  }),
  dropdownIndicator: base => ({
    ...base,
    color: '#006ce6',
  }),
  indicatorSeparator: base => ({
    ...base,
    backgroundColor: 'rgba(0, 108, 230, 0.6)',
  })
};

const infoSelectStyles = {
  menu: (provided, state) => ({
    ...provided,
    width: "100%",
    color: state.selectProps.menuColor,
    padding: 5,
    top: "inherit",
    zIndex: "100"
  }),
  container: () => ({
    width: "100%",
    margin: 10,
    position: "relative"
  }),
  control: (provided, state) => ({
    ...provided,
    width: "100%",
    height: '56px',
    borderRadius: '12px',
  }),
};

const roles = [
  { label: "Admin" },
].map(suggestion => ({
  value: suggestion.label,
  label: suggestion.label
}));

const states = [
  { label: "Admin" },
].map(suggestion => ({
  value: suggestion.label,
  label: suggestion.label
}));

const cities = [
  { label: "Admin" },
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

const styles = {
  checked: {
    color: '#006ce6 !important'
  }
}

class GeneralProfile extends Component {
  state = {
    avatar: null
  }

  handleFileSelect = (event) => {
    if (event.target.files.length > 0) {
      this.setState({
        avatar: URL.createObjectURL(event.target.files[0])
      })
    }
  };

  render() {
    const { avatar } = this.state;
    const { classes } = this.props;

    return (
      <div className="general-profile pt-20">
        <div className="flex flex-space-between p-10">
          <div className="avatar-container">
            <img className={`${avatar ? 'avatar' : ''}`} src={avatar ? avatar : '/assets/images/main-profile/user_big.svg'} alt="" />
            <label htmlFor="upload-single-file" className="file-label">
              <div className="flex flex-middle file-container">
                <Icon style={{ color: '#ffffff' }}>add</Icon>
              </div>
            </label>
            <input
              className="display-none"
              onChange={this.handleFileSelect}
              id="upload-single-file"
              type="file"
            />
          </div>
          <Select
            styles={selectStyles}
            placeholder="Role"
            options={roles}
            // value={activity}
            // onChange={handleChangeActivity}
          />
        </div>
        <div className="mt-40">
          <Grid container>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <CustomTextField id="name" label="Name" variant="outlined" />
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <CustomTextField id="surname" label="Surname" variant="outlined" />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <CustomTextField id="country" label="Country" variant="outlined" />
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12} className="pr-20">
              <Select
                styles={infoSelectStyles}
                placeholder="State"
                options={states}
                // value={type}
                // onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item lg={6} md={6} sm={12} xs={12} className="pr-20">
              <Select
                styles={infoSelectStyles}
                placeholder="City"
                options={cities}
                // value={type}
                // onChange={handleChange}
              />
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <CustomTextField id="street" label="Street" variant="outlined" />
            </Grid>
          </Grid>

          <div className="info-container">
            <div className="title pl-10 py-10">Contact Information</div>
            <Grid container>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <CustomTextField id="email" label="Email" variant="outlined" />
              </Grid>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <CustomTextField id="phone-number" label="Phone Number" variant="outlined" />
              </Grid>
            </Grid>
          </div>

          <div className="info-container">
            <div className="title pl-10 py-10">Other Information</div>
            <div className="memo pl-10 pt-10">Sex</div>
            <RadioGroup
              name="value"
              onChange={this.handleChange}
              row
              className="pl-10"
            >
              <FormControlLabel
                value="0"
                control={<Radio classes={{checked: classes.checked}} />}
                label="Femail"
                labelPlacement="end"
              />
              <FormControlLabel
                className="ml-30"
                value="1"
                control={<Radio classes={{checked: classes.checked}} />}
                label="Male"
                labelPlacement="end"
              />
            </RadioGroup>
          </div>
        </div>

        <div className="flex flex-end">
          <Button
            className="save-btn"
          >
            <img src="/assets/images/main-profile/save.svg" alt="" />
          </Button>
        </div>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(GeneralProfile);