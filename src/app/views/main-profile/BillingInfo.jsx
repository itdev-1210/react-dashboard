import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  Icon,
} from "@material-ui/core";

const styles = {
 
}

class BillingInfo extends Component {
  state = {
  }

  render() {
    const { classes } = this.props;

    return (
      <div className="billing-info">
        Billing info
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(BillingInfo);