import React, { Component } from 'react';
import { connect } from "react-redux";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import {
  Checkbox,
} from '@material-ui/core';
import PropTypes from "prop-types";
import { getInventoryData } from "app/redux/actions/InventoryActions";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { ExportButton, FilterButton } from "egret";
import InventoryTable from './InventoryTable';
import RightPanel from './RightPanel';

const CustomCheck = withStyles(theme => ({
  root: {
      fontSize: "14px",
      color: "#3f3356",
      height: "36px"
  },
}))(FormControlLabel);

const headCells = [
  { id: 'id', disablePadding: true, label: 'ID/IMEI' },
  { id: 'battery', disablePadding: false, label: 'Battery' },
  { id: 'transmition', disablePadding: false, label: 'Last Transmition' },
  { id: 'state', disablePadding: false, label: 'State/Status' },
  { id: 'signal', disablePadding: false, label: 'Signal' },
  { id: 'action', disablePadding: false, label: 'Actions' },
];

class InventoryContainer extends Component {
  state = {
  };

  componentDidMount() {
    this.props.getInventoryData();
  }

  render() {
    const { inventory } = this.props;
    return (
      <div className="px-26 py-33 bg-white inventory">
        <div className="py-3 flex">
          <CustomCheck
            value="end"
            control={<Checkbox color="default" />}
            label="Select All"
            labelPlacement="end"
          />
          <ExportButton />
        </div>
        <div className="filter-container">
          <FilterButton rightPanel={<RightPanel/>}/>
        </div>
        <InventoryTable 
          rows={inventory.all_inventories}
          headCells={headCells}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  inventory: state.inventory,
  getInventoryData: PropTypes.func.isRequired
});

export default connect(
  mapStateToProps,
  { getInventoryData }
)(InventoryContainer);
