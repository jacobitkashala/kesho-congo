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
  const [isAuth, setIsAuth] = useState(localStorage.getItem('token'));
  useEffect(() => {
    setIsAuth(isAuth);
  }, [isAuth]);
  const location = useLocation();

  return isAuth ? (
    <Page>
      <Container maxWidth="xl">
        <Box sx={{ pb: 5 }}>
          <Typography variant="h4">Kesho Congo</Typography>
        </Box>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <CardVert title="Total" nombreM={100} nombreF={50} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <CardBleu title="6 à 24 mois" nombreM={23} nombreF={50} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <CardJaune title="24 à 59 mois" nombreM={100} nombreF={50} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <CardRouge title="Adult" nombreM={10} nombreF={50} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <CardVert title="Aujourd'hui" nombreM={23} nombreF={50} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <CardBleu title="Hier" nombreM={23} nombreF={50} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <CardJaune title="MAM" nombreM={10} nombreF={50} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <CardRouge title="M-A-S" nombreM={10} nombreF={50} />
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
  ) : (
    <Navigate to="/" state={{ from: location }} />
  );
}
