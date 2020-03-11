import React from "react";
import { 
  Icon,
  withStyles
} from "@material-ui/core";

function Feedback(props) {
  return (
    <div className="feedback">
      <div className="flex item-container">
        <div>
          <img src="/assets/images/fleet/feedback1.jpg" alt=""/>
        </div>
        <div className="content-container ml-20">
          <div className="flex info-container pb-20">
            <div>
              <div className="text-tile">Rating</div>
              <div className="flex flex-middle">
                <Icon className="star">star_border</Icon>
                <span className="count">4</span>
              </div>
            </div>
            <div>
              <div className="text-tile">Payment</div>
              <div className="text-content payed">Payed</div>
            </div>
            <div>
              <div className="text-tile">Coupon</div>
              <div className="text-content">219GA1</div>
            </div>
          </div>
          <div className="py-20 border-container">
            <div className="flex info-container">
              <div>
                <div className="text-tile">Start Location</div>
                <div className="text-content">Vaja-Pshavela st. 45</div>
              </div>
              <div>
                <div className="text-tile">Payment</div>
                <div className="text-content">Varketili st. 21</div>
              </div>
            </div>
            <div className="info-content">
              Lorem Ipsum is simpley dummy text of the printing and typeseting industry.<br />
              Lorem Ipsum has been the industry's standard summy
            </div>
          </div>
          <div className="flex info-container py-20">
            <div>
              <div className="text-tile">Report issues</div>
              <div className="text-content">Ride did not happen, Another problem here</div>
            </div>
          </div>
          <div className="flex go-ride">
            Go to Ride
          </div>
        </div>
      </div>

      <div className="flex flex-middle item-container no-content">
        <div className="flex">
          <img src="/assets/images/fleet/feedback2.jpg" alt=""/>
        </div>
        <div className="content-container ml-20">
          <div className="flex info-container">
            <div>
              <div className="text-tile">Rating</div>
              <div className="flex flex-middle">
                <Icon className="star">star_border</Icon>
                <span className="count">4</span>
              </div>
            </div>
            <div>
              <div className="text-tile">Payment</div>
              <div className="text-content payed">Payed</div>
            </div>
            <div>
              <div className="text-tile">Coupon</div>
              <div className="text-content">219GA1</div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-middle item-container no-content">
        <div className="flex">
          <img src="/assets/images/fleet/feedback3.jpg" alt=""/>
        </div>
        <div className="content-container ml-20">
          <div className="flex info-container">
            <div>
              <div className="text-tile">Rating</div>
              <div className="flex flex-middle">
                <Icon className="star">star_border</Icon>
                <span className="count">4</span>
              </div>
            </div>
            <div>
              <div className="text-tile">Payment</div>
              <div className="text-content pending">Pending</div>
            </div>
            <div>
              <div className="text-tile">Coupon</div>
              <div className="text-content">219GA1</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withStyles({}, { withTheme: true })(Feedback);