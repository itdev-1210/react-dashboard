import React from "react";
import {
  Icon
} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import { connect } from "react-redux";

function Rating(props) {

  return (
    <div className="rating-container">
      <div className="name">Jonathan</div>
      <div className="flex flex-middle">
        <Icon className="star">star</Icon>
        <span className="value">4.5</span>
      </div>
    </div>
  );
}

Rating.propTypes = {
  
};

const mapStateToProps = state => ({
  
});

export default withStyles({}, { withTheme: true })(
  connect(
    mapStateToProps,
    {  }
  )(Rating)
);
