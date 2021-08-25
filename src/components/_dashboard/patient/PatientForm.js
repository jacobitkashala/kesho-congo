import * as Yup from 'yup';
import propTypes from 'prop-types';
import { useState } from 'react';
import { useFormik, Form, FormikProvider } from 'formik';
import { useNavigate } from 'react-router-dom';
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
  Button,
  Grid,
  InputLabel,
  Select
} from '@material-ui/core';
import { LoadingButton } from '@material-ui/lab';

// ----------------------------------------------------------------------
PatientForm.propTypes = {
  NextStep: propTypes.func
};

export default function PatientForm({ NextStep }) {
  const navigate = useNavigate();
  const [SelectedItem, SetSelectedItem] = useState('provenance');
  const [Provenance, SetProvenance] = useState('provenance');

  const RegisterSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('First name required'),
    lastName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Last name required'),
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    password: Yup.string().required('Password is required')
  });

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    },
    validationSchema: RegisterSchema,
    onSubmit: () => {
      navigate('/dashboard', { replace: true });
      console.log(NextStep);
      NextStep();
    }
  });

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = formik;

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Box sx={{ pb: 5 }}>
          <Typography variant="h5">Identité</Typography>
        </Box>
        <Grid container spacing={2}>
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
                // {...getFieldProps('tailleMenage')}
                // error={Boolean(touched.email && errors.email)}
                // helperText={touched.email && errors.email}
              />
              {/* <Typography variant="h9">Postnom</Typography> */}
              <TextField
                fullWidth
                label="postnom"
                // {...getFieldProps('lastName')}
                // error={Boolean(touched.lastName && errors.lastName)}
                // helperText={touched.lastName && errors.lastName}
              />
              <TextField
                fullWidth
                label="Adresse"
                // {...getFieldProps('lastName')}
                // error={Boolean(touched.lastName && errors.lastName)}
                // helperText={touched.lastName && errors.lastName}
              />
            </Stack>
            <Stack spacing={2}>
              {/* <InputLabel>Prénom</InputLabel> */}
              <TextField
                fullWidth
                autoComplete="prenom"
                type="text"
                label="prenom"
                // {...getFieldProps('tailleMenage')}
                // error={Boolean(touched.email && errors.email)}
                // helperText={touched.email && errors.email}
              />
              <TextField
                fullWidth
                label="Post nom"
                // {...getFieldProps('firstName')}
                // error={Boolean(touched.firstName && errors.firstName)}
                // helperText={touched.firstName && errors.firstName}
              />
              <TextField
                fullWidth
                label="Téléphone"
                // {...getFieldProps('lastName')}
                // error={Boolean(touched.lastName && errors.lastName)}
                // helperText={touched.lastName && errors.lastName}
              />
            </Stack>
          </Stack>
        </Grid>
        <Stack spacing={4}>
          <RadioGroup
            name="Parent_en_vie"
            onChange={() => {
              console.log('bien');
            }}
          >
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              sx={{ display: 'flex', alignItems: 'center' }}
              spacing={2}
            >
              <FormLabel component="label">Sexe:</FormLabel>
              <FormControlLabel value="F" control={<Radio />} label="F" />
              <FormControlLabel value="M" control={<Radio />} label="M" />
            </Stack>
          </RadioGroup>
          <InputLabel id="demo-simple-select-outlined-label">Provenance</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={Provenance}
            onChange={(event) => {
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
            // {...getFieldProps('firstName')}
            // error={Boolean(touched.firstName && errors.firstName)}
            // helperText={touched.firstName && errors.firstName}
          />
          <InputLabel id="demo-simple-select-outlined-label">Mode d'arriver</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            // label="Mode d'arriver"
            value={SelectedItem}
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
                {/* <Typography variant="h9">Nom</Typography> */}
                <TextField
                  fullWidth
                  autoComplete="Taille"
                  type="text"
                  label="Taille(cm)"
                  // {...getFieldProps('tailleMenage')}
                  // error={Boolean(touched.email && errors.email)}
                  // helperText={touched.email && errors.email}
                />
                {/* <Typography variant="h9">Postnom</Typography> */}
                <TextField
                  fullWidth
                  label="PB (cm)"
                  // {...getFieldProps('lastName')}
                  // error={Boolean(touched.lastName && errors.lastName)}
                  // helperText={touched.lastName && errors.lastName}
                />
                {/* <Typography variant="h9">Adresse</Typography> */}
              </Stack>
              <Stack spacing={2}>
                <TextField
                  fullWidth
                  label="Poid (gr)"
                  // {...getFieldProps('lastName')}
                  // error={Boolean(touched.lastName && errors.lastName)}
                  // helperText={touched.lastName && errors.lastName}
                />
                <TextField
                  fullWidth
                  label="Pc (cm)"
                  // {...getFieldProps('firstName')}
                  // error={Boolean(touched.firstName && errors.firstName)}
                  // helperText={touched.firstName && errors.firstName}
                />
              </Stack>
            </Stack>
          </Grid>
          <TextField
            fullWidth
            type="file"
            // {...getFieldProps('firstName')}
            // error={Boolean(touched.firstName && errors.firstName)}
            // helperText={touched.firstName && errors.firstName}
          />
          <Button
            style={{
              background: '#00AB55',
              color: '#FFFFFF',
              marginRight: '1em'
            }}
            fullWidth
            onClick={NextStep}
            onSubmit={NextStep}
          >
            Suivant
          </Button>
        </Stack>
      </Form>
    </FormikProvider>
  );
}
