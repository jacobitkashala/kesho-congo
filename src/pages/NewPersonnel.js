import { Navigate, useLocation } from 'react-router-dom';
import { Box, Typography, Grid } from '@material-ui/core';
import Page from '../components/Page';
import { PersonnelAddForm } from '../components/_dashboard/personnel';
import { fakeAuth } from '../fakeAuth';

export default function NewPatient() {
  const location = useLocation();
  return fakeAuth.isAuthenticated ? (
    <Page>
      <Box sx={{ pb: 5 }}>
        <Typography variant="h4">Créer</Typography>
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={5}>
          <PersonnelAddForm />
        </Grid>
      </Grid>
    </Page>
  ) : (
    <Navigate to="/" state={{ from: location }} />
  );
}
