import React, { Component } from "react";
import {
  Button
} from "@material-ui/core";

class NotificationContent extends Component {
  state = {
  };

  render() {
    
    return (
      <div className="content">
        <div className="notification-item">
          <div className="flex flex-middle">
            <img src="/assets/images/face-7.jpg" alt="" className="avatar" />
            <div className="flex flex-column ml-20">
              <div className="mb-8">
                <span className="description">Anri achieved first</span>
                <span className="memo"> 50 RIDES</span>
              </div>
              <div className="date">Date</div>
              <div className="date-format">2019 Jan 21, 18:20:11</div>
            </div>
          </div>
          <Button className="action-btn award mb-20">
            <img src="/assets/images/notification/award.svg" alt="" />
          </Button>
        </div>
        <div className="notification-item">
          <div className="flex flex-middle">
            <img src="/assets/images/face-7.jpg" alt="" className="avatar" />
            <div className="flex flex-column ml-20">
              <div className="mb-8">
                <span className="description">Broken Vehicle ID:</span>
                <span className="memo"> A00021</span>
              </div>
              <div className="date">Date</div>
              <div className="date-format">2019 Jan 21, 18:20:11</div>
            </div>
          </div>
          <Button className="action-btn exit mb-20">
            <img src="/assets/images/notification/exit.svg" alt="" />
          </Button>
        </div>
      </div>      
    );
  }
}

export default NotificationContent;