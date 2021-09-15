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
  // Typography,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormLabel,
  Grid,
  InputLabel,
  Select
  // styled
} from '@material-ui/core';
import { LoadingButton } from '@material-ui/lab';

// ----------------------------------------------------------------------
FamilleForm.propTypes = {
  NextStep: propTypes.func,
  PrevStep: propTypes.func,
  SetDataPatient: propTypes.func
};

export default function FamilleForm({ NextStep, SetDataPatient, PrevStep }) {
  const [statutMarital, setStatutMarital] = useState(true);
  const [contraceptionMeredisable, setContraceptionMeredisable] = useState(true);
  const RegisterSchema = Yup.object().shape({
    nomTuteur: Yup.string().required('Nom tuteur requis'),
    dateNaissanceMere: Yup.date().required('Date de naissance requis'),
    mereEnceinte: Yup.string().required('Mere enceinte requis'),
    PossederTeleRadio: Yup.string().required('Posseder un télé requis'),
    ProffessionChefMenage: Yup.string().required('Profession requis'),
    scolariteMere: Yup.string().required('Scolarité requis'),
    pereMariage: Yup.string(),
    consommationPoisson: Yup.string(),
    nbrFemme: Yup.number().required('nombre de femme requis'),
    NiveauSocioEconomique: Yup.string().required('niveau socio-économique requis'),
    statutMarital: Yup.string(),
    typeContraceptionNaturel: Yup.string(),
    mereEnVie: Yup.string().required('champs requis'),
    dateNaissanceChefMenage: Yup.date().required('Date de naissance requis'),
    vivreAvecParent: Yup.string().required('champs requis'),
    Tribut: Yup.string().required('tribut requis'),
    Religion: Yup.string().required('Réligion requis'),
    contraceptionType: Yup.string(),
    typeContraceptionModerne: Yup.string(),
    NbrRepasJour: Yup.number().required('Nbr repas par jour requis'),
    pereEnvie: Yup.string().required(' champs requis'),
    tailleMenage: Yup.number().required('taille de menage requis'),
    contraceptionMere: Yup.string().required('champs requis'),
    professionMere: Yup.string().required('Profession mere requis')
  });

  const formik = useFormik({
    initialValues: {
      vivreAvecParent: '',
      typeContraceptionModerne: '',
      contraceptionMere: '',
      professionMere: '',
      nomTuteur: '',
      dateNaissanceMere: '',
      mereEnceinte: '',
      PossederTeleRadio: '',
      ProffessionChefMenage: '',
      scolariteMere: '',
      pereMariage: '',
      mereEnVie: '',
      consommationPoisson: '',
      typeContraceptionNaturel: '',
      NiveauSocioEconomique: '',
      statutMarital: '',
      Tribut: '',
      dateNaissanceChefMenage: '',
      Religion: '',
      NbrRepasJour: '',
      pereEnvie: '',
      nbrFemme: '1',
      tailleMenage: '',
      contraceptionType: ''
    },
    validationSchema: RegisterSchema,
    onSubmit: (FamalyData) => {
      SetDataPatient((current) => ({ ...current, FamalyData }));
      NextStep();
    }
  });

  const { errors, setFieldValue, touched, handleSubmit, getFieldProps, values, isSubmitting } =
    formik;
  console.log(errors);
  const handleStatutMarital = (event) => {
    const { value } = event.target;
    if (value === 'Mariée') {
      setStatutMarital(false);
    } else {
      setStatutMarital(true);
    }
  };
  const handleContraceptionMere = (event) => {
    const { value } = event.target;
    //
    setFieldValue('contraceptionMere', value);
    if (value === 'true') {
      setContraceptionMeredisable(false);
    } else {
      setContraceptionMeredisable(true);
    }
  };

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Grid sx={{ justifyContent: 'center' }} container spacing={3}>
          <Grid item xs={11} sm={6} md={5}>
            <Stack spacing={3}>
              <TextField
                required
                sx={{ padding: '2px' }}
                label="Taille ménage"
                value={values.tailleMenage}
                {...getFieldProps('tailleMenage')}
                helperText={touched.tailleMenage && errors.tailleMenage}
                error={Boolean(touched.tailleMenage && errors.tailleMenage)}
              />
              <RadioGroup
                required
                {...getFieldProps('vivreAvecParent')}
                helperText={touched.vivreAvecParent && errors.vivreAvecParent}
                error={Boolean(touched.vivreAvecParent && errors.vivreAvecParent)}
              >
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  sx={{ display: 'flex', alignItems: 'center' }}
                  spacing={1}
                >
                  <FormLabel component="label">Les deux parents en vie:</FormLabel>
                  <FormControlLabel value="true" control={<Radio />} label="Oui" />
                  <FormControlLabel value="false" control={<Radio />} label="Non" />
                </Stack>
              </RadioGroup>
              <TextField
                sx={{ padding: '2px' }}
                label="Nom de tuteur"
                required
                value={values.nomTuteur}
                {...getFieldProps('nomTuteur')}
                helperText={touched.nomTuteur && errors.nomTuteur}
                error={Boolean(touched.nomTuteur && errors.nomTuteur)}
              />
              <RadioGroup
                {...getFieldProps('mereEnVie')}
                required
                helperText={touched.mereEnVie && errors.mereEnVie}
                error={Boolean(touched.mereEnVie && errors.mereEnVie)}
              >
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  sx={{ display: 'flex', alignItems: 'center' }}
                  spacing={1}
                >
                  <FormLabel component="label">Mère en vie:</FormLabel>
                  <FormControlLabel value="true" control={<Radio />} label="Oui" />
                  <FormControlLabel value="false" control={<Radio />} label="Non" />
                </Stack>
              </RadioGroup>
              <InputLabel>Date de naissance mère</InputLabel>
              <TextField
                sx={{ padding: '2px' }}
                type="date"
                required
                helperText={touched.dateNaissanceMere && errors.dateNaissanceMere}
                {...getFieldProps('dateNaissanceMere')}
                error={Boolean(touched.dateNaissanceMere && errors.dateNaissanceMere)}
                // helperText={touched.dateNaissanceMere && errors.dateNaissanceMere}
              />
              <RadioGroup
                required
                {...getFieldProps('mereEnceinte')}
                helperText={touched.mereEnceinte && errors.mereEnceinte}
                error={Boolean(touched.mereEnceinte && errors.mereEnceinte)}
              >
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  sx={{ display: 'flex', alignItems: 'center' }}
                  spacing={1}
                >
                  <FormLabel component="label">Mère enceinte :</FormLabel>
                  <FormControlLabel value="true" control={<Radio />} label="Oui" />
                  <FormControlLabel value="false" control={<Radio />} label="Non" />
                </Stack>
              </RadioGroup>
              <Select
                sx={{ padding: '2px' }}
                native
                required
                selected={values.scolariteMere}
                {...getFieldProps('scolariteMere')}
                error={Boolean(touched.scolariteMere && errors.scolariteMere)}
                helperText={touched.scolariteMere && errors.scolariteMere}
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
                sx={{ padding: '2px' }}
                native
                required
                {...getFieldProps('professionMere')}
                error={Boolean(touched.professionMere && errors.professionMere)}
                helperText={touched.professionMere && errors.professionMere}
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
                <option value="Sans profession (sans emploi)">Sans profession (sans emploi)</option>
                <option value="Cultivatrice">Cultivatrice</option>
                <option value="Autre">Autre</option>
              </Select>
              <RadioGroup
                {...getFieldProps('pereEnvie')}
                error={Boolean(touched.pereEnvie && errors.pereEnvie)}
                helperText={touched.pereEnvie && errors.pereEnvie}
              >
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  sx={{ display: 'flex', alignItems: 'center' }}
                  spacing={1}
                >
                  <FormLabel component="label">Père en vie:</FormLabel>
                  <FormControlLabel value="true" control={<Radio />} label="Oui" />
                  <FormControlLabel value="false" control={<Radio />} label="Non" />
                </Stack>
              </RadioGroup>
              <Select
                native
                required
                sx={{ padding: '2px' }}
                {...getFieldProps('ProffessionChefMenage')}
                helperText={touched.ProffessionChefMenage && errors.ProffessionChefMenage}
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
                <option value="Sans profession (sans emploi)">Sans profession (sans emploi)</option>
                <option value="Cultivatrice">Cultivatrice</option>
                <option value="Autre">autre</option>
              </Select>
              <InputLabel>Date de naissance Chef ménage</InputLabel>
              <TextField
                sx={{ padding: '2px' }}
                type="date"
                required
                {...getFieldProps('dateNaissanceChefMenage')}
                helperText={touched.dateNaissanceChefMenage && errors.dateNaissanceChefMenage}
                error={Boolean(touched.dateNaissanceChefMenage && errors.dateNaissanceChefMenage)}
              />
              <RadioGroup
                {...getFieldProps('PossederTeleRadio')}
                error={Boolean(touched.PossederTeleRadio && errors.PossederTeleRadio)}
                helperText={touched.PossederTeleRadio && errors.PossederTeleRadio}
              >
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  sx={{ display: 'flex', alignItems: 'center' }}
                  spacing={1}
                >
                  <FormLabel component="label">Possesseder radio ou télé:</FormLabel>
                  <FormControlLabel value="true" control={<Radio />} label="Oui" />
                  <FormControlLabel value="false" control={<Radio />} label="Non" />
                </Stack>
              </RadioGroup>
            </Stack>
          </Grid>
          <Grid item xs={11} sm={6} md={5}>
            <Stack spacing={3}>
              <Select
                sx={{ padding: '2px' }}
                native
                required
                // {...getFieldProps('statutMarital')}
                onChange={handleStatutMarital}
                error={Boolean(touched.statutMarital && errors.statutMarital)}
                helperText={touched.statutMarital && errors.statutMarital}
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
                sx={{ padding: '2px' }}
                native
                disabled={statutMarital}
                {...getFieldProps('pereMariage')}
                helperText={touched.pereMariage && errors.pereMariage}
                error={Boolean(touched.pereMariage && errors.pereMariage)}
              >
                <option value="" selected disabled hidden>
                  Si statut marital est marié
                </option>
                <option value="Polygame">Polygame</option>
                <option value="Monogame">Monogame</option>
                <option value="Mariage libre">Mariage libre</option>
              </Select>
              <TextField
                sx={{ padding: '2px' }}
                label="Si Polygame nbre de femme"
                value={values.nbrFemme}
                {...getFieldProps('nbrFemme')}
                helperText={touched.nbrFemme && errors.nbrFemme}
                error={Boolean(touched.nbrFemme && errors.nbrFemme)}
              />
              <RadioGroup
                // {...getFieldProps('contraceptionMere')}
                onChange={handleContraceptionMere}
                error={Boolean(touched.contraceptionMere && errors.contraceptionMere)}
                required
                helperText={touched.contraceptionMere && errors.contraceptionMere}
              >
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  sx={{ display: 'flex', alignItems: 'center' }}
                  spacing={1}
                >
                  <FormLabel component="label">Contraception par la mère:</FormLabel>
                  <FormControlLabel value="true" control={<Radio />} label="Oui" />
                  <FormControlLabel value="false" control={<Radio />} label="Non" />
                </Stack>
              </RadioGroup>
              <Select
                sx={{ padding: '2px' }}
                native
                disabled={contraceptionMeredisable}
                selected={values.contraceptionType}
                {...getFieldProps('contraceptionType')}
                helperText={touched.contraceptiontionType && errors.contraceptionType}
                error={Boolean(touched.contraceptionType && errors.contraceptionType)}
              >
                <option value="" selected disabled hidden>
                  Si contraception est OUI précisez le moyen
                </option>
                <option value="Naturel">Naturel</option>
                <option value="Moderne">Moderne</option>
                <option value="Pas de contraception">Pas de contraception</option>
              </Select>
              <Select
                sx={{ padding: '2px' }}
                native
                disabled={contraceptionMeredisable}
                // selected={values.typeContraceptionNaturel}
                helperText={touched.typeContraceptionNaturel && errors.typeContraceptionNaturel}
                {...getFieldProps('typeContraceptionNaturel')}
                error={Boolean(touched.typeContraceptionNaturel && errors.typeContraceptionNaturel)}
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
                sx={{ padding: '2px' }}
                native
                disabled={contraceptionMeredisable}
                helperText={touched.typeContraceptionModerne && errors.typeContraceptionModerne}
                {...getFieldProps('typeContraceptionModerne')}
                error={Boolean(touched.typeContraceptionModerne && errors.typeContraceptionModerne)}
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
                sx={{ padding: '2px' }}
                native
                required
                {...getFieldProps('Tribut')}
                helperText={touched.Tribut && errors.Tribut}
                error={Boolean(touched.Tribut && errors.Tribut)}
              >
                <option value="" selected disabled hidden>
                  Tribu
                </option>
                <option value="Shi">Shi</option>
                <option value="Rega">Rega</option>
                <option value="Autre ethnie du sud-kivu">Autre ethnie du sud-kivu</option>
                <option value="Autre ethnie du pay et autres">Autre ethnie du pay et autres</option>
              </Select>
              <RadioGroup
                {...getFieldProps('consommationPoisson')}
                required
                helperText={touched.consommationPoisson && errors.consommationPoisson}
                error={Boolean(touched.consommationPoisson && errors.consommationPoisson)}
              >
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  sx={{ display: 'flex', alignItems: 'center' }}
                  spacing={1}
                >
                  <FormLabel component="label">Consommation de poisson:</FormLabel>
                  <FormControlLabel value="true" control={<Radio />} label="Oui" />
                  <FormControlLabel value="false" control={<Radio />} label="Non" />
                </Stack>
              </RadioGroup>
              <Select
                native
                required
                sx={{ padding: '2px' }}
                selected={values.Religion}
                {...getFieldProps('Religion')}
                helperText={touched.Religion && errors.Religion}
                error={Boolean(touched.Religion && errors.Religion)}
              >
                <option value="" selected disabled hidden>
                  Réligion
                </option>
                <option value="Catholique">Catholique</option>
                <option value="Protestant">Protestant</option>
                <option value="Musulman">Musulman</option>
                <option value="Autres">Autres</option>
              </Select>
              <Select
                sx={{ padding: '2px' }}
                native
                required
                helperText={touched.NiveauSocioEconomique && errors.NiveauSocioEconomique}
                {...getFieldProps('NiveauSocioEconomique')}
                error={Boolean(touched.NiveauSocioEconomique && errors.NiveauSocioEconomique)}
              >
                <option value="" selected disabled hidden>
                  Niveau socio-économique
                </option>
                <option value="Bas">Bas</option>
                <option value="Moyen">Moyen</option>
                <option value="Universitaire">Bon</option>
                <option value="Inferieur à 1$">Inferieur a 1$ </option>
                <option value="Supérieur a 5$ ">Supérieur a 5$ </option>
                <option value="5 dollars">5 dollars</option>
              </Select>
              <TextField
                sx={{ padding: '2px' }}
                required
                label="Nombre de repas par jour"
                value={values.NbrRepasJour}
                {...getFieldProps('NbrRepasJour')}
                helperText={touched.NbrRepasJour && errors.NbrRepasJour}
                error={Boolean(touched.NbrRepasJour && errors.NbrRepasJour)}
              />
            </Stack>
          </Grid>
        </Grid>
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
