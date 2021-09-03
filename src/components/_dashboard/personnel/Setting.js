import * as Yup from 'yup';
import { useState, useEffect } from 'react';
// import { useState } from 'react';
// import { Icon } from '@iconify/react';
import { useNavigate, Navigate, useLocation } from 'react-router-dom';
import { styled } from '@material-ui/core/styles';

// import eyeFill from '@iconify/icons-eva/eye-fill';
// import eyeOffFill from '@iconify/icons-eva/eye-off-fill';
import { useFormik, Form, FormikProvider } from 'formik';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import CreateIcon from '@material-ui/icons/Create';

// material
import {
  Radio,
  Stack,
  TextField,
  // IconButton,
  FormLabel,
  RadioGroup,
  // InputAdornment,
  Typography,
  FormControlLabel
} from '@material-ui/core';
import { LoadingButton } from '@material-ui/lab';

import data from '../../../_mocks_/personnel';
import { fakeAuth } from '../../../fakeAuth';
// ----------------------------------------------------------------------

const Div = styled('div')(({ theme }) => ({
  textAlign: 'center',
  width: '40%',
  position: 'relative',
  left: '50%',
  transform: 'translate(-50%,0)'
}));

const Border = styled('div')(({ theme }) => ({
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

const Box = styled('div')(({ theme }) => ({
  width: '70%',
  textAlign: 'center',
  position: 'relative',
  left: '50%',
  transform: 'translate(-50%,0)'
}));

export default function PersonnelAddFrom() {
  const navigate = useNavigate();
  const [fName, setFname] = useState(true);
  const [lName, setLname] = useState(true);
  const [middleInitial, setMiddleInitial] = useState(true);
  const [pword, setPword] = useState(true);
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
    password: Yup.string()
      .required('Mot de passe requis')
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        'Doit containir 8 caractères, une majuscule, une minuscule, un nombre et un caractère special'
      )
  });

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      middleName: '',
      password: ''
    },
    validationSchema: RegisterSchema,
    onSubmit: () => {
      navigate('/dashboard/user', { replace: true });
    }
  });

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = formik;

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // };
  const location = useLocation();
  const [isAuth, setIsAuth] = useState(localStorage.getItem('token'));
  useEffect(() => {
    setIsAuth(isAuth);
  }, []);

  return isAuth ? (
    <Border>
      <Div>
        <FormikProvider value="">
          <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <Box sx={{ pb: 5 }}>
              <Typography variant="h4">Mes Informations</Typography>
            </Box>
            <Stack spacing={3}>
              <TextField
                fullWidth
                label="Prénom"
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
                label="Post nom"
                disabled={middleInitial}
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
                label="Mot de passe"
                disabled={pword}
                {...getFieldProps('password')}
                error={Boolean(touched.password && errors.password)}
                helperText={touched.password && errors.password}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end" onClick={handlePword}>
                      <CreateIcon />
                    </InputAdornment>
                  )
                }}
              />
              <LoadingButton
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                loading={isSubmitting}
              >
                Mettre à jour
              </LoadingButton>
            </Stack>
          </Form>
        </FormikProvider>
      </Div>
    </Border>
  ) : (
    <Navigate to="/" state={{ from: location }} />
  );
}
