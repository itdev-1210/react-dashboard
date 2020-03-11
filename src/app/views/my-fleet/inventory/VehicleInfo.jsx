import React from "react";
import Select from "react-select";
import PropTypes from 'prop-types';
import { useTheme } from '@material-ui/core/styles';
import { 
  Icon,
  AppBar,
  Tabs,
  Tab,
  Typography,
  Box,
  withStyles
} from "@material-ui/core";
import MakerMap from './MarkerMap';

const uses = [
  { label: "In Use" },
  { label: "Not In Use" },
].map(suggestion => ({
  value: suggestion.label,
  label: suggestion.label
}));

const selectStyles = {
  menu: (provided, state) => ({
    ...provided,
    width: 150,
    color: state.selectProps.menuColor,
    padding: 5
  }),
  container: () => ({
    width: 150,
  }),
  control: (provided, state) => ({
    ...provided,
    width: 150,
    height: '50px',
    borderRadius: '12px'
  }),
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

function VehicleInfo(props) {
  const theme = useTheme();
  const [qrTabValue, setQrTabValue] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setQrTabValue(newValue);
  };

  return (
    <div className="vehicle-info">
      <div className="flex flex-space-between">
        <div>
          <div className="flex flex-middle mt-10">
            <div className="name-container">
              <div className="name">Vehicle Name</div>
              <div className="flex flex-middle">
                <span className="id">ID: 92716</span>
                <Icon className="star">star_border</Icon>
                <span className="count">4</span>
              </div>
            </div>
            <div className="follow">
              <span className="content">FOLLOW</span>
            </div>
          </div>
          <div className="flex flex-middle mt-12">
            <span className="firmware-des">Firmware: v1.0293.3</span>
            <div className="firmware">
              <img src="/assets/images/fleet/bolt.svg" alt="" />
              <span style={{ marginLeft: '5px' }}>95%</span>
            </div>
          </div>
          <div className="use-state my-20">
            <img src="/assets/images/fleet/mark_scooter_inuse.svg" alt="" />
            <div className="select-box">
              <Select
                styles={selectStyles}
                // placeholder="Select Region"
                options={uses}
                // value={single}
                // onChange={handleChangeSingle}
              />
            </div>
          </div>
        </div>
        <div className="flex mt-10">
          <div className="flex flex-middle flex-column">
            <div className="flex flex-center round-sign">
              <img src="/assets/images/fleet/locked_white.svg" alt="" />
            </div>
            <span className="round-name">Lock</span>
          </div>
          <div className="flex flex-middle flex-column">
            <div className="flex flex-center round-sign">
              <img src="/assets/images/fleet/light_on_white.svg" alt="" />
            </div>
            <span className="round-name">Lights</span>
          </div>
          <div className="flex flex-middle flex-column">
            <div className="flex flex-center round-sign">
              <img src="/assets/images/fleet/clock.svg" alt="" />
            </div>
            <span className="round-name">Alarm</span>
          </div>
        </div>
      </div>

      <div className="data-container">
        <div className="item-container">
          <div className="content">Total Earnings</div>
          <span className="value">15310</span>
          <span className="memo"> USD</span>
        </div>
        <div className="item-container">
          <div className="content">Average rides</div>
          <span className="value">21</span>
          <span className="memo"> per day</span>
        </div>
        <div className="item-container">
          <div className="content">Average Value</div>
          <span className="value">21</span>
          <span className="memo"> per day</span>
        </div>
        <div className="item-container">
          <div className="content">Total live days</div>
          <span className="value">612</span>
        </div>
      </div>
      <div className="history">History</div>
      <div className="data-container" style={{ marginTop: '20px' }}>
        <div className="item-container">
          <div className="content">SIM number</div>
          <span className="value">299811</span>
        </div>
        <div className="item-container">
          <div className="content">Network</div>
          <span className="value">Magti</span>
        </div>
      </div>

      <AppBar position="static" color="default" style={{ width: '320px', marginTop: '30px' }}>
        <Tabs
          value={qrTabValue}
          onChange={handleTabChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Vehicle QR" {...a11yProps(0)} style={{ backgroundColor: '#ffffff' }} />
          <Tab label="Battery QR" {...a11yProps(1)} style={{ backgroundColor: '#ffffff' }}/>
        </Tabs>
      </AppBar>
      <TabPanel value={qrTabValue} index={0} dir={theme.direction}>
        <div className="flex flex-middle">
          <img src="/assets/images/fleet/qrcode_big.svg" alt="" />
          <div className="flex flex-column ml-30">
            <div className="flex flex-middle mb-10">
              <div className="follow">
                <span className="content">HIDE URL</span>
              </div>
              <div className="follow flex flex-middle">
                <img src="/assets/images/fleet/printer.svg" alt="" />
                <span className="content" style={{ marginLeft: '10px' }}>PRINT CODE</span>
              </div>
            </div>
            <div style={{ color: '#000000' }}>https://docs.google.com/document/d/12mn3DVylxhfZ</div>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={qrTabValue} index={1} dir={theme.direction}>
        Item Two
      </TabPanel>

      <div className="card-container">
        <div className="title">Current location</div>
        <div className="flex flex-middle flex-space-between mb-10">
          <span className="region">Georgia, Tbilisi, Sandro Euli st.21</span>
          <div className="flex flex-middle">
            <div className="follow mr-20">
              <span className="content">SEND</span>
            </div>
            <span>task to Logistics Team</span>
          </div>
        </div>
        <MakerMap />
      </div>

      <div className="card-container">
        <div className="title mt-20 mb-4">Last Battery Change</div>
        <div className="flex flex-space-between pb-20 battery">
          <div className="flex flex-middle">
            <div>
              <div className="name">Date</div>
              <div className="content">12 Jul 2019</div>
            </div>
            <div className="ml-40">
              <div className="name">Person</div>
              <div className="content">Tariel Beqtashashvili</div>
            </div>
          </div>
          <div className="profile">View Profile</div>
        </div>
        <div className="my-20">
          <div className="flex flex-middle battery battery-info">
            <div>
              <div className="name">Operator name</div>
              <div className="content">Glovo</div>
            </div>
            <div className="ml-40">
              <div className="name">Owner name</div>
              <div className="content">Tato Beqtashashvili</div>
            </div>
          </div>
        </div>
      </div>

      <div className="card-container">
        <div className="title mt-30">Associated tasks</div>
        <div className="flex flex-middle py-20 battery">
          <div style={{ flex: 1 }}>
            <div className="name">Tasks</div>
            <div className="content">Here goes task name</div>
          </div>
          <div style={{ flex: 1 }}>
            <div className="name">Task Owner</div>
            <div className="content">Anri laganashvili</div>
          </div>
        </div>
        <div className="flex flex-middle py-20 battery">
          <div style={{ flex: 1 }}>
            <div className="name">Tasks</div>
            <div className="content">Here goes task name 2</div>
          </div>
          <div style={{ flex: 1 }}>
            <div className="name">Task Owner</div>
            <div className="content">Anri laganashvili</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withStyles({}, { withTheme: true })(VehicleInfo);
