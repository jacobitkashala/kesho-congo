import * as Yup from 'yup';
import propTypes from 'prop-types';
// import { useState } from 'react';
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
FamilleForm.propTypes = {
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
export default function FamilleForm({ NextStep, SetDataPatient, PrevStep }) {
  const RegisterSchema = Yup.object().shape({
    nomTuteur: Yup.string(),
    DateNaissanceMere: Yup.date(),
    dateNaissTuteur: Yup.date(),
    MereEnceinte: Yup.string(),
    PossederTeleRadio: Yup.string(),
    ProffessionChefMenage: Yup.string(),
    ScolariteMere: Yup.string(),
    PereMariage: Yup.string(),
    NbreEnfant: Yup.number(),
    NiveauSocioEconomique: Yup,
    StatutMarital: Yup.string(),
    VivreAvecParent: Yup.string(),
    Tribut: Yup.string(),
    Religion: Yup.string(),
    NbrRepasJour: Yup.number(),
    PereEnvie: Yup.string(),
    TailleMenage: Yup.number()
  });

  const formik = useFormik({
    initialValues: {
      nomTuteur: '',
      DateNaissanceMere: '',
      dateNaissTuteur: '',
      MereEnceinte: '',
      PossederTeleRadio: '',
      ProffessionChefMenage: '',
      ScolariteMere: '',
      PereMariage: '',
      NbreEnfant: '',
      NiveauSocioEconomique: '',
      StatutMarital: '',
      Tribut: '',
      Religion: '',
      NbrRepasJour: '',
      VivreAvecParent: '',
      PereEnvie: '',
      TailleMenage: ''
    },
    validationSchema: RegisterSchema,
    onSubmit: (FamalyData) => {
      // SetDataPatient((current) => ({ ...current, FamalyData }));
      NextStep();
    }
  });

  const { errors, touched, handleSubmit, getFieldProps, values } = formik;
  console.log(errors);
  console.log(values);
  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Div>
          <Typography variant="h5" pb={4} sx={{ textAlign: 'center' }}>
            Famille
          </Typography>
          <SubDiv direction={{ xs: 'column', sm: 'row' }}>
            <SubDivContenaire>
              <Stack spacing={3}>
                <TextField
                  sx={{ width: '80%', padding: '2px' }}
                  fullWidth
                  label="Nom de tuteur"
                  value={values.nomTuteur}
                  {...getFieldProps('nomTuteur')}
                  error={Boolean(touched.nomTuteur && errors.nomTuteur)}
                />
                <RadioGroup
                  {...getFieldProps('VivreAvecParent')}
                  // error={Boolean(touched.VivreAvecParent && errors.VivreAvecParent)}
                >
                  <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    sx={{ display: 'flex', alignItems: 'center' }}
                    spacing={1}
                  >
                    <FormLabel component="label">Vit avec ces deux parents:</FormLabel>
                    <FormControlLabel value="Oui" control={<Radio />} label="Oui" />
                    <FormControlLabel value="Non" control={<Radio />} label="Non" />
                  </Stack>
                </RadioGroup>
                <InputLabel>Date de naissance tuteure</InputLabel>
                <TextField
                  sx={{ width: '80%', padding: '2px' }}
                  type="date"
                  {...getFieldProps('dateNaissTuteur')}
                  error={Boolean(touched.dateNaissTuteur && errors.dateNaissTuteur)}
                />
                <RadioGroup
                  {...getFieldProps('MereEnceinte')}
                  error={Boolean(touched.MereEnceinte && errors.MereEnceinte)}
                >
                  <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    sx={{ display: 'flex', alignItems: 'center' }}
                    spacing={1}
                  >
                    <FormLabel component="label">Mère enceinte :</FormLabel>
                    <FormControlLabel value="Oui" control={<Radio />} label="Oui" />
                    <FormControlLabel value="Non" control={<Radio />} label="Non" />
                  </Stack>
                </RadioGroup>
                <RadioGroup
                  {...getFieldProps('PereEnvie')}
                  error={Boolean(touched.PereEnvie && errors.PereEnvie)}
                >
                  <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    sx={{ display: 'flex', alignItems: 'center' }}
                    spacing={1}
                  >
                    <FormLabel component="label">Père en vit:</FormLabel>
                    <FormControlLabel value="Oui" control={<Radio />} label="Oui" />
                    <FormControlLabel value="Non" control={<Radio />} label="Non" />
                  </Stack>
                </RadioGroup>
                <InputLabel>Date de naissance mère</InputLabel>
                <TextField
                  sx={{ width: '80%', padding: '2px' }}
                  type="date"
                  {...getFieldProps('DateNaissanceMere')}
                  error={Boolean(touched.DateNaissanceMere && errors.DateNaissanceMere)}
                />
                <RadioGroup
                  {...getFieldProps('PossederTeleRadio')}
                  error={Boolean(touched.PossederTeleRadio && errors.PossederTeleRadio)}
                >
                  <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    sx={{ display: 'flex', alignItems: 'center' }}
                    spacing={1}
                  >
                    <FormLabel component="label">
                      Possession radio et/ou poste téléviseur:
                    </FormLabel>
                    <FormControlLabel value="Oui" control={<Radio />} label="Oui" />
                    <FormControlLabel value="Non" control={<Radio />} label="Non" />
                  </Stack>
                </RadioGroup>
                <Select
                  native
                  sx={{ width: '80%', padding: '2px' }}
                  {...getFieldProps('ProffessionChefMenage')}
                  error={Boolean(touched.ProffessionChefMenage && errors.ProffessionChefMenage)}
                >
                  <option value="" selected disabled hidden>
                    Profession chef ménage
                  </option>
                  <option value="Salariée formelle,infirmier,Ong,enseignante">
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

                <RadioGroup
                  {...getFieldProps('MereEnvie')}
                  error={Boolean(touched.MereEnvie && errors.MereEnvie)}
                >
                  <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    sx={{ display: 'flex', alignItems: 'center' }}
                    spacing={1}
                  >
                    <FormLabel component="label">Mère en vit:</FormLabel>
                    <FormControlLabel value="Oui" control={<Radio />} label="Oui" />
                    <FormControlLabel value="Non" control={<Radio />} label="Non" />
                  </Stack>
                </RadioGroup>
                <Select
                  sx={{ width: '80%', padding: '2px' }}
                  native
                  selected={values.ScolariteMere}
                  {...getFieldProps('ScolariteMere')}
                  error={Boolean(touched.ScolariteMere && errors.ScolariteMere)}
                >
                  <option value="" selected disabled hidden>
                    Scolarité mère
                  </option>
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
                  value={values.TailleMenage}
                  {...getFieldProps('TailleMenage')}
                  error={Boolean(touched.TailleMenage && errors.TailleMenage)}
                />
                <Select
                  sx={{ width: '80%', padding: '2px' }}
                  native
                  selected={values.StatutMarital}
                  // {...getFieldProps('StatutMarital')}
                  // error={Boolean(touched.StatutMarital && errors.StatutMarital)}
                >
                  <option value="" selected disabled hidden>
                    Statut marital
                  </option>
                  <option value="Prématuré ">Jamais mariée</option>
                  <option value="Mariée">Mariée</option>
                  <option value="Separée ou divorcée">Separée ou divorcée</option>
                  <option value="Veuve">Veuve</option>
                </Select>
                <Select
                  sx={{ width: '80%', padding: '2px' }}
                  native
                  // Value={values.PereMariage}
                  // {...getFieldProps('PereMariage')}
                  error={Boolean(touched.PereMariage && errors.PereMariage)}
                >
                  <option value="" selected disabled hidden>
                    Si statut marital est marié
                  </option>
                  <option value="Norrmal">Polygame</option>
                  <option value="Anormal">Monogame</option>
                </Select>
                <TextField
                  sx={{ width: '80%', padding: '2px' }}
                  fullWidth
                  label="Nombre enfant"
                  // value={values.NbreEnfant}
                  // {...getFieldProps('NbreEnfant')}
                  error={Boolean(touched.NbreEnfant && errors.NbreEnfant)}
                />
                <Select
                  sx={{ width: '80%', padding: '2px' }}
                  native
                  selected={values.Tribut}
                  {...getFieldProps('Tribut')}
                  error={Boolean(touched.Tribut && errors.Tribut)}
                >
                  <option value="" selected disabled hidden>
                    Tribu
                  </option>
                  <option value="Norrmal">Shi</option>
                  <option value="Anormal">Rega</option>
                  <option value="Anormal">Autre ethnie du sud-kivu</option>
                  <option value="Anormal">Autre ethnie du pay et autres</option>
                </Select>
                <Select
                  native
                  sx={{ width: '80%', padding: '2px' }}
                  selected={values.Religion}
                  {...getFieldProps('Religion')}
                  error={Boolean(touched.Religion && errors.Religion)}
                >
                  <option value="" selected disabled hidden>
                    Réligion
                  </option>
                  <option value="Norrmal">Catholique</option>
                  <option value="Anormal">Protestant</option>
                  <option value="Anormal">Musulman</option>
                  <option value="Anormal">Autres</option>
                </Select>
                <Select
                  sx={{ width: '80%', padding: '2px' }}
                  native
                  // selected={values.NiveauSocioEconomique}
                  {...getFieldProps('NiveauSocioEconomique')}
                  error={Boolean(touched.NiveauSocioEconomique && errors.NiveauSocioEconomique)}
                >
                  <option value="" selected disabled hidden>
                    Niveau socio-économique
                  </option>
                  <option value="Analphabète">Bas</option>
                  <option value="Primaire">Moyen</option>
                  <option value="Universitaire">Bon</option>
                  <option value="Inferieur à 1$">Inferieur a 1$ </option>
                  <option value="Superieur">Supérieur a 5$ </option>
                  <option value="Secondaire">5 dollars</option>
                </Select>
                <TextField
                  sx={{ width: '80%', padding: '2px' }}
                  label="Nombre de repas par jour"
                  value={values.NbrRepasJour}
                  {...getFieldProps('NbreRepasJour')}
                  error={Boolean(touched.NbrRepasJour && errors.NbrRepasJour)}
                />
              </Stack>
            </SubDivContenaire>
          </SubDiv>
          <SubDiv />
        </Div>
        {/* <Typography variant="h5" sx={{ textAlign: 'center' }}>
          3/3
        </Typography> */}
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
            type="submit"
            variant="contained"
            // loading={isSubmitting}
            onClick={() => {
              NextStep();
            }}
            size="large"
            sx={{ width: 200, marginLeft: '20px', marginTop: '20px' }}
          >
            Suivant
          </LoadingButton>
        </Stack>
      </Form>
    </FormikProvider>
  );
}
