import * as Yup from 'yup';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import { Link as RouterLink, useNavigate, useLocation } from 'react-router-dom';
import { useFormik, Form, FormikProvider } from 'formik';
import { Icon } from '@iconify/react';
import eyeFill from '@iconify/icons-eva/eye-fill';
import eyeOffFill from '@iconify/icons-eva/eye-off-fill';
// material
import { Link, Stack, TextField, IconButton, InputAdornment } from '@material-ui/core';
import { LoadingButton } from '@material-ui/lab';
import { fakeAuth } from '../../../fakeAuth';

export default function LoginForm() {
  // ----------------------------------------------------------------------

  const [registered, setRegistered] = useState(false);
  const [loggedIn, setLoggedIn] = useState('');

  Axios.defaults.withCredentials = true;
<<<<<<< HEAD

  useEffect(() => {
    fakeAuth.isAuthenticated = loggedIn;
  }, []);
=======
>>>>>>> 76addc10cc306430da6e059760a5b9ed4251ed69

  const navigate = useNavigate();

  const location = useLocation();

  const { from } = location.state || { from: { pathname: '/dashboard/app' } };
  const [showPassword, setShowPassword] = useState(false);

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Votre mail doit être valide').required('Email requis'),
    password: Yup.string()
      .min(1, 'Le mot de passe doit contenir au moins 8 caractères')
      .required('Mot de passe requis')
  });
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      remember: true
    },
    validationSchema: LoginSchema,
    onSubmit: ({ email, password }) => {
<<<<<<< HEAD
      // Axios.post('https://kesho-congo-api.herokuapp.com/auth/login', {
      //   email,
      //   password
      // })
      //   .then((response) => {
      //     const { message, token, name } = response.data;
      //     localStorage.setItem('token', token);
      //     localStorage.setItem('name', name);
      //     // const b = !!localStorage.getItem('token');

      fakeAuth.login(() => {
        navigate(from);
        navigate('/dashboard/app', { replace: true });
      });
      //   })
      //   .catch((err) => {
      //     setRegistered(false);
      //     setError(!error);
      //     formik.isSubmitting = false;
      //   });
=======
      Axios.post('https://kesho-congo-api.herokuapp.com/auth/login', {
        email,
        password
      })
        .then((response) => {
          const { message, token, name, isAdmin } = response.data;
          localStorage.setItem('token', token);
          localStorage.setItem('name', name);
          localStorage.setItem('isAdmin', isAdmin);
          console.log({ message, token, name, isAdmin });
          fakeAuth.login(() => {
            navigate(from);
            navigate('/dashboard/app', { replace: true });
          });
        })
        .catch((err) => {
          setRegistered(false);
          setError(!error);
          formik.isSubmitting = false;
          // alert(err);
          // throw err;
          //
          //
        });
      // navigate('/dashboard/app', { replace: false });
>>>>>>> 76addc10cc306430da6e059760a5b9ed4251ed69
    }
  });
  // , values
  const { errors, touched, handleSubmit, getFieldProps } = formik;
  const { isSubmitting } = formik;
  // console.log(formik.values.password);
  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={formik.handleSubmit}>
        <Stack spacing={3}>
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

          <TextField
            fullWidth
            autoComplete="current-password"
            type={showPassword ? 'text' : 'password'}
            label="Mot de passe"
            {...getFieldProps('password')}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleShowPassword} edge="end">
                    <Icon icon={showPassword ? eyeFill : eyeOffFill} />
                  </IconButton>
                </InputAdornment>
              )
            }}
            error={Boolean(touched.password && errors.password)}
            helperText={touched.password && errors.password}
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </Stack>

        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
          {/* <FormControlLabel
            control={<Radio {...getFieldProps('remember')} checked={values.remember} />}
            label="Remember me"
          /> */}

          <Link component={RouterLink} variant="subtitle2" to="#">
            mot de passe oublié
          </Link>
        </Stack>

        {registered ? <span>Adresse mail ou mot de passe incorrecte</span> : ''}
        <br />
        <br />

        <LoadingButton
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          loading={isSubmitting}
        >
          Se connecter
        </LoadingButton>
      </Form>
    </FormikProvider>
  );
}
