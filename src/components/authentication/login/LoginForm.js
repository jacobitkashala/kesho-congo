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
// import * as EmailValidator from 'email-validator';
// import * as yup from 'yup';
import { register } from 'numeral';
import { fakeAuth } from '../../../fakeAuth';

export default function LoginForm() {
  // ----------------------------------------------------------------------

<<<<<<< HEAD
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  // const [username, setUsername] = useState('');
  const [loggedIn, setLoggedIn] = useState('');

  Axios.defaults.withCredentials = true;
  const register = () => {
    fakeAuth.login(() => {
      navigate(from);
    });

    // Axios.post('http://localhost:8080/user_login', {
    //   email: emailValue,
    //   password: passwordValue
    // }).then((response) => {
    //   const { message, token, name } = response.data;
    //   setLoggedIn(token);
    //   console.log('bien');

    //   fakeAuth.login(() => {
    //     navigate(from);
    //   });
    // if (token) {
    //   fakeAuth.login(() => {
    //     navigate(from);
    //   });
    // } else {
    //   return null;
    // }
    // });
  };
=======
  const [registered, setRegistered] = useState(false);
  const [error, setError] = useState(false);
  const [username, setUsername] = useState('');
  const [loggedIn, setLoggedIn] = useState('');

  Axios.defaults.withCredentials = true;
  // const register = () => {
  //   Axios.post('https://kesho-congo-api.herokuapp.com/auth/login', {
  //     email: emailValue,
  //     password: passwordValue
  //   }).then((response) => {
  //     const { message, token, name } = response.data;
  //     setLoggedIn(token);

  //     if (token) {
  //       fakeAuth.login(() => {
  //         navigate(from);
  //       });
  //     } else {
  //       return null;
  //     }
  //   });
  // };
>>>>>>> e43deff8b25f056fa26d84b44f9f8f8971a9e15f

  // useEffect(() => {
  //   fakeAuth.isAuthenticated = loggedIn;
  // }, []);

  // const handleEmailChange = (e) => {
  //   setEmailValue(e.target.value);
  // };

  // const handlePasswordChange = (e) => {
  //   setPasswordValue(e.target.value);
  // };

  const navigate = useNavigate();

  const location = useLocation();
  let status;

  const { from } = location.state || { from: { pathname: '/dashboard/app' } };
  const [showPassword, setShowPassword] = useState(false);

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Votre mail doit être valide').required('Email requis'),
    password: Yup.string()
      .min(8, 'Le mot de passe doit contenir au moins 8 caractères')
      .required('Mot de passe requis')
  });
  // const validationSchema = yup.object({
  //   email: yup
  //     .string('Enter your email')
  //     .email('Enter a valid email')
  //     .required('Email is required'),
  //   password: yup
  //     .string('Enter your password')
  //     .min(8, 'Password should be of minimum 8 characters length')
  //     .required('Password is required')
  // });

  // const WithMaterialUI = () => {
  //   const formik = useFormik({
  //     initialValues: {
  //       email: '',
  //       password: '',
  //     },
  //     validationSchema: validationSchema,
  //     onSubmit: (values) => {
  //       alert(JSON.stringify(values, null, 2));
  //     },
  //   });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      remember: true
    },
    validationSchema: LoginSchema,
    onSubmit: ({ email, password }) => {
      Axios.post('https://kesho-congo-api.herokuapp.com/auth/login', {
        email,
        password
      })
        .then((response) => {
          const { message, token, name } = response.data;
          // alert(message);
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
