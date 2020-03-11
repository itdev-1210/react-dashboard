import React, { Component } from 'react';
import { connect } from "react-redux";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import MaintenanceTable from './MaintenanceTable';

const headCells = [
  { id: 'id', disablePadding: true, label: 'ID' },
  { id: 'type', disablePadding: false, label: 'Type' },
  { id: 'quentity', disablePadding: false, label: 'Quentity' },
];

const all_maintenances = [
  { id: 'A0001', type: 'Frame', quentity: 3 },
  { id: 'A0002', type: 'Handle Bar', quentity: 8 }
];

class MaintenanceContainer extends Component {
  state = {
  };

  componentDidMount() {
  }

  render() {
    return (
      <div className="px-26 py-33 bg-white maintenance">
        <div className="flex description">
          With your current fleet we believe you will need to purchase the<br />
          following spare parts.
        </div>
        <MaintenanceTable 
          rows={all_maintenances}
          headCells={headCells}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
});

export default connect(
  mapStateToProps,
  {  }
)(MaintenanceContainer);
