/* eslint-disable no-nested-ternary */
/* eslint-disable camelcase */
/* no-nested-ternary */
import * as Yup from 'yup';
import { filter } from 'lodash';
import { Icon } from '@iconify/react';
import { useState, useEffect } from 'react';
import plusFill from '@iconify/icons-eva/plus-fill';
// import trash2Fill from '@iconify/icons-eva/trash-2-fill';
// import roundFilterList from '@iconify/icons-ic/round-filter-list';
import { Link as RouterLink, Navigate, useLocation } from 'react-router-dom';
import Axios from 'axios';
import { useFormik, Form, FormikProvider } from 'formik';
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
  // TablePagination,
  OutlinedInput,
  Toolbar
  // Tooltip,
  // IconButton
} from '@material-ui/core';
// import { SkipPreviousIcon, SkipNextIcon } from '@material-ui/icons';
import { styled } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { LoadingButton } from '@material-ui/lab';
import SearchIcon from '@material-ui/icons/Search';
import Box from '@material-ui/core/Box';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';
// import LinearProgress from '@material-ui/core/LinearProgress';
// import { getUsersAsync } from '../redux/reducers/userSlice';
// material
// components
import Page from '../components/Page';
import Scrollbar from '../components/Scrollbar';
import SearchNotFound from '../components/SearchNotFound';
import { PersonnelListHead } from '../components/_dashboard/personnel';
import PatientMoreMenu from '../components/_dashboard/patient/PatientMoreMenu';
// import { PatientListToolbar } from '../components/_dashboard/patient';
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
const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    left: '50%',
    top: '60%',
    zIndex: '100'
  },
  labelRoot: {
    '&&': {
      color: 'red'
    }
  },
  button: {
    margin: theme.spacing(1),
    textAlign: 'center',
    position: 'absolute',
    left: '30%'
  }
}));
const RootStyle = styled(Toolbar)(({ theme }) => ({
  height: 96,
  display: 'flex',
  justifyContent: 'space-between',
  padding: theme.spacing(0, 1, 0, 3)
}));

const SearchStyle = styled(OutlinedInput)(() => ({
  width: 240
}));

export default function Patient() {
  // ----------------------------------Patients--------------------
  const [patientsList, setPatientsList] = useState([]);
  const [lenghtData, setLenghtData] = useState(0);
  const [order, setOrder] = useState('asc');
  const [selected, setSelected] = useState([]);
  const [orderBy, setOrderBy] = useState('nom_patient');
  const [filterName, setFilterName] = useState('');
  // const [rowsPerPage, setRowsPerPage] = useState(5);
  const [debut, setDebut] = useState(0);
  const [taille, settaille] = useState(5);
  const [loader, setLoader] = useState(true);
  const [loadingButton, setLoadingButton] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    // console.log(rowsPerPage);
    fetch(`https://kesho-congo-api.herokuapp.com/patient/all?limit_start=${debut}&limit_end=${5}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: `bearer ${localStorage.getItem('token')}`
      }
    })
      .then((response) => response.json())
      .then((data) => {
        const { Patients, nombre_patient } = data;
        // console.log(localStorage.getItem('token'));
        setLenghtData(nombre_patient);
        setPatientsList(Patients);
        setLoader(false);
        // console.log('myData', data.Patients);
        // setUsersList(data);
      })
      .catch((error) => {
        console.error('MyError:', error);
      });
  }, [debut, taille]);

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
  const handleClickPrev = () => {
    setDebut((prevState) => prevState + 10);
    console.log(`Prev ${debut}`);
    // if (debut > 5) {

    // } else {
    //   setDebut(5);
    // }
  };
  const handleClickNext = () => {
    setDebut((prevState) => prevState + 5);
    console.log(`Next ${debut}`);
    // console.log(lenghtData);
    // if (taille + debut < lenghtData) {
    //   setDebut(lenghtData);
    //   // settaille(taille + 5);
    //   // setRowsPerPage((prevState) => prevState + 5);
    // } else {
    //   setDebut(taille + debut);
    // }
  };

  // -------------------FOrmik----------------------------
  const SearchSchema = Yup.object().shape({
    searchValue: Yup.string().required('Entrez un nom')
  });
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      searchValue: ''
    },
    validationSchema: SearchSchema,
    onSubmit: async ({ searchValue }) => {
      // setButtonLoader(true);
      setLoadingButton(true);
      // console.log('la valeur recherchée', searchValue);
      try {
        const response = await Axios.post(
          'https://kesho-congo-api.herokuapp.com/patient/search',
          {
            nom_patient: searchValue
          },
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `bearer ${localStorage.getItem('token')}`
            }
          }
        );
        const output = await response.data;
        setLoadingButton(false);
        setPatientsList(output);
        // console.log(output);
        // setReports(await data);
        // setButtonLoader(false);
      } catch (err) {
        console.log(err);
        setLoadingButton(false);
        // setButtonLoader(false);
      }
    }
  });
  const { handleSubmit, values, setFieldValue } = formik;
  const handleFilterByName = (event) => {
    setFieldValue('searchValue', event.target.value);
    setFilterName(event.target.value);
    console.log(filterName);
  };

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
        <Box sx={{ display: 'flex', position: 'relative', left: '50%', top: 150 }}>
          <CircularProgress />
        </Box>
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
            <RootStyle
              sx={{
                ...(selected.length > 0 && {
                  color: 'primary.main',
                  bgcolor: 'primary.lighter'
                })
              }}
            >
              {selected.length > 0 ? (
                <Typography component="div" variant="subtitle1">
                  {selected.length} selectionés
                </Typography>
              ) : (
                <FormikProvider value={formik}>
                  <Form onSubmit={handleSubmit}>
                    <LoadingButton
                      variant="contained"
                      color="primary"
                      type="submit"
                      loading={loadingButton}
                      className={classes.button}
                      endIcon={
                        <Icon>
                          <SearchIcon />
                        </Icon>
                      }
                    />
                    <SearchStyle
                      value={values.searchValue}
                      onChange={handleFilterByName}
                      placeholder="Tapez un nom"
                    />
                  </Form>
                </FormikProvider>
              )}
            </RootStyle>
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
                                    ? '#d32f2f'
                                    : type_malnutrition === 'MAM'
                                    ? '#1565c0'
                                    : type_malnutrition === 'MAS-K'
                                    ? '#ED6C02'
                                    : type_malnutrition === 'MAS-M'
                                    ? '#ef5350'
                                    : '#4caf50'
                                }`
                              }}
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
            <TableRow>
              <TableRow>
                <TableCell />

                <TableCell>
                  <GrFormPrevious
                    style={{ width: '30px', height: '30px', color: '#1f2b35', cursor: 'pointer' }}
                    onClick={handleClickPrev}
                  />
                </TableCell>
                <TableCell>
                  <GrFormNext
                    style={{ width: '30px', height: '30px', color: '#1f2b35', cursor: 'pointer' }}
                    onClick={handleClickNext}
                  />
                </TableCell>
                <TableCell style={{ fontWeight: '900px' }}>
                  {debut === 0 ? 5 : debut}/{lenghtData - 1}
                </TableCell>
              </TableRow>
            </TableRow>

            {/* <TablePagination
              rowsPerPageOptions={50}
              // component="div"
              showFirstButton
              count={rowsPerPage}
              rowsPerPage={1}
              page={0}
              onPageChange={handleChangePage}
              // onRowsPerPageChange={handleChangeRowsPerPage}
            /> */}
          </Card>
        </Container>
      )}
    </Page>
  ) : (
    <Navigate to="/" state={{ from: location }} />
  );
}
