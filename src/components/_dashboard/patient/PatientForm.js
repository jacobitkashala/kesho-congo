import * as Yup from 'yup';
import propTypes from 'prop-types';
import { useState } from 'react';
import { useFormik, Form, FormikProvider } from 'formik';
// import { useNavigate } from 'react-router-dom';

// material
import {
  Stack,
  TextField,
  Typography,
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
  // border: '0.5px solid lightgrey',
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
    Pb: Yup.number().required().positive(),
    Pc: Yup.number().required().positive(),
    Age: Yup.number().required().positive(),
    Telephone: Yup.string().min(10).max(13),
    Provenance: Yup.string().min(1).required(),
    Weight: Yup.number().required().positive(),
    Taille: Yup.number().required().positive(),
    Sexe: Yup.string().min(1).max(1).required(),
    Name: Yup.string().min(2).max(50).required(),
    LastName: Yup.string().min(2).max(50).required(),
    FirstName: Yup.string().min(2).max(50).required(),
    Adresse: Yup.string().min(2).max(50).required(),
    ExplicationAutre: Yup.string(),
    ModeArrive: Yup.string().required(),
    ExplicationProvenance: Yup.string()
  });

  const formik = useFormik({
    initialValues: {
      Pb: '',
      Pc: '',
      Age: '',
      Name: '',
      Sexe: '',
      Weight: '',
      Taille: '',
      Adresse: '',
      Telephone: '',
      FirstName: '',
      LastName: '',
      Provenance: '',
      ModeArrive: '',
      ExplicationAutre: '',
      ExplicationProvenance: ''
    },
    validationSchema: RegisterSchema,
    onSubmit: (indentity) => {
      SetDataPatient((current) => ({ ...current, indentity }));
      SetIdentiteData(indentity);
      NextStep();
    }
  });

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps, values } = formik;
  console.log(IdentiteData);
  console.log('ddd', values);
  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Div>
          <Typography variant="h5" pb={4} sx={{ textAlign: 'center' }}>
            Identité
          </Typography>
          <SubDiv>
            <SubDivContenaire>
              <Stack spacing={3}>
                <TextField
                  sx={{ width: '80%', padding: '2px' }}
                  fullWidth
                  autoComplete="prenom"
                  type="text"
                  label="Prénom"
                  value={values.FirstName}
                  {...getFieldProps('FirstName')}
                  error={Boolean(touched.FirstName && errors.FirstName)}
                />
                <TextField
                  sx={{ width: '80%', padding: '2px' }}
                  fullWidth
                  autoComplete="name"
                  type="text"
                  label="Nom"
                  value={values.Name}
                  // value={`${IdentiteData}?IdentiteData.Name`}
                  {...getFieldProps('Name')}
                  error={Boolean(touched.Name && errors.Name)}
                />
                <TextField
                  sx={{ width: '80%', padding: '2px' }}
                  fullWidth
                  autoComplete="lastname"
                  type="text"
                  label="Postnom"
                  value={values.LastName}
                  // value={`${IdentiteData}?IdentiteData.LastName`}
                  {...getFieldProps('LastName')}
                  error={Boolean(touched.LastName && errors.LastName)}
                />
                <TextField
                  sx={{ width: '80%', padding: '2px' }}
                  fullWidth
                  label="Adresse"
                  value={values.Adresse}
                  // value={`${IdentiteData}?IdentiteData.Adresse`}
                  {...getFieldProps('Adresse')}
                  error={Boolean(touched.Adresse && errors.Adresse)}
                />

                <RadioGroup
                  {...getFieldProps('Sexe')}
                  error={Boolean(touched.Sexe && errors.Sexe)}
                  value={values.Sexe}
                >
                  <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    sx={{ display: 'flex', alignItems: 'center' }}
                    spacing={1}
                  >
                    <FormLabel component="label">Sexe:</FormLabel>
                    <FormControlLabel value="F" control={<Radio />} label="F" />
                    <FormControlLabel value="M" control={<Radio />} label="M" />
                  </Stack>
                </RadioGroup>
                <InputLabel>Mode d'arriver</InputLabel>
                <Select
                  sx={{ width: '80%', padding: '2px' }}
                  native
                  value={values.ModeArrive}
                  {...getFieldProps('ModeArrive')}
                  error={Boolean(touched.ModeArrive && errors.ModeArrive)}
                >
                  <option value="selected"> -------------</option>
                  <option value="De la maison"> De la maison</option>
                  <option value="UNT">UNT</option>
                  <option value="Autres">Autres</option>
                </Select>
                <TextField
                  sx={{ width: '80%', padding: '2px' }}
                  label="Si autre veuillez préciser"
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
                  {...getFieldProps('Age')}
                  value={values.Age}
                  error={Boolean(touched.Age && errors.Age)}
                />
                <TextField
                  sx={{ width: '80%', padding: '2px' }}
                  fullWidth
                  label="Poid (gr)"
                  value={values.Weight}
                  {...getFieldProps('Weight')}
                  error={Boolean(touched.Weight && errors.Weight)}
                />
                <TextField
                  sx={{ width: '80%', padding: '2px' }}
                  fullWidth
                  value={values.Pc}
                  label="Pc (cm)"
                  {...getFieldProps('Pc')}
                  error={Boolean(touched.Pc && errors.Pc)}
                />
                <TextField
                  sx={{ width: '80%', padding: '2px' }}
                  fullWidth
                  autoComplete="Taille"
                  type="text"
                  label="Taille(cm)"
                  value={values.Taille}
                  {...getFieldProps('Taille')}
                  error={Boolean(touched.Taille && errors.Taille)}
                />
                <TextField
                  sx={{ width: '80%', padding: '2px' }}
                  fullWidth
                  label="PB (cm)"
                  {...getFieldProps('Pb')}
                  error={Boolean(touched.Pb && errors.Pb)}
                />
                <InputLabel>Provenance</InputLabel>
                <Select
                  native
                  sx={{ width: '80%', padding: '2px' }}
                  value={values.Provenace}
                  {...getFieldProps('Provenance')}
                  error={Boolean(touched.Provenance && errors.Provenace)}
                >
                  <option value="selected"> -------------</option>
                  <option value="kadutu">Kadutu</option>
                  <option value="Bagira">Bagira</option>
                  <option value="Ibabda">Ibanda</option>
                  <option value="Hors ville">Hors ville</option>
                  <option value="Autres">Autres</option>
                </Select>
                <TextField
                  sx={{ width: '80%', padding: '2px' }}
                  label="Si autre veuillez préciser"
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
