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
import * as EmailValidator from 'email-validator';
import { fakeAuth } from '../../../fakeAuth';

export default function LoginForm() {
  // ----------------------------------------------------------------------

  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [username, setUsername] = useState('');
  const [loggedIn, setLoggedIn] = useState('');

  Axios.defaults.withCredentials = true;
  const register = () => {
    Axios.post('http://localhost:8080/user_login', {
      email: emailValue,
      password: passwordValue
    }).then((response) => {
      const { message, token, name } = response.data;
      setLoggedIn(token);

      if (token) {
        fakeAuth.login(() => {
          navigate(from);
        });
      } else {
        return null;
      }
    });
  };

  // useEffect(() => {
  //   fakeAuth.isAuthenticated = loggedIn;
  // }, []);

  const handleEmailChange = (e) => {
    setEmailValue(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPasswordValue(e.target.value);
  };

  const navigate = useNavigate();

  const location = useLocation();

  const { from } = location.state || { from: { pathname: '/dashboard/app' } };
  const [showPassword, setShowPassword] = useState(false);

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    password: Yup.string().required('Password is required')
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      remember: true
    },
    validationSchema: LoginSchema,
    onSubmit: () => {
      navigate('/dashboard', { replace: true });
    }
  });

  const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } = formik;

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <TextField
            fullWidth
            autoComplete="username"
            type="email"
            label="Email address"
            {...getFieldProps('email')}
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
            onChange={handleEmailChange}
            value={emailValue}
          />

          <TextField
            fullWidth
            autoComplete="current-password"
            type={showPassword ? 'text' : 'password'}
            label="Password"
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
            onChange={handlePasswordChange}
            value={passwordValue}
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

        <LoadingButton
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          loading={isSubmitting}
          onClick={register}
        >
          Login
        </LoadingButton>
        {/* <Link loading={isSubmitting} onClick={handleFormSubmit}>
          Login
        </Link> */}
      </Form>
    </FormikProvider>
  );
}
