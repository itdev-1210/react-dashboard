import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  Icon,
} from "@material-ui/core";

const styles = {
 
}

class Notification extends Component {
  state = {
  }

  render() {
    const { classes } = this.props;

    return (
      <div className="notification">
        Notification
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Notification);