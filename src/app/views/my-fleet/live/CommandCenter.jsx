import React, { Component } from 'react';
import { connect } from "react-redux";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Select from 'react-select';
import Scrollbar from "react-perfect-scrollbar";
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns';
import {
  Checkbox,
  FormControlLabel,
  Button,
  Badge,
  IconButton,
  Radio,
  RadioGroup,
  MuiThemeProvider,
  Drawer,
  TextField,
  Paper,
  MenuItem,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid
} from '@material-ui/core';
import deburr from "lodash/deburr";
import Downshift from "downshift";
import Icon from '@material-ui/core/Icon';
import { EgretMenu } from "egret";
import clsx from 'clsx';
import PropTypes from "prop-types";
import MarkerMap from './commandCenter/MarkerMap';
import ItemsCarousel from 'react-items-carousel';
import PeakHoursChart from './PeakHoursChart';

const CustomCheck = withStyles(theme => ({
    root: {
        fontSize: "14px",
        color: "#898989",
        height: "24px",
    },
}))(FormControlLabel);

const CustomKeyboardDatePicker = withStyles({
    root: {
        backgroundColor: "#21253f",
        '& label': {
            color: "#ffffff",
            letterSpacing: "0.8px",
            fontSize: "13px"
        },
        '& input': {
            color: "#ffffff",
            letterSpacing: "0.8px",
            fontSize: "13px"
        },
        '& fieldset': {
            borderRadius: "5px",
            border: "solid 1px rgba(227, 227, 227, 0.2) !important",
        },
        '& button': {
            color: "#ffffff",
        },
    },
})(KeyboardDatePicker);

const ColorButton = withStyles(theme => ({
    root: {
        // position: "absolute",
        backgroundColor: "#010123",
        bottom: "0",
        width: "100%",
        color: "#a2a2a2",
        fontSize: "15px",
        padding: "8px",
        borderRadius: "12px",
        marginTop: "8px",
        border: "solid 1px rgba(255, 255, 255, 0.23)",
        '&:hover': {
            backgroundColor: "#010123",
        },
    },
}))(Button);

const StyledBadge = withStyles({
    badge: {
      backgroundColor: '#ff6869',
      width: '15px',
      minWidth: '15px',
      height: '15px',
      fontSize: '11px'
    },
})(Badge);

const types = [
    { label: "" },
    { label: "Type 1" },
    { label: "Type 2" },
    { label: "Type 3" },
].map(suggestion => ({
    value: suggestion.label,
    label: suggestion.label
}));

const countries = [
    { label: "" },
    { label: "United State" },
    { label: "Colombia" },
    { label: "Romania" },
].map(suggestion => ({
    value: suggestion.label,
    label: suggestion.label
}));

const members = [
    { label: "" },
    { label: "Member 1" },
    { label: "Member 2" },
    { label: "Member 3" },
].map(suggestion => ({
    value: suggestion.label,
    label: suggestion.label
}));

const selectStyles = {
    menu: (provided, state) => ({
      ...provided,
      width: "150px",
      color: state.selectProps.menuColor,
      padding: 5,
      top: "inherit",
      zIndex: "100"
    }),
    container: () => ({
      width: "150px",
      position: "relative"
    }),
    control: (provided, state) => ({
      ...provided,
      width: "150px",
      height: '50px',
      borderRadius: '12px',
      border: "solid 1px #e6e6e6 !important",
      backgroundColor: "#21253f !important",
      fontSize: "14px",
      fontWeight: "500",
    }),
    placeholder: (provided, state) => ({
        ...provided,
        color: "#ffffff"
    }),
    singleValue: (provided, state) => ({
        ...provided,
        color: "#ffffff"
    }),
};
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
const selectMemberStyles = {
    menu: (provided, state) => ({
      ...provided,
      width: "250px",
      color: state.selectProps.menuColor,
      padding: 5,
      top: "inherit",
      zIndex: "100"
    }),
    container: () => ({
      width: "100%",
      margin: 10,
      paddingRight: 20,
      position: "relative"
    }),
    control: (provided, state) => ({
      ...provided,
      width: "250px",
      height: '56px',
      borderRadius: '12px',
    }),
};

const useStyles = makeStyles({
    root: {
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
    icon: {
      borderRadius: '50%',
      width: 25,
      height: 25,
      boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
      backgroundColor: '#21253f',
      border: "solid 1px rgba(227, 227, 227, 0.2)",
      '$root.Mui-focusVisible &': {
        outline: '2px auto rgba(227, 227, 227, 0.2)',
        outlineOffset: 2,
      },
      'input:hover ~ &': {
        backgroundColor: '#21253f',
      },
      'input:disabled ~ &': {
        boxShadow: 'none',
        background: 'rgba(206,217,224,.5)',
      },
    },
    checkedIcon: {
      backgroundColor: '#21253f',
      '&:before': {
        display: 'block',
        width: 25,
        height: 25,
        backgroundImage: 'radial-gradient(#006ce6,#006ce6 28%,transparent 32%)',
        content: '""',
      },
      'input:hover ~ &': {
        backgroundColor: '#106ba3',
      },
    },
});
function StyledRadio(props) {
    const classes = useStyles();
  
    return (
      <Radio
        className={classes.root}
        disableRipple
        color="default"
        checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
        icon={<span className={classes.icon} />}
        {...props}
      />
    );
}
const data = [
    { time: "00:00", Rides: 2400 },
    { time: "01:00", Rides: 1398 },
    { time: "02:00", Rides: 2500 },
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

const suggestions = [
    { label: "A001" },
    { label: "A002" },
    { label: "A003" },
    { label: "A004" },
    { label: "A005" },
];
function renderInput(inputProps) {
    const { InputProps, classes, ref, ...other } = inputProps;
  
    return (
      <TextField
        InputProps={{
          inputRef: ref,
          classes: {
            root: classes.inputRoot,
            input: classes.inputInput
          },
          ...InputProps
        }}
        {...other}
      />
    );
}
  
function renderSuggestion(suggestionProps) {
    const {
      suggestion,
      index,
      itemProps,
      highlightedIndex,
      selectedItem
    } = suggestionProps;
    const isHighlighted = highlightedIndex === index;
    const isSelected = (selectedItem || "").indexOf(suggestion.label) > -1;
  
    return (
      <MenuItem
        {...itemProps}
        key={suggestion.label}
        selected={isHighlighted}
        className="flex flex-space-between flex-middle border-bottom-line"
        component="div"
        style={{
          fontWeight: isSelected ? 500 : 400,
        }}
      >
        <div>{'Vehicle ID: ' + suggestion.label}</div>
        <div><u>Show</u></div>
      </MenuItem>
    );
}
renderSuggestion.propTypes = {
    highlightedIndex: PropTypes.number,
    index: PropTypes.number,
    itemProps: PropTypes.object,
    selectedItem: PropTypes.string,
    suggestion: PropTypes.shape({ label: PropTypes.string }).isRequired
};
function getSuggestions(value, { showEmpty = false } = {}) {
    const inputValue = deburr(value.trim()).toLowerCase();
    const inputLength = inputValue.length;
    let count = 0;
  
    return inputLength === 0 && !showEmpty
      ? []
      : suggestions.filter(suggestion => {
          const keep =
            count < 5 &&
            suggestion.label.slice(0, inputLength).toLowerCase() === inputValue;
  
          if (keep) {
            count += 1;
          }
  
          return keep;
    });
}

const useStylesDetail = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      maxHeight: 250
    },
    container: {
      flexGrow: 1,
      position: "relative"
    },
    paper: {
      position: "absolute",
      zIndex: 1,
      marginTop: theme.spacing(1),
      left: 0,
      right: 0,
      borderBottomLeftRadius: "25px",
      borderBottomRightRadius: "25px"
    },
    chip: {
      margin: theme.spacing(0.5, 0.25)
    },
    inputRoot: {
      flexWrap: "wrap"
    },
    inputInput: {
      width: "auto",
      flexGrow: 1,
      color: '#ffffff',
    },
    divider: {
      height: theme.spacing(2)
    }
}));

function SearchDownShift (props) {
    const classes = useStylesDetail();
    
    return (
        <div className={classes.root}>
            <Downshift id="downshift-simple" onChange={selection => selection ? props.showDetailPart(selection) : props.showDetailPart(null)}>
                {({
                clearSelection,
                getInputProps,
                getItemProps,
                getLabelProps,
                getMenuProps,
                highlightedIndex,
                inputValue,
                isOpen,
                selectedItem
                }) => {
                const { onBlur, onFocus, onChange, ...inputProps } = getInputProps({
                    onChange: event => {
                        if (event.target.value === "") {
                            clearSelection();
                        }
                    },
                    placeholder: "Search Users, Vehicles & Move..."
                });

                return (
                    <div className={classes.container}>
                    {renderInput({
                        fullWidth: true,
                        classes,
                        // label: "Country",
                        InputLabelProps: getLabelProps({ shrink: true }),
                        InputProps: { onBlur, onChange, onFocus },
                        inputProps
                    })}

                    <div {...getMenuProps()}>
                        {isOpen ? (
                        <Paper className={classes.paper} square>
                            {getSuggestions(inputValue).map((suggestion, index) =>
                            renderSuggestion({
                                suggestion,
                                index,
                                itemProps: getItemProps({ item: suggestion.label }),
                                highlightedIndex,
                                selectedItem
                            })
                            )}
                        </Paper>
                        ) : null}
                    </div>
                    </div>
                );
                }}
            </Downshift>
        </div>
    )
}
class CommandCenter extends Component {
    state = {
        type: null,
        country: null,
        selectedDate: null,
        show_vehicle: false,
        show_opearting: false,
        show_parking: false,
        show_heat: false,
        show_traffic: false,
        in_use: false,
        available: false,
        broken: false,
        start_ride: true,
        end_ride: false,
        showPeak: false,
        activeItemIndex: 0,
        showDetail: false,
        createTaskDialog: false,
        member: null
    };

    componentDidMount() {
    }

    handleChangeType = (value) => {
        this.setState({type: value})
    }

    handleChangeCountry = (value) => {
        this.setState({country: value})
    }

    handleChange = (value) => {
        this.setState({[value]: !this.state[value]})
    }

    showScooter = (value) => {
        this.setState({[value]: !this.state[value]})
    }

    handleDateChange = (date) => {
        this.setState({selectedDate: date})
    }

    handleShowPeak = () => {
        this.setState({showPeak: !this.state.showPeak})
    }

    handleShowDetail = (id) => {
        this.setState({showDetail: id ? true : false})
    }

    handleShowCreateDialog = () => {
        this.setState({createTaskDialog: !this.state.createTaskDialog})
    }

    handleChangeMember = (member) => {
        this.setState({member: member})
    }

    render() {
        const {
            show_vehicle, show_opearting, show_parking, show_heat, show_traffic,
            in_use, available, broken, selectedDate, member
        } = this.state;
        let leftSidebar = {
            show: true,
            mode: 'full', // full, close, compact, mobile,
        }
        return (
        <div className="command-center flex">
            <div className="left flex flex-column">
                <div className="command-center-header flex flex-middle flex-space-between">
                    <div className="cursor-pointer text-white p-20 flex flex-middle font-size-22" onClick={this.props.handleCenterClose}>
                        &#8592;<span className="ml-24">Command Center</span>
                    </div>
                    <Select
                        styles={selectStyles}
                        placeholder="All Region"
                        options={countries}
                        value={this.state.country}
                        onChange={this.handleChangeCountry}
                    />
                    <div className="command-weather_container px-24 flex flex-middle">
                        <Icon className="command-weather_icon">wb_sunny_outlined</Icon>
                        <div className="command-weather_text px-24">
                            <div className="command-temperature">25 °C</div>
                            <div className="command-description">in Bogota</div>
                        </div>
                    </div>
                    <div className="flex flex-middle search-container">
                        <Icon className="icon">search</Icon>
                        <SearchDownShift showDetailPart={this.handleShowDetail}/>
                    </div>
                    <div className="">
                        <EgretMenu
                            menuButton={
                            <StyledBadge
                                color="primary"
                                badgeContent={4}
                            >
                                <IconButton
                                style={{
                                    color: '#ffffff',
                                    backgroundColor: '#010123',
                                    borderRadius: '10px',
                                    width: '35px',
                                    height: '35px',
                                    padding: '6px'
                                }}
                                >
                                <Icon style={{ fontSize: '18px', color: '#b2b2cc' }}>notifications</Icon>
                                </IconButton>
                            </StyledBadge>
                            }
                        ></EgretMenu>
                    </div>
                    
                </div>
                <div className="command-center-content">
                    <MarkerMap showVehicle={show_vehicle} showOpearting={show_opearting} showHeat={show_heat}/>
                </div>
                <div className="command-center-footer px-20 py-48 flex flex-middle">
                    <div style={{"maxWidth":1000,"margin":"0 auto"}}>
                        <ItemsCarousel
                            infiniteLoop={false}
                            gutter={12}
                            activePosition={'center'}
                            chevronWidth={60}
                            disableSwipe={false}
                            alwaysShowChevrons={true}
                            numberOfCards={5}
                            slidesToScroll={1}
                            outsideChevron={true}
                            showSlither={false}
                            firstAndLastGutter={false}
                            activeItemIndex={this.state.activeItemIndex}
                            requestToChangeActive={value => this.setState({ activeItemIndex: value })}
                            rightChevron={
                                <IconButton
                                    style={{
                                        color: '#ffffff',
                                        border: "solid 1px rgba(151, 151, 151, 0.15)",
                                        backgroundColor: '#010123',
                                        borderRadius: '50%',
                                        width: '45px',
                                        height: '45px',
                                        padding: '6px'
                                    }}
                                    >
                                    <Icon>navigate_next</Icon>
                                </IconButton>
                            }
                            leftChevron={
                                <IconButton
                                    style={{
                                        color: '#ffffff',
                                        border: "solid 1px rgba(151, 151, 151, 0.15)",
                                        backgroundColor: '#010123',
                                        borderRadius: '50%',
                                        width: '45px',
                                        height: '45px',
                                        padding: '6px'
                                    }}
                                    >
                                    <Icon>navigate_before</Icon>
                                </IconButton>
                            }
                        >
                            <div className="flex flex-column flex-middle flex-center">
                                <div className="item-number">312</div>
                                <div className="item-comment">Total Rides Today</div>
                            </div>
                            <div className="flex flex-column flex-middle flex-center">
                                <div className="item-number">31</div>
                                <div className="item-comment">Active Rides</div>
                            </div>
                            <div className="flex flex-column flex-middle flex-center">
                                <div className="item-number">8</div>
                                <div className="item-comment">In Maintenance</div>
                            </div>
                            <div className="flex flex-column flex-middle flex-center">
                                <div className="item-number">1</div>
                                <div className="item-comment">Vandalized</div>
                            </div>
                            <div className="flex flex-column flex-middle flex-center">
                                <div className="item-number">2</div>
                                <div className="item-comment">Stolen Scooters</div>
                            </div>
                            <div className="flex flex-column flex-middle flex-center">
                                <div className="item-number">312</div>
                                <div className="item-comment">Total Rides Today</div>
                            </div>
                            <div className="flex flex-column flex-middle flex-center">
                                <div className="item-number">31</div>
                                <div className="item-comment">Stolen Scooters</div>
                            </div>
                        </ItemsCarousel>
                    </div>
                    <IconButton
                        style={{
                            color: '#ffffff',
                            border: "solid 1px rgba(151, 151, 151, 0.15)",
                            backgroundColor: '#010123',
                            borderRadius: '50%',
                            width: '45px',
                            height: '45px',
                            padding: '6px'
                        }}
                        >
                        <Icon>settings</Icon>
                    </IconButton>
                </div>
            </div>
            <div className="right w-350 p-32">
                {this.state.showDetail ? 
                    <div>
                        <div className="flex flex-space-between font-size-22">
                            <div className="text-white">Vehicle info</div>
                            <div className="cursor-pointer text-white" onClick={()=>this.handleShowDetail(null)}>&#10006;</div>
                        </div>
                        <div className="flex flex-space-between flex-middle py-40">
                            <div className="flex flex-column font-size-16 text-white">
                                <div>Vehicle Name</div>
                                <div>ID: 92716</div>
                            </div>
                            <div className="battery-status p-8 flex flex-middle">
                                <img src="/assets/images/fleet/bolt.svg" alt="" />
                                <span style={{ marginLeft: '5px' }}>95%</span>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="mr-18">
                                <div className="blue-back-radius flex flex-center flex-middle">
                                    <img src={`/assets/images/fleet/locked.svg`} alt="" />
                                </div>
                                <div>Lock</div>
                            </div>
                            <div className="ml-18">
                                <div className="blue-back-radius flex flex-center flex-middle">
                                    <img src={`/assets/images/fleet/light_on.svg`} alt="" />
                                </div>
                                <div>Lights</div>
                            </div>
                        </div>
                        <div className="py-40">
                            <div className="text-white font-size-18">Current location</div>
                            <div className="font-size-15 gray-font-vehicle">Georgia, Tbilisi, Sandro Euli st. 21</div>
                        </div>
                        <div className="dash-line-1"></div>
                        <div className="font-size-15 py-26 text-white">Closest team members</div>
                        <Scrollbar className="scrollable-content-2 h-m30">
                            <div className="event-box my-8 p-8">
                                <div className="event-comment-title">Anri Iaganashvili</div>
                                <div className="event-comment-date">Assign Task</div>
                            </div>
                            <div className="event-box my-8 p-8">
                                <div className="event-comment-title">Anri Iaganashvili</div>
                                <div className="event-comment-date">Assign Task</div>
                            </div>
                        </Scrollbar>
                        <ColorButton variant="outlined">
                            Dissmiss
                        </ColorButton>
                    </div> 
                    :
                    <div id="filter">
                        <div className="flex flex-space-between font-size-22">
                            <div className="text-white">Filters</div>
                            <div className="cursor-pointer text-white" onClick={this.props.handleCenterClose}>&#10006;</div>
                        </div>
                        <Scrollbar className="scrollable-content-1 h-m45">
                            <div className="filter-section py-24 flex flex-column">
                                <CustomCheck
                                    control={
                                        <Checkbox className="command-check" value="show_vehicle" onChange={()=>this.handleChange('show_vehicle')} checked={show_vehicle}/>
                                    }
                                    label="Show Vehicles"
                                    labelPlacement="end"
                                    className="py-12"
                                />
                                {show_vehicle ? 
                                <div className="py-12">
                                    <div className="show-part flex py-12 cursor-pointer flex-middle" onClick={()=>this.showScooter('in_use')}>
                                        <div className={in_use ? "show-part-active" : "show-part-inactive"}></div>
                                        <div className="scooter-circle in-use flex flex-middle flex-center mx-20"><img src="/assets/images/command_center/scooter.svg" alt=""/></div>
                                        <div>In Use</div>
                                    </div>
                                    <div className="show-part flex py-12 cursor-pointer flex-middle" onClick={()=>this.showScooter('available')}>
                                        <div className={available ? "show-part-active" : "show-part-inactive"}></div>
                                        <div className="scooter-circle available flex flex-middle flex-center mx-20"><img src="/assets/images/command_center/scooter.svg" alt=""/></div>
                                        <div>Available</div>
                                    </div>
                                    <div className="show-part flex py-12 cursor-pointer flex-middle" onClick={()=>this.showScooter('broken')}>
                                        <div className={broken ? "show-part-active" : "show-part-inactive"}></div>
                                        <div className="scooter-circle broken flex flex-middle flex-center mx-20"><img src="/assets/images/command_center/scooter.svg" alt=""/></div>
                                        <div>Broken</div>
                                    </div>
                                </div> : null}
                                <CustomCheck
                                    control={
                                        <Checkbox className="command-check" value="show_opearting" onChange={()=>this.handleChange('show_opearting')} checked={show_opearting}/>
                                    }
                                    label="Operating Zones"
                                    labelPlacement="end"
                                    className="py-12"
                                />
                                <CustomCheck
                                    control={
                                        <Checkbox className="command-check" value="show_parking" onChange={()=>this.handleChange('show_parking')} checked={show_parking}/>
                                    }
                                    label="Parking Zones"
                                    labelPlacement="end"
                                    className="py-12"
                                />
                                <CustomCheck
                                    control={
                                        <Checkbox className="command-check" value="show_heat" onChange={()=>this.handleChange('show_heat')} checked={show_heat}/>
                                    }
                                    label="Heat Map"
                                    labelPlacement="end"
                                    className="py-12"
                                />
                                {show_heat ? 
                                <div className="py-12 pl-20">
                                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                        <CustomKeyboardDatePicker
                                            disableToolbar
                                            variant="inline"
                                            format="MM/dd/yyyy"
                                            inputVariant="outlined"
                                            id="date-picker-outline"
                                            label="Select Period"
                                            value={selectedDate}
                                            onChange={this.handleDateChange}
                                            KeyboardButtonProps={{
                                                'aria-label': 'change date',
                                            }}
                                        />
                                    </MuiPickersUtilsProvider>
                                    <RadioGroup defaultValue="start_ride" name="customized-radios" className="py-20 ride-group">
                                        <FormControlLabel value="start_ride" control={<StyledRadio />} label="Start Ride" className="text-ride"/>
                                        <FormControlLabel value="end_ride" control={<StyledRadio />} label="End Ride" className="text-ride"/>
                                    </RadioGroup>
                                    <MuiThemeProvider theme={leftSidebar}>
                                        <div className="text-white font-weight-500 text-underline cursor-pointer" onClick={this.handleShowPeak}><u>Show Peak Hours</u></div>
                                        <Drawer
                                            variant="temporary"
                                            anchor={"bottom"}
                                            open={this.state.showPeak}
                                            onClose={this.handleShowPeak}
                                            ModalProps={{
                                                keepMounted: true
                                            }}
                                        >
                                            <div className="peak-hour-content p-36">
                                                <div className="cursor-pointer flex flex-end font-size-30" onClick={this.handleShowPeak}>&#10006;</div>
                                                <PeakHoursChart chartData={data}/>
                                            </div>
                                        </Drawer>
                                    </MuiThemeProvider>
                                </div> : null}
                                <CustomCheck
                                    control={
                                        <Checkbox className="command-check" value="show_traffic" onChange={()=>this.handleChange('show_traffic')} checked={show_traffic}/>
                                    }
                                    label="Traffic Flow"
                                    labelPlacement="end"
                                    className="py-12"
                                />
                            </div>
                        </Scrollbar>
                        <div className="dash-line-1"></div>
                        <div className="flex flex-space-between font-size-22 py-24">
                            <div className="text-white">Events</div>
                            <div className="cursor-pointer text-white">&#43;</div>
                        </div>
                        <Select
                            styles={selectStyles}
                            placeholder="All Type"
                            options={types}
                            value={this.state.type}
                            onChange={this.handleChangeType}
                        />
                        <Scrollbar className="scrollable-content-2 h-m30">
                            <div className="event-box my-8 flex flex-middle p-8">
                                <div className="check-icon flex flex-center flex-middle">&#10003;</div>
                                <div className="event-comment-box px-8">
                                    <div className="event-comment-title">Successful ride</div>
                                    <div className="event-comment-date">12 Dec, 2019</div>
                                </div>
                            </div>
                            <div className="event-box my-8 flex flex-middle p-8">
                                <div className="cancel-icon flex flex-center flex-middle">&#10005;</div>
                                <div className="event-comment-box px-8">
                                    <div className="event-comment-title">Successful offline</div>
                                    <div className="event-comment-date">12 Dec, 2019</div>
                                </div>
                            </div>
                        </Scrollbar>
                        <ColorButton variant="outlined" onClick={this.handleShowCreateDialog}>
                            <Icon className="mr-12">add</Icon>
                            Create Task
                        </ColorButton>
                        <Dialog
                            open={this.state.createTaskDialog}
                            onClose={this.handleShowCreateDialog}
                            aria-labelledby="responsive-dialog-title"
                        >
                            <DialogTitle id="responsive-dialog-title">
                                <div className="flex flex-space-between flex-middle">
                                    <div>Create Task</div>
                                    <div className="cursor-pointer" onClick={this.handleShowCreateDialog}>&#10006;</div>
                                </div>
                            </DialogTitle>
                            <DialogContent>
                                <Grid container>
                                    <Grid item lg={6} md={6} sm={12} xs={12}>
                                        <CustomTextField id="vehicle-id" label="Vehile ID" variant="outlined" />
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={12} xs={12} className="pr-20">
                                        <Select
                                            styles={selectMemberStyles}
                                            placeholder="Choose team member"
                                            options={members}
                                            value={member}
                                            onChange={this.handleChangeMember}
                                        />
                                    </Grid>
                                </Grid>
                                <Grid container>
                                    <Grid item lg={12} md={12} sm={12} xs={12}>
                                        <CustomTextField id="description-id" label="Description (optional)" variant="outlined" multiline rows="4"/>
                                    </Grid>
                                </Grid>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={this.handleShowCreateDialog} color="primary" autoFocus variant="contained" className="border-radius-12">
                                    Create
                                </Button>
                            </DialogActions>
                        </Dialog>
                    </div>
                }
                </div>
        </div>
        )
    }
}

export default CommandCenter;
