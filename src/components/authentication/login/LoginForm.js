import * as Yup from 'yup';
import { useState } from 'react';
import Axios from 'axios';
import { Link as RouterLink, useNavigate, useLocation } from 'react-router-dom';
import { useFormik, Form, FormikProvider } from 'formik';
import { Icon } from '@iconify/react';
import eyeFill from '@iconify/icons-eva/eye-fill';
import eyeOffFill from '@iconify/icons-eva/eye-off-fill';
// material
import { Link, Stack, TextField, IconButton, InputAdornment } from '@material-ui/core';
import { LoadingButton } from '@material-ui/lab';
import { makeStyles } from '@material-ui/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { fakeAuth } from '../../../fakeAuth';

export default function LoginForm() {
  // ----------------------------------------------------------------------

  const [registered, setRegistered] = useState(false);
  const [loader, setLoader] = useState(false);
  const [errorWord, setErrorWord] = useState(false);
  Axios.defaults.withCredentials = true;

  const navigate = useNavigate();

  const location = useLocation();

  const { from } = location.state || { from: { pathname: '/dashboard/app' } };
  const [showPassword, setShowPassword] = useState(false);
  const useStyles = makeStyles((theme) => ({
    root: {
      position: 'absolute',
      left: '73%'
      // transform: 'translate(-50%,0)'
    },
    labelRoot: {
      '&&': {
        color: 'red'
      }
    }
  }));
  const classes = useStyles();

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
      setLoader(true);
      setErrorWord(false);
      Axios.post('https://kesho-congo-api.herokuapp.com/auth/login', {
        email,
        password
      })
        .then((response) => {
          const { message, token, name, isAdmin, id_user, status } = response.data;
          localStorage.setItem('token', token);
          localStorage.setItem('name', name);
          localStorage.setItem('isAdmin', isAdmin);
          localStorage.setItem('id_user', id_user);
          localStorage.setItem('status', status);
          console.log({ message, token, name, isAdmin });
          fakeAuth.login(() => {
            navigate(from);
            navigate('/dashboard/app', { replace: true });
          });
        })
        .catch((err) => {
          console.log(err);
          setRegistered(false);
          setLoader(false);
          setErrorWord(true);
        });
    }
  });
  const { errors, touched, handleSubmit, getFieldProps, isSubmitting } = formik;
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
          <Link component={RouterLink} variant="subtitle2" to="#">
            mot de passe oublié
          </Link>
        </Stack>
        {loader ? (
          <>
            <div className={classes.root}>
              <CircularProgress />
            </div>
            <br />
          </>
        ) : (
          ''
        )}

        {errorWord ? (
          <span className={classes.labelRoot}>Adresse mail ou mot de passe incorrecte</span>
        ) : (
          ''
        )}
        <br />
        <br />

        <LoadingButton fullWidth size="large" type="submit" variant="contained">
          Connexion
        </LoadingButton>
      </Form>
    </FormikProvider>
  );
}
