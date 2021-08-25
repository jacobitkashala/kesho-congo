import * as Yup from 'yup';
import propTypes from 'prop-types';
// import { useState } from 'react';
import { useFormik, Form, FormikProvider } from 'formik';
import { useNavigate } from 'react-router-dom';
// material
import {
  Box,
  Stack,
  TextField,
  Typography,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormLabel,
  Input,
  Button
} from '@material-ui/core';
import { LoadingButton } from '@material-ui/lab';

// ----------------------------------------------------------------------
FamilleForm.propTypes = {
  NextStep: propTypes.func,
  PrevStep: propTypes.func
};

export default function FamilleForm({ NextStep, PrevStep }) {
  const navigate = useNavigate();
  // const [showPassword, setShowPassword] = useState(false);

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
          <Typography variant="h5">Fammille</Typography>
        </Box>
        <Stack spacing={4}>
          <TextField
            fullWidth
            autoComplete="taille"
            type="text"
            label="Taille ménage"
            // {...getFieldProps('tailleMenage')}
            // error={Boolean(touched.email && errors.email)}
            // helperText={touched.email && errors.email}
          />
          <TextField
            fullWidth
            label="Nom mère"
            // {...getFieldProps('firstName')}
            // error={Boolean(touched.firstName && errors.firstName)}
            // helperText={touched.firstName && errors.firstName}
          />
          <RadioGroup
            name="Parent_en_vie"
            onChange={() => {
              console.log('bien');
            }}
          >
            <FormLabel component="label">Les deux parent en vie:</FormLabel>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              sx={{ display: 'flex', alignItems: 'center' }}
              spacing={2}
            >
              <FormControlLabel value="Oui" control={<Radio />} label="Oui" />
              <FormControlLabel value="Non" control={<Radio />} label="Non" />
            </Stack>
          </RadioGroup>
          <RadioGroup
            name="Parent_en_vie"
            onChange={() => {
              console.log('bien');
            }}
          >
            <FormLabel component="label">Mère enceinte</FormLabel>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              sx={{ display: 'flex', alignItems: 'center' }}
              spacing={2}
            >
              <FormControlLabel value="F" control={<Radio />} label="Oui" />
              <FormControlLabel value="M" control={<Radio />} label="Non" />
            </Stack>
          </RadioGroup>
          <TextField
            fullWidth
            label="Profession mère"
            // {...getFieldProps('lastName')}
            // error={Boolean(touched.lastName && errors.lastName)}
            // helperText={touched.lastName && errors.lastName}
          />
          <TextField
            fullWidth
            label="Profession chef du ménage"
            // {...getFieldProps('lastName')}
            // error={Boolean(touched.lastName && errors.lastName)}
            // helperText={touched.lastName && errors.lastName}
          />
          <TextField
            fullWidth
            label="Age mére"
            // {...getFieldProps('lastName')}
            // error={Boolean(touched.lastName && errors.lastName)}
            // helperText={touched.lastName && errors.lastName}
          />
          <TextField
            fullWidth
            label="Scolarité mére"
            // {...getFieldProps('lastName')}
            // error={Boolean(touched.lastName && errors.lastName)}
            // helperText={touched.lastName && errors.lastName}
          />
          <RadioGroup
            name="Parent_en_vie"
            onChange={() => {
              console.log('bien');
            }}
          >
            <FormLabel component="label">Contraception mére</FormLabel>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              sx={{ display: 'flex', alignItems: 'center' }}
              spacing={2}
            >
              <FormControlLabel value="F" control={<Radio />} label="Oui" />
              <FormControlLabel value="M" control={<Radio />} label="Non" />
            </Stack>
          </RadioGroup>
          <RadioGroup
            name="Parent_en_vie"
            onChange={() => {
              console.log('bien');
            }}
          >
            <FormLabel component="label">COntraception naturelle</FormLabel>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              sx={{ display: 'flex', alignItems: 'center' }}
              spacing={2}
            >
              <FormControlLabel value="Oui" control={<Radio />} label="Oui" />
              <FormControlLabel value="Non" control={<Radio />} label="Non" />
            </Stack>
          </RadioGroup>
          <TextField
            fullWidth
            label="Niveau socio économique"
            // {...getFieldProps('lastName')}
            // error={Boolean(touched.lastName && errors.lastName)}
            // helperText={touched.lastName && errors.lastName}
          />
          <TextField
            fullWidth
            label="Status marital"
            // {...getFieldProps('lastName')}
            // error={Boolean(touched.lastName && errors.lastName)}
            // helperText={touched.lastName && errors.lastName}
          />
          <TextField
            fullWidth
            label="Type status marital"
            // {...getFieldProps('lastName')}
            // error={Boolean(touched.lastName && errors.lastName)}
            // helperText={touched.lastName && errors.lastName}
          />
          <TextField
            fullWidth
            label="Nombre de femme"
            // {...getFieldProps('lastName')}
            // error={Boolean(touched.lastName && errors.lastName)}
            // helperText={touched.lastName && errors.lastName}
          />
          <TextField
            fullWidth
            label="Tribu"
            // {...getFieldProps('lastName')}
            // error={Boolean(touched.lastName && errors.lastName)}
            // helperText={touched.lastName && errors.lastName}
          />
          <TextField
            fullWidth
            label="Réligion"
            // {...getFieldProps('lastName')}
            // error={Boolean(touched.lastName && errors.lastName)}
            // helperText={touched.lastName && errors.lastName}
          />
          <RadioGroup
            name="Parent_en_vie"
            onChange={() => {
              console.log('bien');
            }}
          >
            <FormLabel component="label">Posseder une radio ou une télé</FormLabel>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              sx={{ display: 'flex', alignItems: 'center' }}
              spacing={2}
            >
              <FormControlLabel value="Oui" control={<Radio />} label="Oui" />
              <FormControlLabel value="Non" control={<Radio />} label="Nom" />
            </Stack>
          </RadioGroup>
          <TextField
            fullWidth
            label="Nombre de repas par jour"
            // {...getFieldProps('lastName')}
            // error={Boolean(touched.lastName && errors.lastName)}
            // helperText={touched.lastName && errors.lastName}
          />
          <TextField
            fullWidth
            label="Consommation boisons"
            // {...getFieldProps('lastName')}
            // error={Boolean(touched.lastName && errors.lastName)}
            // helperText={touched.lastName && errors.lastName}
          />
          <TextField
            fullWidth
            label="atb"
            // {...getFieldProps('lastName')}
            // error={Boolean(touched.lastName && errors.lastName)}
            // helperText={touched.lastName && errors.lastName}
          />
          <TextField
            fullWidth
            label="Liste atb"
            // {...getFieldProps('lastName')}
            // error={Boolean(touched.lastName && errors.lastName)}
            // helperText={touched.lastName && errors.lastName}
          />
          <TextField
            fullWidth
            label="atb parent"
            // {...getFieldProps('lastName')}
            // error={Boolean(touched.lastName && errors.lastName)}
            // helperText={touched.lastName && errors.lastName}
          />
          <TextField
            fullWidth
            label="tbc chez"
            // {...getFieldProps('firstName')}
            // error={Boolean(touched.firstName && errors.firstName)}
            // helperText={touched.firstName && errors.firstName}
          />
          <TextField
            fullWidth
            label="tbc gueris"
            // {...getFieldProps('firstName')}
            // error={Boolean(touched.firstName && errors.firstName)}
            // helperText={touched.firstName && errors.firstName}
          />
          <TextField
            fullWidth
            label="durée de traitement tbc"
            // {...getFieldProps('firstName')}
            // error={Boolean(touched.firstName && errors.firstName)}
            // helperText={touched.firstName && errors.firstName}
          />
          <TextField
            fullWidth
            label="Nom tuteur"
            {...getFieldProps('firstName')}
            error={Boolean(touched.firstName && errors.firstName)}
            helperText={touched.firstName && errors.firstName}
          />
          <TextField
            fullWidth
            type="date"
            {...getFieldProps('firstName')}
            error={Boolean(touched.firstName && errors.firstName)}
            helperText={touched.firstName && errors.firstName}
          />
          <TextField
            fullWidth
            label="Contraception moderne"
            // {...getFieldProps('firstName')}
            // error={Boolean(touched.firstName && errors.firstName)}
            // helperText={touched.firstName && errors.firstName}
          />
          <TextField
            fullWidth
            label="Type de contraception"
            // {...getFieldProps('firstName')}
            // error={Boolean(touched.firstName && errors.firstName)}
            // helperText={touched.firstName && errors.firstName}
          />
          <Stack
            container
            spacing={3}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'row'
            }}
          >
            <Button
              style={{
                background: '#00AB55',
                color: '#FFFFFF',
                marginRight: '1em',
                marginTop: '0 important'
              }}
              fullWidth
              onClick={PrevStep}
            >
              Précédent
            </Button>
            <Button
              style={{
                background: '#00AB55',
                color: '#FFFFFF',
                marginRight: '1em',
                marginTop: 0
              }}
              fullWidth
              onClick={NextStep}
            >
              Enregistrer
            </Button>
          </Stack>
        </Stack>
      </Form>
    </FormikProvider>
  );
}
