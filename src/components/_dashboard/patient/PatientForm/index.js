import * as Yup from 'yup';
import propTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useFormik, Form, FormikProvider } from 'formik';
// import { useNavigate } from 'react-router-dom';

// material
import {
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
  // getCheckboxUtilityClass
} from '@material-ui/core';
import { LoadingButton } from '@material-ui/lab';

// ----------------------------------------------------------------------
PatientForm.propTypes = {
  NextStep: propTypes.func,
  SetDataPatient: propTypes.func,
  setPrenomPatient: propTypes.func,
  setNomPatient: propTypes.func,
  // DataPatient: propTypes.object,
  patientFormData: propTypes.object,
  // prenomPatient: propTypes.string,
  nomPatient: propTypes.string,
  setadressePatient: propTypes.func,
  setSexePatient: propTypes.func,
  setDiversificationAliment: propTypes.func,
  setPostNomPatient: propTypes.func,
  setPerimetreBrachail: propTypes.func,
  setTaille: propTypes.func,
  setPerimetreCranien: propTypes.func,
  setModeArriverPatient: propTypes.func,
  setPoidsActuel: propTypes.func,
  // setFistNamePatient: propTypes.func,
  setTraitementNutritionnelAutre: propTypes.func,
  setAgeFinAllaitement: propTypes.func,
  setProvenancePatient: propTypes.func,
  setConstitutionAliment: propTypes.func,
  setPoidsNaissance: propTypes.func,
  setTraitementNutritionnel: propTypes.func,
  setDataNaissancePatient: propTypes.func,
  setTypeMalnutrition: propTypes.func,
  setExplicationAutre: propTypes.func,
  setTelephone: propTypes.func,
  setExplicationProvenance: propTypes.func,
  setAllaitementExclisifSixMois: propTypes.func
};

export default function PatientForm({
  NextStep,
  SetDataPatient,
  patientFormData,
  setadressePatient,
  setSexePatient,
  setDiversificationAliment,
  setPostNomPatient,
  setPerimetreBrachail,
  setPrenomPatient,
  setNomPatient,
  setTaille,
  setPerimetreCranien,
  setModeArriverPatient,
  setPoidsActuel,
  setTraitementNutritionnelAutre,
  setAgeFinAllaitement,
  setProvenancePatient,
  setConstitutionAliment,
  setPoidsNaissance,
  setTraitementNutritionnel,
  setDataNaissancePatient,
  setTypeMalnutrition,
  setExplicationAutre,
  setTelephone,
  setExplicationProvenance,
  setAllaitementExclisifSixMois
}) {
  const [allaitement, setAllaitement] = useState(true);
  const [provenance, setProvenance] = useState(true);
  const [modeArriver, setModeArriver] = useState(true);
  const [traitementNutri, setTraitementNutri] = useState(true);
  const [position] = useState(100);
  useEffect(() => {
    window.scroll(100, 100);
  }, [position]);
  const RegisterSchema = Yup.object().shape({
    taille: Yup.number('un chiffre requis').positive().required('Taille requis'),
    ExplicationAutre: Yup.string().min(2),
    allaitementExclusifSixMois: Yup.string().min(2).required('Radio requis'),
    NomPatient: Yup.string().required('Nom requis').min(2),
    poidsActuel: Yup.number('un chiffre requis').required('Poinds requis').positive(),
    perimetreCranien: Yup.number('un chiffre requis')
      .required('Perimetre cranien requis')
      .positive(),
    transfererUnt: Yup.string().min(2).required(),
    fistNamePatient: Yup.string().min(2).required('Prenom requis'),
    perimetreBrachail: Yup.number('un chiffre requis')
      .required('Perimetre brachial requis')
      .positive(),
    postNomPatient: Yup.string().min(2).required('Postnom requis'),
    telephone: Yup.string().min(2).required('téléphone requis'),
    diversificationAliment: Yup.number('un nombre')
      .positive('nombre positif')
      .required('diversification requis'),
    sexePatient: Yup.string().required('Sexe requis'),
    dataNaissancePatient: Yup.date().required('Data de naissance requis'),
    constitutionAliment: Yup.string().min(2).required('constitution aliment requis'),
    provenancePatient: Yup.string().min(2).required('Provenance requiq'),
    modeArriver: Yup.string().min(2).required('champs requis'),
    typeMalnutrition: Yup.string().min(2).required('Type malnutriton requis'),
    poidsNaissance: Yup.number('un chiffre requis').required('poids naissance requis').positive(),
    traitementNutritionnel: Yup.string().min(2).required('traitement nutritionnel requis'),
    traitementNutritionnelAutre: Yup.string().min(2),
    adressePatient: Yup.string().min(2).required('adresse requis'),
    ExplicationProvenance: Yup.string().min(2),
    ageFinAllaitement: Yup.number('requis').positive()
  });
  const formik = useFormik({
    initialValues: {
      taille: patientFormData.taille ? patientFormData.taille : '',
      poidsActuel: patientFormData.poidsActuel ? patientFormData.poidsActuel : '',
      perimetreCranien: patientFormData.perimetreCranien ? patientFormData.perimetreCranien : '',
      fistNamePatient: patientFormData.prenomPatient ? patientFormData.prenomPatient : '',
      NomPatient: patientFormData.nomPatient ? patientFormData.nomPatient : '',
      postNomPatient: patientFormData.postNomPatient ? patientFormData.postNomPatient : '',
      telephone: patientFormData.telephone ? patientFormData.telephone : '',
      diversificationAliment: patientFormData.diversificationAliment
        ? patientFormData.diversificationAliment
        : '',
      sexePatient: patientFormData.sexePatient ? patientFormData.sexePatient : '',
      dataNaissancePatient: patientFormData.dataNaissancePatient
        ? patientFormData.dataNaissancePatient
        : '',
      constitutionAliment: patientFormData.constitutionAliment
        ? patientFormData.constitutionAliment
        : '',
      provenancePatient: patientFormData.provenancePatient ? patientFormData.provenancePatient : '',
      adressePatient: patientFormData.adressePatient ? patientFormData.adressePatient : '',
      modeArriver: patientFormData.modeArriverPatient ? patientFormData.modeArriverPatient : '',
      ageFinAllaitement: patientFormData.ageFinAllaitement ? patientFormData.ageFinAllaitement : '',
      traitementNutritionnelAutre: patientFormData.traitementNutritionnelAutre
        ? patientFormData.traitementNutritionnelAutre
        : '',
      poidsNaissance: patientFormData.poidsNaissance ? patientFormData.poidsNaissance : '',
      traitementNutritionnel: patientFormData.traitementNutritionnel
        ? patientFormData.traitementNutritionnel
        : '',
      perimetreBrachail: patientFormData.perimetreBrachail ? patientFormData.perimetreBrachail : '',
      typeMalnutrition: patientFormData.typeMalnutrition ? patientFormData.typeMalnutrition : '',
      ExplicationAutre: patientFormData.ExplicationAutre ? patientFormData.ExplicationAutre : '',
      ExplicationProvenance: patientFormData.ExplicationProvenance
        ? patientFormData.ExplicationProvenance
        : '',
      allaitementExclusifSixMois: patientFormData.AllaitementExclisifSixMois
        ? patientFormData.AllaitementExclisifSixMois
        : '',
      transfererUnt: patientFormData.transfererUnt ? patientFormData.transfererUnt : ''
    },
    validationSchema: RegisterSchema,
    onSubmit: (indentity) => {
      // const { fistNamePatient, NomPatient } = indentity;
      SetDataPatient((current) => ({ ...current, indentity }));
      NextStep();
    }
  });
  const { errors, setFieldValue, touched, handleSubmit, isSubmitting, getFieldProps } = formik;
  console.log(errors);
  const handleChangeFistName = (event) => {
    const { value } = event.target;
    setFieldValue('fistNamePatient', value);
    setPrenomPatient(value);
  };
  const handleAllaitementExclusifSixMoix = (event) => {
    const { value } = event.target;
    setFieldValue('allaitementExclusifSixMois', value);
    setAllaitementExclisifSixMois(value);
    if (value === 'true') {
      setAllaitement(true);
    } else {
      setAllaitement(false);
    }
  };
  const handleChangeProvenance = (event) => {
    const { value } = event.target;
    setFieldValue('provenancePatient', value);
    setProvenancePatient(value);
    const chai = patientFormData.ExplicationProvenance
      ? 'Proven patient'
      : patientFormData.ExplicationProvenance;
    console.log(chai);
    if (value === 'Autres') {
      setProvenance(false);
    } else {
      setProvenance(true);
    }
  };
  const handleChangeModeArriver = (event) => {
    const { value } = event.target;
    setFieldValue('modeArriver', value);
    setModeArriverPatient(value);
    if (value === 'Autres') {
      setModeArriver(false);
    } else {
      setModeArriver(true);
    }
  };
  const handleChangeTraitementNutritionnel = (event) => {
    const { value } = event.target;
    setFieldValue('traitementNutritionnel', value);
    setTraitementNutritionnel(value);
    if (value === 'Autres') {
      setTraitementNutri(false);
    } else {
      setTraitementNutri(true);
    }
  };

  const handleChangeAdressePatient = (event) => {
    const { value } = event.target;
    setFieldValue('adressePatient', value);
    setadressePatient(value);
  };
  const handleChangeSexePatient = (event) => {
    const { value } = event.target;
    setFieldValue('sexePatient', value);
    setSexePatient(value);
  };
  const handleChangeDiversificationAliment = (event) => {
    const { value } = event.target;
    setFieldValue('diversificationAliment', value);
    setDiversificationAliment(value);
  };
  const handleChangePostNomPatient = (event) => {
    const { value } = event.target;
    setFieldValue('postNomPatient', value);
    setPostNomPatient(value);
  };
  const handleChangePerimetreBrachail = (event) => {
    const { value } = event.target;
    setFieldValue('perimetreBrachail', value);
    setPerimetreBrachail(value);
  };
  const handleChangeNom = (event) => {
    const { value } = event.target;
    setFieldValue('NomPatient', value);
    setNomPatient(value);
  };
  const handleChangePerimetreCranien = (event) => {
    const { value } = event.target;
    setFieldValue('perimetreCranien', value);
    setPerimetreCranien(value);
  };
  const handleChangePoidsActuel = (event) => {
    const { value } = event.target;
    setFieldValue('poidsActuel', value);
    setPoidsActuel(value);
  };
  const handleChangeTaille = (event) => {
    const { value } = event.target;
    setFieldValue('taille', value);
    setTaille(value);
  };
  const handleChangeNutritionnelAutre = (event) => {
    const { value } = event.target;
    setFieldValue('traitementNutritionnelAutre', value);
    setTraitementNutritionnelAutre(value);
  };
  const handleChangeAgeFinAllaitement = (event) => {
    const { value } = event.target;
    setFieldValue('ageFinAllaitement', value);
    setAgeFinAllaitement(value);
  };
  const handleChangeConstitutionAliment = (event) => {
    const { value } = event.target;
    setFieldValue('constitutionAliment', value);
    setConstitutionAliment(value);
  };
  const handleChangePoidsnaissance = (event) => {
    const { value } = event.target;
    setFieldValue('poidsNaissance', value);
    setPoidsNaissance(value);
  };
  const handleChangeDateNaissance = (event) => {
    const { value } = event.target;
    setFieldValue('dataNaissancePatient', value);
    setDataNaissancePatient(value);
  };
  const handleChangeTypeMalnutrition = (event) => {
    const { value } = event.target;
    setFieldValue('typeMalnutrition', value);
    setTypeMalnutrition(value);
  };
  const handleChangeExplicationAutre = (event) => {
    const { value } = event.target;
    setFieldValue('ExplicationAutre', value);
    setExplicationAutre(value);
  };
  const handleChangeTelephone = (event) => {
    const { value } = event.target;
    setFieldValue('telephone', value);
    setTelephone(value);
  };
  const handleChangeExplicationProvenance = (event) => {
    const { value } = event.target;
    setFieldValue('telephone', value);
    setExplicationProvenance(value);
  };
  const handleChangeTransfererUnt = (event) => {
    const { value } = event.target;
    setFieldValue('transfererUnt', value);
    patientFormData.setTransfererUnt(value);
  };
  return (
    <>
      <FormikProvider value={formik}>
        <Form autoComplete="off" onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={11} sm={6} md={6}>
              <Stack spacing={3}>
                <TextField
                  sx={{ padding: '2px' }}
                  fullWidth
                  autoFocus
                  label="Prénom"
                  value={patientFormData.prenomPatient}
                  onChange={handleChangeFistName}
                  // {...getFieldProps('fistNamePatient')}
                  error={Boolean(touched.fistNamePatient && errors.fistNamePatient)}
                  helperText={touched.fistNamePatient && errors.fistNamePatient}
                />
                <TextField
                  sx={{ padding: '2px' }}
                  autoComplete="name"
                  fullWidth
                  label="Nom"
                  value={patientFormData.nomPatient}
                  // {...getFieldProps('NomPatient')}
                  onChange={handleChangeNom}
                  error={Boolean(touched.NomPatient && errors.NomPatient)}
                  helperText={touched.NomPatient && errors.NomPatient}
                />
                <TextField
                  sx={{ padding: '2px' }}
                  fullWidth
                  autoComplete="lastname"
                  type="text"
                  label="Postnom"
                  defaultValue={patientFormData.postNomPatient}
                  // {...getFieldProps('postNomPatient')}
                  onChange={handleChangePostNomPatient}
                  error={Boolean(touched.postNomPatient && errors.postNomPatient)}
                  helperText={touched.postNomPatient && errors.postNomPatient}
                />
                <TextField
                  sx={{ padding: '2px' }}
                  fullWidth
                  autoComplete="tel"
                  type="tel"
                  label="Téléphone"
                  value={patientFormData.telephone}
                  onChange={handleChangeTelephone}
                  // {...getFieldProps('telephone')}
                  error={Boolean(touched.telephone && errors.telephone)}
                  helperText={touched.telephone && errors.telephone}
                />
                <TextField
                  sx={{ padding: '2px' }}
                  fullWidth
                  label="Adresse patient"
                  value={patientFormData.adressePatient}
                  // defaultValue={DataPatient.adressePatient}
                  onChange={handleChangeAdressePatient}
                  // {...getFieldProps('adressePatient')}
                  helperText={touched.adressePatient && errors.adressePatient}
                  error={Boolean(touched.adressePatient && errors.adressePatient)}
                />
                <TextField
                  sx={{ padding: '2px' }}
                  fullWidth
                  label="Poid naissance (gr)"
                  value={patientFormData.poidsNaissance}
                  onChange={handleChangePoidsnaissance}
                  // {...getFieldProps('poidsNaissance')}
                  helperText={touched.poidsNaissance && errors.poidsNaissance}
                  error={Boolean(touched.poidsNaissance && errors.poidsNaissance)}
                />
                <TextField
                  fullWidth
                  sx={{ padding: '2px' }}
                  //  defaultValue={DataPatient.poidsActuel}
                  value={patientFormData.poidsActuel}
                  onChange={handleChangePoidsActuel}
                  label="Poids actuelle (kg)"
                  // {...getFieldProps('poidsActuel')}
                  helperText={touched.poidsActuel && errors.poidsActuel}
                  error={Boolean(touched.poidsActuel && errors.poidsActuel)}
                />
                <RadioGroup
                  // {...getFieldProps('sexePatient')}
                  onChange={handleChangeSexePatient}
                  error={Boolean(touched.sexePatient && errors.sexePatient)}
                  helperText={touched.sexePatient && errors.sexePatient}
                  // setValues={  DataPatient.Sexe}
                >
                  <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      paddingLeft: '10px',
                      border: `${
                        Boolean(touched.sexePatient && errors.sexePatient) && '1px solid red'
                      }`,
                      borderRadius: `${
                        Boolean(touched.sexePatient && errors.sexePatient) && '10px'
                      }`
                    }}
                    spacing={1}
                  >
                    <FormLabel
                      component="label"
                      // style={{ color: `${errors.sexePatient && 'red'}` }}
                    >
                      Sexe:
                    </FormLabel>
                    <Stack direction={{ xs: 'row', sm: 'row' }}>
                      <FormControlLabel
                        value="M"
                        control={<Radio checked={patientFormData.sexePatient === 'M'} />}
                        label="M"
                      />
                      <FormControlLabel
                        value="F"
                        control={<Radio checked={patientFormData.sexePatient === 'F'} />}
                        label="F"
                      />
                    </Stack>
                  </Stack>
                </RadioGroup>
                <Select
                  sx={{ padding: '2px' }}
                  native
                  // {...getFieldProps('modeArriver')}
                  selected={patientFormData.modeArriverPatient}
                  onChange={handleChangeModeArriver}
                  error={Boolean(touched.modeArriver && errors.modeArriver)}
                  helperText={touched.modeArriver && errors.modeArriver}
                >
                  <option value="" selected disabled hidden>
                    Mode d'arriver
                  </option>
                  <option value="De la maison">De la maison</option>
                  <option value="UNT">UNT</option>
                  <option value="Autres">Autres</option>
                </Select>
                <TextField
                  sx={{ padding: '2px' }}
                  fullWidth
                  label="Si le mode d'arriver est autre veuillez préciser"
                  // {...getFieldProps('ExplicationAutre')}
                  value={patientFormData.ExplicationAutre}
                  onChange={handleChangeExplicationAutre}
                  disabled={modeArriver}
                  helperText={touched.ExplicationAutre && errors.ExplicationAutre}
                  error={Boolean(touched.ExplicationAutre && errors.ExplicationAutre)}
                />
                <Select
                  sx={{ padding: '2px' }}
                  native
                  // {...getFieldProps('traitementNutritionnel')}
                  onChange={handleChangeTraitementNutritionnel}
                  helperText={touched.traitementNutritionnel && errors.traitementNutritionnel}
                  error={Boolean(touched.traitementNutritionnel && errors.traitementNutritionnel)}
                >
                  <option value="" selected disabled hidden>
                    Traitement nutritionnel
                  </option>
                  <option value="ATPE">ATPE</option>
                  <option value="Plumpy-nut">Plumpy-nut</option>
                  <option value="Autres">Autres</option>
                </Select>
                <TextField
                  sx={{ padding: '2px' }}
                  fullWidth
                  label="Si le traitement nutritionnel est autre veuillez préciser"
                  // defaultValue={DataPatient.traitementNutritionnelAutre}
                  onChange={handleChangeNutritionnelAutre}
                  value={patientFormData.fistNamePatient}
                  disabled={traitementNutri}
                  helperText={
                    touched.traitementNutritionnelAutre && errors.traitementNutritionnelAutre
                  }
                  // {...getFieldProps('traitementNutritionnelAutre')}
                  error={Boolean(
                    touched.traitementNutritionnelAutre && errors.traitementNutritionnelAutre
                  )}
                />
              </Stack>
            </Grid>
            <Grid item xs={11} sm={6} md={6}>
              <Stack spacing={3}>
                <Select
                  native
                  sx={{ padding: '2px' }}
                  // {...getFieldProps('provenancePatient')}
                  onChange={handleChangeProvenance}
                  // value={DataPatient.Provenace}
                  helperText={touched.provenancePatient && errors.provenancePatient}
                  error={Boolean(touched.provenancePatient && errors.provenancePatient)}
                >
                  <option defaultValue="" selected disabled hidden>
                    {patientFormData.ExplicationProvenance || 'Provenance Patient'}
                  </option>
                  <option value="kadutu">Kadutu</option>
                  <option value="Bagira">Bagira</option>
                  <option value="Ibabda">Ibanda</option>
                  <option value="Hors ville">Hors ville</option>
                  <option value="Autres">Autres</option>
                </Select>
                <TextField
                  sx={{ padding: '2px' }}
                  fullWidth
                  label="Si la provenance est autre veuillez préciser"
                  // {...getFieldProps('ExplicationProvenance')}
                  value={patientFormData.ExplicationProvenance}
                  onChange={handleChangeExplicationProvenance}
                  disabled={provenance}
                  error={Boolean(touched.ExplicationProvenance && errors.ExplicationProvenance)}
                  helperText={touched.ExplicationProvenance && errors.ExplicationProvenance}
                />
                {/* <InputLabel>Date de naissance</InputLabel> */}
                <TextField
                  sx={{ padding: '2px' }}
                  type="date"
                  fullWidth
                  label="Date de naissance"
                  InputLabelProps={{
                    shrink: true
                  }}
                  value={patientFormData.dataNaissancePatient}
                  onChange={handleChangeDateNaissance}
                  // {...getFieldProps('dataNaissancePatient')}
                  helperText={touched.dataNaissancePatient && errors.dataNaissancePatient}
                  error={Boolean(touched.dataNaissancePatient && errors.dataNaissancePatient)}
                />
                <RadioGroup
                  // {...getFieldProps('allaitementExclusifSixMois')}
                  helperText={
                    touched.allaitementExclusifSixMois && errors.allaitementExclusifSixMois
                  }
                  error={Boolean(
                    touched.allaitementExclusifSixMois && errors.allaitementExclusifSixMois
                  )}
                  onChange={handleAllaitementExclusifSixMoix}
                >
                  <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    sx={{
                      display: 'flex',
                      paddingLeft: '10px',
                      alignItems: 'center',
                      border: `${
                        Boolean(
                          touched.allaitementExclusifSixMois && errors.allaitementExclusifSixMois
                        ) && '1px solid red'
                      }`,
                      borderRadius: `${
                        Boolean(
                          touched.allaitementExclusifSixMois && errors.allaitementExclusifSixMois
                        ) && '10px'
                      }`
                    }}
                    spacing={1}
                  >
                    <FormLabel component="label">Allaitement exclusif 6 mois:</FormLabel>
                    <Stack direction={{ xs: 'row', sm: 'row' }}>
                      <FormControlLabel
                        value="true"
                        control={
                          <Radio checked={patientFormData.AllaitementExclisifSixMois === 'true'} />
                        }
                        label="Oui"
                      />
                      <FormControlLabel
                        value="false"
                        control={
                          <Radio checked={patientFormData.AllaitementExclisifSixMois === 'false'} />
                        }
                        label="Non"
                      />
                    </Stack>
                  </Stack>
                </RadioGroup>
                <TextField
                  sx={{ padding: '2px' }}
                  fullWidth
                  disabled={allaitement}
                  label="Si non à quel âge fin allaitement (mois)"
                  onChange={handleChangeAgeFinAllaitement}
                  value={patientFormData.ageFinAllaitement}
                  // {...getFieldProps('ageFinAllaitement')}
                  //  defaultValue={DataPatient.ageFinAllaitement}
                  helperText={touched.ageFinAllaitement && errors.ageFinAllaitement}
                  error={Boolean(touched.ageFinAllaitement && errors.ageFinAllaitement)}
                />
                <TextField
                  sx={{ padding: '2px' }}
                  fullWidth
                  label="périmètre crânien (Cm)"
                  value={patientFormData.perimetreCranien}
                  onChange={handleChangePerimetreCranien}
                  // {...getFieldProps('perimetreCranien')}
                  // defaultValue={DataPatient.perimetreCranien}
                  helperText={touched.perimetreCranien && errors.perimetreCranien}
                  error={Boolean(touched.perimetreCranien && errors.perimetreCranien)}
                />
                <TextField
                  sx={{ padding: '2px' }}
                  // required
                  fullWidth
                  label="périmètre branchial (Cm)"
                  value={patientFormData.perimetreBrachail}
                  onChange={handleChangePerimetreBrachail}
                  // defaultValue={DataPatient.perimetreBrachail}
                  // {...getFieldProps('perimetreBrachail')}
                  helperText={touched.perimetreBrachail && errors.perimetreBrachail}
                  error={Boolean(touched.perimetreBrachail && errors.perimetreBrachail)}
                />
                <TextField
                  sx={{ padding: '2px' }}
                  // required
                  fullWidth
                  label="Taille en (Cm)"
                  value={patientFormData.taille}
                  onChange={handleChangeTaille}
                  // defaultValue={DataPatient.taille}
                  // {...getFieldProps('taille')}
                  error={Boolean(touched.taille && errors.taille)}
                  helperText={touched.taille && errors.taille}
                />
                <TextField
                  sx={{ padding: '2px' }}
                  // required
                  fullWidth
                  label="Diversification à quel âge (en mois)"
                  value={patientFormData.diversificationAliment}
                  onChange={handleChangeDiversificationAliment}
                  // {...getFieldProps('diversificationAliment')}
                  // defaultValue={DataPatient.diversificationAliment}
                  helperText={touched.diversificationAliment && errors.diversificationAliment}
                  error={Boolean(touched.diversificationAliment && errors.diversificationAliment)}
                />
                <TextField
                  sx={{ padding: '2px' }}
                  label="Constitution/type d’aliment"
                  value={patientFormData.constitutionAliment}
                  onChange={handleChangeConstitutionAliment}
                  // {...getFieldProps('constitutionAliment')}
                  // defaultValue={DataPatient.constitutionAliment}
                  helperText={touched.constitutionAliment && errors.constitutionAliment}
                  error={Boolean(touched.constitutionAliment && errors.constitutionAliment)}
                />
                <RadioGroup
                  // {...getFieldProps('transfererUnt')}
                  onChange={handleChangeTransfererUnt}
                  helperText={touched.transfererUnt && errors.transfererUnt}
                  error={Boolean(touched.transfererUnt && errors.transfererUnt)}
                  // onChange={handleAllaitementExclusifSixMoix}
                >
                  <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    sx={{
                      display: 'flex',
                      padding: '10px',
                      alignItems: 'center',
                      border: `${
                        Boolean(touched.transfererUnt && errors.transfererUnt) && '1px solid red'
                      }`,
                      borderRadius: `${
                        Boolean(touched.transfererUnt && errors.transfererUnt) && '10px'
                      }`
                    }}
                    spacing={1}
                  >
                    <FormLabel
                      component="label"
                      // style={{ color: `${errors.allaitementExclusifSixMois && 'red'}` }}
                    >
                      Transfer unt:
                    </FormLabel>
                    <Stack direction={{ xs: 'row', sm: 'row' }}>
                      <FormControlLabel
                        value="true"
                        control={<Radio checked={patientFormData.transfererUnt === 'true'} />}
                        label="Oui"
                      />
                      <FormControlLabel
                        value="false"
                        control={<Radio checked={patientFormData.transfererUnt === 'false'} />}
                        label="Non"
                      />
                    </Stack>
                  </Stack>
                </RadioGroup>
                <Select
                  native
                  sx={{ padding: '2px' }}
                  // {...getFieldProps('typeMalnutrition')}
                  onChange={handleChangeTypeMalnutrition}
                  helperText={touched.typeMalnutrition && errors.typeMalnutrition}
                  error={Boolean(touched.typeMalnutrition && errors.typeMalnutrition)}
                >
                  <option value="" selected disabled hidden>
                    Forme de malnutrition
                  </option>
                  <option value="MAM">Malnutrition aigue modéré</option>
                  <option value="MAS-K">Malnutrition aigue sévère kwashiorkor</option>
                  <option value="MAS-M">Malnutrition aigue sévère marasme</option>
                  <option value="MAC">Malnutrition aigue chronique</option>
                </Select>
              </Stack>
            </Grid>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              sx={{ display: 'flex', justifyContent: 'center', margin: 'auto' }}
            >
              <LoadingButton
                type="submit"
                variant="contained"
                size="large"
                loading={isSubmitting}
                sx={{
                  justifyContent: 'center',
                  width: 200,
                  margin: 'auto',
                  marginTop: '40px',
                  display: 'flex'
                }}
              >
                Suivant
              </LoadingButton>
            </Stack>
          </Grid>
        </Form>
      </FormikProvider>
    </>
  );
}
