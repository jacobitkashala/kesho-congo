/* eslint-disable no-nested-ternary */
/* eslint-disable camelcase */
/* no-nested-ternary */

import { filter } from 'lodash';
import { Icon } from '@iconify/react';
import { useState, useEffect } from 'react';
import plusFill from '@iconify/icons-eva/plus-fill';
import { Link as RouterLink, Navigate, useLocation } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';

// -------------------MODAL
// import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';

// ----------------------------------------------------------------------

// material
import {
  Card,
  Table,
  Stack,
  Avatar,
  Button,
  Checkbox,
  TableRow,
  TableBody,
  TableCell,
  Container,
  Typography,
  TableContainer,
  TablePagination
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
// import { getUsersAsync } from '../redux/reducers/userSlice';
// material
// components
import Page from '../components/Page';
import Scrollbar from '../components/Scrollbar';
import SearchNotFound from '../components/SearchNotFound';
import { PersonnelListHead, PersonnelListToolbar } from '../components/_dashboard/personnel';
import PatientMoreMenu from '../components/_dashboard/patient/PatientMoreMenu';
import Label from '../components/Label';

const TABLE_HEAD = [
  { id: 'NE', label: 'Nom', alignLeft: false },
  { id: 'PR', label: 'Prénom', alignRight: true },
  { id: 'DN', label: 'Naissance', alignRight: false },
  { id: 'SE', label: 'Sexe', alignRight: false },
  { id: 'DC', label: 'Consultation', alignRight: false },
  { id: 'MN', label: 'Malnutrition', alignRight: false },
  { id: 'CS', label: 'Consulté(e) par', alignCenter: true },
  { id: '' }
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] > a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function applySortFilter(array, comparator, query) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  if (query) {
    return filter(
      array,
      (_user) => _user.nom_patient.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );
  }
  return stabilizedThis.map((el) => el[0]);
}
const useStyles = makeStyles(() => ({
  root: {
    position: 'absolute',
    left: '60%',
    top: '45%',
    zIndex: '100'
  },
  labelRoot: {
    '&&': {
      color: 'red'
    }
  }
}));

export default function Patient() {
  // ----------------------------------Patients--------------------
  const [patientsList, setPatientsList] = useState([]);
  // const [page, setPage] = useState(0);
  const [order, setOrder] = useState('asc');
  const [selected, setSelected] = useState([]);
  const [orderBy, setOrderBy] = useState('nom_patient');
  const [filterName, setFilterName] = useState('');
  const [rowsPerPage, setRowsPerPage] = useState(50);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    // console.log(rowsPerPage);
    fetch(`https://kesho-congo-api.herokuapp.com/patient/all?limit=${rowsPerPage}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: `bearer ${localStorage.getItem('token')}`
      }
    })
      .then((response) => response.json())
      .then((data) => {
        setPatientsList(data.Patients);
        setLoader(false);
        console.log('myData', data);
        // setUsersList(data);
      })
      .catch((error) => {
        console.error('MyError:', error);
      });
  }, []);
  const classes = useStyles();

  // ----------------------------------------------------------------------
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = patientsList.map((n) => n.nom_patient);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };
  const handleChangePage = () => {
    // console.log(newPage);
    // setPage(newPage);
    setRowsPerPage((prevState) => prevState + 50);
    console.log(rowsPerPage);
  };

  const handleChangeRowsPerPage = () => {
    // setRowsPerPage(parseInt(event.target.value, 10));
    console.log('+50');
    // setPage(0);
  };

  const handleFilterByName = (event) => {
    setFilterName(event.target.value);
  };

  // const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - patientsList.length) : 0;

  const filteredPatient = applySortFilter(patientsList, getComparator(order, orderBy), filterName);

  const isUserNotFound = filteredPatient.length === 0;

  const location = useLocation();
  const [isAuth, setIsAuth] = useState(localStorage.getItem('token'));
  useEffect(() => {
    setIsAuth(isAuth);
  }, [isAuth]);

  return isAuth ? (
    <Page>
      {loader ? (
        <div className={classes.root}>
          <CircularProgress />
        </div>
      ) : (
        <Container>
          <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
            <Typography variant="h4" gutterBottom>
              Patients
            </Typography>
            <Button
              variant="contained"
              component={RouterLink}
              to="add_Patient"
              startIcon={<Icon icon={plusFill} />}
            >
              patient
            </Button>
          </Stack>

          <Card>
            <PersonnelListToolbar
              numSelected={selected.length}
              filterName={filterName}
              onFilterName={handleFilterByName}
            />

            <Scrollbar>
              <TableContainer sx={{ minWidth: 800 }}>
                <Table>
                  <PersonnelListHead
                    order={order}
                    orderBy={orderBy}
                    headLabel={TABLE_HEAD}
                    rowCount={patientsList.length}
                    numSelected={selected.length}
                    onRequestSort={handleRequestSort}
                    onSelectAllClick={handleSelectAllClick}
                  />
                  <TableBody>
                    {filteredPatient.map((row) => {
                      const {
                        id_patient,
                        nom_patient,
                        type_malnutrition,
                        date_naissance,
                        sexe_patient,
                        date_Consultation,
                        nom_consultant,
                        postnom_consultant,
                        prenom_patient
                      } = row;
                      const isItemSelected = selected.indexOf(nom_patient) !== -1;

                      return (
                        <TableRow
                          hover
                          key={id_patient}
                          tabIndex={-1}
                          role="checkbox"
                          selected={isItemSelected}
                          aria-checked={isItemSelected}
                        >
                          <TableCell padding="checkbox">
                            <Checkbox
                              checked={isItemSelected}
                              onChange={(event) => handleClick(event, nom_patient)}
                            />
                          </TableCell>
                          <TableCell component="th" scope="row" padding="none">
                            <Stack direction="row" alignItems="center" spacing={2}>
                              <Avatar
                                alt={nom_patient}
                                src={`/static/mock-images/avatars/avatar_${id_patient}.jpg`}
                              />
                              <Typography variant="subtitle2" noWrap>
                                {nom_patient}
                              </Typography>
                            </Stack>
                          </TableCell>
                          <TableCell align="center">{prenom_patient}</TableCell>
                          <TableCell align="center">{date_naissance}</TableCell>
                          <TableCell align="center">{sexe_patient}</TableCell>
                          <TableCell align="center">{date_Consultation}</TableCell>
                          <TableCell align="center">
                            <Label
                              variant="outlined"
                              sx={{
                                color: `${
                                  type_malnutrition === 'MAC'
                                    ? 'red'
                                    : type_malnutrition === 'MAM'
                                    ? 'green'
                                    : 'orange'
                                }`
                              }}
                              // variant="ghost"
                              // color={`${type_malnutrition === 'MAC' ? 'error' : 'warning'}`}
                            >
                              {type_malnutrition}
                            </Label>
                          </TableCell>
                          <TableCell align="left">
                            {nom_consultant} {postnom_consultant}
                          </TableCell>

                          <TableCell align="right">
                            <PatientMoreMenu id_patient={id_patient} />
                          </TableCell>
                        </TableRow>
                      );
                    })}
                    {/* {emptyRows > 0 && (
                      <TableRow style={{ height: 53 * emptyRows }}>
                        <TableCell colSpan={6} />
                      </TableRow>
                    )} */}
                  </TableBody>
                  {isUserNotFound && (
                    <TableBody>
                      <TableRow>
                        <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
                          <SearchNotFound searchQuery={filterName} />
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  )}
                </Table>
              </TableContainer>
            </Scrollbar>

            <TablePagination
              rowsPerPageOptions={50}
              // component="div"
              showFirstButton
              count={rowsPerPage}
              rowsPerPage={1}
              page={0}
              onPageChange={handleChangePage}
              // onRowsPerPageChange={handleChangeRowsPerPage}
            >
              <h1>hello</h1>
            </TablePagination>
          </Card>
        </Container>
      )}
    </Page>
  ) : (
    <Navigate to="/" state={{ from: location }} />
  );
}
