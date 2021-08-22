import { Link as RouterLink, Route, Navigate, useLocation } from 'react-router-dom';
import { Box, Typography, Grid } from '@material-ui/core';
import Page from '../components/Page';
import { PersonnelAddForm } from '../components/_dashboard/personnel';
import { fakeAuth } from '../fakeAuth';

export default function NewPatient() {
  const location = useLocation();
  return fakeAuth.isAuthenticated ? (
    <Page>
      <Box sx={{ pb: 5 }}>
        <Typography variant="h4" sx={{ textAlign: 'center' }}>
          Créer un utilisateur
        </Typography>
      </Box>
      <Grid
        container
        spacing={3}
        sx={{
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <Grid item xs={12} sm={6} md={3}>
          <PersonnelAddForm />
        </Grid>
      </Grid>
    </Page>
  ) : (
    <Navigate to="/" state={{ from: location }} />
  );
}
