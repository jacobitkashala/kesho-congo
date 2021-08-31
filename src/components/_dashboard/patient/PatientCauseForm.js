import * as Yup from 'yup';
import propTypes from 'prop-types';
import { useState } from 'react';
import { useFormik, Form, FormikProvider } from 'formik';
// import { useNavigate } from 'react-router-dom';

// material
import {
  // Box,
  // MenuItem,
  Stack,
  TextField,
  Typography,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormLabel,
  // Grid,
  InputLabel,
  Select,
  styled
} from '@material-ui/core';
import { LoadingButton } from '@material-ui/lab';

// ----------------------------------------------------------------------
CauseForm.propTypes = {
  NextStep: propTypes.func,
  PrevStep: propTypes.func,
  SetDataPatient: propTypes.func
};

const Div = styled('div')(() => ({
  height: '90%',
  width: '150%',
  position: 'relative',
  borderRadius: '15px',
  paddingTop: '30px',
  paddingBottom: '80px',
  left: '50%',
  transform: 'translate(-50%,0)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around'
}));

const SubDiv = styled('div')(() => ({
  height: '100%',
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between'
  // border: '0.5px solid lightgrey'
}));
const SubDivContenaire = styled('div')(() => ({
  width: '50%',
  position: 'relative',
  left: '30%',
  transform: 'translate(-50%,0)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between'
}));

export default function CauseForm({ NextStep, SetDataPatient, PrevStep }) {
  const [SelectedItem, SetSelectedItem] = useState('');
  const [CauseData, SetCauseData] = useState({});

  const RegisterSchema = Yup.object().shape({
    PoidsNaissance: Yup.number().required().positive()
  });

  const formik = useFormik({
    initialValues: {
      PoidsNaissance: ''
    },
    validationSchema: RegisterSchema,
    onSubmit: (CauseMalnutrition) => {
      SetDataPatient((current) => ({ ...current, CauseMalnutrition }));
      NextStep();
    }
  });

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = formik;
  console.log(errors);
  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Div>
          <Typography variant="h5" sx={{ textAlign: 'center' }}>
            Cause Malnutrition
          </Typography>
          <SubDiv direction={{ xs: 'column', sm: 'row' }}>
            <SubDivContenaire>
              <Stack spacing={3}>
                <InputLabel>Lieu d’accouchement</InputLabel>
                <Select
                  sx={{ width: '80%', padding: '2px' }}
                  native
                  // {...getSelection('ModeArrive')}
                  // error={Boolean(touched.ModeArrive && errors.ModeArrive)}
                  onChange={(event) => {
                    SetSelectedItem(event.target.value);
                  }}
                  value={SelectedItem}
                >
                  <option value="Structure sanitaire oui">Structure sanitaire</option>
                  <option value="Voiture">Voiture</option>
                  <option value="domicile">domicile</option>
                </Select>
                <RadioGroup
                  // name="Parent_en_vie"
                  // {...getFieldProps('Sexe')}
                  onChange={(event) => {
                    console.log(event.target.value);
                  }}
                >
                  <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    sx={{ display: 'flex', alignItems: 'center' }}
                    spacing={1}
                  >
                    <FormLabel component="label">Séjour en néonat:</FormLabel>
                    <FormControlLabel value="Oui" control={<Radio checked />} label="Oui" />
                    <FormControlLabel value="Non" control={<Radio />} label="Non" />
                  </Stack>
                  <TextField sx={{ width: '80%', padding: '2px' }} label="EIG moyen (année)" />
                  <RadioGroup
                    // name="Parent_en_vie"
                    // {...getFieldProps('Sexe')}
                    onChange={(event) => {
                      console.log(event.target.value);
                    }}
                  >
                    <Stack
                      direction={{ xs: 'column', sm: 'row' }}
                      sx={{ display: 'flex', alignItems: 'center' }}
                      spacing={1}
                    >
                      <FormLabel component="label">MATCD de MAS:</FormLabel>
                      <FormControlLabel value="Oui" control={<Radio checked />} label="Oui" />
                      <FormControlLabel value="Non" control={<Radio />} label="Non" />
                    </Stack>
                  </RadioGroup>
                  <TextField
                    sx={{ width: '80%', padding: '2px' }}
                    fullWidth
                    label="Rang dans la fratrie"
                    // {...getFieldProps('Pc')}
                    // error={Boolean(touched.Pc && errors.Pc)}
                  />
                  <RadioGroup
                    // name="Parent_en_vie"
                    // {...getFieldProps('Sexe')}
                    onChange={(event) => {
                      console.log(event.target.value);
                    }}
                  >
                    <Stack
                      direction={{ xs: 'column', sm: 'row' }}
                      sx={{ display: 'flex', alignItems: 'center' }}
                      spacing={1}
                    >
                      <FormLabel component="label">MAS dans la fratrie:</FormLabel>
                      <FormControlLabel value="Oui" control={<Radio checked />} label="Oui" />
                      <FormControlLabel value="Non" control={<Radio />} label="Non" />
                    </Stack>
                  </RadioGroup>
                </RadioGroup>
                <TextField
                  sx={{ width: '80%', padding: '2px' }}
                  fullWidth
                  type="text"
                  label="Poids de naissance(gr)"
                  {...getFieldProps('PoidsNaissance')}
                  error={Boolean(touched.PoidsNaissance && errors.PoidsNaissance)}
                />
                <RadioGroup
                  // name="Parent_en_vie"
                  // {...getFieldProps('Sexe')}
                  onChange={(event) => {
                    console.log(event.target.value);
                  }}
                >
                  <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    sx={{ display: 'flex', alignItems: 'center' }}
                    spacing={1}
                  >
                    <FormLabel component="label">ATCD de Rougeole dans la fratrie:</FormLabel>
                    <FormControlLabel value="Oui" control={<Radio checked />} label="Oui" />
                    <FormControlLabel value="Non" control={<Radio />} label="Non" />
                  </Stack>
                </RadioGroup>
                <TextField
                  sx={{ width: '80%', padding: '2px' }}
                  fullWidth
                  label="Taille du ménage"
                  // {...getFieldProps('Pb')}
                  // error={Boolean(touched.Pb && errors.Pb)}
                />
                <RadioGroup
                  // name="Parent_en_vie"
                  // {...getFieldProps('Sexe')}
                  onChange={(event) => {
                    console.log(event.target.value);
                  }}
                >
                  <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    sx={{ display: 'flex', alignItems: 'center' }}
                    spacing={1}
                  >
                    <FormLabel component="label">TBC:</FormLabel>
                    <FormControlLabel value="Oui" control={<Radio checked />} label="Oui" />
                    <FormControlLabel value="Non" control={<Radio />} label="Non" />
                  </Stack>
                </RadioGroup>
                <RadioGroup
                  // name="Parent_en_vie"
                  // {...getFieldProps('Sexe')}
                  onChange={(event) => {
                    console.log(event.target.value);
                  }}
                >
                  <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    sx={{ display: 'flex', alignItems: 'center' }}
                    spacing={1}
                  >
                    <FormLabel component="label"> TBC chez les parents:</FormLabel>
                    <FormControlLabel value="Oui" control={<Radio checked />} label="Oui" />
                    <FormControlLabel value="Non" control={<Radio />} label="Non" />
                  </Stack>
                </RadioGroup>
                <InputLabel>Si TBC oui lequel</InputLabel>
                <Select
                  sx={{ width: '80%', padding: '2px' }}
                  {...getSelection('ModeArrive')}
                  error={Boolean(touched.ModeArrive && errors.ModeArrive)}
                  onChange={(event) => {
                    SetSelectedItem(event.target.value);
                  }}
                  native
                >
                  <option value="Père">Père</option>
                  <option value="Mère">Mère</option>
                  <option value="Les deux">Les deux</option>
                </Select>
                <RadioGroup
                  // name="Parent_en_vie"
                  // {...getFieldProps('Sexe')}
                  onChange={(event) => {
                    console.log(event.target.value);
                  }}
                >
                  <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    sx={{ display: 'flex', alignItems: 'center' }}
                    spacing={1}
                  >
                    <FormLabel component="label">TBC traitée :</FormLabel>
                    <FormControlLabel value="Oui" control={<Radio checked />} label="Oui" />
                    <FormControlLabel value="Non" control={<Radio />} label="Non" />
                  </Stack>
                </RadioGroup>
                <RadioGroup
                  // name="Parent_en_vie"
                  // {...getFieldProps('Sexe')}
                  onChange={(event) => {
                    console.log(event.target.value);
                  }}
                >
                  <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    sx={{ display: 'flex', alignItems: 'center' }}
                    spacing={1}
                  >
                    <FormLabel component="label">Déclarée guérie:</FormLabel>
                    <FormControlLabel value="Oui" control={<Radio checked />} label="Oui" />
                    <FormControlLabel value="Non" control={<Radio />} label="Non" />
                  </Stack>
                </RadioGroup>
              </Stack>
            </SubDivContenaire>
            <SubDivContenaire>
              <Stack spacing={3}>
                <InputLabel>Terme de la grossesse</InputLabel>
                <Select
                  sx={{ width: '80%', padding: '2px' }}
                  // {...getSelection('ModeArrive')}
                  // error={Boolean(touched.ModeArrive && errors.ModeArrive)}
                  onChange={(event) => {
                    SetSelectedItem(event.target.value);
                  }}
                  native
                >
                  Mode d'arriver
                  <option value="Prématuré ">Prématuré</option>
                  <option value="A terme">A terme</option>
                </Select>
                <InputLabel>Calendrier vaccinal</InputLabel>
                <Select
                  sx={{ width: '80%', padding: '2px' }}
                  // {...getSelection('ModeArrive')}
                  // error={Boolean(touched.ModeArrive && errors.ModeArrive)}
                  onChange={(event) => {
                    SetSelectedItem(event.target.value);
                  }}
                  native
                >
                  <option value="A jour">A jour</option>
                  <option value="Non à jour">Non à jour</option>
                </Select>
                <TextField
                  sx={{ width: '80%', padding: '2px' }}
                  fullWidth
                  label="Si non à jour veuillez préciser le vaccin non recu..."
                  // {...getFieldProps('Weight')}
                  // error={Boolean(touched.Weight && errors.Weight)}
                />
                <InputLabel>Asphyxie périnatale</InputLabel>
                <Select
                  sx={{ width: '80%', padding: '2px' }}
                  // {...getSelection('ModeArrive')}
                  // error={Boolean(touched.ModeArrive && errors.ModeArrive)}
                  onChange={(event) => {
                    SetSelectedItem(event.target.value);
                  }}
                  native
                >
                  <option value="a crié spontanément oui">a crié spontanément</option>
                  <option value="pas de cri">pas de cri</option>
                  <option value="cri après réanimation">cri après réanimation</option>
                </Select>
                <InputLabel> DPM</InputLabel>
                <Select
                  sx={{ width: '80%', padding: '2px' }}
                  // {...getSelection('ModeArrive')}
                  // error={Boolean(touched.ModeArrive && errors.ModeArrive)}
                  onChange={(event) => {
                    SetSelectedItem(event.target.value);
                  }}
                  native
                >
                  <option value="Norrmal">Norrmal</option>
                  <option value="Anormal">Anormal</option>
                </Select>
                <TextField
                  sx={{ width: '80%', padding: '2px' }}
                  fullWidth
                  label="Si anormal veuillez préciser"
                  // {...getFieldProps('Weight')}
                  error={Boolean(touched.Weight && errors.Weight)}
                />
                <TextField
                  sx={{ width: '80%', padding: '2px' }}
                  fullWidth
                  autoComplete="non"
                  type="text"
                  label="Taille de la fratrie"
                  // {...getFieldProps('Taille')}
                  // error={Boolean(touched.Taille && errors.Taille)}
                />
                <RadioGroup
                  // name="Parent_en_vie"
                  // {...getFieldProps('Sexe')}
                  onChange={(event) => {
                    console.log(event.target.value);
                  }}
                >
                  <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    sx={{ display: 'flex', alignItems: 'center' }}
                    spacing={1}
                  >
                    <FormLabel component="label">Terrain VIH connu:</FormLabel>
                    <FormControlLabel value="Oui" control={<Radio checked />} label="Oui" />
                    <FormControlLabel value="Non" control={<Radio />} label="Non" />
                  </Stack>
                </RadioGroup>
                <TextField
                  sx={{ width: '80%', padding: '2px' }}
                  fullWidth
                  autoComplete="nbr"
                  type="text"
                  label="Nnombre de chute"
                  // {...getFieldProps('FistName')}
                  // error={Boolean(touched.FirstName && errors.FirstName)}
                />
                <RadioGroup
                  // name="Parent_en_vie"
                  // {...getFieldProps('Sexe')}
                  onChange={(event) => {
                    console.log(event.target.value);
                  }}
                >
                  <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    sx={{ display: 'flex', alignItems: 'center' }}
                    spacing={1}
                  >
                    <FormLabel component="label">Vaccination rougeole:</FormLabel>
                    <FormControlLabel value="Oui" control={<Radio checked />} label="Oui" />
                    <FormControlLabel value="Non" control={<Radio />} label="Non" />
                  </Stack>
                </RadioGroup>
              </Stack>
            </SubDivContenaire>
          </SubDiv>
          <SubDiv />
        </Div>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          sx={{ display: 'flex', justifyContent: 'center' }}
        >
          <LoadingButton
            size="large"
            type="button"
            variant="contained"
            onClick={() => {
              PrevStep();
            }}
            sx={{ width: 200, marginLeft: '20px', marginTop: '20px' }}
          >
            Précédant
          </LoadingButton>
          <LoadingButton
            size="large"
            type="submit"
            variant="contained"
            loading={isSubmitting}
            sx={{ width: 200, marginLeft: '20px', marginTop: '20px' }}
          >
            Suivant
          </LoadingButton>
        </Stack>
      </Form>
    </FormikProvider>
  );
}
