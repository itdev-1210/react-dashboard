import React from 'react';
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
    TextField,
    Grid,
    Button
} from "@material-ui/core";
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns';
import Select from 'react-select';
import { showFilterPanel } from "app/redux/actions/FilterActions";
import MultiSelect from './MultiSelect';

const countries = [
    { label: "" },
    { label: "United State" },
    { label: "Colombia" },
    { label: "Romania" },
].map(suggestion => ({
    value: suggestion.label,
    label: suggestion.label
}));

const cities = [
    { label: "" },
    { label: "San Francisco" },
    { label: "Los Angels" },
    { label: "New York" },
].map(suggestion => ({
    value: suggestion.label,
    label: suggestion.label
}));

const zones = [
    { label: "" },
    { label: "Zone1" },
    { label: "Zone2" },
    { label: "Zone3" },
].map(suggestion => ({
    value: suggestion.label,
    label: suggestion.label
}));

const operators = [
    { label: "" },
    { label: "operator1" },
    { label: "operator2" },
    { label: "operator3" },
].map(suggestion => ({
    value: suggestion.label,
    label: suggestion.label
}));
const owners = [
    { label: "" },
    { label: "Owner 1" },
    { label: "Owner 2" },
    { label: "Owner 3" },
].map(suggestion => ({
    value: suggestion.label,
    label: suggestion.label
}));
const statuses = [
    { label: "" },
    { label: "Stauts 1" },
    { label: "Stauts 2" },
    { label: "Stauts 3" },
].map(suggestion => ({
    value: suggestion.label,
    label: suggestion.label
}));
const states = [
    { label: "" },
    { label: "State 1" },
    { label: "State 2" },
    { label: "State 3" },
].map(suggestion => ({
    value: suggestion.label,
    label: suggestion.label
}));

const selectStyles = {
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
const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    closeBtn: {
        cursor: "pointer"
    },
    btnGroup: {
        position: "absolute",
        bottom: "30px",
        right: "40px"
    },
    button: {
        margin: "10px",
        padding: "18px",
        width: "135px"
    },
    panelPicker: {
        padding: "10px",
        '& fieldset': {
            borderRadius: "12px",
        },
    }
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

function RightPanel(props) {
    let classes = useStyles();
    const [country, setCountry] = React.useState(null);
    const [city, setCity] = React.useState(null);
    const [zone, setZone] = React.useState(null);
    const [operator, setOperator] = React.useState(null);
    const [owner, setOwner] = React.useState(null);
    const [status, setStatus] = React.useState(null);
    const [state, setState] = React.useState(null);

    const [selectedDate, setSelectedDate] = React.useState(null);

    const handleDateChange = date => {
        setSelectedDate(date);
    };
    const handleChangeCountry = event => {
        setCountry(event);
    };
    const handleChangeCity = event => {
        setCity(event);
    };
    const handleChangeZone = event => {
        setZone(event);
    };
    const handleChangeOperator = event => {
        setOperator(event);
    };
    const handleChangeOwner = event => {
        setOwner(event);
    };
    const handleChangeStatus = event => {
        setStatus(event);
    };
    const handleChangeState = event => {
        setState(event);
    };
    return (
        <div className="px-18 py-26 bg-white w-537">
            <div className="px-10 flex flex-space-between font-size-18">
                <div>Filter</div>
                <div className={classes.closeBtn} onClick={props.showFilterPanel}>&#10006;</div>
            </div>
            <div className="pt-28 pr-20">
                <MultiSelect />
            </div>
            <div className="pt-28">
                <div className="py-16">
                    <Grid container>
                        <Grid item lg={6} md={6} sm={12} xs={12} className="pr-20">
                            <Select
                                styles={selectStyles}
                                placeholder="Operating Zone"
                                options={zones}
                                value={zone}
                                onChange={handleChangeZone}
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12} className="pr-20">
                            <Select
                                styles={selectStyles}
                                placeholder="Operator"
                                options={operators}
                                value={operator}
                                onChange={handleChangeOperator}
                            />
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item lg={6} md={6} sm={12} xs={12} className="pr-20">
                            <Select
                                styles={selectStyles}
                                placeholder="Owner"
                                options={owners}
                                value={owner}
                                onChange={handleChangeOwner}
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <CustomTextField id="error-code" label="Error code" variant="outlined" />
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <div className={classes.panelPicker}>
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <KeyboardDatePicker
                                        disableToolbar
                                        variant="inline"
                                        format="MM/dd/yyyy"
                                        inputVariant="outlined"
                                        id="date-picker-outline"
                                        label="Date"
                                        value={selectedDate}
                                        onChange={handleDateChange}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                    />
                                </MuiPickersUtilsProvider>
                            </div>
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12} className="pr-20">
                            <Select
                                styles={selectStyles}
                                placeholder="Status"
                                options={statuses}
                                value={status}
                                onChange={handleChangeStatus}
                            />
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item lg={6} md={6} sm={12} xs={12} className="pr-20">
                            <Select
                                styles={selectStyles}
                                placeholder="State"
                                options={states}
                                value={state}
                                onChange={handleChangeState}
                            />
                        </Grid>
                    </Grid>
                </div>
                <div className="py-20">
                    <div className="pl-16 font-size-14">Address</div>
                    <Grid container>
                        <Grid item lg={6} md={6} sm={12} xs={12} className="pr-20">
                            <Select
                                styles={selectStyles}
                                placeholder="Country"
                                options={countries}
                                value={country}
                                onChange={handleChangeCountry}
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12} className="pr-20">
                            <Select
                                styles={selectStyles}
                                placeholder="City"
                                options={cities}
                                value={city}
                                onChange={handleChangeCity}
                            />
                        </Grid>
                    </Grid>
                </div>
            </div>
            <div className={classes.btnGroup}>
                <Button variant="contained" color="secondary" className={classes.button} onClick={props.showFilterPanel}>
                    Cancel
                </Button>
                <Button variant="contained" color="primary" className={classes.button} onClick={props.showFilterPanel}>
                    Search
                </Button>
            </div>
        </div>
    )
}


const mapStateToProps = state => ({
    showFilterPanel: PropTypes.func.isRequired,
});
  
export default connect(
    mapStateToProps,
    { showFilterPanel }
)(RightPanel);
