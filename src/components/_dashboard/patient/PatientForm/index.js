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
  // Grid,
  InputLabel,
  Select,
  styled
  // getCheckboxUtilityClass
} from '@material-ui/core';
import { LoadingButton } from '@material-ui/lab';

// ----------------------------------------------------------------------
PatientForm.propTypes = {
  NextStep: propTypes.func,
  SetDataPatient: propTypes.func
};

const Div = styled('div')(() => ({
  height: '90%',
  width: '150%',
  position: 'relative',
  borderRadius: '15px',
  paddingTop: '30px',
  paddingBottom: '90px',
  left: '50%',
  transform: 'translate(-50%,0)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around'
}));

const SubDiv = styled('div')(() => ({
  height: '100%',
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between'
}));
const SubDivContenaire = styled('div')(() => ({
  width: '50%',
  position: 'relative',
  left: '30%',
  transform: 'translate(-50%,0)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between'
}));

export default function PatientForm({ NextStep, SetDataPatient }) {
  const [IdentiteData, SetIdentiteData] = useState({});
  const RegisterSchema = Yup.object().shape({
    poidsActuel: Yup.number('number').required('poids requis'),
    taille: Yup.number('number').required('taille requis'),
    peri_brachail: Yup.number('number').required('perimetre requis'),
    peri_cranien: Yup.number('number').required('perimetre requis'),
    nom_patient: Yup.string().required('nom requis'),
    constitutionAliment: Yup.string(),
    postnom_patient: Yup.string().required('postnon requis'),
    prenom_patient: Yup.string().required('prenom requis'),
    poids_naissance: Yup.number('number').required('poids requis'),
    sexe_patient: Yup.string().required('sexe requis'),
    dataNaissancePatient: Yup.date().required('date requis'),
    provenance_patient: Yup.string().required('provenance requis'),
    mode_arrive: Yup.string().required('mode arriver requis'),
    // fin_allaitement: Yup.number().required('*'),
    typeMalnutrition: Yup.string().required('type malnutrition requis'),
    traitementNutritionnelAutre: Yup.string(''),
    ageFinAllaitement: Yup.string(),
    traitementNutritionnel: Yup.string(),
    allaitementExclisif: Yup.string().required('allaitment requis'),
    // mois_finAllaitement: Yup.string().min(1).required('*'),
    diversification_aliment: Yup.string().required('*'),
    telephone: Yup.string().min(10).max(13).required('telephone requis'),
    adresse_patient: Yup.string().min(2).max(50).required('adresse requis')
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
      // mois_fin_allaitement: '',
      ageFinAlletement: '',
      sexe_patient: '',
      dataNaissancePatient: '',
      constitutionAliment: '',
      provenance_patient: '',
      adresse_patient: '',
      mode_arrive: '',
      explicationAutre: '',
      // fin_allaitement: '',
      ageFinAllaitement: '',
      traitementNutritionnelAutre: '',
      // explicationProvenance: '',
      poids_naissance: '',
      traitementNutritionnel: '',
      peri_brachail: '',
      typeMalnutrition: ''
    },
    validationSchema: RegisterSchema,
    onSubmit: (indentity) => {
      SetDataPatient((current) => ({ ...current, indentity }));
      SetIdentiteData(indentity);
      NextStep();
      // console.log(IdentiteData);
    }
  });

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps, values } = formik;
  // console.log(errors);
  // console.log(values);
  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Div>
          <SubDiv>
            <SubDivContenaire>
              <Stack spacing={3}>
                <TextField
                  sx={{ width: '90%', padding: '2px' }}
                  fullWidth
                  type="text"
                  label="Prénom"
                  value={values.prenom_patient}
                  {...getFieldProps('prenom_patient')}
                  error={Boolean(touched.prenom_patient && errors.prenom_patient)}
                  helperText={touched.prenom_patient && errors.prenom_patient}
                />
                <TextField
                  sx={{ width: '90%', padding: '2px' }}
                  fullWidth
                  autoComplete="name"
                  type="text"
                  label="Nom"
                  value={values.nom_patient}
                  {...getFieldProps('nom_patient')}
                  error={Boolean(touched.nom_patient && errors.nom_patient)}
                  helperText={touched.nom_patient && errors.nom_patient}
                />
                <TextField
                  sx={{ width: '90%', padding: '2px' }}
                  fullWidth
                  autoComplete="lastname"
                  type="text"
                  label="Postnom"
                  // value={values.}
                  {...getFieldProps('postnom_patient')}
                  error={Boolean(touched.postnom_patient && errors.postnom_patient)}
                  helperText={touched.postnom_patient && errors.postnom_patient}
                />
                <TextField
                  sx={{ width: '90%', padding: '2px' }}
                  fullWidth
                  autoComplete="tel"
                  type="tel"
                  label="Téléphone"
                  value={values.telephone}
                  {...getFieldProps('telephone')}
                  error={Boolean(touched.telephone && errors.telephone)}
                  helperText={touched.telephone && errors.telephone}
                />
                <TextField
                  sx={{ width: '90%', padding: '2px' }}
                  fullWidth
                  label="Adresse patient"
                  value={values.adresse_patient}
                  {...getFieldProps('adresse_patient')}
                  helperText={touched.adresse_patient && errors.adresse_patient}
                  error={Boolean(touched.adresse_patient && errors.adresse_patient)}
                />
                <TextField
                  sx={{ width: '90%', padding: '2px' }}
                  fullWidth
                  label="Poid naissance (gr)"
                  value={values.poids_naissance}
                  {...getFieldProps('poids_naissance')}
                  helperText={touched.poids_naissance && errors.poids_naissance}
                  error={Boolean(touched.poids_naissance && errors.poids_naissance)}
                />
                <TextField
                  sx={{ width: '90%', padding: '2px' }}
                  fullWidth
                  value={values.poidsActuel}
                  label="Poids actuelle"
                  {...getFieldProps('poidsActuel')}
                  helperText={touched.poidsActuel && errors.poidsActuel}
                  error={Boolean(touched.poidsActuel && errors.poidsActuel)}
                />
                {/* <TextField
                  sx={{ width: '90%', padding: '2px' }}
                  fullWidth
                  value={values.fin_allaitement}
                  label="Nombre de mois allaitement"
                  {...getFieldProps('fin_allaitement')}
                  error={Boolean(touched.fin_allaitement && errors.fin_allaitement)}
                /> */}
                <RadioGroup
                  {...getFieldProps('sexe_patient')}
                  helperText={touched.sexe_patient && errors.sexe_patient}
                  error={Boolean(touched.sexe_patient && errors.sexe_patient)}
                  // value={values.Sexe}
                  // setValues={values.Sexe}
                >
                  <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    sx={{ display: 'flex', alignItems: 'center' }}
                    spacing={1}
                    error={Boolean(touched.sexe_patient && errors.sexe_patient)}
                  >
                    <FormLabel component="label">Sexe:</FormLabel>
                    <FormControlLabel value="F" control={<Radio />} label="F" />
                    <FormControlLabel value="M" control={<Radio />} label="M" />
                  </Stack>
                </RadioGroup>
                <Select
                  sx={{ width: '90%', padding: '2px' }}
                  native
                  // value={values.ModeArrive}
                  {...getFieldProps('mode_arrive')}
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
                  sx={{ width: '90%', padding: '2px' }}
                  label="Si le mode d'arriver est autre veuillez préciser"
                  {...getFieldProps('ExplicationAutre')}
                  value={values.ExplicationAutre}
                  error={Boolean(touched.ExplicationAutre && errors.ExplicationAutre)}
                />
                <Select
                  sx={{ width: '90%', padding: '2px' }}
                  native
                  // value={values.ModeArrive}
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
                  sx={{ width: '90%', padding: '2px' }}
                  label="Si le traitement nutritionnel est autre veuillez préciser"
                  {...getFieldProps('traitementNutritionnelAutre')}
                  value={values.traitementNutritionnelAutre}
                  error={Boolean(
                    touched.traitementNutritionnelAutre && errors.traitementNutritionnelAutre
                  )}
                />
              </Stack>
            </SubDivContenaire>
            <SubDivContenaire>
              <Stack spacing={3}>
                <Select
                  native
                  sx={{ width: '90%', padding: '2px' }}
                  // value={values.Provenace}
                  {...getFieldProps('provenance_patient')}
                  error={Boolean(touched.provenance_patient && errors.provenance_patient)}
                  helperText={touched.provenance_patient && errors.provenance_patient}
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
                  sx={{ width: '90%', padding: '2px' }}
                  label="Si la provenance est autre veuillez préciser"
                  {...getFieldProps('ExplicationProvenance')}
                  error={Boolean(touched.ExplicationProvenance && errors.ExplicationProvenance)}
                  helperText={touched.ExplicationProvenance && errors.ExplicationProvenance}
                />
                <InputLabel>Date de naissance</InputLabel>
                <TextField
                  sx={{ width: '90%', padding: '2px' }}
                  type="date"
                  fullWidth
                  // label="Age (en mois)"
                  {...getFieldProps('dataNaissancePatient')}
                  value={values.dataNaissancePatient}
                  error={Boolean(touched.dataNaissancePatient && errors.dataNaissancePatient)}
                />
                <RadioGroup
                  {...getFieldProps('allaitementExclisif')}
                  error={Boolean(touched.allaitementExclisif && errors.allaitementExclisif)}
                  // value={values.Sexe}
                  // setValues={values.Sexe}
                >
                  <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    sx={{ display: 'flex', alignItems: 'center' }}
                    spacing={1}
                    error={Boolean(touched.allaitementExclisif && errors.allaitementExclisif)}
                  >
                    <FormLabel component="label">Allaitement exclusif jusqu’à 6mois:</FormLabel>
                    <FormControlLabel value="Oui" control={<Radio />} label="Oui" />
                    <FormControlLabel value="Non" control={<Radio />} label="Non" />
                  </Stack>
                </RadioGroup>
                <TextField
                  sx={{ width: '90%', padding: '2px' }}
                  fullWidth
                  label="Si non à quel âge fin allaitement (mois)"
                  {...getFieldProps('ageFinAllaitement')}
                  value={values.ageFinAllaitement}
                  error={Boolean(touched.ageFinAllaitement && errors.ageFinAllaitement)}
                />
                {/* <TextField
                  sx={{ width: '90%', padding: '2px' }}
                  fullWidth
                  label=" Age fin alletement (mois)"
                  {...getFieldProps('ageFinAlletement')}
                  value={values.ageFinAlletement}
                  error={Boolean(touched.ageFinAlletement && errors.ageFinAlletement)}
                /> */}

                <TextField
                  sx={{ width: '90%', padding: '2px' }}
                  fullWidth
                  label="Constitution/type d’aliment"
                  {...getFieldProps('constitutionAliment')}
                  value={values.constitutionAliment}
                  helperText={touched.constitutionAliment && errors.constitutionAliment}
                  error={Boolean(touched.constitutionAliment && errors.constitutionAliment)}
                />
                <TextField
                  sx={{ width: '90%', padding: '2px' }}
                  fullWidth
                  label="périmètre crânien "
                  {...getFieldProps('peri_cranien')}
                  value={values.peri_cranien}
                  helperText={touched.peri_cranien && errors.peri_cranien}
                  error={Boolean(touched.peri_cranien && errors.peri_cranien)}
                />
                <TextField
                  sx={{ width: '90%', padding: '2px' }}
                  fullWidth
                  label="périmètre branchial"
                  value={values.peri_brachail}
                  {...getFieldProps('peri_brachail')}
                  helperText={touched.prenom_brachial && errors.prenom_brachail}
                  error={Boolean(touched.peri_brachail && errors.peri_brachail)}
                />
                <TextField
                  sx={{ width: '90%', padding: '2px' }}
                  fullWidth
                  type="tel"
                  label="Taille en Cm"
                  value={values.taille}
                  {...getFieldProps('taille')}
                  helperText={touched.taille && errors.taille}
                  error={Boolean(touched.taille && errors.taille)}
                />
                <TextField
                  sx={{ width: '90%', padding: '2px' }}
                  fullWidth
                  label="Diversification aliment"
                  {...getFieldProps('diversification_aliment')}
                  helperText={touched.diversification_aliment && errors.diversification_aliment}
                  error={Boolean(touched.diversification_aliment && errors.diversification_aliment)}
                />
                <Select
                  native
                  sx={{ width: '90%', padding: '2px' }}
                  // value={values.Provenace}
                  {...getFieldProps('typeMalnutrition')}
                  error={Boolean(touched.typeMalnutrition && errors.typeMalnutrition)}
                >
                  <option value="" selected disabled hidden>
                    Form de malnutrition
                  </option>
                  <option value="Malnutrition aiguê modéré">Malnutrition aigue modéré</option>
                  <option value="Malnutrition aiguê sévère">Malnutrition aigue sévère</option>
                </Select>
              </Stack>
            </SubDivContenaire>
          </SubDiv>
          <SubDiv />
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}
          >
            {/* <LoadingButton
              size="large"
              type="button"
              variant="contained"
              onClick={() => {
                PrevStep();
              }}
              sx={{ width: 200, marginLeft: '20px', marginTop: '20px' }}
            >
              Précédant
            </LoadingButton> */}
            <LoadingButton
              type="submit"
              variant="contained"
              size="large"
              loading={isSubmitting}
              sx={{ width: 200, margin: 'auto', marginTop: '40px' }}
            >
              Suivant
            </LoadingButton>
          </Stack>
        </Div>
      </Form>
    </FormikProvider>
  );
}
