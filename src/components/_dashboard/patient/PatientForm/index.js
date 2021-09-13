import * as Yup from 'yup';
import propTypes from 'prop-types';
// import { useState, useEffect } from 'react';
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
  Select,
  styled
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
  const RegisterSchema = Yup.object().shape({
    taille: Yup.number().required('champs requis'),
    ExplicationAutre: Yup.string(),
    allaitementExclisifSixMois: Yup.string().required('champs requis'),
    nom_patient: Yup.string().required('champs requis'),
    poidsActuel: Yup.number().required('champs requis'),
    peri_cranien: Yup.number().required('champs requis'),
    prenom_patient: Yup.string().required('champs requis'),
    peri_brachail: Yup.number().required('champs requis'),
    postnom_patient: Yup.string().required('champs requis'),
    telephone: Yup.string().required('champs requis'),
    diversification_aliment: Yup.string().required('champs requis'),
    sexe_patient: Yup.string().required('champs requis'),
    dataNaissancePatient: Yup.date().required('champs requis'),
    constitutionAliment: Yup.string().required('champs requis'),
    provenance_patient: Yup.string().required('champs requis'),
    mode_arrive: Yup.string().required('champs requis'),
    typeMalnutrition: Yup.string().required('champs requis'),
    poids_naissance: Yup.number().required('champs requis'),
    traitementNutritionnel: Yup.string(),
    traitementNutritionnelAutre: Yup.string(),
    adresse_patient: Yup.string().required('champs requis'),
    ExplicationProvenance: Yup.string(),
    ageFinAllaitement: Yup.number('nombre de mois')
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

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = formik;
  console.log(errors);
  console.log(prenomPatient, nomPatient);

  return (
    <>
      <FormikProvider value={formik}>
        <Form autoComplete="off" onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={6}>
              <Stack spacing={3}>
                <TextField
                  sx={{ padding: '2px' }}
                  required
                  fullWidth
                  label="Prénom"
                  defaultValue={prenomPatient}
                  {...getFieldProps('prenom_patient')}
                  error={Boolean(touched.prenom_patient && errors.prenom_patient)}
                  helperText={touched.nom_patient && errors.nom_patient}
                />
                <TextField
                  sx={{ padding: '2px' }}
                  autoComplete="name"
                  fullWidth
                  label="Nom"
                  required
                  defaultValue={nomPatient}
                  {...getFieldProps('nom_patient')}
                  error={Boolean(touched.nom_patient && errors.nom_patient)}
                  helperText={touched.nom_patient && errors.nom_patient}
                />
                <TextField
                  sx={{ padding: '2px' }}
                  fullWidth
                  autoComplete="lastname"
                  type="text"
                  required
                  label="Postnom"
                  // defaultValue={DataPatient.postnom_patient}
                  {...getFieldProps('postnom_patient')}
                  // error={Boolean(touched.postnom_patient && errors.postnom_patient)}
                  // // helperText={touched.postnom_patient && errors.postnom_patient}
                />
                <TextField
                  sx={{ padding: '2px' }}
                  fullWidth
                  autoComplete="tel"
                  required
                  type="tel"
                  label="Téléphone"
                  // defaultValue={DataPatient.telephone}
                  {...getFieldProps('telephone')}
                  error={Boolean(touched.telephone && errors.telephone)}
                  // // helperText={touched.telephone && errors.telephone}
                />
                <TextField
                  sx={{ padding: '2px' }}
                  fullWidth
                  required
                  label="Adresse patient"
                  // defaultValue={DataPatient.adresse_patient}
                  {...getFieldProps('adresse_patient')}
                  error={Boolean(touched.adresse_patient && errors.adresse_patient)}
                />
                <TextField
                  sx={{ padding: '2px' }}
                  fullWidth
                  required
                  label="Poid naissance (gr)"
                  //  defaultValue={DataPatient.poids_naissance}
                  {...getFieldProps('poids_naissance')}
                  error={Boolean(touched.poids_naissance && errors.poids_naissance)}
                />
                <TextField
                  fullWidth
                  sx={{ padding: '2px' }}
                  required
                  //  defaultValue={DataPatient.poidsActuel}
                  label="Poids actuelle (kg)"
                  {...getFieldProps('poidsActuel')}
                  error={Boolean(touched.poidsActuel && errors.poidsActuel)}
                />
                <RadioGroup
                  {...getFieldProps('sexe_patient')}
                  error={Boolean(touched.sexe_patient && errors.sexe_patient)}
                  required
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
                  required
                  {...getFieldProps('mode_arrive')}
                  error={Boolean(touched.mode_arrive && errors.mode_arrive)}
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
                  // defaultValue={DataPatient.ExplicationAutre}
                  error={Boolean(touched.ExplicationAutre && errors.ExplicationAutre)}
                />
                <Select
                  sx={{ padding: '2px' }}
                  native
                  required
                  {...getFieldProps('traitementNutritionnel')}
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
                  {...getFieldProps('traitementNutritionnelAutre')}
                  error={Boolean(
                    touched.traitementNutritionnelAutre && errors.traitementNutritionnelAutre
                  )}
                />
              </Stack>
            </Grid>
            {/* </SubDivContenaire> */}
            {/* <SubDivContenaire> */}
            <Grid item xs={12} sm={6} md={6}>
              <Stack spacing={3}>
                <Select
                  native
                  sx={{ padding: '2px' }}
                  required
                  {...getFieldProps('provenance_patient')}
                  // value={DataPatient.Provenace}
                  error={Boolean(touched.provenance_patient && errors.provenance_patient)}
                >
                  <option value="" selected disabled hidden>
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
                  error={Boolean(touched.ExplicationProvenance && errors.ExplicationProvenance)}
                  // helperText={touched.ExplicationProvenance && errors.ExplicationProvenance}
                />
                <InputLabel>Date de naissance</InputLabel>
                <TextField
                  sx={{ padding: '2px' }}
                  type="date"
                  fullWidth
                  required
                  {...getFieldProps('dataNaissancePatient')}
                  error={Boolean(touched.dataNaissancePatient && errors.dataNaissancePatient)}
                />
                <RadioGroup
                  required
                  {...getFieldProps('allaitementExclisifSixMois')}
                  error={Boolean(
                    touched.allaitementExclisifSixMois && errors.allaitementExclisifSixMois
                  )}
                >
                  <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    sx={{ display: 'flex', alignItems: 'center' }}
                    spacing={1}
                  >
                    <FormLabel component="label">Allaitement exclusif 6mois:</FormLabel>
                    <FormControlLabel value="true" control={<Radio />} label="Oui" />
                    <FormControlLabel value="false" control={<Radio />} label="Non" />
                  </Stack>
                </RadioGroup>
                <TextField
                  sx={{ padding: '2px' }}
                  fullWidth
                  label="Si non à quel âge fin allaitement (mois)"
                  {...getFieldProps('ageFinAllaitement')}
                  //  defaultValue={DataPatient.ageFinAllaitement}
                  error={Boolean(touched.ageFinAllaitement && errors.ageFinAllaitement)}
                />
                <TextField
                  sx={{ padding: '2px' }}
                  required
                  label="Constitution/type d’aliment"
                  {...getFieldProps('constitutionAliment')}
                  // defaultValue={DataPatient.constitutionAliment}
                  error={Boolean(touched.constitutionAliment && errors.constitutionAliment)}
                />
                <TextField
                  sx={{ padding: '2px' }}
                  required
                  fullWidth
                  label="périmètre crânien "
                  {...getFieldProps('peri_cranien')}
                  // defaultValue={DataPatient.peri_cranien}
                  error={Boolean(touched.peri_cranien && errors.peri_cranien)}
                />
                <TextField
                  sx={{ padding: '2px' }}
                  required
                  fullWidth
                  label="périmètre branchial"
                  // defaultValue={DataPatient.peri_brachail}
                  {...getFieldProps('peri_brachail')}
                  error={Boolean(touched.peri_brachail && errors.peri_brachail)}
                />
                <TextField
                  sx={{ padding: '2px' }}
                  required
                  fullWidth
                  label="Taille en Cm"
                  // defaultValue={DataPatient.taille}
                  {...getFieldProps('taille')}
                  error={Boolean(touched.taille && errors.taille)}
                />
                <TextField
                  sx={{ padding: '2px' }}
                  required
                  fullWidth
                  label="Diversification aliment"
                  {...getFieldProps('diversification_aliment')}
                  // defaultValue={DataPatient.diversification_aliment}
                  error={Boolean(touched.diversification_aliment && errors.diversification_aliment)}
                />
                <Select
                  native
                  sx={{ padding: '2px' }}
                  required
                  // defaultValue={identite.typeMalnutrition}
                  {...getFieldProps('typeMalnutrition')}
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
            {/* </SubDivContenaire> */}
            {/* </SubDiv> */}
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}
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
