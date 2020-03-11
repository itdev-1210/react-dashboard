import React, { Component } from "react";
import {
  Button,
  Checkbox,
  FormControlLabel
} from "@material-ui/core";

class TaskContent extends Component {
  state = {
  };

  render() {
    
    return (
      <div className="content">
        <div className="flex flex-space-between task-header">
          <span className="header-title">Received Tasks</span>
          <span className="header-archive">Archive</span>
        </div>
        <div className="flex flex-column task-item">
          <div className="flex">
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label="Here goes task name"
            />
          </div>
          <div className="flex flex-space-between">
            <div className="flex flex-middle ml-30">
              <img src="/assets/images/notification/comment.svg" alt="" />
              <span className="user-name">Anri Iaganashvili</span>
            </div>
            <span className="hour">2 hours ago</span>
          </div>
        </div>
        <div className="flex flex-column task-item">
          <div className="flex">
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label="Here goes task name"
            />
          </div>
          <div className="flex flex-space-between">
          <div className="flex flex-middle ml-30">
              <img src="/assets/images/notification/comment.svg" alt="" />
              <span className="user-name">Tota Beqtashashivli</span>
            </div>
            <span className="hour">2 hours ago</span>
          </div>
        </div>
      </div>      
    );
  }
}

export default TaskContent;