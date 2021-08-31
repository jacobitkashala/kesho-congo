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
const Div = styled('div')(({ theme }) => ({
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

// const ContentStyle = styled('div')(({ theme }) => ({
//   color: '#343F59',
//   maxWidth: 580,
//   display: 'flex',
//   minHeight: '100vh',
//   flexDirection: 'column',
//   justifyContent: 'center',
//   padding: theme.spacing(12, 0)
// }));

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
            Famille
          </Typography>
          <SubDiv direction={{ xs: 'column', sm: 'row' }}>
            <SubDivContenaire>
              <Stack spacing={3}>
                <TextField
                  sx={{ width: '80%', padding: '2px' }}
                  label="Nom de tuteur"
                  // {...getFieldProps('Sexe')}
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
                    <FormLabel component="label">Vit avec ces deux parents:</FormLabel>
                    <FormControlLabel value="Oui" control={<Radio checked />} label="Oui" />
                    <FormControlLabel value="Non" control={<Radio />} label="Non" />
                  </Stack>
                </RadioGroup>
                <InputLabel>Date de naissance tuteure</InputLabel>
                <TextField
                  sx={{ width: '80%', padding: '2px' }}
                  type="date"
                  // {...getFieldProps('Sexe')}
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
                    <FormLabel component="label">Mère enceinte :</FormLabel>
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
                    <FormLabel component="label">Père en vit:</FormLabel>
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
                    <FormLabel component="label">Mère en vit:</FormLabel>
                    <FormControlLabel value="Oui" control={<Radio checked />} label="Oui" />
                    <FormControlLabel value="Non" control={<Radio />} label="Non" />
                  </Stack>
                  <InputLabel>Date de naissance mère</InputLabel>
                  <TextField
                    sx={{ width: '80%', padding: '2px' }}
                    type="date"
                    // {...getFieldProps('Sexe')}
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
                      <FormLabel component="label">
                        Possession radio et/ou poste téléviseur:
                      </FormLabel>
                      <FormControlLabel value="Oui" control={<Radio checked />} label="Oui" />
                      <FormControlLabel value="Non" control={<Radio />} label="Non" />
                    </Stack>
                  </RadioGroup>
                  <InputLabel>Profession chef ménage</InputLabel>
                  <Select
                    sx={{ width: '80%', padding: '2px' }}
                    // {...getSelection('ModeArrive')}
                    // error={Boolean(touched.ModeArrive && errors.ModeArrive)}
                    onChange={(event) => {
                      SetSelectedItem(event.target.value);
                    }}
                    native
                  >
                    <option value="Salariée formelle (infirmière, enseignante, ONG.)">
                      Salariée formelle (infirmière, enseignante, ONG.)
                    </option>
                    <option value="Travail à temps partiel (maçon, menuisier)">
                      Travail à temps partiel (maçon, menuisier)
                    </option>
                    <option value="Business (exploitant minier, petit commerce, etc.) ">
                      Business (exploitant minier, petit commerce, etc.)
                    </option>
                    <option value="Militaire/Policier">Militaire/Policier</option>
                    <option value="Sans profession (sans emploi)">
                      Sans profession (sans emploi)
                    </option>
                    <option value="Cultivatrice">Cultivatrice</option>
                  </Select>
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
                    <FormLabel component="label">Mère en vit:</FormLabel>
                    <FormControlLabel value="Oui" control={<Radio checked />} label="Oui" />
                    <FormControlLabel value="Non" control={<Radio />} label="Non" />
                  </Stack>
                </RadioGroup>
                <InputLabel>Scolarité mère</InputLabel>
                <Select
                  sx={{ width: '80%', padding: '2px' }}
                  {...getSelection('ModeArrive')}
                  error={Boolean(touched.ModeArrive && errors.ModeArrive)}
                  onChange={(event) => {
                    SetSelectedItem(event.target.value);
                  }}
                  native
                >
                  <option value="Analphabète">Analphabète</option>
                  <option value="Primaire">Primaire</option>
                  <option value="Universitaire">Professionnelle</option>
                  <option value="Secondaire">Secondaire</option>
                </Select>
              </Stack>
            </SubDivContenaire>
            <SubDivContenaire>
              <Stack spacing={3}>
                <TextField
                  sx={{ width: '80%', padding: '2px' }}
                  label="Taille ménage"
                  // {...getFieldProps('Sexe')}
                />
                <InputLabel>Statut marital</InputLabel>
                <Select
                  sx={{ width: '80%', padding: '2px' }}
                  // {...getSelection('ModeArrive')}
                  // error={Boolean(touched.ModeArrive && errors.ModeArrive)}
                  native
                  onChange={(event) => {
                    SetSelectedItem(event.target.value);
                  }}
                >
                  <option value="Prématuré ">Jamais mariée</option>
                  <option value="A terme">Mariée</option>
                  <option value="A terme">Separée ou divorcée</option>
                  <option value="A terme">Veuve</option>
                </Select>
                <InputLabel> Si mariée</InputLabel>
                <Select
                  sx={{ width: '80%', padding: '2px' }}
                  // {...getSelection('ModeArrive')}
                  // error={Boolean(touched.ModeArrive && errors.ModeArrive)}
                  onChange={(event) => {
                    SetSelectedItem(event.target.value);
                  }}
                  native
                >
                  <option value="Norrmal">Polygame</option>
                  <option value="Anormal">Monogame</option>
                </Select>
                <TextField
                  sx={{ width: '80%', padding: '2px' }}
                  fullWidth
                  label="Nombre enfant"
                  // {...getFieldProps('Weight')}
                  // error={Boolean(touched.Weight && errors.Weight)}
                />
                <InputLabel>Tribu</InputLabel>
                <Select
                  sx={{ width: '80%', padding: '2px' }}
                  // {...getSelection('ModeArrive')}
                  // error={Boolean(touched.ModeArrive && errors.ModeArrive)}
                  onChange={(event) => {
                    SetSelectedItem(event.target.value);
                  }}
                  native
                >
                  <option value="Norrmal">Shi</option>
                  <option value="Anormal">Rega</option>
                  <option value="Anormal">Autre ethnie du sud-kivu</option>
                  <option value="Anormal">Autre ethnie du pay et autres</option>
                </Select>
                <InputLabel>Réligion</InputLabel>
                <Select
                  native
                  sx={{ width: '80%', padding: '2px' }}
                  // {...getSelection('ModeArrive')}
                  // error={Boolean(touched.ModeArrive && errors.ModeArrive)}
                  onChange={(event) => {
                    SetSelectedItem(event.target.value);
                  }}
                >
                  <option value="Norrmal">Catholique</option>
                  <option value="Anormal">Protestant</option>
                  <option value="Anormal">Musulman</option>
                  <option value="Anormal">Autres</option>
                </Select>
                <InputLabel>Niveau socio-économique</InputLabel>
                <Select
                  sx={{ width: '80%', padding: '2px' }}
                  // {...getSelection('ModeArrive')}
                  // error={Boolean(touched.ModeArrive && errors.ModeArrive)}
                  onChange={(event) => {
                    SetSelectedItem(event.target.value);
                  }}
                  native
                >
                  <option value="Analphabète">Bas</option>
                  <option value="Primaire">Moyen</option>
                  <option value="Universitaire">Bon</option>
                  <option value="Secondaire">Inferieur a 1 dollar</option>
                  <option value="Secondaire">Superieur a 5dollarsr</option>
                  <option value="Secondaire">5dollars</option>
                </Select>
                <TextField
                  sx={{ width: '80%', padding: '2px' }}
                  fullWidth
                  label="Nombre de repas par jour"
                  // {...getFieldProps('Weight')}
                  // error={Boolean(touched.Weight && errors.Weight)}
                />
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
