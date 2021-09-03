import { Navigate, useLocation } from 'react-router-dom';
import { Box, Typography, Stack } from '@material-ui/core';
import { useState, useEffect } from 'react';
import Page from '../components/Page';
import {
  FamilleForm,
  PatientForm,
  CauseForm,
  ShowDAtaPatient
} from '../components/_dashboard/patient';
// import { fakeAuth } from '../fakeAuth';

// const ContentStyle = styled('div')(({ theme }) => ({
//   color: '#343F59',
//   maxWidth: 580,
//   display: 'flex',
//   minHeight: '100vh',
//   flexDirection: 'column',
//   justifyContent: 'center',
//   padding: theme.spacing(12, 0)
// }));

export default function NewPatient() {
  const [Step, SetStep] = useState(1);
  const [DataPatient, SetDataPatient] = useState({});
  const NextStep = () => {
    console.log(Step);
    SetStep((CurrentState) => CurrentState + 1);
  };

  // Go to prev step
  const PrevStep = () => {
    SetStep((CurrentState) => CurrentState - 1);
  };

  const FormPatientInfo = (key) => {
    console.log(`key vaut :${key}`, DataPatient);
    switch (key) {
      case 1:
        return <PatientForm NextStep={NextStep} SetDataPatient={SetDataPatient} />;
      case 2:
        return (
          <CauseForm PrevStep={PrevStep} NextStep={NextStep} SetDataPatient={SetDataPatient} />
        );
      case 3:
        return (
          <FamilleForm PrevStep={PrevStep} NextStep={NextStep} SetDataPatient={SetDataPatient} />
        );
      case 4:
        return <ShowDAtaPatient PrevStep={PrevStep} DataPatient={DataPatient} />;
      default:
        return null;
    }
  };
  const location = useLocation();
  const [isAuth, setIsAuth] = useState(localStorage.getItem('token'));
  useEffect(() => {
    setIsAuth(isAuth);
  }, []);
  return isAuth ? (
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
