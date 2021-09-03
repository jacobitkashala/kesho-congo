import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { styled } from '@material-ui/core/styles';
import { useFormik, Form, FormikProvider } from 'formik';
import { BrowserHistory } from 'react-router';
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
import { useDispatch } from 'react-redux';
import { addUsersAsync } from '../../../redux/reducers/userSlice';
import data from '../../../_mocks_/personnel';

// const AddTodoForm = () => {
// 	const [value, setValue] = useState('');

// 	const onSubmit = (event) => {
// 		event.preventDefault();
// 		console.log('user entered: ' + value);
// 	};
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
  const dispatch = useDispatch();

  const RegisterSchema = Yup.object().shape({
    firstName: Yup.string().min(1, 'Trop court!').max(50, 'Trop long!').required('Prénom requis'),
    lastName: Yup.string().min(1, 'Trop court!').max(50, 'Trop long!').required('Nom requis'),
    middleName: Yup.string()
      .min(1, 'Trop court!')
      .max(50, 'Trop long!')
      .required('Post-nom requis'),
    status: Yup.string().required(),
    email: Yup.string()
      .email('Adresse mail doit être au format valide')
      .required('Adresse mail requis'),
    password: Yup.string().required('Mot de passe requis'),
    // sexe: Yup.string().required(),
    isAdmin: Yup.string().required()
  });

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      middleName: '',
      status: '',
      email: '',
      password: '',
      // sexe:'',
      isAdmin: ''
    },
    validationSchema: RegisterSchema,
    onSubmit: () => {
      dispatch(
        addUsersAsync({
          email: values.email,
          password: values.password,
          nom_user: values.lastName,
          postnom_user: values.middleName,
          prenom_user: values.firstName,
          is_admin: values.isAdmin,
          image_user: 'www.google.com',
          statut: values.status
          // sexe:value.sex
        })
      );

      navigate('/dashboard/personnel', { replace: true });
    }
  });

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps, values } = formik;

  return (
    <FormikProvider value={formik}>
      <Box>
        <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <Stack spacing={3}>
            <TextField
              fullWidth
              label="Prénom"
              value={values.firstName}
              {...getFieldProps('firstName')}
              error={Boolean(touched.firstName && errors.firstName)}
              helperText={touched.firstName && errors.firstName}
            />
            <TextField
              fullWidth
              label="Nom"
              value={values.lastName}
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
            <Select
              native
              value={values.status}
              {...getFieldProps('status')}
              error={Boolean(touched.status && errors.status)}
            >
              <option value="" selected disabled hidden>
                Statut
              </option>
              <option value="Médecin">Médecin</option>
              <option value="Infirmier">Infirmier</option>
              <option value="Nutritionniste">Nutritionniste</option>
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
              {...getFieldProps('password')}
              error={Boolean(touched.password && errors.password)}
              helperText={touched.password && errors.password}
            />
            <RadioGroup
              {...getFieldProps('isAdmin')}
              error={Boolean(touched.isAdmin && errors.isAdmin)}
              value={values.isAdmin}
            >
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                sx={{ display: 'flex', alignItems: 'center' }}
                spacing={1}
              >
                <FormLabel component="label">Admin:</FormLabel>
                <FormControlLabel value="true" control={<Radio />} label="Oui" />
                <FormControlLabel value="false" control={<Radio />} label="Non" />
              </Stack>
            </RadioGroup>

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
