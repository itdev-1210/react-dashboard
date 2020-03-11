import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { 
    Button,
    Grid,
    Card,
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    avatar: {
        width: "105px",
        height: "105px",
        borderRadius: "50%"
    },
    name: {
        fontSize: "15px",
        color: "#333333",
        letterSpacing: "0.03px"
    },
    followBtn: {
        width: "82px",
        borderRadius: "4px",
        backgroundColor: "#e5f0fc",
        marginTop: "8px",
        color: "#006ce6",
    },
    addGrayBtn: {
        width: "113px",
        borderRadius: "4px",
        backgroundColor: "#ffffff",
        border: "solid 1px #efefef",
        fontSize: "12px",
        color: "#696969",
    },
    addLightBlueBtn: {
        width: "113px",
        borderRadius: "4px",
        backgroundColor: "#e5f0fc",
        fontSize: "12px",
        color: "#006ce6",
    },
    boldFont: {
        fontSize: "18px",
        fontWeight: "600",
        color: "#000000",
        letterSpacing: "0.43px",
    },
    grayFont: {
        fontSize: "13px",
        fontWeight: "500",
        letterSpacing: "0.28px",
        color: "#a6a6a6",
    },
    f13: {
        fontSize: "13px",
        color: "#333333",
        letterSpacing: "0.02px",
    },
    f13M: {
        fontSize: "13px",
        color: "#333333",
        letterSpacing: "0.02px",
        marginLeft: "14px"
    },
    f14: {
        fontSize: "14px",
        color: "#55585c",
        letterSpacing: "0.02px",
    },
    gray11: {
        fontSize: "11px",
        opacity: "0.48",
        color: "#333333",
        letterSpacing: "0.02px"
    },
    coupons: {
        borderRadius: "12px",
        backgroundColor: "#f6f6f6",
        padding: "14px",
        marginTop: "36px",
        marginBottom: "36px",
    }
}));

const ProfileNav = ({
}) => {
    const classes = useStyles();
    return (
        <div className="p-24 bg-white">
            <div className="flex">
                <img src="/assets/images/face-7.jpg" alt="" className={classes.avatar}/>
                <div className="px-24 py-16">
                    <div className={classes.name}>Anri Iaganashvili</div>
                    <Button className={classes.followBtn}>FOLLOW</Button>
                </div>
            </div>
            <Grid container className="py-26">
                <Grid item lg={4} md={4} sm={4} xs={4}>
                    <div className={classes.boldFont}>20 Dec, 2019</div>
                    <div className={classes.grayFont}>First Ride Date</div>
                </Grid>
                <Grid item lg={4} md={4} sm={4} xs={4}>
                    <div className={classes.boldFont}>12.091 USD</div>
                    <div className={classes.grayFont}>Total Refunds</div>
                </Grid>
                <Grid item lg={4} md={4} sm={4} xs={4}>
                    <div className={classes.boldFont}>612</div>
                    <div className={classes.grayFont}>Total Rides</div>
                </Grid>
            </Grid>
            <Grid container className="pt-18 pb-4">
                <Grid item lg={6} md={6} sm={6} xs={6}>
                    <img src="/assets/images/profile/mail.svg" alt=""/>
                    <span className={classes.f13M}>iaganashvilia@gmail.com</span>
                </Grid>
                <Grid item lg={6} md={6} sm={6} xs={6}>
                    <img src="/assets/images/profile/phone.svg" alt=""/>
                    <span className={classes.f13M}>555 38 68 48</span>
                </Grid>
            </Grid>
            <Grid container className="py-24">
                <Grid item lg={6} md={6} sm={6} xs={6}>
                    <img src="/assets/images/profile/location.svg" alt=""/>
                    <span className={classes.f13M}>Georgia, Tbilisi</span>
                </Grid>
                <Grid item lg={6} md={6} sm={6} xs={6} className="flex">
                    <div className="flex flex-top"><img src="/assets/images/profile/apple.svg" alt="" /></div>
                    <div className="flex flex-column ml-14">
                        <div className="flex flex-column pb-14">
                            <div className={classes.gray11}>Device</div>
                            <div className={classes.f13}>iPhone 8</div>
                        </div>
                        <div className="flex flex-column pb-14">
                            <div className={classes.gray11}>iOS version</div>
                            <div className={classes.f13}>13</div>
                        </div>
                        <div className="flex flex-column pb-14">
                            <div className={classes.gray11}>App version</div>
                            <div className={classes.f13}>3.112</div>
                        </div>
                    </div>
                </Grid>
            </Grid>
            <div className="font-size-18 font-weight-600">Wallet</div>
            <div className="flex flex-space-between py-2">
                <div className={classes.grayFont}>Total Coupos Value: $1.220</div>
                <Button className={classes.addGrayBtn}>ADD COUPON</Button>
            </div>
            <div className="flex flex-space-between py-2">
                <div className={classes.grayFont}>Balance: $1.220</div>
                <Button className={classes.addLightBlueBtn}>ADD BALANCE</Button>
            </div>
            <Card className={classes.coupons}>
                <div className="flex flex-space-between py-2">
                    <div className={classes.f14}>Coupons</div>
                    <div className={classes.f14}>&mdash;</div>
                </div>
                <div className="flex flex-space-between pb-8 pt-26 border-bottom-gray-1">
                    <div className={classes.f14}>It’s Christmas get 50% Off</div>
                    <div className={classes.f14}>$100</div>
                </div>
                <div className="flex flex-space-between py-8 border-bottom-gray-1">
                    <div className={classes.f14}>Free Ride</div>
                    <div className={classes.f14}>$120</div>
                </div>
                <div className="flex flex-space-between py-8">
                    <div className={classes.f14}>10 minute Free Ride</div>
                    <div className={classes.f14}>$120</div>
                </div>
            </Card>
        </div>
    )
}

export default ProfileNav