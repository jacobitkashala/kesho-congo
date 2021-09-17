import * as Yup from 'yup';
import { Navigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useFormik, Form, FormikProvider } from 'formik';
// material
import { Box, Grid, Container, Typography, TextField } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles } from '@material-ui/styles';
import Axios from 'axios';

import { LoadingButton } from '@material-ui/lab';
import Page from '../components/Page';
import {
  CardBleu,
  CardRouge,
  CardJaune,
  CardVert,
  AppCurrentVisits,
  AppWebsiteVisits
} from '../components/_dashboard/app';

// ----------------------------------------------------------------------

export default function DashboardApp() {
  const [reports, setReports] = useState([]);
  const [yearData, setYearData] = useState([]);
  const [loader, setLoader] = useState(true);
  const [buttonLoader, setButtonLoader] = useState(false);
  // const AnnualData = [];
  useEffect(async () => {
    try {
      const response = await Axios.get(`https://kesho-congo-api.herokuapp.com/reporting`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `bearer ${localStorage.getItem('token')}`
        }
      });
      const data = await response.data;
      setReports(await data);
      // console.log('mes données:', rapport_mac_year);
      setLoader(false);

      // setLoader(false);
    } catch (err) {
      console.log(err);
    }
  }, []);

  // console.log('macData', macData);

  const [isAuth, setIsAuth] = useState(localStorage.getItem('token'));
  useEffect(() => {
    setIsAuth(isAuth);
  }, [isAuth]);
  const location = useLocation();
  const useStyles = makeStyles((theme) => ({
    root: {
      position: 'relative'
      // left: '60%',
      // top: '45%',
      // zIndex: '100'
      // transform: 'translate(-50%)'
    },
    labelRoot: {
      '&&': {
        color: 'red'
      },
      container: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
      },
      textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200
      }
    }
  }));
  const classes = useStyles();
  const DateSchema = Yup.object().shape({
    startDate: Yup.date().required('selectionnez une date'),
    endDate: Yup.date()
  });
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      startDate: '',
      endDate: '',
      remember: true
    },
    validationSchema: DateSchema,
    onSubmit: async ({ startDate, endDate }) => {
      setButtonLoader(true);
      console.log('les dates', startDate + endDate);
      try {
        const response = await Axios.post(
          'https://kesho-congo-api.herokuapp.com/reporting',
          {
            starting_date: startDate,
            ending_date: endDate
          },
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `bearer ${localStorage.getItem('token')}`
            }
          }
        );
        const data = await response.data;
        setReports(await data);
        setButtonLoader(false);
      } catch (err) {
        console.log(err);
        setButtonLoader(false);
      }
    }
  });
  const { errors, touched, handleSubmit, getFieldProps } = formik;

  return isAuth ? (
    <>
      {loader ? (
        <div className={classes.root}>
          <Box sx={{ width: '100%', position: 'absolute', top: 200 }}>
            <LinearProgress />
          </Box>
        </div>
      ) : (
        <Page>
          <Container maxWidth="xl">
            <Box sx={{ pb: 5 }}>
              <Typography variant="h4">Kesho Congo Reporting</Typography>
            </Box>
            <FormikProvider value={formik}>
              <Form className={classes.container} onSubmit={handleSubmit}>
                <TextField
                  label="Début"
                  type="date"
                  // defaultValue={todayDate}
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true
                  }}
                  {...getFieldProps('startDate')}
                  error={Boolean(touched.startDate && errors.startDate)}
                  helperText={touched.startDate && errors.startDate}
                  // onChange={handleChange}
                  // value={values.startDate}
                />
                &nbsp;&nbsp;
                <TextField
                  label="Fin"
                  type="date"
                  // defaultValue="2017-05-24"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true
                  }}
                  {...getFieldProps('endDate')}
                  error={Boolean(touched.endDate && errors.endDate)}
                  helperText={touched.endDate && errors.endDate}
                  // onChange={formik.handleChange}
                  // value={values.endDate}
                />
                &nbsp;&nbsp;
                <LoadingButton
                  // onClick={handleClick}
                  type="submit"
                  variant="contained"
                  loading={buttonLoader}
                >
                  Trouver
                </LoadingButton>
              </Form>
            </FormikProvider>
            <br />
            <br />
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={3}>
                <CardVert
                  title="Total"
                  nombreM={reports.nombre_garcon[0].nombre_garcon}
                  nombreF={reports.nombre_fille[0].nombre_fille}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <CardBleu
                  title="6 à 24 mois"
                  nombreM={reports.nombre_garcon_moins_3ans[0].nombre_garcon_moins_3ans}
                  nombreF={reports.nombre_fille_moins_3ans[0].nombre_fille_moins_3ans}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <CardJaune
                  title="24 à 59 mois"
                  nombreM={reports.nombre_garcon_3_5ans[0].nombre_garcon_3_5ans}
                  nombreF={reports.nombre_fille_3_5ans[0].nombre_fille_3_5ans}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <CardRouge
                  title="Adultes"
                  nombreM={reports.nombre_garcon_adulte[0].nombre_garcon_adulte}
                  nombreF={reports.nombre_fille_adulte[0].nombre_fille_adulte}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <CardBleu
                  title="Hier"
                  nombreM={reports.nbre_garcon_yesterday}
                  nombreF={reports.nbre_fille_yesterday}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <CardRouge
                  title="MAC"
                  nombreM={reports.chronique_nombre_garcon[0].chronique_nombre_garcon}
                  nombreF={reports.chronique_nombre_fille[0].chronique_nombre_fille}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <CardJaune
                  title="MAS"
                  nombreM={reports.sereve_nombre_garcon[0].sereve_nombre_garcon}
                  nombreF={reports.sereve_nombre_fille[0].sereve_nombre_fille}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <CardVert
                  title="MAM"
                  nombreM={reports.moderee_nombre_garcon[0].moderee_nombre_garcon}
                  nombreF={reports.moderee_nombre_fille[0].moderee_nombre_fille}
                />
              </Grid>

              <Grid item xs={12} md={6} lg={8}>
                <AppWebsiteVisits />
              </Grid>

              <Grid item xs={12} md={6} lg={4}>
                <AppCurrentVisits />
              </Grid>
            </Grid>
          </Container>
        </Page>
      )}
    </>
  ) : (
    <Navigate to="/" state={{ from: location }} />
  );
}
