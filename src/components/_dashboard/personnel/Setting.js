import * as Yup from 'yup';
import { useState, useEffect } from 'react';
// import { useState } from 'react';
// import { Icon } from '@iconify/react';
import { useNavigate, Navigate, useLocation } from 'react-router-dom';
import { styled } from '@material-ui/core/styles';
import Axios from 'axios';

// import eyeFill from '@iconify/icons-eva/eye-fill';
// import eyeOffFill from '@iconify/icons-eva/eye-off-fill';
import { useFormik, Form, FormikProvider } from 'formik';
import InputAdornment from '@material-ui/core/InputAdornment';
// import AccountCircle from '@material-ui/icons/AccountCircle';
import CreateIcon from '@material-ui/icons/Create';
import { useSelector, useDispatch } from 'react-redux';

// material
import {
  // Radio,
  Stack,
  TextField,
  // IconButton,
  // FormLabel,
  // RadioGroup,
  // InputAdornment,
  Typography,
  FormControlLabel,
  IconButton
} from '@material-ui/core';
import eyeFill from '@iconify/icons-eva/eye-fill';
import eyeOffFill from '@iconify/icons-eva/eye-off-fill';
import { LoadingButton } from '@material-ui/lab';
import { Icon } from '@iconify/react';
import { makeStyles } from '@material-ui/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { getOneUserAsync } from '../../../redux/reducers/userSlice';

// import data from '../../../_mocks_/personnel';
import { fakeAuth } from '../../../fakeAuth';
// ----------------------------------------------------------------------

const Div = styled('div')(() => ({
  textAlign: 'center',
  width: '40%',
  position: 'relative',
  left: '50%',
  transform: 'translate(-50%,0)'
}));

const Border = styled('div')(() => ({
  border: '0.5px solid lightgrey',
  height: 'auto',
  width: '85%',
  position: 'relative',
  borderRadius: '15px',
  paddingTop: '30px',
  paddingBottom: '80px',
  left: '50%',
  transform: 'translate(-50%,0)'
}));

const Box = styled('div')(() => ({
  width: '70%',
  textAlign: 'center',
  position: 'relative',
  left: '50%',
  transform: 'translate(-50%,0)'
}));

export default function PersonnelAddFrom() {
  const [loader, setLoader] = useState(true);
  const [loader2, setLoader2] = useState(false);
  const useStyles = makeStyles((theme) => ({
    root: {
      position: 'absolute',
      left: '60%',
      top: '40%'
      // transform: 'translate(-50%)'
    },
    labelRoot: {
      '&&': {
        color: 'red'
      }
    }
  }));
  const classes = useStyles();
  const navigate = useNavigate();

  const location = useLocation();

  const { from } = location.state || { from: { pathname: '/dashboard/app' } };
  const [fName, setFname] = useState(true);
  const [lName, setLname] = useState(true);
  const [middleInitial, setMiddleInitial] = useState(true);
  const [pword, setPword] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const handleFName = () => {
    setFname(false);
  };
  const handleLName = () => {
    setLname(false);
  };
  const handlePword = () => {
    setPword(false);
  };
  const handleMiddleInitial = () => {
    setMiddleInitial(false);
  };
  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };
  const handleShowPassword2 = () => {
    setShowPassword2((show) => !show);
  };

  const RegisterSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Trop court')
      .max(50, 'Trop long')
      .required('Le prénom est requis'),
    lastName: Yup.string()
      .min(2, 'Trop court')
      .max(50, 'Trop long')
      .required('Le prénom est requis'),
    middleName: Yup.string()
      .min(2, 'Trop court')
      .max(50, 'Trop long')
      .required('Le post-nom est requis'),
    oldPassword: Yup.string().required('Confirmez votre mot de passe '),
    newPassword: Yup.string().required('Confirmez votre mot de passe ')
  });

  const [oneUser, setOneUser] = useState([]);

  const getUrl = `https://kesho-congo-api.herokuapp.com/user?id_user=${localStorage.getItem(
    'id_user'
  )}`;

  const options = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: `bearer ${localStorage.getItem('token')}`
    }
  };

  useEffect(() => {
    fetch(getUrl, options)
      .then((response) => response.json())
      .then((data) => {
        setLoader(false);
        setOneUser(data);
        // formik.setValues(data);
        formik.setFieldValue('firstName', data.prenom_user);
        formik.setFieldValue('lastName', data.nom_user);
        formik.setFieldValue('middleName', data.postnom_user);
      });
  }, []);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      firstName: '',
      lastName: '',
      middleName: '',
      oldPassword: '',
      newPassword: '',
      remember: true
    },
    validationSchema: RegisterSchema,
    onSubmit: ({ oldPassword, newPassword, lastName, middleName, firstName }) => {
      setLoader2(true);
      Axios.put(
        `https://kesho-congo-api.herokuapp.com/user?id_user=${localStorage.getItem('id_user')}`,
        {
          password: newPassword,
          old_password: oldPassword,
          nom_user: lastName,
          postnom_user: middleName,
          prenom_user: firstName
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `bearer ${localStorage.getItem('token')}`
          }
        }
      )
        .then((response) => {
          const message = response.data;
          setLoader2(false);
          console.log('Yves', message);
          fakeAuth.login(() => {
            navigate(from);
            navigate('/dashboard/setting', { replace: true });
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps, values, handleChange } =
    formik;
  const [isAuth, setIsAuth] = useState(localStorage.getItem('token'));
  useEffect(() => {
    setIsAuth(isAuth);
  }, [isAuth]);

  return isAuth ? (
    <>
      {loader ? (
        <div className={classes.root}>
          <CircularProgress />
        </div>
      ) : (
        <Border>
          <Div>
            <FormikProvider value={formik}>
              <Form onSubmit={handleSubmit}>
                <Box sx={{ pb: 5 }}>
                  <Typography variant="h4">Mes Informations</Typography>
                </Box>
                <Stack spacing={3}>
                  <TextField
                    fullWidth
                    label="Prénom"
                    value={values.firstName}
                    onChange={handleChange}
                    disabled={fName}
                    {...getFieldProps('firstName')}
                    error={Boolean(touched.firstName && errors.firstName)}
                    helperText={touched.firstName && errors.firstName}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="right" onClick={handleFName}>
                          <CreateIcon />
                        </InputAdornment>
                      )
                    }}
                  />

                  <TextField
                    fullWidth
                    label="Nom"
                    value={values.lastName}
                    onChange={handleChange}
                    disabled={lName}
                    {...getFieldProps('lastName')}
                    error={Boolean(touched.lastName && errors.lastName)}
                    helperText={touched.lastName && errors.lastName}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="right" onClick={handleLName}>
                          <CreateIcon />
                        </InputAdornment>
                      )
                    }}
                  />

                  <TextField
                    fullWidth
                    label="Post-nom"
                    value={values.middleName}
                    disabled={middleInitial}
                    onChange={handleChange}
                    {...getFieldProps('middleName')}
                    error={Boolean(touched.middleName && errors.middleName)}
                    helperText={touched.middleName && errors.middleName}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end" onClick={handleMiddleInitial}>
                          <CreateIcon />
                        </InputAdornment>
                      )
                    }}
                  />
                  <TextField
                    fullWidth
                    autoComplete="current-password"
                    type={showPassword ? 'text' : 'password'}
                    label="Ancien Mot de passe"
                    {...getFieldProps('oldPassword')}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton onClick={handleShowPassword} edge="end">
                            <Icon icon={showPassword ? eyeFill : eyeOffFill} />
                          </IconButton>
                        </InputAdornment>
                      )
                    }}
                    error={Boolean(touched.oldPassword && errors.oldPassword)}
                    helperText={touched.oldPassword && errors.oldPassword}
                    onChange={formik.handleChange}
                    value={formik.values.oldPassword}
                  />

                  <TextField
                    fullWidth
                    autoComplete="current-password"
                    type={showPassword2 ? 'text' : 'password'}
                    label="Nouveau Mot de passe"
                    {...getFieldProps('newPassword')}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton onClick={handleShowPassword2} edge="end">
                            <Icon icon={showPassword2 ? eyeFill : eyeOffFill} />
                          </IconButton>
                        </InputAdornment>
                      )
                    }}
                    error={Boolean(touched.newassword && errors.newPassword)}
                    helperText={touched.newPassword && errors.newPassword}
                    onChange={formik.handleChange}
                    value={formik.values.newPassword}
                  />
                  <LoadingButton
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                    loading={loader2}
                  >
                    Mettre à jour
                  </LoadingButton>
                </Stack>
              </Form>
            </FormikProvider>
          </Div>
        </Border>
      )}
    </>
  ) : (
    <Navigate to="/" state={{ from: location }} />
  );
}
