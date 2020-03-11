import React from 'react';
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import { ExportButton, FilterButton, UserTable } from "egret";
import RightPanel from './RightPanel';

const CustomCheck = withStyles(theme => ({
    root: {
        fontSize: "14px",
        color: "#3f3356",
        height: "36px"
    },
}))(FormControlLabel);

const PeopleContainer = ({
    data
}) => {
    const headCells = [
        { id: 'name', disablePadding: true, label: 'Name' },
        { id: 'role', disablePadding: false, label: 'Role' },
        { id: 'email', disablePadding: false, label: 'Email' },
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
            />
        </div>
    )
}

export default PeopleContainer;