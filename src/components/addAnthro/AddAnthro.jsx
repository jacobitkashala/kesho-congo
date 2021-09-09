import * as Yup from 'yup';
import propTypes from 'prop-types';
import { useState } from 'react';
import { useFormik, Form, FormikProvider } from 'formik';
// import { useNavigate } from 'react-router-dom';

// material
import { Stack, TextField, Select, styled } from '@material-ui/core';
import { LoadingButton } from '@material-ui/lab';

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

export default function AddAnthro() {
  // const [IdentiteData, SetIdentiteData] = useState({});
  const RegisterSchema = Yup.object().shape({
    poidsActuel: Yup.number('number').required('poids requis'),
    taille: Yup.number('number').required('taille requis'),
    peri_brachail: Yup.number('number').required('perimetre requis'),
    peri_cranien: Yup.number('number').required('perimetre requis'),
    formMalnutrition: Yup.string().required()
  });

  const formik = useFormik({
    initialValues: {
      peri_cranien: '',
      taille: '',
      poidsActuel: '',
      peri_brachail: '',
      formMalnutrition: ''
    },
    validationSchema: RegisterSchema,
    onSubmit: (anthro) => {
      console.log(anthro);
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
                sx={{ width: '90%', padding: '2px' }}
                fullWidth
                value={values.poidsActuel}
                label="Poids actuelle"
                {...getFieldProps('poidsActuel')}
                helperText={touched.poidsActuel && errors.poidsActuel}
                error={Boolean(touched.poidsActuel && errors.poidsActuel)}
              />
              <TextField
                sx={{ width: '90%', padding: '2px' }}
                fullWidth
                label="Taille "
                {...getFieldProps('taille')}
                value={values.taille}
                helperText={touched.taille && errors.taille}
                error={Boolean(touched.taille && errors.taille)}
              />
              <TextField
                sx={{ width: '90%', padding: '2px' }}
                fullWidth
                label="périmètre crânien "
                {...getFieldProps('peri_cranien')}
                value={values.peri_cranien}
                helperText={touched.peri_cranien && errors.peri_cranien}
                error={Boolean(touched.peri_cranien && errors.peri_cranien)}
              />
              <TextField
                sx={{ width: '90%', padding: '2px' }}
                fullWidth
                label="périmètre branchial"
                value={values.peri_brachail}
                {...getFieldProps('peri_brachail')}
                helperText={touched.prenom_brachial && errors.prenom_brachail}
                error={Boolean(touched.peri_brachail && errors.peri_brachail)}
              />
              <Select
                native
                sx={{ width: '90%', padding: '2px' }}
                // value={values.Provenace}
                {...getFieldProps('formMalnutrition')}
                error={Boolean(touched.formMalnutrition && errors.formMalnutrition)}
              >
                <option value="" selected disabled hidden>
                  Form de malnutrition
                </option>
                <option value="Malnutrition aigue modérée">Malnutrition aigue modérée</option>
                <option value="Malnutrition aigue sévère">Malnutrition aigue sévère</option>
                <option value="Malnutrition aigue chronique">Malnutrition aigue chronique</option>
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
