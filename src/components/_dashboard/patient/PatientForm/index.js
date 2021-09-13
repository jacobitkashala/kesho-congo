import * as Yup from 'yup';
import propTypes from 'prop-types';
import { useState } from 'react';
import { useFormik, Form, FormikProvider } from 'formik';
// import { useNavigate } from 'react-router-dom';

// material
import {
  Stack,
  TextField,
  // Typography,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormLabel,
  Grid,
  InputLabel,
  Select
  // styled
  // getCheckboxUtilityClass
} from '@material-ui/core';
import { LoadingButton } from '@material-ui/lab';

// ----------------------------------------------------------------------
PatientForm.propTypes = {
  NextStep: propTypes.func,
  SetDataPatient: propTypes.func,
  setPrenomPatient: propTypes.func,
  setNomPatient: propTypes.func,
  DataPatient: propTypes.object,
  prenomPatient: propTypes.string,
  nomPatient: propTypes.string
};

export default function PatientForm({
  setPrenomPatient,
  prenomPatient,
  NextStep,
  SetDataPatient,
  nomPatient,
  setNomPatient
}) {
  const [allaitement, setAllaitement] = useState(false);
  const [provenance, setProvenance] = useState(true);
  const [modeArriver, setModeArriver] = useState(true);
  const [traitementNutri, setTraitementNutri] = useState(true);

  console.log(nomPatient, prenomPatient);
  const RegisterSchema = Yup.object().shape({
    taille: Yup.number('un chiffre requis').required('Taille requis'),
    ExplicationAutre: Yup.string(),
    allaitementExclisifSixMois: Yup.string().required('Radio requis'),
    nom_patient: Yup.string().required('Nom requis'),
    poidsActuel: Yup.number('un chiffre requis').required('Poinds requis'),
    peri_cranien: Yup.number('un chiffre requis').required('Perimetre cranien requis'),
    prenom_patient: Yup.string().required('Prenom requis'),
    peri_brachail: Yup.number('un chiffre requis').required('Perimetre brachial requis'),
    postnom_patient: Yup.string().required('Postnom requis'),
    telephone: Yup.string().required('téléphone requis'),
    diversification_aliment: Yup.string().required('diversification requis'),
    sexe_patient: Yup.string().required('Sexe requis'),
    dataNaissancePatient: Yup.date().required('Data de naissance requis'),
    constitutionAliment: Yup.string().required('constitution aliment requis'),
    provenance_patient: Yup.string().required('Provenance requiq'),
    mode_arrive: Yup.string().required('champs requis'),
    typeMalnutrition: Yup.string().required('Type malnutriton requis'),
    poids_naissance: Yup.number('un chiffre requis').required('poids naissance requis'),
    traitementNutritionnel: Yup.string(),
    traitementNutritionnelAutre: Yup.string(),
    adresse_patient: Yup.string().required('champs requis'),
    ExplicationProvenance: Yup.string(),
    ageFinAllaitement: Yup.number('un chiffre requis')
  });

  const formik = useFormik({
    initialValues: {
      taille: '',
      poidsActuel: '',
      peri_cranien: '',
      prenom_patient: '',
      nom_patient: '',
      postnom_patient: '',
      telephone: '',
      diversification_aliment: '',
      sexe_patient: '',
      dataNaissancePatient: '',
      constitutionAliment: '',
      provenance_patient: '',
      adresse_patient: '',
      mode_arrive: '',
      ageFinAllaitement: '',
      traitementNutritionnelAutre: '',
      poids_naissance: '',
      traitementNutritionnel: '',
      peri_brachail: '',
      typeMalnutrition: '',
      ExplicationAutre: '',
      ExplicationProvenance: '',
      allaitementExclisifSixMois: ''
    },
    validationSchema: RegisterSchema,
    onSubmit: (indentity) => {
      const { prenom_patient, nom_patient } = indentity;
      SetDataPatient((current) => ({ ...current, indentity }));
      setPrenomPatient(prenom_patient);
      console.log(prenom_patient, nom_patient);
      setNomPatient(nom_patient);
      NextStep();
    }
  });

  const { errors, setFieldValue, touched, handleSubmit, isSubmitting, getFieldProps } = formik;

  const handleChangeAllaitement = (event) => {
    const { value } = event.target;
    setFieldValue('allaitementExclisifSixMois', value);
    if (value) {
      setAllaitement((prevState) => !prevState);
    }
  };

  const handleChangeProvenance = (event) => {
    const { value } = event.target;
    setFieldValue('provenance_patient', value);
    if (value === 'Autres') {
      setProvenance(false);
    } else {
      setProvenance(true);
    }
  };
  const handleChangeModeArriver = (event) => {
    const { value } = event.target;
    setFieldValue('mode_arrive', value);
    if (value === 'Autres') {
      setModeArriver(false);
    } else {
      setModeArriver(true);
    }
  };
  const handleChangeTraitementNutri = (event) => {
    const { value } = event.target;
    setFieldValue('traitementNutritionnel', value);

    if (value === 'Autres') {
      setTraitementNutri(false);
    } else {
      setTraitementNutri(true);
    }
  };

  return (
    <>
      <FormikProvider value={formik}>
        <Form autoComplete="off" onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={6}>
              <Stack spacing={3}>
                <TextField
                  sx={{ padding: '2px' }}
                  fullWidth
                  label="Prénom"
                  defaultValue={prenomPatient}
                  {...getFieldProps('prenom_patient')}
                  error={Boolean(touched.prenom_patient && errors.prenom_patient)}
                  helperText={touched.prenom_patient && errors.prenom_patient}
                />
                <TextField
                  sx={{ padding: '2px' }}
                  autoComplete="name"
                  fullWidth
                  label="Nom"
                  value={nomPatient}
                  {...getFieldProps('nom_patient')}
                  error={Boolean(touched.nom_patient && errors.nom_patient)}
                  helperText={touched.nom_patient && errors.nom_patient}
                />
                <TextField
                  sx={{ padding: '2px' }}
                  fullWidth
                  autoComplete="lastname"
                  type="text"
                  label={prenomPatient}
                  defaultValue={prenomPatient}
                  // defaultValue={DataPatient.postnom_patient}
                  {...getFieldProps('postnom_patient')}
                  error={Boolean(touched.postnom_patient && errors.postnom_patient)}
                  helperText={touched.postnom_patient && errors.postnom_patient}
                />
                <TextField
                  sx={{ padding: '2px' }}
                  fullWidth
                  autoComplete="tel"
                  type="tel"
                  label="Téléphone"
                  // defaultValue={DataPatient.telephone}
                  {...getFieldProps('telephone')}
                  error={Boolean(touched.telephone && errors.telephone)}
                  helperText={touched.telephone && errors.telephone}
                />
                <TextField
                  sx={{ padding: '2px' }}
                  fullWidth
                  label="Adresse patient"
                  // defaultValue={DataPatient.adresse_patient}
                  {...getFieldProps('adresse_patient')}
                  helperText={touched.adresse_patient && errors.adresse_patient}
                  error={Boolean(touched.adresse_patient && errors.adresse_patient)}
                />
                <TextField
                  sx={{ padding: '2px' }}
                  fullWidth
                  label="Poid naissance (gr)"
                  //  defaultValue={DataPatient.poids_naissance}
                  {...getFieldProps('poids_naissance')}
                  helperText={touched.poids_naissance && errors.poids_naissance}
                  error={Boolean(touched.poids_naissance && errors.poids_naissance)}
                />
                <TextField
                  fullWidth
                  sx={{ padding: '2px' }}
                  //  defaultValue={DataPatient.poidsActuel}
                  label="Poids actuelle (kg)"
                  {...getFieldProps('poidsActuel')}
                  helperText={touched.poidsActuel && errors.poidsActuel}
                  error={Boolean(touched.poidsActuel && errors.poidsActuel)}
                />
                <RadioGroup
                  {...getFieldProps('sexe_patient')}
                  error={Boolean(touched.sexe_patient && errors.sexe_patient)}
                  helperText={touched.sexe_patient && errors.sexe_patient}
                  // setValues={  DataPatient.Sexe}
                >
                  <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    style={{ borderColor: 'red' }}
                    sx={{ display: 'flex', alignItems: 'center' }}
                    spacing={1}
                  >
                    <FormLabel component="label">Sexe:</FormLabel>
                    <Stack direction={{ xs: 'row', sm: 'row' }}>
                      <FormControlLabel value="F" control={<Radio />} label="F" />
                      <FormControlLabel value="M" control={<Radio />} label="M" />
                    </Stack>
                  </Stack>
                </RadioGroup>
                <Select
                  sx={{ padding: '2px' }}
                  native
                  // {...getFieldProps('mode_arrive')}
                  onChange={handleChangeModeArriver}
                  error={Boolean(touched.mode_arrive && errors.mode_arrive)}
                  helperText={touched.mode_arrive && errors.mode_arrive}
                >
                  <option value="" selected disabled hidden>
                    Mode d'arriver
                  </option>
                  <option value="De la maison"> De la maison</option>
                  <option value="UNT">UNT</option>
                  <option value="Autres">Autres</option>
                </Select>
                <TextField
                  sx={{ padding: '2px' }}
                  fullWidth
                  label="Si le mode d'arriver est autre veuillez préciser"
                  {...getFieldProps('ExplicationAutre')}
                  disabled={modeArriver}
                  // defaultValue={DataPatient.ExplicationAutre}
                  helperText={touched.ExplicationAutre && errors.ExplicationAutre}
                  error={Boolean(touched.ExplicationAutre && errors.ExplicationAutre)}
                />
                <Select
                  sx={{ padding: '2px' }}
                  native
                  // {...getFieldProps('traitementNutritionnel')}
                  onChange={handleChangeTraitementNutri}
                  helperText={touched.traitementNutritionnel && errors.traitementNutritionnel}
                  error={Boolean(touched.traitementNutritionnel && errors.traitementNutritionnel)}
                >
                  <option value="" selected disabled hidden>
                    Traitement nutritionnel
                  </option>
                  <option value="ATPE">ATPE</option>
                  <option value="Plumpy-nut">Plumpy-nut</option>
                  <option value="Autres">Autres</option>
                </Select>
                <TextField
                  sx={{ padding: '2px' }}
                  fullWidth
                  label="Si le traitement nutritionnel est autre veuillez préciser"
                  // defaultValue={DataPatient.traitementNutritionnelAutre}
                  disabled={traitementNutri}
                  helperText={
                    touched.traitementNutritionnelAutre && errors.traitementNutritionnelAutre
                  }
                  {...getFieldProps('traitementNutritionnelAutre')}
                  error={Boolean(
                    touched.traitementNutritionnelAutre && errors.traitementNutritionnelAutre
                  )}
                />
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Stack spacing={3}>
                <Select
                  native
                  sx={{ padding: '2px' }}
                  // {...getFieldProps('provenance_patient')}
                  onChange={handleChangeProvenance}
                  // value={DataPatient.Provenace}
                  helperText={touched.provenance_patient && errors.provenance_patient}
                  error={Boolean(touched.provenance_patient && errors.provenance_patient)}
                >
                  <option defaultValue="" selected disabled hidden>
                    Provenance Patient
                  </option>
                  <option value="kadutu">Kadutu</option>
                  <option value="Bagira">Bagira</option>
                  <option value="Ibabda">Ibanda</option>
                  <option value="Hors ville">Hors ville</option>
                  <option value="Autres">Autres</option>
                </Select>
                <TextField
                  sx={{ padding: '2px' }}
                  fullWidth
                  label="Si la provenance est autre veuillez préciser"
                  {...getFieldProps('ExplicationProvenance')}
                  disabled={provenance}
                  error={Boolean(touched.ExplicationProvenance && errors.ExplicationProvenance)}
                  helperText={touched.ExplicationProvenance && errors.ExplicationProvenance}
                />
                <InputLabel>Date de naissance</InputLabel>
                <TextField
                  sx={{ padding: '2px' }}
                  type="date"
                  fullWidth
                  {...getFieldProps('dataNaissancePatient')}
                  helperText={touched.dataNaissancePatient && errors.dataNaissancePatient}
                  error={Boolean(touched.dataNaissancePatient && errors.dataNaissancePatient)}
                />
                <RadioGroup
                  // {...getFieldProps('allaitementExclisifSixMois')}
                  helperText={
                    touched.allaitementExclisifSixMois && errors.allaitementExclisifSixMois
                  }
                  error={Boolean(
                    touched.allaitementExclisifSixMois && errors.allaitementExclisifSixMois
                  )}
                  onChange={handleChangeAllaitement}
                >
                  <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    sx={{ display: 'flex', alignItems: 'center' }}
                    spacing={1}
                  >
                    <FormLabel component="label">Allaitement exclusif 6mois:</FormLabel>
                    <Stack direction={{ xs: 'row', sm: 'row' }}>
                      <FormControlLabel value="true" control={<Radio />} label="Oui" />
                      <FormControlLabel value="false" control={<Radio />} label="Non" />
                    </Stack>
                  </Stack>
                </RadioGroup>
                <TextField
                  sx={{ padding: '2px' }}
                  fullWidth
                  disabled={allaitement}
                  label="Si non à quel âge fin allaitement (mois)"
                  {...getFieldProps('ageFinAllaitement')}
                  //  defaultValue={DataPatient.ageFinAllaitement}
                  helperText={touched.ageFinAllaitement && errors.ageFinAllaitement}
                  error={Boolean(touched.ageFinAllaitement && errors.ageFinAllaitement)}
                />
                <TextField
                  sx={{ padding: '2px' }}
                  label="Constitution/type d’aliment"
                  {...getFieldProps('constitutionAliment')}
                  // defaultValue={DataPatient.constitutionAliment}
                  helperText={touched.constitutionAliment && errors.constitutionAliment}
                  error={Boolean(touched.constitutionAliment && errors.constitutionAliment)}
                />
                <TextField
                  sx={{ padding: '2px' }}
                  fullWidth
                  label="périmètre crânien "
                  {...getFieldProps('peri_cranien')}
                  // defaultValue={DataPatient.peri_cranien}
                  helperText={touched.peri_cranien && errors.peri_cranien}
                  error={Boolean(touched.peri_cranien && errors.peri_cranien)}
                />
                <TextField
                  sx={{ padding: '2px' }}
                  // required
                  fullWidth
                  label="périmètre branchial"
                  // defaultValue={DataPatient.peri_brachail}
                  {...getFieldProps('peri_brachail')}
                  helperText={touched.peri_brachail && errors.peri_brachail}
                  error={Boolean(touched.peri_brachail && errors.peri_brachail)}
                />
                <TextField
                  sx={{ padding: '2px' }}
                  // required
                  fullWidth
                  label="Taille en Cm"
                  // defaultValue={DataPatient.taille}
                  {...getFieldProps('taille')}
                  error={Boolean(touched.taille && errors.taille)}
                  helperText={touched.taille && errors.taille}
                />
                <TextField
                  sx={{ padding: '2px' }}
                  // required
                  fullWidth
                  label="Diversification aliment"
                  {...getFieldProps('diversification_aliment')}
                  // defaultValue={DataPatient.diversification_aliment}
                  helperText={touched.diversification_aliment && errors.diversification_aliment}
                  error={Boolean(touched.diversification_aliment && errors.diversification_aliment)}
                />
                <Select
                  native
                  sx={{ padding: '2px' }}
                  // defaultValue={identite.typeMalnutrition}
                  {...getFieldProps('typeMalnutrition')}
                  helperText={touched.typeMalnutrition && errors.typeMalnutrition}
                  error={Boolean(touched.typeMalnutrition && errors.typeMalnutrition)}
                >
                  <option value="" selected disabled hidden>
                    Form de malnutrition
                  </option>
                  <option value="MAM">Malnutrition aigue modéré</option>
                  <option value="MAS">Malnutrition aigue sévère</option>
                  <option value="MAC">Malnutrition aigue chronique</option>
                </Select>
              </Stack>
            </Grid>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              sx={{ display: 'flex', justifyContent: 'center', margin: 'auto' }}
            >
              <LoadingButton
                type="submit"
                variant="contained"
                size="large"
                loading={isSubmitting}
                sx={{
                  justifyContent: 'center',
                  width: 200,
                  margin: 'auto',
                  marginTop: '40px',
                  display: 'flex'
                }}
              >
                Suivant
              </LoadingButton>
            </Stack>
          </Grid>
          {/* </Div> */}
        </Form>
      </FormikProvider>
    </>
  );
}
