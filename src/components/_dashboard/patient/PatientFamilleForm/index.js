import * as Yup from 'yup';
import propTypes from 'prop-types';
import { useState, useEffect } from 'react';
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
  // InputLabel,
  Select
  // styled
} from '@material-ui/core';
import { LoadingButton } from '@material-ui/lab';

// ----------------------------------------------------------------------
FamilleForm.propTypes = {
  NextStep: propTypes.func,
  PrevStep: propTypes.func,
  SetDataPatient: propTypes.func,
  patientFormFamille: propTypes.any
};

export default function FamilleForm({ NextStep, SetDataPatient, PrevStep, patientFormFamille }) {
  const [statutMarital, setStatutMarital] = useState(true);
  const [contraceptionMeredisable, setContraceptionMeredisable] = useState(true);
  const [contraceptionNaturelDisable, setContraceptionNaturelDisable] = useState(true);
  const [contraceptionModerneDisable, setContraceptionModerneDisable] = useState(true);
  const [statutMaritalDisable, setStatutMaritalDisable] = useState(true);

  const [position] = useState(0);
  useEffect(() => {
    window.scroll(position, position);
  }, [position]);

  const RegisterSchema = Yup.object().shape({
    nomTuteur: Yup.string().min(2).required('Nom tuteur requis'),
    dateNaissanceMere: Yup.date().required('Date de naissance requis'),
    mereEnceinte: Yup.string().required('Mere enceinte requis'),
    PossederTeleRadio: Yup.string().required('Posseder un télé requis'),
    ProffessionChefMenage: Yup.string().required('Profession requis'),
    scolariteMere: Yup.string().required('Scolarité requis'),
    pereMariage: Yup.string(),
    consommationPoisson: Yup.string().required('consomation poisson requis'),
    nbrFemme: Yup.number().min(2).required('nombre de femme requis'),
    NiveauSocioEconomique: Yup.string().required('niveau socio-économique requis'),
    statutMarital: Yup.string().required('statut marital requis'),
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
      vivreAvecParent: patientFormFamille.vivreAvecParent ? patientFormFamille.vivreAvecParent : '',
      typeContraceptionModerne: patientFormFamille.typeContraceptionModerne
        ? patientFormFamille.contraceptionMere
        : '',
      contraceptionMere: patientFormFamille.contraceptionMere
        ? patientFormFamille.contraceptionMere
        : '',
      professionMere: patientFormFamille.professionMere ? patientFormFamille.professionMere : '',
      nomTuteur: patientFormFamille.nomTuteur ? patientFormFamille.nomTuteur : '',
      dateNaissanceMere: patientFormFamille.dateNaissanceMere
        ? patientFormFamille.dateNaissanceMere
        : '',
      mereEnceinte: patientFormFamille.mereEnceinte ? patientFormFamille.mereEnceinte : '',
      PossederTeleRadio: patientFormFamille.PossederTeleRadio
        ? patientFormFamille.PossederTeleRadio
        : '',
      ProffessionChefMenage: patientFormFamille.ProffessionChefMenage
        ? patientFormFamille.ProffessionChefMenage
        : '',
      scolariteMere: patientFormFamille.scolariteMere ? patientFormFamille.scolariteMere : '',
      pereMariage: patientFormFamille.pereMariage ? patientFormFamille.pereMariage : '',
      mereEnVie: patientFormFamille.mereEnVie ? patientFormFamille.mereEnVie : '',
      consommationPoisson: patientFormFamille.consommationPoisson
        ? patientFormFamille.consommationPoisson
        : '',
      typeContraceptionNaturel: patientFormFamille.typeContraceptionNaturel
        ? patientFormFamille.typeContraceptionNaturel
        : '',
      NiveauSocioEconomique: patientFormFamille.NiveauSocioEconomique
        ? patientFormFamille.NiveauSocioEconomique
        : '',
      statutMarital: patientFormFamille.statutMarital ? patientFormFamille.statutMarital : '',
      Tribut: patientFormFamille.Tribut ? patientFormFamille.Tribut : '',
      dateNaissanceChefMenage: patientFormFamille.dateNaissanceChefMenage
        ? patientFormFamille.dateNaissanceChefMenage
        : '',
      Religion: patientFormFamille.Religion ? patientFormFamille.Religion : '',
      NbrRepasJour: patientFormFamille.NbrRepasJour ? patientFormFamille.NbrRepasJour : '',
      pereEnvie: patientFormFamille.pereEnvie ? patientFormFamille.pereEnvie : '',
      nbrFemme: patientFormFamille.nbrFemme ? patientFormFamille.nbrFemme : '1',
      tailleMenage: patientFormFamille.tailleMenage ? patientFormFamille.tailleMenage : '',
      contraceptionType: patientFormFamille.contraceptionType
        ? patientFormFamille.contraceptionType
        : ''
    },
    validationSchema: RegisterSchema,
    onSubmit: (FamalyData) => {
      SetDataPatient((current) => ({ ...current, FamalyData }));
      NextStep();
    }
  });

  const { errors, setFieldValue, touched, handleSubmit, values, isSubmitting } = formik;
  // console.log(errors);
  // vivreAvecParent,
  // ,
  // typeContraceptionModerne,
  // ,
  // contraceptionMere,
  // ,
  // professionMere,
  // ,
  // nomTuteur,
  // ,
  // dateNaissanceMere,
  // ,
  // mereEnceinte,
  // ,
  // possederTeleRadio,
  // ,
  // proffessionChefMenage,
  // ,
  // scolariteMere,
  // ,
  // pereMariage,
  // ,
  // mereEnVie,
  // ,
  // consommationPoisson,
  // ,
  // typeContraceptionNaturel,
  // ,
  // niveauSocioEconomique,
  // ,
  // statutMarital,
  // ,
  // tribut,
  // ,
  // dateNaissanceChefMenage,
  // ,
  // religion,
  // ,
  // nbrRepasJour,
  // ,
  // pereEnvie,
  // ,
  // nbrFemme,
  // ,
  // tailleMenage,
  // ,
  // contraceptionType,
  const handleStatutMarital = (event) => {
    const { value } = event.target;
    setFieldValue('statutMarital', value);
    patientFormFamille.setStatutMarital(value);
    if (value === 'Mariée') {
      setStatutMarital(false);
    } else {
      setStatutMarital(true);
    }
  };

  const handleContraceptionMere = (event) => {
    const { value } = event.target;
    setFieldValue('contraceptionMere', value);
    patientFormFamille.setContraceptionMere(value);
    if (value === 'true') {
      setContraceptionMeredisable(false);
    } else {
      setContraceptionMeredisable(true);
    }
  };

  const handleContraceptionType = (event) => {
    const { value } = event.target;
    setFieldValue('contraceptionType', value);
    patientFormFamille.setContraceptionType(value);
    if (value === 'Naturel') {
      setContraceptionNaturelDisable(false);
      setContraceptionModerneDisable(true);
    }
    if (value === 'Moderne') {
      setContraceptionModerneDisable(false);
      setContraceptionNaturelDisable(true);
    }
    if (value === 'Moderne et Nature') {
      setContraceptionModerneDisable(false);
      setContraceptionNaturelDisable(false);
    }
  };

  const handlePereMariage = (event) => {
    const { value } = event.target;
    setFieldValue('pereMariage', value);
    patientFormFamille.SetPereMariage(value);
  };
  const handleNbrFemme = (event) => {
    const { value } = event.target;
    setFieldValue('nbrFemme', value);
    patientFormFamille.setNbrFemme(value);
  };

  const handleTypeContraceptionNaturel = (event) => {
    const { value } = event.target;
    setFieldValue('typeContraceptionNaturel', value);
    patientFormFamille.setTypeContraceptionNaturel(value);
  };

  const handleTypeContraceptionModerne = (event) => {
    const { value } = event.target;
    setFieldValue('typeContraceptionModerne', value);
    patientFormFamille.setTypeContraceptionModerne(value);
  };

  const handleTribut = (event) => {
    const { value } = event.target;
    setFieldValue('tribut', value);
    patientFormFamille.setTribut(value);
  };

  const handleConsommationPoisson = (event) => {
    const { value } = event.target;
    setFieldValue('handleConsommationPoisson', value);
    patientFormFamille.setConsommationPoisson(value);
  };

  const handleReligion = (event) => {
    const { value } = event.target;
    setFieldValue('Religion', value);
    patientFormFamille.setReligion(value);
  };

  const handleNiveauSocioEconomique = (event) => {
    const { value } = event.target;
    setFieldValue('NiveauSocioEconomique', value);
    patientFormFamille.setNiveauSocioEconomique(value);
  };

  const handleNbrRepasJour = (event) => {
    const { value } = event.target;
    setFieldValue('NbrRepasJour', value);
    patientFormFamille.setNbrRepasJour(value);
  };

  const handleTailleMenage = (event) => {
    const { value } = event.target;
    setFieldValue('tailleMenage', value);
    patientFormFamille.setTailleMenage(value);
  };

  const handleVivreAvecParent = (event) => {
    const { value } = event.target;
    setFieldValue('vivreAvecParent', value);
    patientFormFamille.setVivreAvecParent(value);
  };

  const handleNomTuteur = (event) => {
    const { value } = event.target;
    setFieldValue('nomTuteur', value);
    patientFormFamille.setNomTuteur(value);
  };

  const handleMereEnVie = (event) => {
    const { value } = event.target;
    setFieldValue('mereEnVie', value);
    patientFormFamille.setMereEnVie(value);
  };

  const handleDateNaissanceMere = (event) => {
    const { value } = event.target;
    setFieldValue('dateNaissanceMere', value);
    patientFormFamille.setDateNaissanceMere(value);
  };

  const handlemereEnceinte = (event) => {
    const { value } = event.target;
    setFieldValue('mereEnceinte', value);
    patientFormFamille.setMereEnceinte(value);
  };

  const handleScolariteMere = (event) => {
    const { value } = event.target;
    setFieldValue('scolariteMere', value);
    patientFormFamille.setScolariteMere(value);
  };

  const handleProfessionMere = (event) => {
    const { value } = event.target;
    setFieldValue('professionMere', value);
    patientFormFamille.setProfessionMere(value);
  };

  const handlePereEnvie = (event) => {
    const { value } = event.target;
    setFieldValue('pereEnvie', value);
    patientFormFamille.SetPereEnvie(value);
  };

  const handleProffessionChefMenage = (event) => {
    const { value } = event.target;
    setFieldValue('ProffessionChefMenage', value);
    patientFormFamille.setProffessionChefMenage(value);
  };

  const handleDateNaissanceChefMenage = (event) => {
    const { value } = event.target;
    setFieldValue('dateNaissanceChefMenage', value);
    patientFormFamille.setDateNaissanceChefMenage(value);
  };

  const handlePossederTeleRadio = (event) => {
    const { value } = event.target;
    setFieldValue('PossederTeleRadio', value);
    patientFormFamille.setPossederTeleRadio(value);
  };
  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Grid sx={{ justifyContent: 'center' }} container spacing={3}>
          <Grid item xs={11} sm={6} md={6}>
            <Stack spacing={3}>
              <TextField
                // required
                sx={{ padding: '2px' }}
                label="Taille ménage"
                autoFocus
                value={values.tailleMenage}
                onChange={handleTailleMenage}
                helperText={touched.tailleMenage && errors.tailleMenage}
                error={Boolean(touched.tailleMenage && errors.tailleMenage)}
              />
              <RadioGroup
                // required
                // {...getFieldProps('vivreAvecParent')}
                onChange={handleVivreAvecParent}
                helperText={touched.vivreAvecParent && errors.vivreAvecParent}
                error={Boolean(touched.vivreAvecParent && errors.vivreAvecParent)}
              >
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    paddingLeft: '10px',
                    border: `${
                      Boolean(touched.vivreAvecParent && errors.vivreAvecParent) && '1px solid red'
                    }`,
                    borderRadius: `${
                      Boolean(touched.vivreAvecParent && errors.vivreAvecParent) && '10px'
                    }`
                  }}
                  spacing={1}
                >
                  <FormLabel component="label">Parent en vie:</FormLabel>
                  <FormControlLabel value="true" control={<Radio />} label="Oui" />
                  <FormControlLabel value="false" control={<Radio />} label="Non" />
                </Stack>
              </RadioGroup>
              <TextField
                sx={{ padding: '2px' }}
                label="Nom de tuteur"
                // required
                value={values.nomTuteur}
                onChange={handleNomTuteur}
                // {...getFieldProps('nomTuteur')}
                helperText={touched.nomTuteur && errors.nomTuteur}
                error={Boolean(touched.nomTuteur && errors.nomTuteur)}
              />
              <RadioGroup
                // {...getFieldProps('mereEnVie')}
                onChange={handleMereEnVie}
                required
                helperText={touched.mereEnVie && errors.mereEnVie}
                error={Boolean(touched.mereEnVie && errors.mereEnVie)}
              >
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    paddingLeft: '10px',
                    border: `${Boolean(touched.mereEnVie && errors.mereEnVie) && '1px solid red'}`,
                    borderRadius: `${Boolean(touched.mereEnVie && errors.mereEnVie) && '10px'}`
                  }}
                  spacing={1}
                >
                  <FormLabel component="label">Mère en vie:</FormLabel>
                  <FormControlLabel value="true" control={<Radio />} label="Oui" />
                  <FormControlLabel value="false" control={<Radio />} label="Non" />
                </Stack>
              </RadioGroup>
              <TextField
                sx={{ padding: '2px' }}
                type="date"
                // required
                label="Date de naissance mère"
                InputLabelProps={{
                  shrink: true
                }}
                helperText={touched.dateNaissanceMere && errors.dateNaissanceMere}
                // {...getFieldProps('dateNaissanceMere')}
                onChange={handleDateNaissanceMere}
                error={Boolean(touched.dateNaissanceMere && errors.dateNaissanceMere)}
                // helperText={touched.dateNaissanceMere && errors.dateNaissanceMere}
              />
              <RadioGroup
                required
                // {...getFieldProps('mereEnceinte')}
                onChange={handlemereEnceinte}
                helperText={touched.mereEnceinte && errors.mereEnceinte}
                error={Boolean(touched.mereEnceinte && errors.mereEnceinte)}
              >
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    paddingLeft: '10px',
                    border: `${
                      Boolean(touched.mereEnceinte && errors.mereEnceinte) && '1px solid red'
                    }`,
                    borderRadius: `${
                      Boolean(touched.mereEnceinte && errors.mereEnceinte) && '10px'
                    }`
                  }}
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
                onChange={handleScolariteMere}
                // {...getFieldProps('scolariteMere')}
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
                // required
                onchange={handleProfessionMere}
                // {...getFieldProps('professionMere')}
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
                // {...getFieldProps('pereEnvie')}
                onchange={handlePereEnvie}
                error={Boolean(touched.pereEnvie && errors.pereEnvie)}
                helperText={touched.pereEnvie && errors.pereEnvie}
              >
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    paddingLeft: '10px',
                    border: `${Boolean(touched.pereEnvie && errors.pereEnvie) && '1px solid red'}`,
                    borderRadius: `${Boolean(touched.pereEnvie && errors.pereEnvie) && '10px'}`
                  }}
                  spacing={1}
                >
                  <FormLabel component="label">Père en vie:</FormLabel>
                  <FormControlLabel value="true" control={<Radio />} label="Oui" />
                  <FormControlLabel value="false" control={<Radio />} label="Non" />
                </Stack>
              </RadioGroup>
              <Select
                native
                // required
                sx={{ padding: '2px' }}
                onchange={handleProffessionChefMenage}
                // {...getFieldProps('ProffessionChefMenage')}
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
              <TextField
                sx={{ padding: '2px' }}
                label="Date de naissance Chef ménage"
                type="date"
                // required
                InputLabelProps={{
                  shrink: true
                }}
                // {...getFieldProps('dateNaissanceChefMenage')}
                onchange={handleDateNaissanceChefMenage}
                helperText={touched.dateNaissanceChefMenage && errors.dateNaissanceChefMenage}
                error={Boolean(touched.dateNaissanceChefMenage && errors.dateNaissanceChefMenage)}
              />
              <RadioGroup
                // {...getFieldProps('PossederTeleRadio')}
                onchange={handlePossederTeleRadio}
                error={Boolean(touched.PossederTeleRadio && errors.PossederTeleRadio)}
                helperText={touched.PossederTeleRadio && errors.PossederTeleRadio}
              >
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    paddingLeft: '10px',
                    border: `${
                      Boolean(touched.PossederTeleRadio && errors.PossederTeleRadio) &&
                      '1px solid red'
                    }`,
                    borderRadius: `${
                      Boolean(touched.PossederTeleRadio && errors.PossederTeleRadio) && '10px'
                    }`
                  }}
                  spacing={1}
                >
                  <FormLabel component="label">Possesseder radio ou télé:</FormLabel>
                  <FormControlLabel value="true" control={<Radio />} label="Oui" />
                  <FormControlLabel value="false" control={<Radio />} label="Non" />
                </Stack>
              </RadioGroup>
            </Stack>
          </Grid>
          <Grid item xs={11} sm={6} md={6}>
            <Stack spacing={3}>
              <Select
                sx={{ padding: '2px' }}
                native
                // required
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
                // {...getFieldProps('pereMariage')}
                onChange={handlePereMariage}
                // créer une fonction
                helperText={touched.pereMariage && errors.pereMariage}
                error={Boolean(touched.pereMariage && errors.pereMariage)}
              >
                <option value="" selected disabled hidden>
                  Si statut marital est marié
                </option>
                <option value="Polygame">Polygame</option>
                <option value="Monogame">Monogame</option>
              </Select>
              <TextField
                sx={{ padding: '2px' }}
                label="Si Polygame nbre de femme"
                value={values.nbrFemme}
                onChange={handleNbrFemme}
                disabled={statutMaritalDisable}
                helperText={touched.nbrFemme && errors.nbrFemme}
                error={Boolean(touched.nbrFemme && errors.nbrFemme)}
              />
              <RadioGroup
                onChange={handleContraceptionMere}
                error={Boolean(touched.contraceptionMere && errors.contraceptionMere)}
                helperText={touched.contraceptionMere && errors.contraceptionMere}
              >
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    paddingLeft: '10px',
                    border: `${
                      Boolean(touched.contraceptionMere && errors.contraceptionMere) &&
                      '1px solid red'
                    }`,
                    borderRadius: `${
                      Boolean(touched.contraceptionMere && errors.contraceptionMere) && '10px'
                    }`
                  }}
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
                onChange={handleContraceptionType}
                // {...getFieldProps('contraceptionType')}
                helperText={touched.contraceptiontionType && errors.contraceptionType}
                error={Boolean(touched.contraceptionType && errors.contraceptionType)}
              >
                <option value="" selected disabled hidden>
                  Si contraception est OUI précisez le moyen
                </option>
                <option value="Naturel">Naturel</option>
                <option value="Moderne">Moderne</option>
                <option value="Moderne et Nature">Moderne et Nature</option>
              </Select>
              <Select
                sx={{ padding: '2px' }}
                native
                disabled={contraceptionNaturelDisable}
                onChange={handleTypeContraceptionNaturel}
                helperText={touched.typeContraceptionNaturel && errors.typeContraceptionNaturel}
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
                disabled={contraceptionModerneDisable}
                helperText={touched.typeContraceptionModerne && errors.typeContraceptionModerne}
                onChange={handleTypeContraceptionModerne}
                // {...getFieldProps('typeContraceptionModerne')}
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
                // {...getFieldProps('Tribut')}
                onChange={handleTribut}
                helperText={touched.Tribut && errors.Tribut}
                error={Boolean(touched.Tribut && errors.Tribut)}
              >
                <option value="" selected disabled hidden>
                  Tribu
                </option>
                <option value="Havu">Havu</option>
                <option value="Shi">Shi</option>
                <option value="Rega">Rega</option>
                <option value="Autre ethnie du sud-kivu">Autre ethnie du sud-kivu</option>
                <option value="Autre ethnie du pay et autres">Autre ethnie du pay et autres</option>
              </Select>
              <RadioGroup
                // {...getFieldProps('consommationPoisson')}
                onChange={handleConsommationPoisson}
                // required
                helperText={touched.consommationPoisson && errors.consommationPoisson}
                error={Boolean(touched.consommationPoisson && errors.consommationPoisson)}
              >
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    paddingLeft: '10px',
                    border: `${
                      Boolean(touched.consommationPoisson && errors.consommationPoisson) &&
                      '1px solid red'
                    }`,
                    borderRadius: `${
                      Boolean(touched.consommationPoisson && errors.consommationPoisson) && '10px'
                    }`
                  }}
                  spacing={1}
                >
                  <FormLabel component="label">Consommation de poisson:</FormLabel>
                  <FormControlLabel value="true" control={<Radio />} label="Oui" />
                  <FormControlLabel value="false" control={<Radio />} label="Non" />
                </Stack>
              </RadioGroup>
              <Select
                native
                // required
                sx={{ padding: '2px' }}
                selected={values.Religion}
                onChange={handleReligion}
                // {...getFieldProps('Religion')}
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
                // required
                helperText={touched.NiveauSocioEconomique && errors.NiveauSocioEconomique}
                // {...getFieldProps('NiveauSocioEconomique')}
                onChange={handleNiveauSocioEconomique}
                error={Boolean(touched.NiveauSocioEconomique && errors.NiveauSocioEconomique)}
              >
                <option value="" selected disabled hidden>
                  Niveau socio-économique
                </option>
                <option value="Bas">Bas(Inferieur a 1$ )</option>
                <option value="Moyen">Moyen(5 dollars )</option>
                <option value="Universitaire">Bon(Supérieur a 5$ )</option>
              </Select>
              <TextField
                sx={{ padding: '2px' }}
                // required
                label="Nombre de repas par jour"
                value={values.NbrRepasJour}
                onChange={handleNbrRepasJour}
                // {...getFieldProps('NbrRepasJour')}
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
