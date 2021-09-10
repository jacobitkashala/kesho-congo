/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { filter } from 'lodash';
import { Icon } from '@iconify/react';
import plusFill from '@iconify/icons-eva/plus-fill';
import { Link as RouterLink, Navigate, useLocation, useNavigate } from 'react-router-dom';

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
import CloseIcon from '@material-ui/icons/Close';
import Fab from '@material-ui/core/Fab';
// material
// components
import SearchNotFound from '../../components/SearchNotFound';
// import Scrollbar from '/../../components/Scrollbar';
import Scrollbar from '../../components/Scrollbar';

import Page from '../../components/Page';
import {
  PersonnelListHead,
  PersonnelListToolbar,
  PersonnelMoreMenu
} from '../../components/_dashboard/personnel';

// import USERLIST from '../_mocks_/personnel';
import { fakeAuth } from '../../fakeAuth';

const TABLE_HEAD = [
  { id: 'NE', label: 'Consulté(e) par', alignRight: false },
  { id: 'DN', label: 'Date', alignRight: false },
  { id: 'SE', label: 'PB(cm)', alignRight: false },
  { id: 'DC', label: 'PC(cm)', alignRight: false },
  { id: 'SxE', label: 'Poids(kg)', alignRight: false },
  { id: 'SxE', label: 'Taille(cm)', alignRight: false },
  { id: 'SxE', label: 'Malnutrition', alignRight: false }
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
      (_user) => _user.nom_user.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );
  }
  return stabilizedThis.map((el) => el[0]);
}

export default function MoreDetails() {
  const location = useLocation();
  const myId = location.pathname.split('/')[5];
  console.log(myId);

  const [usersList, setUsersList] = useState([]);

  const getUsers = `https://kesho-congo-api.herokuapp.com/user/all`;

  const options = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: `bearer ${localStorage.getItem('token')}`
    }
  };

  useEffect(() => {
    fetch(getUsers, options)
      .then((response) => response.json())
      .then((data) => {
        setLoader(false);
        console.log('myData', data);
        setUsersList(data);
        // // formik.setValues(data);
        // formik.setFieldValue('firstName', data.prenom_user);
        // formik.setFieldValue('lastName', data.nom_user);
        // formik.setFieldValue('middleName', data.postnom_user);
      })
      .catch((error) => {
        console.error('Error:', error);
        fakeAuth.login(() => {
          navigate(from);
          navigate('/dashboard/app', { replace: true });
        });
      });
  }, []);

  const [loader, setLoader] = useState(true);
  const useStyles = makeStyles((theme) => ({
    root: {
      position: 'absolute',
      left: '60%',
      top: '45%',
      zIndex: '100'
      // transform: 'translate(-50%)'
    },
    labelRoot: {
      '&&': {
        color: 'red'
      }
    }
  }));
  const classes = useStyles();

  // ----------------------------------------------------------------------

  const [page, setPage] = useState(0);
  const [order, setOrder] = useState('asc');
  const [selected, setSelected] = useState([]);
  const [orderBy, setOrderBy] = useState('nom_user');
  const [filterName, setFilterName] = useState('');
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleRequestSort = (event, property) => {
    // console.log(property);
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = usersList.map((n) => n.nom_user); // ici*******************
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

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - usersList.length) : 0;

  const filteredUsers = applySortFilter(usersList, getComparator(order, orderBy), filterName);

  const isUserNotFound = filteredUsers.length === 0;
  const navigate = useNavigate();
  const { from } = location.state || { from: { pathname: '/dashboard/app' } };
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
              Rapport patient
            </Typography>
            <Fab
              color="primary"
              component={RouterLink}
              aria-label="edit"
              to={`/dashboard/patient/detail_patient/${myId}`}
            >
              <CloseIcon />
            </Fab>
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
                    rowCount={usersList.length}
                    numSelected={selected.length}
                    onRequestSort={handleRequestSort}
                    onSelectAllClick={handleSelectAllClick}
                  />
                  <TableBody>
                    {filteredUsers
                      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                      .map((user) => {
                        const {
                          id_user,
                          nom_user,
                          prenom_user,
                          email,
                          sexe_user,
                          is_admin,
                          statut
                        } = user;
                        const isItemSelected = selected.indexOf(nom_user) !== -1;

                        return (
                          <TableRow
                            hover
                            key={id_user}
                            // tabIndex={-1}
                            role="checkbox"
                            selected={isItemSelected}
                            aria-checked={isItemSelected}
                          >
                            <TableCell padding="checkbox">
                              <Checkbox
                                checked={isItemSelected}
                                onChange={(event) => handleClick(event, nom_user)}
                              />
                            </TableCell>
                            <TableCell component="th" scope="row" padding="none">
                              <Stack direction="row" alignItems="center" spacing={2}>
                                <Avatar
                                  alt={nom_user}
                                  src={`/static/mock-images/avatars/avatar_${id_user}.jpg`}
                                />
                                <Typography variant="subtitle2" noWrap>
                                  {nom_user}
                                </Typography>
                              </Stack>
                            </TableCell>
                            <TableCell>{prenom_user}</TableCell>
                            <TableCell> {email}</TableCell>
                            <TableCell>{statut}</TableCell>
                            <TableCell>{sexe_user}</TableCell>
                            <TableCell>
                              <PersonnelMoreMenu value={id_user} />
                            </TableCell>
                            <TableCell>
                              <PersonnelMoreMenu value={id_user} />
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
              rowsPerPageOptions={[10, 20, 30]}
              component="div"
              count={usersList.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Card>
        </Container>
      )}
    </Page>
  ) : (
    <Navigate to="/" state={{ from: location }} />
  );
}
