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
  patientFormData: propTypes.object
};

export default function PatientForm({ NextStep, SetDataPatient, patientFormData }) {
  const [allaitement, setAllaitement] = useState(true);
  const [provenance, setProvenance] = useState(true);
  const [modeArriver, setModeArriver] = useState(true);
  const [traitementNutri, setTraitementNutri] = useState(true);
  const [position] = useState(0);
  useEffect(() => {
    window.scroll(position, position);
  }, [position]);
  const dateNow = new Date();
  // console.log(dateNow.getFullYear());
  const RegisterSchema = Yup.object().shape({
    taille: Yup.number('un chiffre requis').positive().min(100).max(400).required('Taille requis'),
    ExplicationAutre: Yup.string().trim().min(2),
    allaitementExclusifSixMois: Yup.string().trim().min(2).required('Radio requis'),
    NomPatient: Yup.string()
      .trim()
      .min(2)
      .matches(/[A-Za-z]/)
      .required('requis'),
    poidsActuel: Yup.number('un chiffre requis').required('Poinds requis').positive(),
    perimetreCranien: Yup.number('un chiffre requis')
      .positive()
      .min(40)
      .max(100)
      .required('Perimetre cranien requis'),
    transfererUnt: Yup.string().trim().min(2).required(),
    fistNamePatient: Yup.string()
      .trim()
      .min(2)
      .matches(/[A-Za-z]/)
      .required('requis'),
    perimetreBrachail: Yup.number('un chiffre requis')
      .positive()
      .min(40)
      .max(100)
      .required('Perimetre brachial requis'),
    postNomPatient: Yup.string()
      .min(2)
      .matches(/[A-Za-z]/)
      .trim()
      .required('requis'),
    telephone: Yup.string()
      .matches(/^(\+243|0)[0-9]{9}$/g)
      .required('requis'),
    diversificationAliment: Yup.number('un nombre')
      .positive('nombre positif')
      .min(4)
      .required('requis'),
    sexePatient: Yup.string().trim().required('requis'),
    dataNaissancePatient: Yup.date().min(1950).max(dateNow.getFullYear()).required('requis'),
    constitutionAliment: Yup.string().trim().min(2).required('requis'),
    provenancePatient: Yup.string().trim().min(2).required('requiq'),
    modeArriver: Yup.string().trim().min(2).required('requis'),
    typeMalnutrition: Yup.string().trim().min(2).required('requis'),
    poidsNaissance: Yup.number().positive().min(1500).required('requis'),
    traitementNutritionnel: Yup.string().trim().min(2).required('requis'),
    traitementNutritionnelAutre: Yup.string().min(5).trim(),
    adressePatient: Yup.string().trim().min(2).required('adresse requis'),
    ExplicationProvenance: Yup.string().min(2).trim(),
    ageFinAllaitement: Yup.number().min(2).positive()
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
      // const { fistNamePatient, NomPatient } = indentity;  indentity.allaitementExclusifSixMois === false && indentity.ageFinAllaitement === ''
      try {
        if (indentity.provenancePatient === 'Autres' && indentity.ExplicationProvenance === '') {
          throw alert('Veuillez preciser la provenance du patient');
        }
        if (
          indentity.allaitementExclusifSixMois === 'false' &&
          indentity.ageFinAllaitement === ''
        ) {
          throw alert("Veuillez preciser le nombre l'age fin allaitment en (mois) ");
        }
        if (indentity.modeArriver === 'Autres' && indentity.ExplicationAutre === '') {
          throw alert("Veuillez expliquer le mode d'arriver du patient ");
        }
        if (
          indentity.traitementNutritionnel === 'Autres' &&
          indentity.traitementNutritionnelAutre === ''
        ) {
          throw alert('Veuillez presiciser le traitement nutritionnel reçus');
        }
        SetDataPatient((current) => ({ ...current, indentity }));
        NextStep();
      } catch (e) {
        console.log(e);
      }
    }
  });
  const { errors, setFieldValue, touched, values, handleSubmit } = formik;
  // console.log(errors);
  const handleChangeFistName = (event) => {
    const { value } = event.target;
    setFieldValue('fistNamePatient', value);
    patientFormData.setPrenomPatient(value);
  };
  const handleAllaitementExclusifSixMoix = (event) => {
    const { value } = event.target;
    setFieldValue('allaitementExclusifSixMois', value);
    patientFormData.setAllaitementExclisifSixMois(value);
    if (value === 'true') {
      setAllaitement(true);
    } else {
      setAllaitement(false);
    }
  };
  const handleChangeProvenance = (event) => {
    const { value } = event.target;
    setFieldValue('provenancePatient', value);
    patientFormData.setProvenancePatient(value);
    // const chai = patientFormData.ExplicationProvenance
    //   ? 'Proven patient'
    //   : patientFormData.ExplicationProvenance;
    // console.log(chai);
    if (value === 'Autres') {
      setProvenance(false);
    } else {
      setProvenance(true);
    }
  };
  const handleChangeModeArriver = (event) => {
    const { value } = event.target;
    setFieldValue('modeArriver', value);
    patientFormData.setModeArriverPatient(value);
    if (value === 'Autres') {
      setModeArriver(false);
    } else {
      setModeArriver(true);
    }
  };
  const handleChangeTraitementNutritionnel = (event) => {
    const { value } = event.target;
    setFieldValue('traitementNutritionnel', value);
    patientFormData.setTraitementNutritionnel(value);
    if (value === 'Autres') {
      setTraitementNutri(false);
    } else {
      setTraitementNutri(true);
    }
  };

  const handleChangeAdressePatient = (event) => {
    const { value } = event.target;
    setFieldValue('adressePatient', value);
    patientFormData.setadressePatient(value);
  };
  const handleChangeSexePatient = (event) => {
    const { value } = event.target;
    setFieldValue('sexePatient', value);
    patientFormData.setSexePatient(value);
  };
  const handleChangeDiversificationAliment = (event) => {
    const { value } = event.target;
    setFieldValue('diversificationAliment', value);
    patientFormData.setDiversificationAliment(value);
  };
  const handleChangePostNomPatient = (event) => {
    const { value } = event.target;
    setFieldValue('postNomPatient', value);
    patientFormData.setPostNomPatient(value);
  };
  const handleChangePerimetreBrachail = (event) => {
    const { value } = event.target;
    setFieldValue('perimetreBrachail', value);
    patientFormData.setPerimetreBrachail(value);
  };
  const handleChangeNom = (event) => {
    const { value } = event.target;
    setFieldValue('NomPatient', value);
    patientFormData.setNomPatient(value);
  };
  const handleChangePerimetreCranien = (event) => {
    const { value } = event.target;
    setFieldValue('perimetreCranien', value);
    patientFormData.setPerimetreCranien(value);
  };
  const handleChangePoidsActuel = (event) => {
    const { value } = event.target;
    setFieldValue('poidsActuel', value);
    patientFormData.setPoidsActuel(value);
  };
  const handleChangeTaille = (event) => {
    const { value } = event.target;
    setFieldValue('taille', value);
    patientFormData.setTaille(value);
  };
  const handleChangeNutritionnelAutre = (event) => {
    const { value } = event.target;
    setFieldValue('traitementNutritionnelAutre', value);
    patientFormData.setTraitementNutritionnelAutre(value);
  };
  const handleChangeAgeFinAllaitement = (event) => {
    const { value } = event.target;
    setFieldValue('ageFinAllaitement', value);
    patientFormData.setAgeFinAllaitement(value);
  };
  const handleChangeConstitutionAliment = (event) => {
    const { value } = event.target;
    setFieldValue('constitutionAliment', value);
    patientFormData.setConstitutionAliment(value);
  };
  const handleChangePoidsnaissance = (event) => {
    const { value } = event.target;
    setFieldValue('poidsNaissance', value);
    patientFormData.setPoidsNaissance(value);
  };
  const handleChangeDateNaissance = (event) => {
    const { value } = event.target;
    setFieldValue('dataNaissancePatient', value);
    patientFormData.setDataNaissancePatient(value);
  };
  const handleChangeTypeMalnutrition = (event) => {
    const { value } = event.target;
    setFieldValue('typeMalnutrition', value);
    patientFormData.setTypeMalnutrition(value);
  };
  const handleChangeExplicationAutre = (event) => {
    const { value } = event.target;
    setFieldValue('ExplicationAutre', value);
    patientFormData.setExplicationAutre(value);
  };
  const handleChangeTelephone = (event) => {
    const { value } = event.target;
    setFieldValue('telephone', value);
    patientFormData.setTelephone(value);
  };
  const handleChangeExplicationProvenance = (event) => {
    const { value } = event.target;
    setFieldValue('ExplicationProvenance', value);
    patientFormData.setExplicationProvenance(value);
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
                  // fullWidth
                  autoFocus
                  label="Prénom ex: job"
                  value={patientFormData.prenomPatient}
                  onChange={handleChangeFistName}
                  // {...getFieldProps('fistNamePatient')}
                  error={Boolean(touched.fistNamePatient && errors.fistNamePatient)}
                  helperText={touched.fistNamePatient && errors.fistNamePatient}
                />
                <TextField
                  sx={{ padding: '2px' }}
                  autoComplete="name"
                  // fullWidth
                  label="Nom ex: kalala"
                  value={patientFormData.nomPatient}
                  // {...getFieldProps('NomPatient')}
                  onChange={handleChangeNom}
                  error={Boolean(touched.NomPatient && errors.NomPatient)}
                  helperText={touched.NomPatient && errors.NomPatient}
                />
                <TextField
                  sx={{ padding: '2px' }}
                  // fullWidth
                  autoComplete="lastname"
                  type="text"
                  label="Postnom ex: Kalala"
                  defaultValue={patientFormData.postNomPatient}
                  // {...getFieldProps('postNomPatient')}
                  onChange={handleChangePostNomPatient}
                  error={Boolean(touched.postNomPatient && errors.postNomPatient)}
                  helperText={touched.postNomPatient && errors.postNomPatient}
                />
                <TextField
                  sx={{ padding: '2px' }}
                  // fullWidth
                  autoComplete="tel"
                  type="tel"
                  label="Téléphone ex:+243801212643"
                  value={patientFormData.telephone}
                  onChange={handleChangeTelephone}
                  // {...getFieldProps('telephone')}
                  error={Boolean(touched.telephone && errors.telephone)}
                  helperText={touched.telephone && errors.telephone}
                />
                <TextField
                  sx={{ padding: '2px' }}
                  // fullWidth
                  label="Adresse "
                  value={patientFormData.adressePatient}
                  // defaultValue={DataPatient.adressePatient}
                  onChange={handleChangeAdressePatient}
                  // {...getFieldProps('adressePatient')}
                  helperText={touched.adressePatient && errors.adressePatient}
                  error={Boolean(touched.adressePatient && errors.adressePatient)}
                />
                <TextField
                  sx={{ padding: '2px' }}
                  // fullWidth
                  label="Poid naissance (gr) ex:1500"
                  value={patientFormData.poidsNaissance}
                  onChange={handleChangePoidsnaissance}
                  // {...getFieldProps('poidsNaissance')}
                  helperText={touched.poidsNaissance && errors.poidsNaissance}
                  error={Boolean(touched.poidsNaissance && errors.poidsNaissance)}
                />
                <TextField
                  // fullWidth
                  sx={{ padding: '2px' }}
                  //  defaultValue={DataPatient.poidsActuel}
                  value={patientFormData.poidsActuel}
                  onChange={handleChangePoidsActuel}
                  label="Poids actuelle (kg) ex:20"
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
                    {`${
                      patientFormData.modeArriverPatient
                        ? patientFormData.modeArriverPatient
                        : "Mode d'arriver"
                    }`}
                  </option>
                  <option value="De la maison">De la maison</option>
                  <option value="UNT">UNT</option>
                  <option value="Autres">Autres</option>
                </Select>
                <TextField
                  sx={{ padding: '2px' }}
                  // fullWidth
                  label="Si le mode d'arriver est autre veuillez préciser"
                  // {...getFieldProps('ExplicationAutre')}
                  value={patientFormData.ExplicationAutre}
                  onChange={handleChangeExplicationAutre}
                  disabled={modeArriver}
                  helperText={touched.ExplicationAutre && errors.ExplicationAutre}
                  error={
                    Boolean(touched.ExplicationAutre && errors.ExplicationAutre) ||
                    Boolean(values.modeArriver === 'Autres' && values.ExplicationAutre === '')
                  }
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
                  // fullWidth
                  label="Si le traitement nutritionnel est autre veuillez préciser"
                  // defaultValue={DataPatient.traitementNutritionnelAutre}
                  onChange={handleChangeNutritionnelAutre}
                  value={patientFormData.fistNamePatient}
                  disabled={traitementNutri}
                  helperText={
                    touched.traitementNutritionnelAutre && errors.traitementNutritionnelAutre
                  }
                  // {...getFieldProps('traitementNutritionnelAutre')}
                  error={
                    Boolean(
                      touched.traitementNutritionnelAutre && errors.traitementNutritionnelAutre
                    ) ||
                    Boolean(
                      values.traitementNutritionnel === 'Autres' &&
                        values.traitementNutritionnelAutre === ''
                    )
                  }
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
                    {patientFormData.provenancePatient
                      ? patientFormData.provenancePatient
                      : 'Provenance'}
                  </option>
                  <option value="kadutu">Kadutu</option>
                  <option value="Bagira">Bagira</option>
                  <option value="Ibabda">Ibanda</option>
                  <option value="Hors ville">Hors ville</option>
                  <option value="Autres">Autres</option>
                </Select>
                <TextField
                  sx={{ padding: '2px' }}
                  // fullWidth
                  label="Si la provenance est autre veuillez préciser"
                  // {...getFieldProps('ExplicationProvenance')}
                  value={patientFormData.ExplicationProvenance}
                  onChange={handleChangeExplicationProvenance}
                  disabled={provenance}
                  error={
                    Boolean(touched.ExplicationProvenance && errors.ExplicationProvenance) ||
                    Boolean(
                      values.provenancePatient === 'Autres' && values.ExplicationProvenance === ''
                    )
                  }
                  helperText={touched.ExplicationProvenance && errors.ExplicationProvenance}
                />
                {/* <InputLabel>Date de naissance</InputLabel> */}
                <TextField
                  sx={{ padding: '2px' }}
                  type="date"
                  // fullWidth
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
                  // fullWidth
                  disabled={allaitement}
                  // disabled={patientFormData.AllaitementExclisifSixMois}
                  label="Si non à quel âge fin allaitement (mois) ex:14"
                  onChange={handleChangeAgeFinAllaitement}
                  value={patientFormData.ageFinAllaitement}
                  // {...getFieldProps('ageFinAllaitement')}
                  //  defaultValue={DataPatient.ageFinAllaitement}
                  helperText={touched.ageFinAllaitement && errors.ageFinAllaitement}
                  error={
                    Boolean(touched.ageFinAllaitement && errors.ageFinAllaitement) ||
                    Boolean(
                      values.allaitementExclusifSixMois === 'false' &&
                        values.ageFinAllaitement === ''
                    )
                  }
                />
                <TextField
                  sx={{ padding: '2px' }}
                  // fullWidth
                  label="Périmètre crânien (Cm) ex:40"
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
                  // fullWidth
                  label="Périmètre branchial (Cm) ex:40"
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
                  // fullWidth
                  label="Taille en (Cm) ex: 100"
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
                  // fullWidth
                  label="Diversification à quel âge (en mois) ex:20"
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
                    {patientFormData.typeMalnutrition
                      ? patientFormData.typeMalnutrition
                      : 'Forme de malnutrition'}
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
                // loading={isSubmitting}
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
