import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import { ExportButton, FilterButton } from "egret";
import UserTable from './UserTable';
import RightPanel from './RightPanel';

const CustomCheck = withStyles(theme => ({
    root: {
        fontSize: "14px",
        color: "#3f3356",
        height: "36px"
    },
}))(FormControlLabel);

const RevenueContainer = ({
    data,
    isActive
}) => {
    const headCells = isActive === '3' ? 
    [
        { id: 'amount', disablePadding: true, label: 'Amount' },
        { id: 'bank_card', disablePadding: false, label: 'Bank/Card' },
        { id: 'date', disablePadding: false, label: 'Date' },
        { id: 'status', disablePadding: false, label: 'Status' },
    ] :
    [
        { id: 'email', disablePadding: true, label: 'User/ Order ID' },
        { id: 'cost', disablePadding: false, label: 'Cost' },
        { id: 'date', disablePadding: false, label: 'Date' },
        { id: 'status', disablePadding: false, label: 'Status' },
    ];
    return (
        <div className="px-26 py-33 bg-white">
            <div className="py-3 flex">
                <CustomCheck
                    value="end"
                    control={<Checkbox color="default" />}
                    label="Select All"
                    labelPlacement="end"
                />
                <ExportButton />
                <FilterButton rightPanel={<RightPanel/>}/>
            </div>
            <UserTable 
                rows={data}
                headCells={headCells}
                isActive={isActive}
            />
        </div>
    )
}

export default RevenueContainer;