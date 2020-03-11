import React, { Component } from "react";
import { useState, useEffect } from "react";
import { withStyles } from "@material-ui/core";
import { 
  MuiThemeProvider,
  Drawer,
  Button
} from "@material-ui/core";
import VehicleInfo from "./VehicleInfo";
import Feedback from "./Feedback";
import SimCard from "./SimCard";
import LogPanel from "./LogPanel";

function Settings(props) {
  const { panelState, setPanelState } = props;
  const [panelOpen, setPanelOpen] = useState(panelState);
  const [tabIndex, setTabIndex] = useState(0);

  useEffect(() => {
    setPanelOpen(panelState);
  }, [panelState])

  function handleDrawerToggle() {
    if (!panelOpen) {
    }
    setPanelOpen(!panelOpen);
    setPanelState(!panelOpen);
  }

  const handleTabIndex = index => () => {
    if (index !== tabIndex)
      setTabIndex(index);
  };

  let leftSidebar = {
    show: true,
    mode: 'full', // full, close, compact, mobile,
  }

  return (
    <MuiThemeProvider theme={leftSidebar}>
      <Drawer
        width={"100px"}
        // container={container}
        variant="temporary"
        anchor={"right"}
        open={panelOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
            keepMounted: true
        }}
      >
        <div className="detail-container">
          <div className="title">Detail Information</div>
          <div className="flex flex-middle my-20">
            <Button
              onClick={handleTabIndex(0)}
              className={`tab-btn ${tabIndex === 0 ? `active`: ``}`}
              style={{ width: '125px' }}
            >
              Vehicle Info
            </Button>
            <Button 
              onClick={handleTabIndex(1)}
              className={`tab-btn ml-16 ${tabIndex === 1 ? `active`: ``}`}
              style={{ width: '115px' }}
            >
              Feedback
            </Button>
            <Button 
              onClick={handleTabIndex(2)}
              className={`tab-btn ml-16 ${tabIndex === 2 ? `active`: ``}`}
              style={{ width: '176px' }}
            >
              Sim Card + IoT Data
            </Button>
            <Button 
              onClick={handleTabIndex(3)}
              className={`tab-btn ml-16 ${tabIndex === 3 ? `active`: ``}`}
              style={{ width: '102px', marginRight: '40px' }}
            >
              Log
            </Button>
          </div>
          {tabIndex === 0 && <VehicleInfo />}
          {tabIndex === 1 && <Feedback />}
          {tabIndex === 2 && <SimCard />}
          {tabIndex === 3 && <LogPanel />}
        </div>
      </Drawer>
    </MuiThemeProvider>
  );
}

export default withStyles({}, { withTheme: true })(Settings);
