import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { styled } from '@material-ui/core/styles';
import { useFormik, Form, FormikProvider } from 'formik';
// material
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
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

const Box = styled('div')(({ theme }) => ({
  width: '100%',
  textAlign: 'center',
  position: 'relative',
  left: '125%',
  transform: 'translate(-50%,0)'
}));

export default function PersonnelAddFrom() {
  const navigate = useNavigate();

  const RegisterSchema = Yup.object().shape({
    firstName: Yup.string().min(1, 'Trop court!').max(50, 'Trop long!').required('Prénom requis'),
    lastName: Yup.string().min(1, 'Trop court!').max(50, 'Trop long!').required('Nom requis'),
    middleName: Yup.string()
      .min(1, 'Trop court!')
      .max(50, 'Trop long!')
      .required('Post-nom requis'),
    status: Yup.string().required('Post-nom requis'),
    email: Yup.string()
      .email('Adresse mail doit être au format valide')
      .required('Adresse mail requis'),
    password: Yup.string().required('Mot de passe requis'),
    confirmPassword: Yup.string().required('Confirmer le mot de passe')
  });

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      middleName: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    validationSchema: RegisterSchema,
    onSubmit: () => {
      navigate('/dashboard/personnel', { replace: true });
    }
  });

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = formik;

  return (
    <FormikProvider value={formik}>
      <Box>
        <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <Stack spacing={3}>
            <TextField
              fullWidth
              label="Prénom"
              {...getFieldProps('firstName')}
              error={Boolean(touched.firstName && errors.firstName)}
              helperText={touched.firstName && errors.firstName}
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
              label="Post-nom"
              {...getFieldProps('middleName')}
              error={Boolean(touched.middleName && errors.middleName)}
              helperText={touched.middleName && errors.middleName}
            />
            <RadioGroup
              name="Sexe"
              onChange={() => {
                console.log('bien');
              }}
            >
              <Stack direction={{ xs: 'column', sm: 'row', alignItems: 'center' }} spacing={2}>
                <FormLabel component="label">Sexe:</FormLabel>
                <FormControlLabel value="F" control={<Radio />} label="F" />
                <FormControlLabel value="M" control={<Radio />} label="M" />
              </Stack>
            </RadioGroup>

            {/* <TextField
              fullWidth
              autoComplete="Statut"
              type="text"
              label="Statut "
              {...getFieldProps('email')}
              error={Boolean(touched.status && errors.status)}
              helperText={touched.status && errors.status}
            /> */}
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // value={age}
              // onChange={handleChange}
            >
              <MenuItem value={10}>Médecin</MenuItem>
              <MenuItem value={20}>Infirmier</MenuItem>
              <MenuItem value={30}>Nutritionniste</MenuItem>
            </Select>

            <TextField
              fullWidth
              autoComplete="Email"
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
              error={Boolean(touched.password && errors.password)}
              helperText={touched.password && errors.password}
            />

            <LoadingButton
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              loading={isSubmitting}
            >
              Créer
            </LoadingButton>
          </Stack>
        </Form>
      </Box>
    </FormikProvider>
  );
}
