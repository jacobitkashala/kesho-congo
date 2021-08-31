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
    NomTuteure: Yup.string().required(),
    DateNaissanceMere: Yup.date().required(),
    DateNaissanceTutuer: Yup.date().required(),
    MereEnceinte: Yup.string().required(),
    PossederTeleRadio: Yup.string().required(),
    ProffessionChefMenage: Yup.string().required(),
    ScolariteMere: Yup.string().required(),
    PereMariage: Yup.string().required(),
    NbreEnfant: Yup.number().required(),
    NiveauSocioEconomique: Yup.string(),
    StatutMarital: Yup.string().required(),
    VivreAvecParent: Yup.string().required(),
    Tribut: Yup.string().required(),
    Religion: Yup.string().required(),
    NbrRepasJour: Yup.number().positive(),
    // PerentEnVie: Yup.string().required(),
    PereEnvie: Yup.string().required(),
    TailleMenage: Yup.number().required()
  });

  const formik = useFormik({
    initialValues: {
      NomTuteure: '',
      DateNaissanceMere: '',
      DateNaissanceTutuer: '',
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
      // PerentEnVie: '',
      VivreAvecParent: '',
      PereEnvie: '',
      TailleMenage: ''
    },
    validationSchema: RegisterSchema,
    onSubmit: (FamalyData) => {
      SetDataPatient((current) => ({ ...current, FamalyData }));
      NextStep();
    }
  });

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps, values } = formik;
  console.log(errors);
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
                  label="Nom de tuteur"
                  value={values.NomTuteure}
                  {...getFieldProps('NomTuteure')}
                />
                <RadioGroup
                  {...getFieldProps('VivreAvecParent')}
                  error={Boolean(touched.VivreAvecParent && errors.VivreAvecParent)}
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
                  {...getFieldProps('DateNaissanceTutuer')}
                  error={Boolean(touched.DateNaissanceTutuer && errors.DateNaissanceTutuer)}
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
                <InputLabel>Profession chef ménage</InputLabel>
                <Select
                  native
                  sx={{ width: '80%', padding: '2px' }}
                  {...getFieldProps('ProffessionChefMenage')}
                  error={Boolean(touched.ProffessionChefMenage && errors.ProffessionChefMenage)}
                >
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
                <InputLabel>Scolarité mère</InputLabel>
                <Select
                  sx={{ width: '80%', padding: '2px' }}
                  native
                  selected={values.ScolariteMere}
                  {...getFieldProps('ScolariteMere')}
                  error={Boolean(touched.ScolariteMere && errors.ScolariteMere)}
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
                  value={values.TailleMenage}
                  {...getFieldProps('TailleMenage')}
                  error={Boolean(touched.TailleMenage && errors.TailleMenage)}
                />
                <InputLabel>Statut marital</InputLabel>
                <Select
                  sx={{ width: '80%', padding: '2px' }}
                  native
                  selected={values.StatutMarital}
                  {...getFieldProps('StatutMarital')}
                  error={Boolean(touched.StatutMarital && errors.StatutMarital)}
                >
                  <option value="Prématuré ">Jamais mariée</option>
                  <option value="Mariée">Mariée</option>
                  <option value="Separée ou divorcée">Separée ou divorcée</option>
                  <option value="Veuve">Veuve</option>
                </Select>
                <InputLabel> Si mariée</InputLabel>
                <Select
                  sx={{ width: '80%', padding: '2px' }}
                  native
                  Value={values.PereMariage}
                  {...getFieldProps('PereMariage')}
                  error={Boolean(touched.PereMariage && errors.PereMariage)}
                >
                  <option value="Norrmal">Polygame</option>
                  <option value="Anormal">Monogame</option>
                </Select>
                <TextField
                  sx={{ width: '80%', padding: '2px' }}
                  fullWidth
                  label="Nombre enfant"
                  selected={values.NbreEnfant}
                  {...getFieldProps('NbreEnfant')}
                  error={Boolean(touched.NbreEnfant && errors.NbreEnfant)}
                />
                <InputLabel>Tribu</InputLabel>
                <Select
                  sx={{ width: '80%', padding: '2px' }}
                  native
                  selected={values.Tribut}
                  {...getFieldProps('Tribut')}
                  error={Boolean(touched.Tribut && errors.Tribut)}
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
                  selected={values.Religion}
                  {...getFieldProps('Religion')}
                  error={Boolean(touched.Religion && errors.Religion)}
                >
                  <option value="Norrmal">Catholique</option>
                  <option value="Anormal">Protestant</option>
                  <option value="Anormal">Musulman</option>
                  <option value="Anormal">Autres</option>
                </Select>
                <InputLabel>Niveau socio-économique</InputLabel>
                <Select
                  sx={{ width: '80%', padding: '2px' }}
                  native
                  // selected={values.NiveauSocioEconomique}
                  {...getFieldProps('NiveauSocioEconomique')}
                  error={Boolean(touched.NiveauSocioEconomique && errors.NiveauSocioEconomique)}
                >
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
            loading={isSubmitting}
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
