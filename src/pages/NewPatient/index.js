/* eslint no-nested-ternary: "error" */
import { Navigate, useLocation } from 'react-router-dom';
import { Box, Typography, Stack } from '@material-ui/core';
import { useState, useEffect } from 'react';
import Page from '../../components/Page';
import {
  FamilleForm,
  PatientForm,
  CauseForm,
  ShowDAtaPatient
} from '../../components/_dashboard/patient';
import './styledNewPatient.css';

export default function NewPatient() {
  const [Step, SetStep] = useState(1);
  const [DataPatient, SetDataPatient] = useState({});

  const location = useLocation();
  const [isAuth, setIsAuth] = useState(localStorage.getItem('token'));

  useEffect(() => {
    setIsAuth(isAuth);
  }, [isAuth]);

  const NextStep = () => {
    // console.log(Step);
    SetStep((CurrentState) => CurrentState + 1);
  };
  // Go to prev step
  const PrevStep = () => {
    SetStep((CurrentState) => CurrentState - 1);
  };

  const FormPatientInfo = (key) => {
    // console.log(`key vaut :${key}`, DataPatient);
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
  const ProgressBar = (() => {
    if (Step >= 1) return 'progressfist';
    if (Step >= 3) return 'progressmiddle';
    return 'progresslast';
  })();

  return isAuth ? (
    <Page>
      <Box sx={{ pb: 5, position: 'fixed', top: 50, zIndex: 9900 }}>
        <Typography variant="h4">Nouveau Patient</Typography>
      </Box>
      <div className="progress-bar-total">
        <div className="progress-step progress-step-active" data-title="Indentité" />
        <div
          className={`progress-step  ${Step >= 2 && 'progress-step-active'}`}
          data-title="Cause malnutrition"
        />
        <div
          className={`progress-step  ${Step >= 3 && 'progress-step-active'}`}
          data-title="Famille"
        />
        <div
          className={`progress-step  ${Step >= 4 && 'progress-step-active'}`}
          data-title="Valider"
        />
      </div>
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