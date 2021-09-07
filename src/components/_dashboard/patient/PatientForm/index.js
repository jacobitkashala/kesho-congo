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
  // InputLabel,
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
  width: '200%',
  position: 'relative',
  borderRadius: '15px',
  paddingTop: '30px',
  paddingBottom: '80px',
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
  height: '100%',
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
    nom_patient: Yup.string().required('*'),
    postnom_patient: Yup.string().required('*'),
    prenom_patient: Yup.string().required('*'),
    poids_naissance: Yup.string().required('*'),
    sexe_patient: Yup.string().required('*'),
    age_patient: Yup.string().required('*'),
    provenance_patient: Yup.string().required('*'),
    mode_arrive: Yup.string().min(1).required('*'),
    fin_allaitement: Yup.number().required('*'),
    // mois_finAllaitement: Yup.string().min(1).required('*'),
    diversification_aliment: Yup.string().max(50).required('*'),
    telephone: Yup.string().min(10).max(13).required('*'),
    adresse_patient: Yup.string().min(2).max(50).required('*')
  });

  const formik = useFormik({
    initialValues: {
      prenom_patient: '',
      nom_patient: '',
      postnom_patient: '',
      telephone: '',
      diversification_aliment: '',
      // mois_fin_allaitement: '',
      sexe_patient: '',
      age_patient: '',
      provenance_patient: '',
      adresse_patient: '',
      mode_arrive: '',
      explicationAutre: '',
      fin_allaitement: '',
      explicationProvenance: '',
      poids_naissance: ''
    },
    validationSchema: RegisterSchema,
    onSubmit: (indentity) => {
      SetDataPatient((current) => ({ ...current, indentity }));
      SetIdentiteData(indentity);
      NextStep();
      console.log(IdentiteData);
    }
  });

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps, values } = formik;
  console.log(errors);
  console.log(values);
  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Div>
          {/* <Typography variant="h5" pb={4} sx={{ textAlign: 'center' }}>
            Identité
          </Typography> */}
          <SubDiv>
            <SubDivContenaire>
              <Stack spacing={3}>
                <TextField
                  sx={{ width: '80%', padding: '2px' }}
                  fullWidth
                  type="text"
                  label="Prénom"
                  value={values.prenom_patient}
                  {...getFieldProps('prenom_patient')}
                  error={Boolean(touched.prenom_patient && errors.prenom_patient)}
                />
                <TextField
                  sx={{ width: '80%', padding: '2px' }}
                  fullWidth
                  autoComplete="name"
                  type="text"
                  label="Nom"
                  value={values.nom_patient}
                  {...getFieldProps('nom_patient')}
                  error={Boolean(touched.nom_patient && errors.nom_patient)}
                />
                <TextField
                  sx={{ width: '80%', padding: '2px' }}
                  fullWidth
                  autoComplete="lastname"
                  type="text"
                  label="Postnom"
                  // value={values.}
                  {...getFieldProps('postnom_patient')}
                  error={Boolean(touched.postnom_patient && errors.postnom_patient)}
                />
                <TextField
                  sx={{ width: '80%', padding: '2px' }}
                  fullWidth
                  label="Adresse patient"
                  value={values.adresse_patient}
                  {...getFieldProps('adresse_patient')}
                  error={Boolean(touched.adresse_patient && errors.adresse_patient)}
                />

                <RadioGroup
                  {...getFieldProps('sexe_patient')}
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
                  sx={{ width: '80%', padding: '2px' }}
                  native
                  // value={values.ModeArrive}
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
                  sx={{ width: '80%', padding: '2px' }}
                  label="Si le mode d'arriver est autre veuillez préciser"
                  {...getFieldProps('ExplicationAutre')}
                  value={values.ExplicationAutre}
                  error={Boolean(touched.ExplicationAutre && errors.ExplicationAutre)}
                />
              </Stack>
            </SubDivContenaire>
            <SubDivContenaire>
              <Stack spacing={3}>
                <TextField
                  sx={{ width: '80%', padding: '2px' }}
                  fullWidth
                  label="Age (en mois)"
                  {...getFieldProps('age_patient')}
                  value={values.age_patient}
                  error={Boolean(touched.age_patient && errors.age_patient)}
                />
                <TextField
                  sx={{ width: '80%', padding: '2px' }}
                  fullWidth
                  label="Poid naissance (gr)"
                  value={values.poids_naissance}
                  {...getFieldProps('poids_naissance')}
                  error={Boolean(touched.poids_naissance && errors.poids_naissance)}
                />
                <TextField
                  sx={{ width: '80%', padding: '2px' }}
                  fullWidth
                  value={values.fin_allaitement}
                  label="Nombre de mois allaitement"
                  {...getFieldProps('fin_allaitement')}
                  error={Boolean(touched.fin_allaitement && errors.fin_allaitement)}
                />
                <TextField
                  sx={{ width: '80%', padding: '2px' }}
                  fullWidth
                  type="tel"
                  label="Téléphone"
                  value={values.telephone}
                  {...getFieldProps('telephone')}
                  error={Boolean(touched.telephone && errors.telephone)}
                />
                <TextField
                  sx={{ width: '80%', padding: '2px' }}
                  fullWidth
                  label="Diversification aliment"
                  {...getFieldProps('diversification_aliment')}
                  error={Boolean(touched.diversification_aliment && errors.diversification_aliment)}
                />
                <Select
                  native
                  sx={{ width: '80%', padding: '2px' }}
                  // value={values.Provenace}
                  {...getFieldProps('provenance_patient')}
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
                  sx={{ width: '80%', padding: '2px' }}
                  label="Si la provenance est autre veuillez préciser"
                  {...getFieldProps('ExplicationProvenance')}
                  error={Boolean(touched.ExplicationProvenance && errors.ExplicationProvenance)}
                />
              </Stack>
            </SubDivContenaire>
          </SubDiv>
          <SubDiv />
          <LoadingButton
            size="large"
            type="submit"
            variant="contained"
            loading={isSubmitting}
            sx={{ width: 200, margin: 'auto', marginTop: '20px' }}
          >
            Suivant
          </LoadingButton>
        </Div>
      </Form>
    </FormikProvider>
  );
}
