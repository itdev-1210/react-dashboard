import React from "react";
import { 
  Grid,
  withStyles
} from "@material-ui/core";

function LogPanel(props) {
  return (
    <div className="logpanel py-20">
        <Grid container className="py-10">
            <Grid item lg={3} md={3} sm={3} xs={3}>
                <div className="font-size-12 font-weight-500">Battery</div>
            </Grid>
            <Grid item lg={3} md={3} sm={3} xs={3}>
                <div className="flex flex-middle">
                    <div className="ok mr-10"></div>
                    <div className="font-size-12 font-weight-600 font-gray">OK</div>
                </div>
            </Grid>
            <Grid item lg={3} md={3} sm={3} xs={3}>
                <div className="font-size-12 font-weight-500">Lights</div>
            </Grid>
            <Grid item lg={3} md={3} sm={3} xs={3}>
                <div className="flex flex-middle">
                    <div className="danger mr-10"></div>
                    <div className="font-size-12 font-weight-600 font-gray">DANGER</div>
                </div>
            </Grid>
        </Grid>
        <Grid container className="py-10">
            <Grid item lg={3} md={3} sm={3} xs={3}>
                <div className="font-size-12 font-weight-500">Motor</div>
            </Grid>
            <Grid item lg={3} md={3} sm={3} xs={3}>
                <div className="flex flex-middle">
                    <div className="warning mr-10"></div>
                    <div className="font-size-12 font-weight-600 font-gray">WARNING</div>
                </div>
            </Grid>
            <Grid item lg={3} md={3} sm={3} xs={3}>
                <div className="font-size-12 font-weight-500">System Control</div>
            </Grid>
            <Grid item lg={3} md={3} sm={3} xs={3}>
                <div className="flex flex-middle">
                    <div className="ok mr-10"></div>
                    <div className="font-size-12 font-weight-600 font-gray">OK</div>
                </div>
            </Grid>
        </Grid>
        <div className="border-line my-40"></div>
        <div className="font-size-18 font-weight-600 mb-24">Maintenance Log</div>
        <Grid container className="py-10">
            <Grid item lg={3} md={3} sm={3} xs={3}>
                <div className="font-size-12 font-weight-500 font-gray">Quantity</div>
            </Grid>
            <Grid item lg={9} md={9} sm={9} xs={9}>
                <div className="font-size-12 font-weight-500 font-gray">Name</div>
            </Grid>
        </Grid>
        <Grid container className="py-10 border-bottom-1">
            <Grid item lg={3} md={3} sm={3} xs={3}>
                <div className="font-size-16 font-weight-600">12</div>
            </Grid>
            <Grid item lg={9} md={9} sm={9} xs={9}>
                <div className="font-size-12 font-weight-500">Front light replacement</div>
            </Grid>
        </Grid>
        <Grid container className="py-10 border-bottom-1">
            <Grid item lg={3} md={3} sm={3} xs={3}>
                <div className="font-size-16 font-weight-600">8</div>
            </Grid>
            <Grid item lg={9} md={9} sm={9} xs={9}>
                <div className="font-size-12 font-weight-500">Motor controller replacement</div>
            </Grid>
        </Grid>
        <Grid container className="py-10 border-bottom-1">
            <Grid item lg={3} md={3} sm={3} xs={3}>
                <div className="font-size-16 font-weight-600">10</div>
            </Grid>
            <Grid item lg={9} md={9} sm={9} xs={9}>
                <div className="font-size-12 font-weight-500">Tensen brake cabels</div>
            </Grid>
        </Grid>
    </div>
  );
}

export default withStyles({}, { withTheme: true })(LogPanel);