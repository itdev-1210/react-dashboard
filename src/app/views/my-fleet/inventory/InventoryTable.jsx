import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  Icon,
  IconButton,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  Paper,
  Checkbox
} from '@material-ui/core';
import { EgretMenu } from "egret";
import Settings from './Settings';

function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function stableSort(array, cmp) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

function getSorting(order, orderBy) {
  return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
}

function InventoryTableHead(props) {
  const { classes, order, orderBy, onRequestSort } = props;
  const createSortHandler = property => event => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow className={classes.tableRow}>
        {props.headCells.map(headCell => (
          <TableCell
            key={headCell.id}
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

InventoryTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
  headCells: PropTypes.array.isRequired,
};

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    paper: {
        width: '100%',
        marginBottom: theme.spacing(2),
        boxShadow: '0px 2px 1px -1px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.042), 0px 1px 3px 0px rgba(0, 0, 0, 0.036)'
    },
    table: {
        minWidth: 750,
        tableLayout: 'inherit'
    },
    tableRow: {
        height: "75px",
    },
    visuallyHidden: {
        border: 0,
        clip: 'rect(0 0 0 0)',
        height: 1,
        margin: -1,
        overflow: 'hidden',
        padding: 0,
        position: 'absolute',
        top: 20,
        width: 1,
    },
    avatar: {
        width: "36px",
        height: "36px",
    },
    state: {
      width: '11px',
      height: '11px',
      borderRadius: '50%',
      backgroundColor: '#3ac068',
      marginLeft: '15px'
    },
    name: {
        fontSize: "13px",
        letterSpacing: "0.02px",
        color: "#55585c"
    },
    country: {
        fontSize: "11px",
        fontWeight: "500",
        letterSpacing: "0.02px",
        color: "#a1a1a1"
    },
}));

export default function InventoryTable(props) {
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [settingsPanelOpen, setSettingsPanelOpen] = React.useState(false);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = event => {
    if (event.target.checked) {
      const newSelecteds = props.rows.map(n => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSettingsPage = () => {
    setSettingsPanelOpen(!settingsPanelOpen);
  };

  const isSelected = name => selected.indexOf(name) !== -1;

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, props.rows.length - page * rowsPerPage);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={'medium'}
            aria-label="User table"
          >
            <InventoryTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={props.rows.length}
              headCells={props.headCells}
            />
            <TableBody>
              {stableSort(props.rows, getSorting(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.id);
                  const labelId = `User-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      // onClick={event => handleClick(event, row.id)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.id}
                      selected={isItemSelected}
                      className={classes.tableRow}
                    >
                      <TableCell padding="none" id={labelId} scope="row" style={{ width: '30%' }}>
                        <div className="flex flex-middle">
                            <Checkbox
                              checked={isItemSelected}
                              inputProps={{ 'aria-labelledby': labelId }}
                              color="default"
                            />
                            <img className={classes.avatar} src={row.qrcode} alt=""/>
                            <div className="px-16">
                              <div className={classes.name}>{row.id}</div>
                              <div className={classes.country}>{row.imei}</div>
                            </div>
                        </div>
                      </TableCell>
                      <TableCell style={{ width: '10%' }}>{row.battery}</TableCell>
                      <TableCell style={{ width: '30%' }}>{row.last_transmition}</TableCell>
                      <TableCell style={{ width: '10%' }}>
                        <div className="flex flex-middle">
                          In use
                          <div className={classes.state}></div>
                        </div>
                      </TableCell>
                      <TableCell style={{ width: '10%' }}><Icon>signal_cellular_alt</Icon></TableCell>
                      <TableCell style={{ width: '10%' }}>
                        <div className="flex flex-middle">
                          <img src={`/assets/images/fleet/${row.lock === 0 ? `locked.svg` : `unlocked.svg`}`} alt="" />
                          <img className="ml-10" src={`/assets/images/fleet/${row.light === 0 ? `light_on.svg` : `light_off.svg`}`} alt="" />
                          <EgretMenu
                            menuButton={
                              <IconButton>
                                <Icon>more_horiz</Icon>
                              </IconButton>
                            }
                          >
                            <MenuItem className="flex flex-middle">Unlock</MenuItem>
                            <MenuItem className="flex flex-middle">Tracking</MenuItem>
                            <MenuItem className="flex flex-middle" onClick={handleSettingsPage}>Settings</MenuItem>
                            <MenuItem className="flex flex-middle">Inventory</MenuItem>
                          </EgretMenu>
                        </div>
                      </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: (75) * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={props.rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>

      <Settings panelState={settingsPanelOpen} setPanelState={(value) => setSettingsPanelOpen(value)} />
    </div>
  );
}
