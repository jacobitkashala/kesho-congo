import * as Yup from 'yup';
import propTypes from 'prop-types';
import { useState } from 'react';
import { useFormik, Form, FormikProvider } from 'formik';
// import { useNavigate } from 'react-router-dom';
// material
import {
  Box,
  MenuItem,
  Stack,
  TextField,
  Typography,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormLabel,
  Grid,
  InputLabel,
  Select
} from '@material-ui/core';
import { LoadingButton } from '@material-ui/lab';

// ----------------------------------------------------------------------
PatientForm.propTypes = {
  NextStep: propTypes.func,
  SetDataPatient: propTypes.object
};

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
    onSubmit: (data) => {
      SetDataPatient((current) => ({ ...current, data }));
      NextStep();
    }
  });

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = formik;
  console.log(errors);
  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={4}>
          <Box sx={{ pb: 5 }}>
            <Typography variant="h5">Identité</Typography>
          </Box>
          <Grid container spacing={4}>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              sx={{ justifyContent: 'center' }}
              spacing={2}
            >
              <Stack spacing={2}>
                <TextField
                  fullWidth
                  autoComplete="Nom"
                  type="text"
                  label="Nom"
                  {...getFieldProps('Name')}
                  error={Boolean(touched.Name && errors.Name)}
                  helperText={touched.Name && errors.Name}
                />
                <TextField
                  fullWidth
                  label="postnom"
                  {...getFieldProps('LastName')}
                  error={Boolean(touched.LastName && errors.LastName)}
                  helperText={touched.LastName && errors.LastName}
                />
              </Stack>
              <Stack spacing={2}>
                <TextField
                  fullWidth
                  autoComplete="prenom"
                  type="text"
                  label="prenom"
                  {...getFieldProps('FirstName')}
                  error={Boolean(touched.FirstName && errors.FirstName)}
                  helperText={touched.FirstName && errors.FirstName}
                />
                <TextField
                  fullWidth
                  label="Téléphone"
                  {...getFieldProps('Telephone')}
                  error={Boolean(touched.Telephone && errors.Telephone)}
                  helperText={touched.Telephone && errors.Telephone}
                />
              </Stack>
            </Stack>
          </Grid>

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
              spacing={4}
            >
              <FormLabel component="label">Sexe:</FormLabel>
              <FormControlLabel value="F" control={<Radio />} label="F" />
              <FormControlLabel value="M" control={<Radio />} label="M" />
            </Stack>
          </RadioGroup>
          <TextField
            fullWidth
            label="Adresse"
            {...getFieldProps('Adresse')}
            error={Boolean(touched.Adresse && errors.Adresse)}
            helperText={touched.Adresse && errors.Adresse}
          />
          <InputLabel id="demo-simple-select-outlined-label">Provenance</InputLabel>
          <Select
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
            fullWidth
            label="Age (en mois)"
            {...getFieldProps('Age')}
            error={Boolean(touched.Age && errors.Age)}
            helperText={touched.Age && errors.Age}
          />
          <InputLabel id="demo-simple-select-outlined-label">Mode d'arriver</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={SelectedItem}
            // {...getFieldProps('ModeArrive')}
            // error={Boolean(touched.ModeArrive && errors.ModeArrive)}
            onChange={(event) => {
              SetSelectedItem(event.target.value);
            }}
          >
            <MenuItem value="De la maison">De la maison</MenuItem>
            <MenuItem value="UNT">UNT</MenuItem>
            <MenuItem value="Autres">Autres</MenuItem>
          </Select>
          <Typography variant="h5">Anthropométrie de l’enfant:</Typography>
          <Grid container spacing={2}>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              sx={{ justifyContent: 'center' }}
              spacing={2}
            >
              <Stack spacing={2}>
                <TextField
                  fullWidth
                  autoComplete="Taille"
                  type="text"
                  label="Taille(cm)"
                  {...getFieldProps('Taille')}
                  error={Boolean(touched.Taille && errors.Taille)}
                  helperText={touched.Taille && errors.Taille}
                />
                <TextField
                  fullWidth
                  label="PB (cm)"
                  {...getFieldProps('Pb')}
                  error={Boolean(touched.Pb && errors.Pb)}
                  helperText={touched.Pb && errors.Pb}
                />
              </Stack>
              <Stack spacing={2}>
                <TextField
                  fullWidth
                  label="Poid (gr)"
                  {...getFieldProps('Weight')}
                  error={Boolean(touched.Weight && errors.Weight)}
                  helperText={touched.Weight && errors.Weight}
                />
                <TextField
                  fullWidth
                  label="Pc (cm)"
                  {...getFieldProps('Pc')}
                  error={Boolean(touched.Pc && errors.Pc)}
                  helperText={touched.Pc && errors.Pc}
                />
              </Stack>
            </Stack>
          </Grid>
          <TextField
            fullWidth
            type="file"
            {...getFieldProps('Avatar')}
            error={Boolean(touched.Avatar && errors.Avatar)}
          />
          <LoadingButton
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            loading={isSubmitting}
          >
            Suivant
          </LoadingButton>
        </Stack>
      </Form>
    </FormikProvider>
  );
}
