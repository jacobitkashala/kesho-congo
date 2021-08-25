import { Navigate, useLocation } from 'react-router-dom';
import { Box, Typography, Grid, Stack } from '@material-ui/core';
import { useState } from 'react';
import Page from '../components/Page';
import { FamilleForm, PatientForm, CauseForm } from '../components/_dashboard/patient';
import { fakeAuth } from '../fakeAuth';

export default function NewPatient() {
  const [Step, SetStep] = useState(1);
  const NextStep = () => {
    console.log(Step);
    SetStep((CurrentState) => CurrentState + 1);
  };

  // Go to prev step
  const PrevStep = () => {
    SetStep((CurrentState) => CurrentState - 1);
  };

  const FormPatientInfo = (key) => {
    switch (key) {
      case 1:
        return <PatientForm NextStep={NextStep} />;
      case 2:
        return <CauseForm PrevStep={PrevStep} NextStep={NextStep} />;
      case 3:
        return <FamilleForm PrevStep={PrevStep} NextStep={NextStep} />;
      default:
        return null;
    }
  };
  const location = useLocation();
  return fakeAuth.isAuthenticated ? (
    <Page>
      <Box sx={{ pb: 5, position: 'fixed', top: 50, zIndex: 9900 }}>
        <Typography variant="h4">Nouveau Patient</Typography>
      </Box>
      <Stack direction={{ xs: 'column', sm: 'row' }} sx={{ justifyContent: 'center' }} spacing={2}>
        {/* <Grid container spacing={3}> */}
        {/* <Grid item xs={12} sm={7} md={7} sx={{ display: 'flex', justifyContent: 'center' }}> */}
        {FormPatientInfo(Step)}
        {/* </Grid> */}
        {/* </Grid> */}
      </Stack>
    </Page>
  ) : (
    <Navigate to="/" state={{ from: location }} />
  );
}
