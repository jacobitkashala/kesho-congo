import * as Yup from 'yup';
// import { useState } from 'react';
// import Axios from 'axios';
// import { Link as RouterLink, useLocation } from 'react-router-dom';
import { useFormik, Form, FormikProvider } from 'formik';
// import { Icon } from '@iconify/react';
// import eyeFill from '@iconify/icons-eva/eye-fill';
// import eyeOffFill from '@iconify/icons-eva/eye-off-fill';
// material
import { Stack, TextField } from '@material-ui/core';
import { LoadingButton } from '@material-ui/lab';
// import { makeStyles } from '@material-ui/styles';
// import CircularProgress from '@material-ui/core/CircularProgress';
// import { fakeAuth } from '../../../fakeAuth';

export default function FortgoPasswordForm() {
  // ----------------------------------------------------------------------

  // const navigate = useNavigate();

  // const location = useLocation();

  // const { from } = location.state || { from: { pathname: '/dashboard/app' } };

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Votre mail doit être valide').required('Email requis'),
    fistName: Yup.string()
      .min(1, 'Le mot de passe doit contenir au moins 8 caractères')
      .required('Mot de passe requis')
  });
  const formik = useFormik({
    initialValues: {
      email: '',
      fistName: ''
    },
    validationSchema: LoginSchema,
    onSubmit: ({ email, fistName }) => {
      console.log(email, fistName);
    }
  });
  const { errors, touched, getFieldProps } = formik;

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={formik.handleSubmit}>
        <Stack spacing={3}>
          <TextField
            fullWidth
            type="text"
            label="prénom"
            {...getFieldProps('fistName')}
            error={Boolean(touched.fistName && errors.fistName)}
            helperText={touched.fistName && errors.fistName}
            onChange={formik.handleChange}
            value={formik.value}
          />
          <TextField
            fullWidth
            autoComplete="username"
            type="email"
            label="Adresse mail"
            {...getFieldProps('email')}
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </Stack>
        <LoadingButton
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          sx={{ marginTop: 5 }}
        >
          Réinitialiser
        </LoadingButton>
      </Form>
    </FormikProvider>
  );
}
