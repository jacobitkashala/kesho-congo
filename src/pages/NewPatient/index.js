/* eslint no-nested-ternary: "error" */
import { Navigate, useLocation } from 'react-router-dom';
import { Stack } from '@material-ui/core';
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
  // ___________ formIdentité
  const [taille, setTaille] = useState('');
  const [poidsActuel, setPoidsActuel] = useState('');
  const [perimetreCranien, setPerimetreCranien] = useState('');
  const [fistNamePatient, setFistNamePatient] = useState('');
  const [prenomPatient, setPrenomPatient] = useState('');
  const [nomPatient, setNomPatient] = useState('');
  const [postNomPatient, setPostNomPatient] = useState('');
  const [telephone, setTelephone] = useState('');
  const [diversificationAliment, setDiversificationAliment] = useState('');
  const [sexePatient, setSexePatient] = useState('');
  const [dataNaissancePatient, setDataNaissancePatient] = useState('');
  const [constitutionAliment, setConstitutionAliment] = useState('');
  const [provenancePatient, setProvenancePatient] = useState('');
  const [adressePatient, setadressePatient] = useState('');
  const [modeArriver, setModeArriver] = useState('');
  const [ageFinAllaitement, setAgeFinAllaitement] = useState('');
  const [traitementNutritionnelAutre, setTraitementNutritionnelAutre] = useState('');
  const [poidsNaissance, setPoidsNaissance] = useState('');
  const [traitementNutritionnel, setTraitementNutritionnel] = useState('');
  const [perimetreBrachail, setPerimetreBrachail] = useState('');
  const [typeMalnutrition, setTypeMalnutrition] = useState('');
  const [ExplicationAutre, setExplicationAutre] = useState('');
  const [ExplicationProvenance, setExplicationProvenance] = useState('');
  const [AllaitementExclisifSixMois, setAllaitementExclisifSixMois] = useState('');

  const location = useLocation();
  const [isAuth, setIsAuth] = useState(localStorage.getItem('token'));
  useEffect(() => {
    setIsAuth(isAuth);
  }, [isAuth]);

  const NextStep = () => {
    SetStep((CurrentState) => CurrentState + 1);
  };
  const PrevStep = () => {
    SetStep((CurrentState) => CurrentState - 1);
  };

  const FormPatientInfo = (key) => {
    const patientFormData = {
      taille,
      poidsActuel,
      perimetreCranien,
      fistNamePatient,
      prenomPatient,
      nomPatient,
      postNomPatient,
      telephone,
      diversificationAliment,
      sexePatient,
      dataNaissancePatient,
      constitutionAliment,
      provenancePatient,
      adressePatient,
      modeArriver,
      ageFinAllaitement,
      traitementNutritionnelAutre,
      poidsNaissance,
      traitementNutritionnel,
      perimetreBrachail,
      typeMalnutrition,
      ExplicationAutre,
      ExplicationProvenance,
      AllaitementExclisifSixMois
    };
    switch (key) {
      case 1:
        return (
          <PatientForm
            patientFormDAte={patientFormData}
            NextStep={NextStep}
            setadressePatient={setadressePatient}
            setSexePatient={setSexePatient}
            setDiversificationAliment={setDiversificationAliment}
            setPostNomPatient={setPostNomPatient}
            setPerimetreBrachail={setPerimetreBrachail}
            SetDataPatient={SetDataPatient}
            setPrenomPatient={setPrenomPatient}
            setNomPatient={setNomPatient}
            setTaille={setTaille}
            setPerimetreCranien={setPerimetreCranien}
            setModeArriver={setModeArriver}
            setPoidsActuel={setPoidsActuel}
            setFistNamePatient={setFistNamePatient}
            setTraitementNutritionnelAutre={setTraitementNutritionnelAutre}
            setAgeFinAllaitement={setAgeFinAllaitement}
            setProvenancePatient={setProvenancePatient}
            setConstitutionAliment={setConstitutionAliment}
            setPoidsNaissance={setPoidsNaissance}
            setTraitementNutritionnel={setTraitementNutritionnel}
            setDataNaissancePatient={setDataNaissancePatient}
            setTypeMalnutrition={setTypeMalnutrition}
            setExplicationAutre={setExplicationAutre}
            setTelephone={setTelephone}
            setExplicationProvenance={setExplicationProvenance}
            setAllaitementExclisifSixMois={setAllaitementExclisifSixMois}
          />
        );
      case 2:
        return (
          <CauseForm
            DataPatient={DataPatient}
            SetDataPatient={SetDataPatient}
            PrevStep={PrevStep}
            NextStep={NextStep}
          />
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

  return isAuth ? (
    <Page>
      {/* <Box sx={{ pb: 5, position: 'fixed', top: 50, zIndex: 9900 }}>
        <Typography variant="h4">Nouveau Patient</Typography>
      </Box> */}
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
      <Stack direction={{ xs: 'column', sm: 'row' }} sx={{ justifyContent: 'center' }}>
        {FormPatientInfo(Step)}
      </Stack>
    </Page>
  ) : (
    <Navigate to="/" state={{ from: location }} />
  );
}
