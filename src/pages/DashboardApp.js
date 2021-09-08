import { Navigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
// material
import { Box, Grid, Container, Typography } from '@material-ui/core';
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
// import { fakeAuth } from '../fakeAuth';

// ----------------------------------------------------------------------

export default function DashboardApp() {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const getReporting = `https://kesho-congo-api.herokuapp.com/reporting`;

  const options = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: `bearer ${localStorage.getItem('token')}`
    }
  };
  useEffect(() => {
    fetch(getReporting, options)
      .then((response) => response.json())
      .then((data) => {
        setReports(data);
        setLoading(false);
        console.log(data.NbreGarconMoins3Ans[0].NbreGarconMoins3Ans);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  const [isAuth, setIsAuth] = useState(localStorage.getItem('token'));
  useEffect(() => {
    setIsAuth(isAuth);
  }, [isAuth]);
  const location = useLocation();

  // console.log('Données', reports.NbreGarconMoins3Ans[0]);

  return isAuth ? (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <Page>
          <Container maxWidth="xl">
            <Box sx={{ pb: 5 }}>
              <Typography variant="h4">Kesho Congo</Typography>
            </Box>

            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={3}>
                <CardVert title="Total" nombreM={reports.nbreGarcon} nombreF={reports.nbreFille} />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <CardBleu
                  title="6 à 24 mois"
                  nombreM={reports.NbreGarconMoins3Ans[0].NbreGarconMoins3Ans}
                  nombreF={reports.NbreFilleMoins3Ans[0].NbreFilleMoins3Ans}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <CardJaune
                  title="24 à 59 mois"
                  nombreM={reports.NbreGarcon3_5Ans[0].NbreGarcon3_5Ans}
                  nombreF={reports.NbreFille3_5Ans[0].NbreFille3_5Ans}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <CardRouge
                  title="Adult"
                  nombreM={reports.NbreGarconAdulte[0].NbreGarconAdulte}
                  nombreF={reports.NbreFilleAdulte[0].NbreFilleAdulte}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <CardVert
                  title="Aujourd'hui"
                  nombreM={reports.NbreGarconToday}
                  nombreF={reports.NbreFilleToday}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <CardBleu
                  title="Hier"
                  nombreM={reports.NbreGarconYesterday}
                  nombreF={reports.NbreFilleYesterday}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <CardJaune title="MAM" nombreM={10} nombreF={50} />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <CardRouge title="MAS" nombreM={10} nombreF={50} />
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
