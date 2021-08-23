import * as Yup from 'yup';
// import { useState } from 'react';
// import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';
import { styled } from '@material-ui/core/styles';

// import eyeFill from '@iconify/icons-eva/eye-fill';
// import eyeOffFill from '@iconify/icons-eva/eye-off-fill';
import { useFormik, Form, FormikProvider } from 'formik';
// material
import {
  Radio,
  Stack,
  TextField,
  // IconButton,
  FormLabel,
  RadioGroup,
  // InputAdornment,
  FormControlLabel
} from '@material-ui/core';
import { LoadingButton } from '@material-ui/lab';

import data from '../../../_mocks_/personnel';
// ----------------------------------------------------------------------

export default function PersonnelAddFrom() {
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
      Name: '',
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmpassword: ''
    },
    validationSchema: RegisterSchema,
    onSubmit: () => {
      let NewPersonne;
      NewPersonne.name = 'kkk';
      NewPersonne.prenom = 'newperson';
      NewPersonne.email = 'gmail.com';
      NewPersonne.status = 'medecin';
      NewPersonne.sex = 'F';

      data.push(NewPersonne);
      navigate('/dashboard/personnel', { replace: true });
    }
  });

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = formik;

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          {/* <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}> */}
          {/* <TextField
              fullWidth
              label="First name"
              {...getFieldProps('firstName')}
              error={Boolean(touched.firstName && errors.firstName)}
              helperText={touched.firstName && errors.firstName}
            /> */}

          {/* <TextField
              fullWidth
              label="Last name"
              {...getFieldProps('lastName')}
              error={Boolean(touched.lastName && errors.lastName)}
              helperText={touched.lastName && errors.lastName}
            /> */}
          {/* </Stack> */}

          <TextField
            fullWidth
            label="Prenom"
            {...getFieldProps('lastName')}
            error={Boolean(touched.lastName && errors.lastName)}
            helperText={touched.lastName && errors.lastName}
          />

          <TextField
            fullWidth
            label="Nom"
            {...getFieldProps('lastName')}
            error={Boolean(touched.lastName && errors.lastName)}
            helperText={touched.lastName && errors.lastName}
          />

          <TextField
            fullWidth
            label="Post nom"
            {...getFieldProps('lastName')}
            error={Boolean(touched.lastName && errors.lastName)}
            helperText={touched.lastName && errors.lastName}
          />
          <RadioGroup
            name="gender1"
            onChange={() => {
              console.log('bien');
            }}
          >
            <Stack direction={{ xs: 'column', sm: 'row', alignItems: 'center' }} spacing={2}>
              <FormLabel component="label">Sex:</FormLabel>
              <FormControlLabel value="F" control={<Radio />} label="F" />
              <FormControlLabel value="M" control={<Radio />} label="M" />
            </Stack>
          </RadioGroup>

          <TextField
            fullWidth
            autoComplete="username"
            type="text"
            label="Statut "
            {...getFieldProps('email')}
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
          />

          <TextField
            fullWidth
            autoComplete="username"
            type="email"
            label="Email "
            {...getFieldProps('email')}
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
          />
          <TextField
            fullWidth
            label="Mot de passe"
            {...getFieldProps('lastName')}
            error={Boolean(touched.lastName && errors.lastName)}
            helperText={touched.lastName && errors.lastName}
          />

          {/* <TextField
            fullWidth
            autoComplete="current-password"
            type={showPassword ? 'text' : 'password'}
            label="Mot de passe"
            {...getFieldProps('password')}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton edge="end" onClick={() => setShowPassword((prev) => !prev)}>
                    <Icon icon={showPassword ? eyeFill : eyeOffFill} />
                  </IconButton>
                </InputAdornment>
              )
            }}
            error={Boolean(touched.password && errors.password)}
            helperText={touched.password && errors.password}
          /> */}
          {/* <TextField
            fullWidth
            autoComplete="current-password"
            type={showPassword ? 'text' : 'password'}
            label="Confirmer votre mot de passe"
            {...getFieldProps('password')}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton edge="end" onClick={() => setShowPassword((prev) => !prev)}>
                    <Icon icon={showPassword ? eyeFill : eyeOffFill} />
                  </IconButton>
                </InputAdornment>
              )
            }}
            error={Boolean(touched.password && errors.password)}
            helperText={touched.password && errors.password}
          /> */}

          <LoadingButton
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            loading={isSubmitting}
          >
            Créer un utilisateur
          </LoadingButton>
        </Stack>
      </Form>
    </FormikProvider>
  );
}
