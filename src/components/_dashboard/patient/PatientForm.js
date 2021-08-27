import * as Yup from 'yup';
import propTypes from 'prop-types';
import { useState } from 'react';
import { useFormik, Form, FormikProvider } from 'formik';
// import { useNavigate } from 'react-router-dom';

// material
import {
  // Box,
  MenuItem,
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
} from '@material-ui/core';
import { LoadingButton } from '@material-ui/lab';

// ----------------------------------------------------------------------
PatientForm.propTypes = {
  NextStep: propTypes.func,
  SetDataPatient: propTypes.func
};

const Div = styled('div')(({ theme }) => ({
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

const ContentStyle = styled('div')(({ theme }) => ({
  color: '#343F59',
  maxWidth: 580,
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(12, 0)
}));

const SubDiv = styled('div')(({ theme }) => ({
  height: '100%',
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between'
  // border: '0.5px solid lightgrey'
}));
const SubDivContenaire = styled('div')(({ theme }) => ({
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
  const [SelectedItem, SetSelectedItem] = useState('');
  const [Provenance, SetProvenance] = useState('');

  const RegisterSchema = Yup.object().shape({
    Pb: Yup.number().required().positive(),
    Pc: Yup.number().required().positive(),
    Age: Yup.number().required().positive(),
    Weight: Yup.number().required().positive(),
    Taille: Yup.number().required().positive(),
    Name: Yup.string().min(2).max(50),
    FirstName: Yup.string().min(2).max(50),
    LastName: Yup.string().min(2).max(50),
    Telephone: Yup.string().min(10).max(13),
    Adresse: Yup.string().min(2).max(50),
    Sexe: Yup.string().min(1).max(1),
    Provenace: Yup.string().min(1),
    ModeArrive: Yup.string().min(1),
    Avatar: Yup.string().min(1)
  });

  const formik = useFormik({
    initialValues: {
      Pb: '',
      Pc: '',
      Age: '',
      Name: '',
      Sexe: '',
      Weight: '',
      Avatar: '',
      Taille: '',
      Adresse: '',
      Telephone: '',
      FirstName: '',
      LastName: '',
      Provenace: Provenance,
      ModeArrive: ''
    },
    validationSchema: RegisterSchema,
    onSubmit: (indentity) => {
      SetDataPatient((current) => ({ ...current, indentity }));
      NextStep();
    }
  });

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = formik;
  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Div>
          <Typography variant="h5">Identité</Typography>
          <SubDiv>
            <SubDivContenaire>
              <Stack spacing={3}>
                <TextField
                  sx={{ width: '80%', padding: '2px' }}
                  fullWidth
                  autoComplete="prenom"
                  type="text"
                  label="Prénom"
                  {...getFieldProps('FistName')}
                  error={Boolean(touched.FirstName && errors.FirstName)}
                  helperText={touched.FirstName && errors.FirstName}
                />
                <TextField
                  sx={{ width: '80%', padding: '2px' }}
                  fullWidth
                  autoComplete="name"
                  type="text"
                  label="Nom"
                  {...getFieldProps('Name')}
                  error={Boolean(touched.Name && errors.Name)}
                  helperText={touched.Name && errors.Name}
                />
                <TextField
                  sx={{ width: '80%', padding: '2px' }}
                  fullWidth
                  autoComplete="lastname"
                  type="text"
                  label="Postnom"
                  {...getFieldProps('LastName')}
                  error={Boolean(touched.LastName && errors.LastName)}
                  helperText={touched.LastName && errors.LastName}
                />
                <TextField
                  sx={{ width: '80%', padding: '2px' }}
                  fullWidth
                  label="Adresse"
                  {...getFieldProps('Adresse')}
                  error={Boolean(touched.Adresse && errors.Adresse)}
                  helperText={touched.Adresse && errors.Adresse}
                />
                <RadioGroup
                  // name="Parent_en_vie"
                  // {...getFieldProps('Sexe')}
                  onChange={(event) => {
                    console.log(event.target.value);
                  }}
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
                <InputLabel id="demo-simple-select-outlined-label">Mode d'arriver</InputLabel>
                <Select
                  sx={{ width: '80%', padding: '2px' }}
                  // labelId="demo-simple-select-outlined-label"
                  // id="demo-simple-select-outlined"
                  label="Mode d'arriver"
                  // {...getFieldProps('ModeArrive')}
                  // error={Boolean(touched.ModeArrive && errors.ModeArrive)}
                  onChange={(event) => {
                    SetSelectedItem(event.target.value);
                  }}
                  native
                  inputProps={{
                    name: 'age',
                    id: 'outlined-age-native-simple'
                  }}
                >
                  Mode d'arriver
                  <option value="De la maison"> De la maison</option>
                  <option value="UNT">UNT</option>
                  <option value="Autres">Autres</option>
                  {/* <MenuItem value="De la maison">De la maison</MenuItem>
                  <MenuItem value="UNT">UNT</MenuItem>
                  <MenuItem value="Autres">Autres</MenuItem> */}
                </Select>
                <TextField
                  sx={{ width: '80%', padding: '2px' }}
                  label="Si autre veuillez préciser"
                  error={Boolean(touched.Avatar && errors.Avatar)}
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
                  error={Boolean(touched.Age && errors.Age)}
                  helperText={touched.Age && errors.Age}
                />
                <TextField
                  sx={{ width: '80%', padding: '2px' }}
                  fullWidth
                  label="Poid (gr)"
                  {...getFieldProps('Weight')}
                  error={Boolean(touched.Weight && errors.Weight)}
                  helperText={touched.Weight && errors.Weight}
                />
                <TextField
                  sx={{ width: '80%', padding: '2px' }}
                  fullWidth
                  label="Pc (cm)"
                  {...getFieldProps('Pc')}
                  error={Boolean(touched.Pc && errors.Pc)}
                  helperText={touched.Pc && errors.Pc}
                />
                <TextField
                  sx={{ width: '80%', padding: '2px' }}
                  fullWidth
                  autoComplete="Taille"
                  type="text"
                  label="Taille(cm)"
                  {...getFieldProps('Taille')}
                  error={Boolean(touched.Taille && errors.Taille)}
                  helperText={touched.Taille && errors.Taille}
                />
                <TextField
                  sx={{ width: '80%', padding: '2px' }}
                  fullWidth
                  label="PB (cm)"
                  {...getFieldProps('Pb')}
                  error={Boolean(touched.Pb && errors.Pb)}
                  helperText={touched.Pb && errors.Pb}
                />
                <InputLabel id="demo-simple-select-outlined-label">Provenance</InputLabel>
                <Select
                  sx={{ width: '80%', padding: '2px' }}
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={Provenance}
                  // {...getFieldProps('Provenace')}
                  // error={Boolean(touched.Provenace && errors.Provenace)}
                  onChange={(event) => {
                    console.log(event.target.value);
                    SetProvenance(event.target.value);
                  }}
                >
                  <MenuItem value="kadutu">Kadutu</MenuItem>
                  <MenuItem value="Bagira">Bagira</MenuItem>
                  <MenuItem value="Ibabda">Ibanda</MenuItem>
                  <MenuItem value="Hors ville">Hors ville</MenuItem>
                  <MenuItem value="Autres">Autres</MenuItem>
                </Select>
                <TextField
                  sx={{ width: '80%', padding: '2px' }}
                  label="Si autre veuillez préciser"
                  error={Boolean(touched.Avatar && errors.Avatar)}
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
