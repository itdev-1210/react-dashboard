import React from "react";
import { 
  Grid,
  withStyles
} from "@material-ui/core";

function SimCard(props) {
  return (
    <div className="simcard py-20">
        <Grid container className="py-10">
            <Grid item lg={4} md={4} sm={4} xs={4}>
                <div className="font-size-16 font-weight-500">Transmission</div>
            </Grid>
            <Grid item lg={4} md={4} sm={4} xs={4}>
                <div className="font-size-16 font-weight-500 font-gray">Lorem impsum</div>
            </Grid>
        </Grid>
        <Grid container className="py-10">
            <Grid item lg={4} md={4} sm={4} xs={4}>
                <div className="font-size-16 font-weight-500">State / Status</div>
            </Grid>
            <Grid item lg={4} md={4} sm={4} xs={4}>
                <div className="font-size-16 font-weight-500 font-gray">Status name</div>
            </Grid>
        </Grid>
        <Grid container className="py-10">
            <Grid item lg={4} md={4} sm={4} xs={4}>
                <div className="font-size-16 font-weight-500">IMEI of IoT</div>
            </Grid>
            <Grid item lg={4} md={4} sm={4} xs={4}>
                <div className="font-size-16 font-weight-500 font-gray">9182ASB1711A</div>
            </Grid>
        </Grid>
        <Grid container className="py-10">
            <Grid item lg={4} md={4} sm={4} xs={4}>
                <div className="font-size-16 font-weight-500">SIM number</div>
            </Grid>
            <Grid item lg={4} md={4} sm={4} xs={4}>
                <div className="font-size-16 font-weight-500 font-gray">597015307</div>
            </Grid>
        </Grid>
        <Grid container className="py-10">
            <Grid item lg={4} md={4} sm={4} xs={4}>
                <div className="font-size-16 font-weight-500">Current Network</div>
            </Grid>
            <Grid item lg={4} md={4} sm={4} xs={4}>
                <div className="font-size-16 font-weight-500 font-gray">Magticom</div>
            </Grid>
        </Grid>
        <Grid container className="py-10">
            <Grid item lg={4} md={4} sm={4} xs={4}>
                <div className="font-size-16 font-weight-500">Signal level</div>
            </Grid>
            <Grid item lg={4} md={4} sm={4} xs={4}>
                <div className="font-size-16 font-weight-500 font-gray">4</div>
            </Grid>
        </Grid>
        <Grid container className="py-10">
            <Grid item lg={4} md={4} sm={4} xs={4}>
                <div className="font-size-16 font-weight-500">SIM data usage</div>
            </Grid>
            <Grid item lg={4} md={4} sm={4} xs={4}>
                <div className="font-size-16 font-weight-500 font-gray">50%</div>
            </Grid>
        </Grid>
    </div>
  );
}

export default withStyles({}, { withTheme: true })(SimCard);