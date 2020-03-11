import React from 'react';
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { 
    Button,
    Grid,
    TextField,
} from "@material-ui/core";
import Select from 'react-select';
import Scrollbar from "react-perfect-scrollbar";

import MarkerMap from './MarkerMap';

const selectStyles = {
    menu: (provided, state) => ({
      ...provided,
      width: "144px",
      color: state.selectProps.menuColor,
      padding: 5,
      top: "inherit",
      zIndex: "100"
    }),
    container: () => ({
      width: "144px",
      margin: 10,
      position: "relative",
    }),
    control: (provided, state) => ({
      ...provided,
      width: "144px",
      height: '41px',
      borderRadius: '5px',
    }),
};

const CustomTextField = withStyles({
    root: {
        padding: "10px",
        width: "100%",
        '& label': {
            top: "inherit",
            left: "inherit",
            color: "#a6a6a6",
            fontSize: "12px",
        },
        '& fieldset': {
            borderRadius: "5px",
            border: "solid 1px #e9e9e9",
        },
    },
})(TextField);
const activities = [
    { label: "" },
    { label: "Took Ride" },
    { label: "On Ride" },
    { label: "End Ride" },
].map(suggestion => ({
    value: suggestion.label,
    label: suggestion.label
}));
const useStyles = makeStyles(theme => ({
    blueBold: {
        fontSize: "17px",
        lineHeight: "1.53",
        letterSpacing: "0.28px",
        color: "#006ce6",
        opacity: "0.71",
    },
    addBtn: {
        width: "148px",
        height: "50px",
        borderRadius: "12px",
        lineHeight: "1.5",
        letterSpacing: "0.32px",
        fontWeight: "500"
    },
    boxCont: {
        borderRadius: "4px",
        border: "solid 1px #e1e8ee",
    },
    boxContRed: {
        borderRadius: "4px",
        border: "solid 1px #ff6869",
    },
    ft16Black: {
        fontSize: "16px",
        lineHeight: "1.38",
        color: "#000000",
    },
    ft16Blue: {
        fontSize: "16px",
        lineHeight: "1.38",
        color: "#006ce6",
    },
    refundBtn: {
        width: "82px",
        height: "30px",
        borderRadius: "4px",
        backgroundColor: "#e5f0fc",
        fontSize: "12px",
        lineHeight: "1.5",
        color: "#006ce6",
    },
    resendBtn: {
        width: "115px",
        borderRadius: "4px",
        backgroundColor: "#ffffff",
        height: "30px",
        border: "solid 1px #efefef",
        fontSize: "12px",
        color: "#006ce6",
        marginRight: "10px",
        lineHeight: "1.25",
        fontWeight: "500"
    },
    boldFont: {
        fontSize: "16px",
        fontWeight: "600",
        color: "#000000",
        letterSpacing: "0.34px",
        lineHeight: "1.19"
    },
    grayFont: {
        fontSize: "13px",
        fontWeight: "500",
        letterSpacing: "0.28px",
        color: "#a6a6a6",
    },
    greenFont: {
        color: "#3ac068",
    },
    lightRed: {
        color: "#ff6869",
    },
    commentTitle: {
        fontSize: "14px",
        fontWeight: "600",
        lineHeight: "1.29",
        letterSpacing: "0.7px",
        color: "#006ce6",
    },
    commentContent: {
        fontSize: "14px",
        fontWeight: "500",
        lineHeight: "1.29",
        color: "#7d7d7d",
    },
    commentBox: {
        borderTop: "solid 1px #e1e8ee",
    },
    commentContentBold: {
        fontSize: "16px",
        fontWeight: "600",
        lineHeight: "1.19",
        color: "#000000",
    },
    dot: {
        marginRight: "6px",
        color: "#006ce6",
    },
    avatar: {
        borderRadius: "50%",
        width: "45px",
        height: "45px",
    },
    avatar38: {
        borderRadius: "50%",
        width: "38px",
        height: "38px",
    },
    fontRed: {
        fontSize: "16px",
        color: "#ff6869",
        lineHeight: "1.38",
    },
    yellowFont: {
        color: "#ffbf02"
    }
}));

function ProfileContainer (props) {
    const classes = useStyles();
    const [activity, setActivity] = React.useState(null);
    const handleChangeActivity = event => {
        setActivity(event);
    };
    return (
        <div className="p-24 bg-white">
            <div className="flex flex-space-between">
                <div className="flex flex-middle">
                    <div className={classes.blueBold}>Rider Timeline</div>
                    <Select
                        styles={selectStyles}
                        placeholder="Activity Type"
                        options={activities}
                        value={activity}
                        onChange={handleChangeActivity}
                        // menuIsOpen={true}
                    />
                </div>
                <Button variant="contained" color="primary" className={classes.addBtn}>
                    + Add Event
                </Button>
            </div>
            <Scrollbar className="scrollable-content h-800">
                <div className={classes.boxCont}>
                    <div className="p-20">
                        <div className="flex flex-space-between flex-middle pb-24">
                            <div>
                                <div><span className={classes.ft16Black}>Anri took a </span><span className={classes.ft16Blue}>RIDE</span></div>
                                <div>This is ride #1</div>
                            </div>
                            <div>
                                <Button className={classes.resendBtn}>
                                    Resend Receipt
                                </Button>
                                <Button className={classes.refundBtn}>
                                    REFUND
                                </Button>
                            </div>
                        </div>
                        <Grid container>
                            <Grid item lg={4} md={4} sm={4} xs={4}>
                                <div className={classes.grayFont}>Scooter ID</div>
                                <div className={classes.boldFont}><u>A001</u></div>
                            </Grid>
                            <Grid item lg={4} md={4} sm={4} xs={4}>
                                <div className={classes.grayFont}>Value</div>
                                <div className={classes.boldFont}><u>21 USD</u></div>
                            </Grid>
                            <Grid item lg={4} md={4} sm={4} xs={4}>
                                <div className={classes.grayFont}>Date</div>
                                <div className={classes.boldFont}>2019 Jan 22, 18:20:11</div>
                            </Grid>
                        </Grid>
                        <Grid container className="py-20">
                            <Grid item lg={4} md={4} sm={4} xs={4}>
                                <div className={classes.grayFont}>Rating</div>
                                <div className={classes.boldFont+' '+classes.lightRed}>
                                    <img src="/assets/images/profile/star.svg" alt="" className="mr-4"/>4
                                </div>
                            </Grid>
                            <Grid item lg={4} md={4} sm={4} xs={4}>
                                <div className={classes.grayFont}>Payment</div>
                                <div className={classes.boldFont+' '+classes.greenFont}>Payed</div>
                            </Grid>
                            <Grid item lg={4} md={4} sm={4} xs={4}>
                                <div className={classes.grayFont}>Coupon</div>
                                <div className={classes.boldFont}>219GA1</div>
                            </Grid>
                        </Grid>
                        <div className="py-2">
                            <MarkerMap />
                        </div>
                        <Grid container className="py-20">
                            <Grid item lg={4} md={4} sm={4} xs={4}>
                                <div className={classes.grayFont}>Start address</div>
                                <div className={classes.boldFont}>Decker street n32</div>
                            </Grid>
                            <Grid item lg={4} md={4} sm={4} xs={4}>
                                <div className={classes.grayFont}>End address</div>
                                <div className={classes.boldFont}>Backers street n12</div>
                            </Grid>
                            <Grid item lg={4} md={4} sm={4} xs={4}>
                                <div className={classes.grayFont}>Distance</div>
                                <div className={classes.boldFont}>2.1 KM</div>
                            </Grid>
                        </Grid>
                    </div>
                    <div className={classes.commentBox}>
                        <div className="p-20">
                            <div className={classes.commentTitle}>Rider Comment</div>
                            <div className={classes.commentContent+' py-12'}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                            </div>
                            <div className={classes.commentTitle}>Reported issues</div>
                            <div className={classes.commentContentBold+' py-12'}>
                                <span className={classes.dot}>&#8226;</span>
                                <span className="mr-12">Ride dit not happen</span>
                                <span className={classes.dot}>&#8226;</span>Another problem here
                            </div>
                        </div>
                    </div>
                    <div className={classes.commentBox}>
                        <div className="p-20 flex flex-middle">
                            <img src="/assets/images/face-7.jpg" alt="" className={classes.avatar}/>
                            <CustomTextField id="comment" label="write your comment" variant="outlined" />
                        </div>
                    </div>
                </div>
                <div className={classes.boxCont+' my-10'}>
                    <div className="p-20">
                        <div className="flex flex-space-between flex-middle">
                            <div><span className={classes.ft16Black}>Anri achieved first </span><span className={classes.ft16Blue}>50 RIDES</span></div>
                            <img src="/assets/images/profile/archive.jpg" alt="" className={classes.avatar38}/>
                        </div>
                        <Grid container>
                            <Grid item lg={6} md={6} sm={6} xs={6}>
                                <div className={classes.grayFont}>Date</div>
                                <div className={classes.boldFont}>2019 Jan 21, 18:20:11</div>
                            </Grid>
                        </Grid>
                    </div>
                </div>
                <div className={classes.boxContRed+' my-10'}>
                    <div className="p-20">
                        <div className="flex flex-space-between flex-middle">
                            <div className={classes.fontRed}>Unable RIDE</div>
                            <Button className={classes.refundBtn}>
                                REFUND
                            </Button>
                        </div>
                        <Grid container>
                            <Grid item lg={4} md={4} sm={4} xs={4}>
                                <div className={classes.grayFont}>Vehicle ID</div>
                                <div className={classes.boldFont}><u>A001</u></div>
                            </Grid>
                            <Grid item lg={4} md={4} sm={4} xs={4}>
                                <div className={classes.grayFont}>Value</div>
                                <div className={classes.boldFont}><u>21 USD</u></div>
                            </Grid>
                            <Grid item lg={4} md={4} sm={4} xs={4}>
                                <div className={classes.grayFont}>Date</div>
                                <div className={classes.boldFont}>2019 Jan 22, 18:20:11</div>
                            </Grid>
                        </Grid>
                        <div className="py-2">
                            <MarkerMap />
                        </div>
                        <Grid container className="py-20">
                            <Grid item lg={6} md={6} sm={6} xs={6}>
                                <div className={classes.grayFont}>Start address</div>
                                <div className={classes.boldFont}>Decker street n32</div>
                            </Grid>
                            <Grid item lg={4} md={4} sm={4} xs={4}>
                                <div className={classes.grayFont}>Error code</div>
                                <div className={classes.boldFont}>#21 - Cannot unlock scooter</div>
                            </Grid>
                        </Grid>
                    </div>
                </div>
                <div className={classes.boxCont+' my-10'}>
                    <div className="p-20">
                        <div className="flex flex-space-between flex-middle">
                            <div className="flex flex-middle">
                                <img src="/assets/images/face-7.jpg" alt="" className={classes.avatar}/>
                                <div className="ml-10"><span className={classes.ft16Blue}>Jonathan C.</span><span className={classes.ft16Black}> Manually ended ride</span></div>
                            </div>
                            <Button className={classes.refundBtn}>
                                REFUND
                            </Button>
                        </div>
                        <Grid container className="py-20">
                            <Grid item lg={6} md={6} sm={6} xs={6}>
                                <div className={classes.grayFont}>Date</div>
                                <div className={classes.boldFont}>2019 Jan 21, 18:20:11</div>
                            </Grid>
                        </Grid>
                        <div className="flex flex-middle">
                            <img src="/assets/images/face-7.jpg" alt="" className={classes.avatar}/>
                            <CustomTextField id="comment-end" label="write your comment" variant="outlined" />
                        </div>
                    </div>
                </div>
                <div className={classes.boxCont+' my-10'}>
                    <div className="p-20">
                        <div className="flex flex-space-between flex-middle mb-20">
                            <div className="flex flex-middle">
                                <img src="/assets/images/face-7.jpg" alt="" className={classes.avatar}/>
                                <div className="ml-10">
                                    <div><span className={classes.ft16Blue}>Jonathan C.</span><span className={classes.ft16Black}> Manually ended ride</span></div>
                                    <div className={classes.grayFont}>Marketing Team</div>
                                </div>
                            </div>
                            <Button className={classes.refundBtn}>
                                REFUND
                            </Button>
                        </div>
                        <Grid container>
                            <Grid item lg={4} md={4} sm={4} xs={4}>
                                <div className={classes.grayFont}>Scooter ID</div>
                                <div className={classes.boldFont}><u>A001</u></div>
                            </Grid>
                            <Grid item lg={4} md={4} sm={4} xs={4}>
                                <div className={classes.grayFont}>Value</div>
                                <div className={classes.boldFont}><u>21 USD</u></div>
                            </Grid>
                            <Grid item lg={4} md={4} sm={4} xs={4}>
                                <div className={classes.grayFont}>Date</div>
                                <div className={classes.boldFont}>2019 Jan 22, 18:20:11</div>
                            </Grid>
                        </Grid>
                        <Grid container className="py-20">
                            <Grid item lg={4} md={4} sm={4} xs={4}>
                                <div className={classes.grayFont}>Rating</div>
                                <div className={classes.boldFont+' '+classes.lightRed}>
                                    <img src="/assets/images/profile/star.svg" alt="" className="mr-4"/>4
                                </div>
                            </Grid>
                            <Grid item lg={4} md={4} sm={4} xs={4}>
                                <div className={classes.grayFont}>Payment</div>
                                <div className={classes.boldFont+' '+classes.greenFont}>Payed</div>
                            </Grid>
                            <Grid item lg={4} md={4} sm={4} xs={4}>
                                <div className={classes.grayFont}>Coupon</div>
                                <div className={classes.boldFont}>219GA1</div>
                            </Grid>
                        </Grid>
                        <div className="py-2">
                            <MarkerMap />
                        </div>
                        <Grid container className="py-20">
                            <Grid item lg={4} md={4} sm={4} xs={4}>
                                <div className={classes.grayFont}>Start address</div>
                                <div className={classes.boldFont}>Decker street n32</div>
                            </Grid>
                            <Grid item lg={4} md={4} sm={4} xs={4}>
                                <div className={classes.grayFont}>End address</div>
                                <div className={classes.boldFont}>Backers street n12</div>
                            </Grid>
                            <Grid item lg={4} md={4} sm={4} xs={4}>
                                <div className={classes.grayFont}>Distance</div>
                                <div className={classes.boldFont}>2.1 KM</div>
                            </Grid>
                        </Grid>
                        <div className="flex flex-middle">
                            <img src="/assets/images/face-7.jpg" alt="" className={classes.avatar}/>
                            <CustomTextField id="comment-end-2" label="write your comment" variant="outlined" />
                        </div>
                    </div>
                </div>
                <div className={classes.boxCont}>
                    <div className="p-20">
                        <div className="flex flex-space-between flex-middle pb-24">
                            <div>
                                <div><span className={classes.ft16Black}>Anri took a </span><span className={classes.ft16Blue}>RIDE</span></div>
                                <div>This is ride #2</div>
                            </div>
                            <div>
                                <Button className={classes.refundBtn}>
                                    END RIDE
                                </Button>
                            </div>
                        </div>
                        <Grid container>
                            <Grid item lg={4} md={4} sm={4} xs={4}>
                                <div className={classes.grayFont}>Scooter ID</div>
                                <div className={classes.boldFont}><u>A003</u></div>
                            </Grid>
                            <Grid item lg={4} md={4} sm={4} xs={4}>
                                <div className={classes.grayFont}>Value</div>
                                <div className={classes.boldFont}><u>21 USD</u></div>
                            </Grid>
                            <Grid item lg={4} md={4} sm={4} xs={4}>
                                <div className={classes.grayFont}>Date</div>
                                <div className={classes.boldFont}>2019 Jan 22, 18:20:11</div>
                            </Grid>
                        </Grid>
                        <Grid container className="py-20">
                            <Grid item lg={4} md={4} sm={4} xs={4}>
                                <div className={classes.grayFont}>Rating</div>
                                <div className={classes.boldFont}>&ndash;</div>
                            </Grid>
                            <Grid item lg={4} md={4} sm={4} xs={4}>
                                <div className={classes.grayFont}>Payment</div>
                                <div className={classes.boldFont+' '+classes.yellowFont}>Pending</div>
                            </Grid>
                            <Grid item lg={4} md={4} sm={4} xs={4}>
                                <div className={classes.grayFont}>Coupon</div>
                                <div className={classes.boldFont}>&ndash;</div>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </Scrollbar>
        </div>
    )
}

export default ProfileContainer