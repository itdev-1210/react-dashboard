import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { 
  Button, 
  Icon, 
  MuiThemeProvider,
  Drawer
} from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MarkerMap from './MarkerMap';
import CommandCenter from './CommandCenter';

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

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
}));


export default function MapTab() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const [panelOpen, setPanel] = React.useState(false);

  const handleCenterClose = () => {
    setPanel(!panelOpen);
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  let leftSidebar = {
    show: true,
    mode: 'full', // full, close, compact, mobile,
  }

  return (
    <div className={`${classes.root} map-container`}>
      <div className="btn-container">
        <Button variant="outlined" style={{ width: '200px' }}>
          <span className="pl-8 capitalize">New Operating Zone</span>
          <Icon>chevron_right</Icon>
        </Button>
      </div>
      <AppBar position="static" color="default" style={{ width: '400px' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Operating Zones" {...a11yProps(0)} style={{ backgroundColor: '#ffffff' }} />
          <Tab label="Heat Map" {...a11yProps(1)} style={{ backgroundColor: '#ffffff' }}/>
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} dir={theme.direction}>
        <MuiThemeProvider theme={leftSidebar}>
          <MarkerMap handleCenterClose={handleCenterClose} />
          <Drawer
            width={"100px"}
            variant="temporary"
            anchor={"right"}
            open={panelOpen}
            onClose={handleCenterClose}
            ModalProps={{
                keepMounted: true
            }}
          >
            <CommandCenter handleCenterClose={handleCenterClose}/>
          </Drawer>
        </MuiThemeProvider>
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        Item Two
      </TabPanel>
    </div>
  );
}
