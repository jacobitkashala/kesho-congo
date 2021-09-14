import { Navigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
// material
import { Box, Grid, Container, Typography } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/styles';
import Axios from 'axios';
// components
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
  const [loader, setLoader] = useState(true);
  // const getReporting = `https://kesho-congo-api.herokuapp.com/reporting`;

  // const options = {
  //   method: 'GET',
  //   headers: {
  //     Accept: 'application/json',
  //     Authorization: `bearer ${localStorage.getItem('token')}`
  //   }
  // };
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
      setLoader(false);
      // const Patient = await data;
      // const PatientBrachial = Patient.Anthropometrique;
      // setAnthro(PatientBrachial);
      // setOnePatient(Patient);
      // setLoader(false);
    } catch (err) {
      console.log(err);
    }
  }, []);
  // useEffect(() => {
  //   fetch(`https://kesho-congo-api.herokuapp.com/reporting`, options)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setReports(data);
  //       // setLoader(false);
  //       console.log('Données', data.nombre_fille[0].nombre_fille);
  //     })
  //     .catch((error) => {
  //       console.error('Error:', error);
  //     });
  // }, []);
  console.log('Données2 : ', reports);

  const [isAuth, setIsAuth] = useState(localStorage.getItem('token'));
  useEffect(() => {
    setIsAuth(isAuth);
  }, [isAuth]);
  const location = useLocation();
  const useStyles = makeStyles(() => ({
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

  return isAuth ? (
    <>
      {loader ? (
        <div className={classes.root}>
          <CircularProgress />
        </div>
      ) : (
        <Page>
          <Container maxWidth="xl">
            <Box sx={{ pb: 5 }}>
              <Typography variant="h4">Kesho Congo</Typography>
            </Box>

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
