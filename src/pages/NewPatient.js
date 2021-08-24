import { Navigate, useLocation } from 'react-router-dom';
import { Box, Typography, Grid, Stack } from '@material-ui/core';
import { State } from 'react';
import Page from '../components/Page';
import { FamilleForm, PatientForm } from '../components/_dashboard/patient';
import { fakeAuth } from '../fakeAuth';

export default function NewPatient() {
  const [Step, SetStep] = State(1);
  const NextStep = () => {
    SetStep((CurrentState) => CurrentState + 1);
  };

  // Go to prev step
  const prevStep = () => {
    SetStep((CurrentState) => CurrentState + 1);
  };

  const FormPatientInfo = (key) => {
    switch (key) {
      case 1:
        return <PatientForm NextStep={NextStep} />;

      case 2:
        return <FamilleForm prevStep={prevStep} NextStep={NextStep} />;

      default:
        return null;
    }
  };
  const location = useLocation();
  return fakeAuth.isAuthenticated ? (
    <Page>
      <Box sx={{ pb: 5 }}>
        <Typography variant="h4">Nouveau Patient</Typography>
      </Box>
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
        <Grid container spacing={3}>
          {/* <Grid item xs={12} sm={6} md={6}>
            <FamilleForm />
          </Grid> */}
          <Grid item xs={12} sm={6} md={6}>
            {FormPatientInfo(Step)}
          </Grid>
        </Grid>
      </Stack>
    </Page>
  ) : (
    <Navigate to="/" state={{ from: location }} />
  );
}
