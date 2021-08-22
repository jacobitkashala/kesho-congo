import { Link as RouterLink, Route, Navigate, useLocation } from 'react-router-dom';
import { Box, Typography, Grid, Stack } from '@material-ui/core';
import Page from '../components/Page';
import { FamilleForm, PatientForm } from '../components/_dashboard/patient';
import { fakeAuth } from '../fakeAuth';

export default function NewPatient() {
  const location = useLocation();
  return fakeAuth.isAuthenticated ? (
    <Page>
      <Box sx={{ pb: 5 }}>
        <Typography variant="h4">Nouveau Patient</Typography>
      </Box>
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={6}>
            <FamilleForm />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <PatientForm />
          </Grid>
        </Grid>
      </Stack>
    </Page>
  ) : (
    <Navigate to="/" state={{ from: location }} />
  );
}
