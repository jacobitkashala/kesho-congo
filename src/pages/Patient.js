import { filter } from 'lodash';
import { Icon } from '@iconify/react';
import { useState, useEffect } from 'react';
import plusFill from '@iconify/icons-eva/plus-fill';
import { Link as RouterLink, Navigate, useLocation } from 'react-router-dom';
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
// components
import { useSelector, useDispatch } from 'react-redux';
import { getPatientsAsync } from '../redux/reducers/patientSlice';
import Page from '../components/Page';
import Label from '../components/Label';
import Scrollbar from '../components/Scrollbar';
import SearchNotFound from '../components/SearchNotFound';
import {
  PatientListHead,
  PatientListToolbar,
  PatientMoreMenu
} from '../components/_dashboard/patient';
//
import USERLIST from '../_mocks_/user';
// import { fakeAuth } from '../fakeAuth';
// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: 'NE', label: 'Nom Patient', alignRight: false },
  { id: 'DN', label: 'Naissance', alignRight: false },
  { id: 'SE', label: 'Sexe', alignRight: false },
  { id: 'DC', label: 'Consultation ', alignRight: false },
  { id: 'TN', label: 'Malnutrition', alignRight: false },
  { id: 'CP', label: 'Consulté(e) par', alignRight: false },
  { id: '' }
];

// ----------------------------------------------------------------------

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
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
    return filter(array, (_user) => _user.name.toLowerCase().indexOf(query.toLowerCase()) !== -1);
  }
  return stabilizedThis.map((el) => el[0]);
}

export default function Patient() {
  const [page, setPage] = useState(0);
  const [order, setOrder] = useState('asc');
  const [selected, setSelected] = useState([]);
  const [orderBy, setOrderBy] = useState('name');
  const [filterName, setFilterName] = useState('');
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const dispatch = useDispatch();
  const { patients } = useSelector((state) => state);
  const patientList = patients;
  console.log(patients);
  useEffect(() => {
    dispatch(getPatientsAsync());
  }, [dispatch]);
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = patientList.map((n) => n.name);
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

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleFilterByName = (event) => {
    setFilterName(event.target.value);
  };

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - patientList.length) : 0;

  const filteredPatient = applySortFilter(patientList, getComparator(order, orderBy), filterName);

  const isUserNotFound = filteredPatient.length === 0;

  const location = useLocation();
  const [isAuth, setIsAuth] = useState(localStorage.getItem('token'));
  useEffect(() => {
    setIsAuth(isAuth);
  }, [isAuth]);

  return isAuth ? (
    <Page>
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Liste patient
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
          <PatientListToolbar
            numSelected={selected.length}
            filterName={filterName}
            onFilterName={handleFilterByName}
          />

          <Scrollbar>
            <TableContainer sx={{ minWidth: 800 }}>
              <Table>
                <PatientListHead
                  order={order}
                  orderBy={orderBy}
                  headLabel={TABLE_HEAD}
                  rowCount={USERLIST.length}
                  numSelected={selected.length}
                  onRequestSort={handleRequestSort}
                  onSelectAllClick={handleSelectAllClick}
                />
                <TableBody>
                  {filteredPatient
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                      const {
                        id_patient,
                        nom_patient,
                        type_malnutrition,
                        date_naissance,
                        sexe_patient,
                        date_Consultation,
                        nom_consultant,
                        postnom_consultant
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
                          <TableCell align="center">{date_naissance}</TableCell>
                          <TableCell align="center">{sexe_patient}</TableCell>
                          <TableCell align="center">{date_Consultation}</TableCell>
                          <TableCell align="center">
                            <Label
                              variant="ghost"
                              color={(type_malnutrition === 'Aigu modéré' && 'error') || 'success'}
                            >
                              {type_malnutrition}
                            </Label>
                          </TableCell>
                          <TableCell align="center">
                            {nom_consultant} {postnom_consultant}
                          </TableCell>

                          <TableCell align="right">
                            <PatientMoreMenu id_patient={id_patient} />
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  {emptyRows > 0 && (
                    <TableRow style={{ height: 53 * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
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
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={patientList.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Card>
      </Container>
    </Page>
  ) : (
    <Navigate to="/" state={{ from: location }} />
  );
}
