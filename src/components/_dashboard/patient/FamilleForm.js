import * as Yup from 'yup';
import { useState } from 'react';
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
  FormLabel
} from '@material-ui/core';
import { LoadingButton } from '@material-ui/lab';

// ----------------------------------------------------------------------

export default function FamilleForm() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

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
    }
  });

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = formik;

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Box sx={{ pb: 5 }}>
          <Typography variant="h5">Famille</Typography>
        </Box>
        <Stack spacing={3}>
          <TextField fullWidth autoComplete="tailleMenage" type="text" label="Taille du ménage" />
          <TextField
            fullWidth
            autoComplete="Nom complet du tuteur"
            type="text"
            label="Nom complet du tuteur"
            {...getFieldProps('tailleMenage')}
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
          />
          <FormLabel component="label">Vit avec ses deux parent</FormLabel>
          <RadioGroup
            name="gender1"
            onChange={() => {
              console.log('bien');
            }}
          >
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <FormControlLabel value="Nom" control={<Radio />} label="Oui" />
              <FormControlLabel value="Oui" control={<Radio />} label="Non" />
            </Stack>
          </RadioGroup>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <TextField
              fullWidth
              label="First name"
              {...getFieldProps('firstName')}
              error={Boolean(touched.firstName && errors.firstName)}
              helperText={touched.firstName && errors.firstName}
            />

            <TextField
              fullWidth
              label="Last name"
              {...getFieldProps('lastName')}
              error={Boolean(touched.lastName && errors.lastName)}
              helperText={touched.lastName && errors.lastName}
            />
          </Stack>
          <LoadingButton
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            loading={isSubmitting}
          >
            Enregistrer
          </LoadingButton>
        </Stack>
      </Form>
    </FormikProvider>
  );
}
