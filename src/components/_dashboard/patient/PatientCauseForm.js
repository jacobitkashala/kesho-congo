import * as Yup from 'yup';
import propTypes from 'prop-types';
// import { useState } from 'react';
import { useFormik, Form, FormikProvider } from 'formik';
import { useNavigate } from 'react-router-dom';
// material
import {
  Box,
  Stack,
  TextField,
  Typography,
  // FormControlLabel,
  // Radio,
  // RadioGroup,
  // FormLabel,
  Button
} from '@material-ui/core';
import { LoadingButton } from '@material-ui/lab';

// ----------------------------------------------------------------------
CauseForm.propTypes = {
  NextStep: propTypes.func,
  PrevStep: propTypes.func
};

export default function CauseForm({ NextStep, PrevStep }) {
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
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    },
    validationSchema: RegisterSchema,
    onSubmit: () => {
      navigate('/dashboard', { replace: true });
      console.log(NextStep);
      NextStep();
    }
  });

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = formik;

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Box sx={{ pb: 5 }}>
          <Typography variant="h5">Cause probable</Typography>
        </Box>
        <Stack spacing={4} sx={{ width: 400 }}>
          <TextField
            fullWidth
            autoComplete="Nom"
            type="text"
            label="atcd mas"
            // {...getFieldProps('tailleMenage')}
            // error={Boolean(touched.email && errors.email)}
            // helperText={touched.email && errors.email}
          />
          <TextField
            fullWidth
            label="mas fraite"
            // {...getFieldProps('firstName')}
            // error={Boolean(touched.firstName && errors.firstName)}
            // helperText={touched.firstName && errors.firstName}
          />
          <TextField
            fullWidth
            label="Terme grossesse"
            // {...getFieldProps('lastName')}
            // error={Boolean(touched.lastName && errors.lastName)}
            // helperText={touched.lastName && errors.lastName}
          />
          <TextField
            fullWidth
            label="sejour neonat"
            // {...getFieldProps('lastName')}
            // error={Boolean(touched.lastName && errors.lastName)}
            // helperText={touched.lastName && errors.lastName}
          />
          <TextField
            fullWidth
            label="eig"
            // {...getFieldProps('firstName')}
            // error={Boolean(touched.firstName && errors.firstName)}
            // helperText={touched.firstName && errors.firstName}
          />
          <TextField
            fullWidth
            label="Lieu accouchement"
            // {...getFieldProps('firstName')}
            // error={Boolean(touched.firstName && errors.firstName)}
            // helperText={touched.firstName && errors.firstName}
          />
          <TextField
            fullWidth
            label="asphixie perinatal"
            // {...getFieldProps('firstName')}
            // error={Boolean(touched.firstName && errors.firstName)}
            // helperText={touched.firstName && errors.firstName}
          />
          <TextField
            fullWidth
            label="dpm"
            // {...getFieldProps('firstName')}
            // error={Boolean(touched.firstName && errors.firstName)}
            // helperText={touched.firstName && errors.firstName}
          />
          <TextField
            fullWidth
            label="calendrier vaccinal"
            // {...getFieldProps('firstName')}
            // error={Boolean(touched.firstName && errors.firstName)}
            // helperText={touched.firstName && errors.firstName}
          />
          <TextField
            fullWidth
            label="Rang fratie"
            // {...getFieldProps('firstName')}
            // error={Boolean(touched.firstName && errors.firstName)}
            // helperText={touched.firstName && errors.firstName}
          />
          <TextField
            fullWidth
            label="Taille fratie"
            // {...getFieldProps('firstName')}
            // error={Boolean(touched.firstName && errors.firstName)}
            // helperText={touched.firstName && errors.firstName}
          />
          <TextField
            fullWidth
            label="atcd rougeole fratie"
            // {...getFieldProps('firstName')}
            // error={Boolean(touched.firstName && errors.firstName)}
            // helperText={touched.firstName && errors.firstName}
          />
          <TextField
            fullWidth
            label="vaccination rougeole"
            // {...getFieldProps('firstName')}
            // error={Boolean(touched.firstName && errors.firstName)}
            // helperText={touched.firstName && errors.firstName}
          />
          <TextField
            fullWidth
            label="tbc"
            // {...getFieldProps('firstName')}
            // error={Boolean(touched.firstName && errors.firstName)}
            // helperText={touched.firstName && errors.firstName}
          />
          <TextField
            fullWidth
            label="Atcd du tbc dans fratie"
            // {...getFieldProps('firstName')}
            // error={Boolean(touched.firstName && errors.firstName)}
            // helperText={touched.firstName && errors.firstName}
          />
          <TextField
            fullWidth
            label="Hospitalisation recente"
            // {...getFieldProps('firstName')}
            // error={Boolean(touched.firstName && errors.firstName)}
            // helperText={touched.firstName && errors.firstName}
          />
          <TextField
            fullWidth
            label="diagnostique hospitalisation"
            // {...getFieldProps('firstName')}
            // error={Boolean(touched.firstName && errors.firstName)}
            // helperText={touched.firstName && errors.firstName}
          />
          <TextField
            fullWidth
            label="cocktail atb"
            // {...getFieldProps('firstName')}
            // error={Boolean(touched.firstName && errors.firstName)}
            // helperText={touched.firstName && errors.firstName}
          />
          <TextField
            fullWidth
            label="duree prise atb"
            // {...getFieldProps('firstName')}
            // error={Boolean(touched.firstName && errors.firstName)}
            // helperText={touched.firstName && errors.firstName}
          />
          <TextField
            fullWidth
            label="Fin allaitement"
            // {...getFieldProps('firstName')}
            // error={Boolean(touched.firstName && errors.firstName)}
            // helperText={touched.firstName && errors.firstName}
          />
          <TextField
            fullWidth
            label="Mois fin allaitement"
            // {...getFieldProps('firstName')}
            // error={Boolean(touched.firstName && errors.firstName)}
            // helperText={touched.firstName && errors.firstName}
          />
          <TextField
            fullWidth
            label="Diversification aliment"
            // {...getFieldProps('firstName')}
            // error={Boolean(touched.firstName && errors.firstName)}
            // helperText={touched.firstName && errors.firstName}
          />
          <TextField
            fullWidth
            label="Constitution aliment"
            // {...getFieldProps('firstName')}
            // error={Boolean(touched.firstName && errors.firstName)}
            // helperText={touched.firstName && errors.firstName}
          />
          <TextField
            fullWidth
            label="Cause dpm"
            // {...getFieldProps('firstName')}
            // error={Boolean(touched.firstName && errors.firstName)}
            // helperText={touched.firstName && errors.firstName}
          />
          <TextField
            fullWidth
            label="Vaccin non recu"
            // {...getFieldProps('firstName')}
            // error={Boolean(touched.firstName && errors.firstName)}
            // helperText={touched.firstName && errors.firstName}
          />
          <TextField
            fullWidth
            label="Produit plante"
            // {...getFieldProps('firstName')}
            // error={Boolean(touched.firstName && errors.firstName)}
            // helperText={touched.firstName && errors.firstName}
          />
          <TextField
            fullWidth
            label="Durée produit plante"
            // {...getFieldProps('firstName')}
            // error={Boolean(touched.firstName && errors.firstName)}
            // helperText={touched.firstName && errors.firstName}
          />
          <TextField
            fullWidth
            label="Allaitement 6 mois"
            // {...getFieldProps('firstName')}
            // error={Boolean(touched.firstName && errors.firstName)}
            // helperText={touched.firstName && errors.firstName}
          />
          <TextField
            fullWidth
            label="age fin allaitement"
            // {...getFieldProps('firstName')}
            // error={Boolean(touched.firstName && errors.firstName)}
            // helperText={touched.firstName && errors.firstName}
          />
          <Stack
            container
            spacing={3}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'row'
            }}
          >
            <Button
              style={{
                background: '#00AB55',
                color: '#FFFFFF',
                marginRight: '1em',
                marginTop: '0 important'
              }}
              fullWidth
              onClick={PrevStep}
            >
              Précédent
            </Button>
            <Button
              style={{
                background: '#00AB55',
                color: '#FFFFFF',
                marginRight: '1em',
                marginTop: 0
              }}
              fullWidth
              onClick={NextStep}
              onSubmit={NextStep}
            >
              suivant
            </Button>
          </Stack>
        </Stack>
      </Form>
    </FormikProvider>
  );
}
