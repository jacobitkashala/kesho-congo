import * as Yup from 'yup';
import { useFormik, Form, FormikProvider } from 'formik';
import { useNavigate, useLocation } from 'react-router-dom';

// material
import { Stack, TextField, Select, styled } from '@material-ui/core';
import { LoadingButton } from '@material-ui/lab';
import Axios from 'axios';
import { fakeAuth } from '../../fakeAuth';

// ----------------------------------------------------------------------
const Div = styled('div')(() => ({
  // height: '90%',
  // width: '100%',
  boxShadow: '0px 0px 15px -10px rgb(0 0 0 / 75%)',
  width: '80%',
  position: 'relative',
  borderRadius: '15px',
  padding: '30px',
  paddingBottom: '90px',
  left: '50%',
  transform: 'translate(-50%,0)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around'
}));

const SubDivContenaire = styled('div')(() => ({
  width: '100%',
  position: 'relative',
  // left: '60%',
  // transform: 'translate(-50%,0)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
}));

export default function AddAnthro({ id }) {
  // const [IdentiteData, SetIdentiteData] = useState({});
  // const RegisterSchema = Yup.object().shape({
  //   weight: Yup.number('number').required('Poids requis'),
  //   height: Yup.number('number').required('Taille requise'),
  //   brachialPerim: Yup.number('number').required('Périmètre requis'),
  //   cranianPerim: Yup.number('number').required('Périmètre requis'),
  //   MalnutType: Yup.string().required()
  // });
  const location = useLocation();
  const navigate = useNavigate();
  const { from } = location.state || { from: { pathname: '/dashboard/app' } };
  const RegisterSchema = Yup.object().shape({
    weight: Yup.number().required('Poids requis'),
    height: Yup.number().required('Taille requise'),
    brachial: Yup.number().required('Périmètre brachial requis'),
    cranian: Yup.number().required('Périmètre cranien requis'),
    malnutrition: Yup.string().required()
  });

  const formik = useFormik({
    initialValues: {
      weight: '',
      height: '',
      brachial: '',
      cranian: '',
      malnutrition: ''
    },
    validationSchema: RegisterSchema,
    onSubmit: ({ weight, height, brachial, cranian, malnutrition }) => {
      Axios.post(
        `https://kesho-congo-api.herokuapp.com/anthropometrique?id_patient=${id}`,
        {
          peri_cranien: cranian,
          peri_brachial: brachial,
          poids: weight,
          taille: height,
          type_malnutrition: malnutrition,
          date_examen: '2020-01-25'
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
          console.log('Yves', message);
          fakeAuth.login(() => {
            navigate(from);
            navigate(`/dashboard/patient/detail_patient/${id}`, { replace: true });
          });
        })
        .catch((err) => {
          // setError(true);
          // setLoader(false);
          console.log(err);
        });
    }
  });

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps, values } = formik;
  // console.log(errors);
  // console.log(values);
  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Div>
          <SubDivContenaire>
            <Stack spacing={3}>
              <TextField
                sx={{ width: '100%', padding: '2px' }}
                fullWidth
                value={values.weight}
                label="Poids (gr)"
                {...getFieldProps('weight')}
                helperText={touched.weight && errors.weight}
                error={Boolean(touched.weight && errors.weight)}
              />
              <TextField
                sx={{ width: '100%', padding: '2px' }}
                fullWidth
                value={values.height}
                label="Taille (cm) "
                {...getFieldProps('height')}
                helperText={touched.height && errors.height}
                error={Boolean(touched.height && errors.height)}
              />
              <TextField
                sx={{ width: '100%', padding: '2px' }}
                fullWidth
                value={values.cranian}
                label="Périmètre crânien (cm) "
                {...getFieldProps('cranian')}
                helperText={touched.cranian && errors.cranian}
                error={Boolean(touched.cranian && errors.cranian)}
              />
              <TextField
                sx={{ width: '100%', padding: '2px' }}
                fullWidth
                label="Périmètre brachial(cm)"
                value={values.brachial}
                {...getFieldProps('brachial')}
                helperText={touched.brachial && errors.brachial}
                error={Boolean(touched.brachial && errors.brachial)}
              />
              <Select
                native
                sx={{ width: '100%', padding: '2px' }}
                value={values.malnutrition}
                {...getFieldProps('malnutrition')}
                error={Boolean(touched.malnutrition && errors.malnutrition)}
              >
                <option value="" selected disabled hidden>
                  Type de malnutrition
                </option>
                <option value="MAM">Malnutrition aigue modérée</option>
                <option value="MAS">Malnutrition aigue sévère</option>
                <option value="MAC">Malnutrition aigue chronique</option>
              </Select>
              <LoadingButton
                type="submit"
                variant="contained"
                size="large"
                loading={isSubmitting}
                sx={{ width: 200, margin: 'auto', marginTop: '40px' }}
              >
                Ajouter
              </LoadingButton>
            </Stack>
          </SubDivContenaire>
        </Div>
      </Form>
    </FormikProvider>
  );
}
