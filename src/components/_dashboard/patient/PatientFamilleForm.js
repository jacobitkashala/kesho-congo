import * as Yup from 'yup';
// import { useState } from 'react';
import { useFormik, Form, FormikProvider } from 'formik';
import { useNavigate } from 'react-router-dom';
// material
import {
  Box,
  Stack,
  TextField,
  Typography,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormLabel
} from '@material-ui/core';
import { LoadingButton } from '@material-ui/lab';

// ----------------------------------------------------------------------

export default function FamilleForm() {
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
    }
  });

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = formik;

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Box sx={{ pb: 5 }}>
          <Typography variant="h5">Famille</Typography>
        </Box>
        <Stack spacing={4}>
          <TextField fullWidth autoComplete="tailleMenage" type="text" label="Taille du ménage" />
          <TextField
            fullWidth
            autoComplete="Nom complet du tuteur"
            type="text"
            label="Nom complet du tuteur"
            {...getFieldProps('tailleMenage')}
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
          />
          <TextField
            fullWidth
            label="Nombre de femme"
            {...getFieldProps('firstName')}
            error={Boolean(touched.firstName && errors.firstName)}
            helperText={touched.firstName && errors.firstName}
          />
          <RadioGroup
            name="Parent_en_vie"
            onChange={() => {
              console.log('bien');
            }}
          >
            <FormLabel component="label">Vit avec ses deux parent</FormLabel>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <FormControlLabel value="Nom" control={<Radio />} label="Oui" />
              <FormControlLabel value="Oui" control={<Radio />} label="Non" />
            </Stack>
          </RadioGroup>
          <RadioGroup
            name="mere_en_vie"
            onChange={() => {
              console.log('bien');
            }}
          >
            <FormLabel component="label">Mére en vie</FormLabel>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <FormControlLabel value="Nom" control={<Radio />} label="Oui" />
              <FormControlLabel value="Oui" control={<Radio />} label="Non" />
            </Stack>
          </RadioGroup>

          <RadioGroup
            name="Pére_en_vie"
            onChange={() => {
              console.log('bien');
            }}
          >
            <FormLabel component="label">Pére en vie</FormLabel>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <FormControlLabel value="Nom" control={<Radio />} label="Oui" />
              <FormControlLabel value="Oui" control={<Radio />} label="Non" />
            </Stack>
          </RadioGroup>
          <RadioGroup
            name="mere_enceinte"
            onChange={() => {
              console.log('bien');
            }}
          >
            <FormLabel component="label">La mere est enceinte</FormLabel>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <FormControlLabel value="Nom" control={<Radio />} label="Oui" />
              <FormControlLabel value="Oui" control={<Radio />} label="Non" />
            </Stack>
          </RadioGroup>
          <TextField
            fullWidth
            label="Profession mère"
            {...getFieldProps('lastName')}
            error={Boolean(touched.lastName && errors.lastName)}
            helperText={touched.lastName && errors.lastName}
          />
          <TextField
            fullWidth
            label="Profession chef du ménage"
            {...getFieldProps('lastName')}
            error={Boolean(touched.lastName && errors.lastName)}
            helperText={touched.lastName && errors.lastName}
          />
          <TextField
            fullWidth
            label="Age mère"
            {...getFieldProps('lastName')}
            error={Boolean(touched.lastName && errors.lastName)}
            helperText={touched.lastName && errors.lastName}
          />
          <TextField
            fullWidth
            label="Scolarité mère"
            {...getFieldProps('lastName')}
            error={Boolean(touched.lastName && errors.lastName)}
            helperText={touched.lastName && errors.lastName}
          />
          <TextField
            fullWidth
            label="Age mère"
            {...getFieldProps('lastName')}
            error={Boolean(touched.lastName && errors.lastName)}
            helperText={touched.lastName && errors.lastName}
          />
          <RadioGroup
            name="mere_en_vie"
            onChange={() => {
              console.log('bien');
            }}
          >
            <FormLabel component="label">Contraception mère</FormLabel>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <FormControlLabel value="Nom" control={<Radio />} label="Oui" />
              <FormControlLabel value="Oui" control={<Radio />} label="Non" />
            </Stack>
          </RadioGroup>
          <RadioGroup
            name="mere_en_vie"
            onChange={() => {
              console.log('bien');
            }}
          >
            <FormLabel component="label">Contraception naturelle</FormLabel>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <FormControlLabel value="Nom" control={<Radio />} label="Oui" />
              <FormControlLabel value="Oui" control={<Radio />} label="Non" />
            </Stack>
          </RadioGroup>
          <TextField
            fullWidth
            label="Niveau socioeconomique"
            {...getFieldProps('firstName')}
            error={Boolean(touched.firstName && errors.firstName)}
            helperText={touched.firstName && errors.firstName}
          />
          <TextField
            fullWidth
            label="Statut marital"
            {...getFieldProps('firstName')}
            error={Boolean(touched.firstName && errors.firstName)}
            helperText={touched.firstName && errors.firstName}
          />
          <TextField
            fullWidth
            label="Type de statut marital"
            {...getFieldProps('firstName')}
            error={Boolean(touched.firstName && errors.firstName)}
            helperText={touched.firstName && errors.firstName}
          />
          <TextField
            fullWidth
            label="nombre de femme"
            {...getFieldProps('firstName')}
            error={Boolean(touched.firstName && errors.firstName)}
            helperText={touched.firstName && errors.firstName}
          />
          <TextField
            fullWidth
            label="Tribu"
            {...getFieldProps('firstName')}
            error={Boolean(touched.firstName && errors.firstName)}
            helperText={touched.firstName && errors.firstName}
          />
          <TextField
            fullWidth
            label="Réligion"
            {...getFieldProps('firstName')}
            error={Boolean(touched.firstName && errors.firstName)}
            helperText={touched.firstName && errors.firstName}
          />
          <RadioGroup
            name="mere_en_vie"
            onChange={() => {
              console.log('bien');
            }}
          >
            <FormLabel component="label">Posseder une radio ou télé</FormLabel>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <FormControlLabel value="Nom" control={<Radio />} label="Oui" />
              <FormControlLabel value="Oui" control={<Radio />} label="Non" />
            </Stack>
          </RadioGroup>
          <TextField
            fullWidth
            label="Nombre repas"
            {...getFieldProps('firstName')}
            error={Boolean(touched.firstName && errors.firstName)}
            helperText={touched.firstName && errors.firstName}
          />
          <TextField
            fullWidth
            label="Consommation boisson"
            {...getFieldProps('firstName')}
            error={Boolean(touched.firstName && errors.firstName)}
            helperText={touched.firstName && errors.firstName}
          />
          <TextField
            fullWidth
            label="atb"
            {...getFieldProps('firstName')}
            error={Boolean(touched.firstName && errors.firstName)}
            helperText={touched.firstName && errors.firstName}
          />
          <TextField
            fullWidth
            label="liste atb"
            {...getFieldProps('firstName')}
            error={Boolean(touched.firstName && errors.firstName)}
            helperText={touched.firstName && errors.firstName}
          />
          <TextField
            fullWidth
            label="tbc parents"
            {...getFieldProps('firstName')}
            error={Boolean(touched.firstName && errors.firstName)}
            helperText={touched.firstName && errors.firstName}
          />
          <TextField
            fullWidth
            label="duree traitement tbc"
            {...getFieldProps('firstName')}
            error={Boolean(touched.firstName && errors.firstName)}
            helperText={touched.firstName && errors.firstName}
          />
          <TextField
            fullWidth
            label="tbc declarer finie"
            {...getFieldProps('firstName')}
            error={Boolean(touched.firstName && errors.firstName)}
            helperText={touched.firstName && errors.firstName}
          />
          <LoadingButton
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            loading={isSubmitting}
          >
            Enregistrer
          </LoadingButton>
        </Stack>
      </Form>
    </FormikProvider>
  );
}
