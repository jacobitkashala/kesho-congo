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
  // Typography,
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
  // width: '150%',
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
    nomTuteur: Yup.string().required('*'),
    dateNaissanceMere: Yup.date().required('*'),
    // dateNaissTuteur: Yup.date(),
    contraceptionNaturel: Yup.string(),
    mereEnceinte: Yup.string().required('*'),
    PossederTeleRadio: Yup.string().required('*'),
    ProffessionChefMenage: Yup.string().required('*'),
    scolariteMere: Yup.string().required('*'),
    pereMariage: Yup.string(),
    consommationPoisson: Yup.string(),
    nbrEnfant: Yup.number().required('*'),
    nbrFemme: Yup.number(),
    NiveauSocioEconomique: Yup.string().required('*'),
    statutMarital: Yup.string(),
    typeContraceptionNaturel: Yup.string('*'),
    mereEnVie: Yup.string(),
    dateNaissanceChefMenage: Yup.date().required('*'),
    vivreAvecParent: Yup.string().required('*'),
    Tribut: Yup.string().required('*'),
    Religion: Yup.string().required('*'),
    contraceptionType: Yup.string(),
    NbrRepasJour: Yup.number().required('*'),
    pereEnvie: Yup.string().required('*'),
    tailleMenage: Yup.number().required('*'),
    contraceptionMere: Yup.string().required('*'),
    professionMere: Yup.string().required('*')
  });

  const formik = useFormik({
    initialValues: {
      vivreAvecParent: '',
      contraceptionMere: '',
      professionMere: '',
      nomTuteur: '',
      dateNaissanceMere: '',
      dateNaissTuteur: '',
      mereEnceinte: '',
      PossederTeleRadio: '',
      ProffessionChefMenage: '',
      scolariteMere: '',
      pereMariage: '',
      contraceptionNaturel: '',
      mereEnVie: '',
      nbrEnfant: '',
      consommationPoisson: '',
      typeContraceptionNaturel: '',
      NiveauSocioEconomique: '',
      statutMarital: '',
      Tribut: '',
      dateNaissanceChefMenage: '',
      Religion: '',
      NbrRepasJour: '',
      pereEnvie: '',
      nbrFemme: '',
      tailleMenage: '',
      contraceptionType: ''
    },
    validationSchema: RegisterSchema,
    onSubmit: (FamalyData) => {
      SetDataPatient((current) => ({ ...current, FamalyData }));
      NextStep();
    }
  });

  const { errors, touched, handleSubmit, getFieldProps, values } = formik;
  console.log(errors);
  // console.log(values);
  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Div>
          {/* <Typography variant="h5" pb={4} sx={{ textAlign: 'center' }}>
            Famille
          </Typography> */}
          <SubDiv direction={{ xs: 'column', sm: 'row' }}>
            <SubDivContenaire>
              <Stack spacing={3}>
                <TextField
                  sx={{ width: '80%', padding: '2px' }}
                  label="Taille ménage"
                  value={values.tailleMenage}
                  {...getFieldProps('tailleMenage')}
                  error={Boolean(touched.tailleMenage && errors.tailleMenage)}
                />
                <RadioGroup
                  {...getFieldProps('vivreAvecParent')}
                  error={Boolean(touched.vivreAvecParent && errors.vivreAvecParent)}
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
                <TextField
                  sx={{ width: '80%', padding: '2px' }}
                  fullWidth
                  label="Nom de tuteur"
                  value={values.nomTuteur}
                  {...getFieldProps('nomTuteur')}
                  error={Boolean(touched.nomTuteur && errors.nomTuteur)}
                />
                <RadioGroup
                  {...getFieldProps('mereEnVie')}
                  error={Boolean(touched.mereEnVie && errors.mereEnVie)}
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
                <InputLabel>Date de naissance mère</InputLabel>
                <TextField
                  sx={{ width: '80%', padding: '2px' }}
                  type="date"
                  {...getFieldProps('dateNaissanceMere')}
                  error={Boolean(touched.dateNaissanceMere && errors.dateNaissanceMere)}
                />
                <RadioGroup
                  {...getFieldProps('mereEnceinte')}
                  error={Boolean(touched.mereEnceinte && errors.mereEnceinte)}
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
                <Select
                  sx={{ width: '80%', padding: '2px' }}
                  native
                  selected={values.scolariteMere}
                  {...getFieldProps('scolariteMere')}
                  error={Boolean(touched.scolariteMere && errors.scolariteMere)}
                >
                  <option value="" selected disabled hidden>
                    Scolarité mère
                  </option>
                  <option value="Analphabète">Analphabète</option>
                  <option value="Primaire">Primaire</option>
                  <option value="Secondaire">Secondaire</option>
                  <option value="Universitaire">Universitaire</option>
                </Select>
                <Select
                  sx={{ width: '80%', padding: '2px' }}
                  native
                  selected={values.professionMere}
                  {...getFieldProps('professionMere')}
                  error={Boolean(touched.professionMere && errors.professionMere)}
                >
                  <option value="" selected disabled hidden>
                    Profession mère
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
                  {...getFieldProps('pereEnvie')}
                  error={Boolean(touched.pereEnvie && errors.pereEnvie)}
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
                <InputLabel>Date de naissance Chef ménage</InputLabel>
                <TextField
                  sx={{ width: '80%', padding: '2px' }}
                  type="date"
                  {...getFieldProps('dateNaissanceChefMenage')}
                  error={Boolean(touched.dateNaissanceChefMenage && errors.dateNaissanceChefMenage)}
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
              </Stack>
            </SubDivContenaire>
            <SubDivContenaire>
              <Stack spacing={3}>
                <Select
                  sx={{ width: '80%', padding: '2px' }}
                  native
                  selected={values.statutMarital}
                  {...getFieldProps('statutMarital')}
                  error={Boolean(touched.statutMarital && errors.statutMarital)}
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
                  {...getFieldProps('pereMariage')}
                  error={Boolean(touched.pereMariage && errors.pereMariage)}
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
                  value={values.nbrEnfant}
                  {...getFieldProps('nbrEnfant')}
                  error={Boolean(touched.nbrEnfant && errors.nbrEnfant)}
                />
                <TextField
                  sx={{ width: '80%', padding: '2px' }}
                  fullWidth
                  label="Si Polygame nbre de femme"
                  value={values.nbrFemme}
                  {...getFieldProps('nbrFemme')}
                  error={Boolean(touched.nbrFemme && errors.nbrFemme)}
                />
                <RadioGroup
                  {...getFieldProps('contraceptionMere')}
                  error={Boolean(touched.contraceptionMere && errors.contraceptionMere)}
                >
                  <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    sx={{ display: 'flex', alignItems: 'center' }}
                    spacing={1}
                  >
                    <FormLabel component="label">Contraception par la mère:</FormLabel>
                    <FormControlLabel value="Oui" control={<Radio />} label="Oui" />
                    <FormControlLabel value="Non" control={<Radio />} label="Non" />
                  </Stack>
                </RadioGroup>
                <Select
                  sx={{ width: '80%', padding: '2px' }}
                  native
                  selected={values.contraceptionType}
                  {...getFieldProps('contraceptionType')}
                  error={Boolean(touched.contraceptionType && errors.contraceptionType)}
                >
                  <option value="" selected disabled hidden>
                    Si contraception est OUI précisez le moyen
                  </option>
                  <option value="Naturel">Naturel</option>
                  <option value="Moderne">Moderne</option>
                </Select>
                <Select
                  sx={{ width: '80%', padding: '2px' }}
                  native
                  selected={values.typeContraceptionNaturel}
                  {...getFieldProps('typeContraceptionNaturel')}
                  error={Boolean(
                    touched.typeContraceptionNaturel && errors.typeContraceptionNaturel
                  )}
                >
                  <option value="" selected disabled hidden>
                    Si la contraception naturel veuillez preciser
                  </option>
                  <option value="Abstinence">Abstinence</option>
                  <option value="périodique">Périodique</option>
                  <option value="Coït interrompu">Coït interrompu</option>
                  <option value="Température basale">Température basale</option>
                  <option value="Cervicale">Cervicale</option>
                  <option value="MAMA">MAMA</option>
                </Select>
                <Select
                  sx={{ width: '80%', padding: '2px' }}
                  native
                  selected={values.typeContraceptionModerne}
                  {...getFieldProps('contraceptionNaturel')}
                  error={Boolean(touched.contraceptionModerne && errors.contraceptionModerne)}
                >
                  <option value="" selected disabled hidden>
                    Si la contraception Moderne veuillez preciser
                  </option>
                  <option value="contraceptifs oraux et combiné ou pilule">
                    contraceptifs oraux et combiné ou pilule
                  </option>
                  <option value="contraceptif injectable à progestatifs seuls">
                    contraceptif injectable à progestatifs seuls
                  </option>
                  <option value="contraceptif injectable mensuel">
                    contraceptif injectable mensuel
                  </option>
                  <option value="patch contraceptif combiné et anneau contraceptif intra vaginal ">
                    patch contraceptif combiné et anneau contraceptif intra vaginal
                  </option>
                  <option value="Dispositif intra-utérin">Dispositif intra-utérin</option>
                  <option value="Préservatif">Préservatif</option>
                  <option value="Contraceptif d’urgence">Contraceptif d’urgence</option>
                  <option value="Ligature tubaire">Ligature tubaire</option>
                  <option value="Vasectomie">Vasectomie</option>
                </Select>
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
                  <option value="Shi">Shi</option>
                  <option value="Rega">Rega</option>
                  <option value="Autre ethnie du sud-kivu">Autre ethnie du sud-kivu</option>
                  <option value="Autre ethnie du pay et autres">
                    Autre ethnie du pay et autres
                  </option>
                </Select>
                <RadioGroup
                  {...getFieldProps('consommationPoisson')}
                  error={Boolean(touched.consommationPoisson && errors.consommationPoisson)}
                >
                  <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    sx={{ display: 'flex', alignItems: 'center' }}
                    spacing={1}
                  >
                    <FormLabel component="label">Consommation de poisson:</FormLabel>
                    <FormControlLabel value="Oui" control={<Radio />} label="Oui" />
                    <FormControlLabel value="Non" control={<Radio />} label="Non" />
                  </Stack>
                </RadioGroup>
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
