/* eslint-disable no-nested-ternary */
/* eslint-disable camelcase */
/* no-nested-ternary */
import * as Yup from 'yup';
// import { filter } from 'lodash';
import { Icon } from '@iconify/react';
import { useState, useEffect } from 'react';
import plusFill from '@iconify/icons-eva/plus-fill';
import { Link as RouterLink, Navigate, useLocation, useNavigate } from 'react-router-dom';
import Axios from 'axios';
import { useFormik, Form, FormikProvider } from 'formik';
import moment from 'moment';
// ----------Excele Export-----------------------------
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import RefreshIcon from '@material-ui/icons/Refresh';
// material
import {
  Card,
  Table,
  Stack,
  Avatar,
  Button,
  // Checkbox,
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
import Badge from '@material-ui/core/Badge';
// import { SkipPreviousIcon, SkipNextIcon } from '@material-ui/icons';
import { styled } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
// import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { LoadingButton } from '@material-ui/lab';
import SearchIcon from '@material-ui/icons/Search';
// import DeleteIcon from '@material-ui/icons-material/Delete';
// import IconButton from '@material-ui/material/IconButton';
// import IconButton from '@material-ui/core/IconButton';
// import Tooltip from '@material-ui/core/Tooltip';
// import Box from '@material-ui/core/Box';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';
// import LinearProgress from '@material-ui/core/LinearProgress';
// import { getUsersAsync } from '../redux/reducers/userSlice';
// material
// components
import Page from '../components/Page';
import Scrollbar from '../components/Scrollbar';
import SearchNotFound from '../components/SearchNotFound';
// import { PersonnelListHead } from '../components/_dashboard/personnel';
import { PatientListHead } from '../components/_dashboard/patient';
// import PatientListHead from '../components/_dashboard/patient/PatientMoreMenu';
// import { PatientListToolbar } from '../components/_dashboard/patient';
import Label from '../components/Label';
import { fakeAuth } from '../fakeAuth';
import RefreshButton from '../components/RefreshButton';

const TABLE_HEAD = [
  { id: 'NE', label: 'Nom', alignLeft: true },
  { id: 'PR', label: 'Prénom', alignRight: false },
  { id: 'DN', label: 'Naissance', alignRight: false },
  { id: 'SE', label: 'Sexe', alignRight: false },
  { id: 'DC', label: 'Consultation', alignRight: false },
  { id: 'MN', label: 'Malnutrition', alignRight: false },
  { id: 'CS', label: 'Consulté(e) par', alignCenter: true }
];
const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    position: 'relative',
    // left: '50%',
    // flexDirection: 'column',
    justifyContent: 'center',
    top: '50%'
  },
  labelRoot: {
    '&&': {
      color: 'red'
    }
  },
  button: {
    // margin: theme.spacing(1),
    textAlign: 'center',
    position: 'absolute',
    left: '30%'
  },
  patientRow: {
    cursor: 'pointer',
    textDecoration: 'none'
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
  const [patientsList, setPatientsList] = useState([]);
  const [allData, setAllData] = useState([]);
  const [lenghtData, setLenghtData] = useState(0);
  const [order, setOrder] = useState('asc');
  const [selected, setSelected] = useState([]);
  const [orderBy, setOrderBy] = useState('nom_patient');
  const [filterName, setFilterName] = useState('');
  const [length, setLength] = useState(0);
  const [debut, setDebut] = useState(0);
  // const [le, settaille] = useState(5);
  const [loader, setLoader] = useState(true);
  // const [loader2, setLoader2] = useState(false);
  const [loadingButton, setLoadingButton] = useState(false);
  const [sendRequest, setSendRequest] = useState(true);
  const classes = useStyles();

  useEffect(() => {
    fetch(
      `https://kesho-congo-api.herokuapp.com/patient/all?limit_start=${debut}&limit_end=${30}`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          Authorization: `bearer ${localStorage.getItem('token')}`
        }
      }
    )
      .then((response) => response.json())
      .then((data) => {
        const { Patients, nombre_patient } = data;
        // console.log(localStorage.getItem('token'));
        // console.log(`la taille de patient : ${Patients.length}`);
        setLength((current) => current + Patients.length);
        setLenghtData(nombre_patient);
        setPatientsList(Patients);
        setLoader(false);
        setSendRequest(false);
        // setLoader2();
        // console.log('myDatahobed', data);
        // setUsersList(data);
      })
      .catch((error) => {
        console.error('MyError:', error);
      });
  }, [debut]);

  useEffect(() => {
    fetch(`https://kesho-congo-api.herokuapp.com/patient/export`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: `bearer ${localStorage.getItem('token')}`
      }
    })
      .then((response) => response.json())
      .then((data) => {
        setAllData(data);
        console.log('AllmyData', data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  // ------Excel Export-----------------
  const fileType =
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  const fileExtension = '.xlsx';

  const exportToCSV = (apiData, fileName) => {
    const ws = XLSX.utils.json_to_sheet(apiData);
    const wb = { Sheets: { data: ws }, SheetNames: ['data'] };
    const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtension);
  };

  const exportedFileName = `keshoCongoPatients${moment().format('DDMMMMYYYY')}`;
  // console.log(exportedFileName);
  // ----------------------------------Patients--------------------

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
  const handleClickPrev = () => {
    console.log(` prev ${length}`);
    if (length > 5) setDebut((prevState) => prevState - 5);
  };
  const handleClickNext = () => {
    if (length <= lenghtData) {
      setDebut((prevState) => prevState + 5);
      console.log(`length= ${length}`);
    }
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
        console.log('output data :', output);
        console.log('valeur recherché', filterName);
        // setReports(await data);
        // setButtonLoader(false);
      } catch (err) {
        console.log('message error :', err.message);
        setLoadingButton(false);
        // setButtonLoader(false);
      }
    }
  });
  const { handleSubmit, values, setFieldValue } = formik;

  const handleFilterByName = (event) => {
    setFieldValue('searchValue', event.target.value);
    setFilterName(event.target.value);
  };

  // const filteredPatient = applySortFilter(patientsList, getComparator(order, orderBy), filterName);
  const filteredPatient = patientsList;

  // const isUserNotFound = filteredPatient.length === 0;
  // console.log( isUserNotFound);
  console.log('liste filtrées', filterName);

  const location = useLocation();
  const navigate = useNavigate();
  const { from } = location.state || { from: { pathname: '/dashboard/app' } };
  const [isAuth, setIsAuth] = useState(localStorage.getItem('token'));

  function refreshPage() {
    fakeAuth.login(() => {
      navigate(from);
      navigate(`/dashboard/patient`, { replace: true });
    });
  }

  useEffect(() => {
    setIsAuth(isAuth);
  }, [isAuth]);

  return isAuth ? (
    <>
      {loader ? (
        <div className={classes.root}>
          <CircularProgress />
        </div>
      ) : (
        <Page>
          <Container>
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
              <Typography variant="h4" gutterBottom>
                Patients
              </Typography>
              <div>
                <Button
                  variant="contained"
                  component={RouterLink}
                  to="add_Patient"
                  startIcon={<Icon icon={plusFill} />}
                >
                  patient
                </Button>
                &nbsp; &nbsp;
                <Button
                  variant="outlined"
                  onClick={() => exportToCSV(allData, exportedFileName)}
                  startIcon={<Icon icon="bx:bx-export" />}
                >
                  Exporter
                </Button>
              </div>
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
                  <>
                    <FormikProvider value={formik}>
                      <Form onSubmit={handleSubmit}>
                        <LoadingButton
                          style={{
                            width: 'auto',
                            height: '55px'
                          }}
                          variant="contained"
                          color="primary"
                          type="submit"
                          loading={loadingButton}
                          className={classes.button}
                          startIcon={
                            <Icon>
                              <SearchIcon />
                            </Icon>
                          }
                        >
                          Rechercher
                        </LoadingButton>
                        <SearchStyle
                          value={values.searchValue}
                          onChange={handleFilterByName}
                          placeholder="Tapez un nom"
                        />
                      </Form>
                    </FormikProvider>
                    <RefreshButton />
                  </>
                )}
              </RootStyle>
              <Scrollbar>
                <TableContainer sx={{ minWidth: 800 }}>
                  <Table>
                    <PatientListHead
                      order={order}
                      orderBy={orderBy}
                      headLabel={TABLE_HEAD}
                      rowCount={patientsList.length}
                      numSelected={selected.length}
                      onRequestSort={handleRequestSort}
                      onSelectAllClick={handleSelectAllClick}
                    />
                    {filteredPatient.length > 0 ? (
                      <TableBody>
                        {filteredPatient.map((row, i) => {
                          const {
                            id_patient,
                            nom_patient,
                            type_malnutrition,
                            date_naissance,
                            sexe_patient,
                            date_Consultation,
                            nom_consultant,
                            postnom_consultant,
                            prenom_patient,
                            transferer_unt
                          } = row;
                          const isItemSelected = selected.indexOf(nom_patient) !== -1;

                          return (
                            <TableRow
                              component={RouterLink}
                              to={`detail_patient/${id_patient}`}
                              className={classes.patientRow}
                              hover
                              key={id_patient}
                              tabIndex={-1}
                              // role="checkbox"
                              selected={isItemSelected}
                              aria-checked={isItemSelected}
                              // onClick={() => {
                              //   console.log('id de mon patient', id_patient);
                              // }}
                            >
                              <TableCell padding="left">
                                <TableCell padding="checkbox" variant="subtitle2" noWrap>
                                  {i + 1}
                                </TableCell>
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
                                {transferer_unt ? (
                                  <>
                                    <Badge color="error" variant="dot" />
                                    &nbsp;&nbsp;
                                  </>
                                ) : (
                                  ''
                                )}

                                <Label
                                  variant="outlined"
                                  sx={{
                                    color: `${
                                      type_malnutrition === 'MAC'
                                        ? '#D32F2F'
                                        : type_malnutrition === 'MAM'
                                        ? '#1565C0'
                                        : type_malnutrition === 'MAS-K'
                                        ? '#EF5350'
                                        : type_malnutrition === 'MAS-M'
                                        ? '#ED6C02'
                                        : '#4CAF50'
                                    }`
                                  }}
                                >
                                  {type_malnutrition}
                                </Label>
                              </TableCell>
                              <TableCell align="left">
                                {nom_consultant} {postnom_consultant}
                              </TableCell>
                            </TableRow>
                          );
                        })}
                      </TableBody>
                    ) : (
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
                  {length}/{lenghtData}
                </TableCell>
                <TableCell style={{ fontWeight: '900px', position: 'absolute', left: '87%' }}>
                  <Badge color="error" variant="dot" />
                  &nbsp;&nbsp;
                  <span>Transféré</span>
                </TableCell>
              </TableRow>
            </Card>
          </Container>
        </Page>
      )}
    </>
  ) : (
    <Navigate to="/" state={{ from: location }} />
  );
}
