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
CauseForm.propTypes = {
  NextStep: propTypes.func,
  PrevStep: propTypes.func,
  SetDataPatient: propTypes.func,
  patientFormCause: propTypes.any
};

export default function CauseForm({ NextStep, SetDataPatient, PrevStep, patientFormCause }) {
  const [tbcDesabled, setTbcDesabled] = useState(true);
  const [hospitalisationDesabled, setHospitalisationDesabled] = useState(true);
  const [priseProduitBasePlanteDesabled, setpriseProduitBasePlanteDesabled] = useState(true);
  const [calendrierVaccinDesabled, setCalendrierVaccinDesabled] = useState(true);
  const [cocktailAtbDesabled, setcocktailAtbDesabled] = useState(true);
  const [dpmDesabled, setdpmDesabled] = useState(true);

  const [position] = useState(0);
  useEffect(() => {
    window.scroll(position, position);
  }, [position]);

  const RegisterSchema = Yup.object().shape({
    lieuAccouchement: Yup.string().required('Lieu accouchement requis'),
    tailleFratrie: Yup.number().required('Taille fratrie requis'),
    sejourNeo: Yup.string().required('sejour requis'),
    masFratrie: Yup.string().required('masfratien requis'),
    atcdMas: Yup.string().required('Aatcdmas requis'),
    atcdRougeole: Yup.string().required('atcd Rougeole requis'),
    tbcChezParent: Yup.string().required('tbc chez le parent requis'),
    tbcLequel: Yup.string(),
    tbcTraiter: Yup.string(),
    tbc: Yup.string().required('Tbc requis'),
    hospitalisationRecente: Yup.string().required('hospitalisation requis'),
    diagnostiqueHospitalisation: Yup.string(),
    dureeTraitementTbc: Yup.string(),
    termeGrossesse: Yup.string().required('Terme grossesse requis'),
    calendrierVaccin: Yup.string().required('Calendrier vaccin requis'),
    atcdDuTbcDansFratrie: Yup.string().required('champ tbc requis'),
    preciserCalendrierVaccinNonjour: Yup.string(),
    asphyxiePrerinatale: Yup.string().required(),
    rangFratrie: Yup.string().required('Rang fratrie requis'),
    produitPlante: Yup.string().required('Produit plante requis'),
    terrainVih: Yup.string().required('Terrain vih requis'),
    nombreChute: Yup.number().required('Nombre de chute requis'),
    vaccinationRougeole: Yup.string().required('vaccination Rougeole requis'),
    eig: Yup.number().required('Eig requis').positive(),
    TbcGuerie: Yup.string(),
    dpm: Yup.string().required('Dpm requis'),
    cocktailAtb: Yup.string().required('cocktailAtb requis'),
    cocktailAtbDuree: Yup.string(),
    dureeTraitementProduitPlante: Yup.string(),
    dpmAnormalPrecision: Yup.string()
  });

  const formik = useFormik({
    initialValues: {
      rangFratrie: patientFormCause.rangFratrie ? patientFormCause.rangFratrie : '',
      lieuAccouchement: patientFormCause.lieuAccouchement ? patientFormCause.lieuAccouchement : '',
      sejourNeo: patientFormCause.sejourNeo ? patientFormCause.sejourNeo : '',
      cocktailAtbDuree: patientFormCause.cocktailAtbDuree ? patientFormCause.cocktailAtbDuree : '',
      cocktailAtb: patientFormCause.cocktailAtb ? patientFormCause.cocktailAtb : '',
      atcdMas: patientFormCause.atcdMas ? patientFormCause.atcdMas : '',
      atcdRougeole: patientFormCause.atcdRougeole ? patientFormCause.atcdRougeole : '',
      tbcChezParent: patientFormCause.tbcChezParent ? patientFormCause.tbcChezParent : '',
      tbcLequel: patientFormCause.tbcLequel ? patientFormCause.tbcLequel : '',
      tbcTraiter: patientFormCause.tbcTraiter ? patientFormCause.tbcTraiter : '',
      dureeTraitementTbc: patientFormCause.dureeTraitementTbc
        ? patientFormCause.dureeTraitementTbc
        : '0',
      TbcGuerie: patientFormCause.TbcGuerie ? patientFormCause.TbcGuerie : '',
      termeGrossesse: patientFormCause.termeGrossesse ? patientFormCause.termeGrossesse : '',
      calendrierVaccin: patientFormCause.calendrierVaccin ? patientFormCause.calendrierVaccin : '',
      preciserCalendrierVaccinNonjour: patientFormCause.preciserCalendrierVaccinNonjour
        ? patientFormCause.preciserCalendrierVaccinNonjour
        : '',
      asphyxiePrerinatale: patientFormCause.asphyxiePrerinatale
        ? patientFormCause.asphyxiePrerinatale
        : '',
      tailleFratrie: patientFormCause.tailleFratrie ? patientFormCause.tailleFratrie : '',
      masFratrie: patientFormCause.masFratrie ? patientFormCause.masFratrie : '',
      terrainVih: patientFormCause.terrainVih ? patientFormCause.terrainVih : '',
      nombreChute: patientFormCause.nombreChute ? patientFormCause.nombreChute : '',
      vaccinationRougeole: patientFormCause.vaccinationRougeole
        ? patientFormCause.vaccinationRougeole
        : '',
      eig: patientFormCause.eig ? patientFormCause.eig : '',
      dpm: patientFormCause.dpm ? patientFormCause.dpm : '',
      tbc: patientFormCause.tbc ? patientFormCause.tbc : '',
      produitPlante: patientFormCause.produitPlante ? patientFormCause.produitPlante : '',
      hospitalisationRecente: patientFormCause.hospitalisationRecente
        ? patientFormCause.hospitalisationRecente
        : '',
      diagnostiqueHospitalisation: patientFormCause.diagnostiqueHospitalisation
        ? patientFormCause.diagnostiqueHospitalisation
        : '',
      atcdDuTbcDansFratrie: patientFormCause.atcdDuTbcDansFratrie
        ? patientFormCause.atcdDuTbcDansFratrie
        : '',
      dpmAnormalPrecision: patientFormCause.dpmAnormalPrecision
        ? patientFormCause.dpmAnormalPrecision
        : '',
      dureeTraitementProduitPlante: patientFormCause.dureeTraitementProduitPlante
        ? patientFormCause.dureeTraitementProduitPlante
        : ''
    },
    validationSchema: RegisterSchema,
    onSubmit: (CauseMalnutrition) => {
      SetDataPatient((current) => ({ ...current, CauseMalnutrition }));
      NextStep();
    }
  });

  const { errors, touched, setFieldValue, handleSubmit, isSubmitting } = formik;
  console.log(errors);

  //     sejourNeo,
  //     cocktailAtbDuree,
  //     cocktailAtb,
  //     ,
  //     ,
  //     ,
  //     tbcLequel,
  //     tbcTraiter,
  //     dureeTraitementTbc,
  //     tbcGuerie,
  //     termeGrossesse,
  //     calendrierVaccin,
  //     preciserCalendrierVaccinNonjour,
  //     asphyxiePrerinatale,
  //     tailleFratrie,
  //     masFratrie,
  //     terrainVih,
  //     nombreChute,
  //     vaccinationRougeole,
  //     eig,
  //     dpm,
  //     tbc,
  //     produitPlante,
  //     hospitalisationRecente,
  //     atcdDuTbcDansFratrie,
  //     dpmAnormalPrecision,
  //     dureeTraitementProduitPlante,

  const handleDesablebComponent = (event) => {
    const { value } = event.target;
    setFieldValue('tbcChezParent', value);
    patientFormCause.setTbcChezParent(value);
    if (value === 'true') {
      setTbcDesabled(false);
    } else {
      setTbcDesabled(true);
    }
  };
  const handleChangeHospitalisation = (event) => {
    const { value } = event.target;
    setFieldValue('hospitalisationRecente', value);
    patientFormCause.sethospitalisationRecente(value);
    if (value === 'true') setHospitalisationDesabled(false);
    else setHospitalisationDesabled(true);
  };
  const handleChangePriseProduitBasePlante = (event) => {
    const { value } = event.target;
    setFieldValue('produitPlante', value);
    patientFormCause.setProduitPlante(value);

    if (value === 'true') setpriseProduitBasePlanteDesabled(false);
    else setpriseProduitBasePlanteDesabled(true);
  };
  const handleCalendrierVaccin = (event) => {
    const { value } = event.target;
    setFieldValue('calendrierVaccin', value);
    patientFormCause.setCalendrierVaccin(value);
    if (value === 'Calendrier vaccinal à jour') {
      setCalendrierVaccinDesabled(true);
    } else {
      setCalendrierVaccinDesabled(false);
    }
  };
  const handlecocktailAtb = (event) => {
    const { value } = event.target;
    setFieldValue('cocktailAtb', value);
    patientFormCause.setCocktailAtb(value);
    if (value === 'true') {
      setcocktailAtbDesabled(false);
    } else {
      setcocktailAtbDesabled(true);
    }
  };
  const handleDpm = (event) => {
    const { value } = event.target;
    setFieldValue('dpm', value);
    patientFormCause.setDpm(value);
    if (value === 'Normal') {
      setdpmDesabled(true);
    } else {
      setdpmDesabled(false);
    }
  };
  const handleLieuAccouchement = (event) => {
    const { value } = event.target;
    setFieldValue('lieuAccouchement', value);
    patientFormCause.setLieuAccouchement(value);
  };
  const handleSejourNeo = (event) => {
    const { value } = event.target;
    setFieldValue('sejourNeo', value);
    patientFormCause.setSejourNeo(value);
  };

  const handleRangFratrie = (event) => {
    const { value } = event.target;
    setFieldValue('rangFratrie', value);
    patientFormCause.setRangFratrie(value);
  };

  const handleTailleFratrie = (event) => {
    const { value } = event.target;
    setFieldValue('tailleFratrie', value);
    patientFormCause.setTailleFratrie(value);
  };

  const handleMasFratrie = (event) => {
    const { value } = event.target;
    setFieldValue('masFratrie', value);
    patientFormCause.setMasFratrie(value);
  };

  const handleEig = (event) => {
    const { value } = event.target;
    setFieldValue('eig', value);
    patientFormCause.setEig(value);
  };

  const handleTbc = (event) => {
    const { value } = event.target;
    setFieldValue('tbc', value);
    patientFormCause.setTbc(value);
  };

  const handleTbcLequel = (event) => {
    const { value } = event.target;
    setFieldValue('tbcLequel', value);
    patientFormCause.setTbcLequel(value);
  };

  const handleTbcTraiter = (event) => {
    const { value } = event.target;
    setFieldValue('tbcTraiter', value);
    patientFormCause.setTbcTraiter(value);
  };

  const handleTbcGuerie = (event) => {
    const { value } = event.target;
    setFieldValue('TbcGuerie', value);
    patientFormCause.setTbcGuerie(value);
  };

  const handleDureeTraitementTbc = (event) => {
    const { value } = event.target;
    setFieldValue('dureeTraitementTbc', value);
    patientFormCause.setDureeTraitementTbc(value);
  };

  const handleDiagnostiqueHospitalisation = (event) => {
    const { value } = event.target;
    setFieldValue('diagnostiqueHospitalisation', value);
    patientFormCause.setDiagnostiqueHospitalisation(value);
  };
  const handleDureeTraitementProduitPlante = (event) => {
    const { value } = event.target;
    setFieldValue('dureeTraitementProduitPlante', value);
    patientFormCause.setDureeTraitementProduitPlante(value);
  };
  const handleDureeTermeGrossesse = (event) => {
    const { value } = event.target;
    setFieldValue('termeGrossesse', value);
    patientFormCause.setTermeGrossesse(value);
  };
  const handlePreciserCalendrierVaccinNonjour = (event) => {
    const { value } = event.target;
    setFieldValue('preciserCalendrierVaccinNonjour', value);
    patientFormCause.setPreciserCalendrierVaccinNonjour(value);
  };
  const handleAtcdMas = (event) => {
    const { value } = event.target;
    setFieldValue('atcdMas', value);
    patientFormCause.setAtcdMas(value);
  };
  const handleDpmAnormalPrecision = (event) => {
    const { value } = event.target;
    setFieldValue('dpmAnormalPrecision', value);
    patientFormCause.setDpmAnormalPrecision(value);
  };
  const handleAtcdRougeole = (event) => {
    const { value } = event.target;
    setFieldValue('atcdRougeole', value);
    patientFormCause.setAtcdRougeole(value);
  };
  const handleTerrainVih = (event) => {
    const { value } = event.target;
    setFieldValue('terrainVih', value);
    patientFormCause.setTerrainVih(value);
  };
  const handleNombreChute = (event) => {
    const { value } = event.target;
    setFieldValue('nombreChute', value);
    patientFormCause.setNombreChute(value);
  };
  const handleVaccinationRougeole = (event) => {
    const { value } = event.target;
    setFieldValue('vaccinationRougeole', value);
    patientFormCause.setVaccinationRougeole(value);
  };
  const handleAsphyxiePrerinatale = (event) => {
    const { value } = event.target;
    setFieldValue('asphyxiePrerinatale', value);
    patientFormCause.setAsphyxiePrerinatale(value);
  };
  const handleCocktailAtbDuree = (event) => {
    const { value } = event.target;
    setFieldValue('cocktailAtbDuree', value);
    patientFormCause.setCocktailAtbDuree(value);
  };
  const handleAtcdDuTbcDansFratrie = (event) => {
    const { value } = event.target;
    setFieldValue('atcdDuTbcDansFratrie', value);
    patientFormCause.setAtcdDuTbcDansFratrie(value);
  };
  // const handleAtcdDuTbcDansFratrie = (event) => {
  //   const { value } = event.target;
  //   setFieldValue('atcdDuTbcDansFratrie', value);
  //   patientFormCause.setAtcdDuTbcDansFratrie(value);
  // };
  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={10} sm={6} md={6}>
            <Stack spacing={3}>
              <Select
                native
                // fullWidth
                autoFocus
                sx={{ padding: '2px' }}
                value={patientFormCause.lieuAccouchement}
                error={Boolean(touched.lieuAccouchement && errors.lieuAccouchement)}
                onChange={handleLieuAccouchement}
                // {...getFieldProps('lieuAccouchement')}
              >
                <option value="" selected disabled hidden>
                  Lieu d'accouchement
                </option>
                <option value="Voiture">Voiture</option>
                <option value="domicile">domicile</option>
                <option value="Structure sanitaire oui">Structure sanitaire</option>
              </Select>
              <RadioGroup
                // fullWidth
                error={Boolean(touched.sejourNeo && errors.sejourNeo)}
                // helperText={touched.sejourNeo && errors.sejourNeo}
                // {...getFieldProps('sejourNeo')}
                onChange={handleSejourNeo}
              >
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    paddingLeft: '10px',
                    border: `${Boolean(touched.sejourNeo && errors.sejourNeo) && '1px solid red'}`,
                    borderRadius: `${Boolean(touched.sejourNeo && errors.sejourNeo) && '10px'}`
                  }}
                  spacing={1}
                >
                  <FormLabel component="label">Séjour en néonat:</FormLabel>
                  <Stack direction={{ xs: 'row', sm: 'row' }}>
                    <FormControlLabel
                      value="true"
                      control={<Radio checked={patientFormCause.sejourNeo === 'true'} />}
                      label="Oui"
                    />
                    <FormControlLabel
                      value="false"
                      control={<Radio checked={patientFormCause.sejourNeo === 'false'} />}
                      label="Non"
                    />
                  </Stack>
                </Stack>
              </RadioGroup>
              <TextField
                sx={{ padding: '2px' }}
                label="Rang dans la fratrie"
                // fullWidth
                value={patientFormCause.rangFratrie}
                // {...getFieldProps('rangFratrie')}
                onChange={handleRangFratrie}
                error={Boolean(touched.rangFratrie && errors.rangFratrie)}
                helperText={touched.rangFratrie && errors.rangFratrie}
              />
              <TextField
                sx={{ padding: '2px' }}
                // fullWidth
                value={patientFormCause.tailleFratrie}
                label="Taille de la fratrie"
                helperText={touched.tailleFratrie && errors.tailleFratrie}
                // {...getFieldProps('tailleFratrie')}
                onChange={handleTailleFratrie}
                error={Boolean(touched.tailleFratrie && errors.tailleFratrie)}
              />
              <RadioGroup
                // fullWidth
                onChange={handleMasFratrie}
                // {...getFieldProps('masFratrie')}
                error={Boolean(touched.masFratrie && errors.masFratrie)}
                // helperText={touched.masFratrie && errors.masFratrie}
              >
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    paddingLeft: '10px',
                    border: `${
                      Boolean(touched.masFratrie && errors.masFratrie) && '1px solid red'
                    }`,
                    borderRadius: `${Boolean(touched.masFratrie && errors.masFratrie) && '10px'}`
                  }}
                  spacing={1}
                >
                  <FormLabel component="label">MAS dans la fratrie:</FormLabel>
                  <Stack direction={{ xs: 'row', sm: 'row' }}>
                    <FormControlLabel
                      value="true"
                      control={<Radio checked={patientFormCause.masFratrie === 'true'} />}
                      label="Oui"
                    />
                    <FormControlLabel
                      value="false"
                      control={<Radio checked={patientFormCause.masFratrie === 'false'} />}
                      label="Non"
                    />
                  </Stack>
                </Stack>
              </RadioGroup>
              <TextField
                // fullWidth
                sx={{ padding: '2px' }}
                value={patientFormCause.eig}
                label="Eig moyen (année)"
                // {...getFieldProps('eig')}
                onChange={handleEig}
                error={Boolean(touched.eig && errors.eig)}
                helperText={touched.eig && errors.eig}
              />
              <RadioGroup
                // fullWidth
                // {...getFieldProps('tbc')}
                onChange={handleTbc}
                helperText={touched.tbc && errors.tbc}
                error={Boolean(touched.tbc && errors.tbc)}
              >
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    paddingLeft: '10px',
                    border: `${Boolean(touched.tbc && errors.tbc) && '1px solid red'}`,
                    borderRadius: `${Boolean(touched.tbc && errors.tbc) && '10px'}`
                  }}
                  spacing={1}
                >
                  <FormLabel component="label">TBC:</FormLabel>
                  <Stack direction={{ xs: 'row', sm: 'row' }}>
                    <FormControlLabel
                      value="true"
                      control={<Radio checked={patientFormCause.tbc === 'true'} />}
                      label="Oui"
                    />
                    <FormControlLabel
                      value="false"
                      control={<Radio checked={patientFormCause.tbc === 'false'} />}
                      label="Non"
                    />
                  </Stack>
                </Stack>
              </RadioGroup>
              <RadioGroup
                // fullWidth
                onChange={handleDesablebComponent}
                // {...getFieldProps('tbcChezParent')}
                error={Boolean(touched.tbcChezParent && errors.tbcChezParent)}
                // helperText={touched.tbcChezParent && errors.tbcChezParent}
              >
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    paddingLeft: '10px',
                    border: `${
                      Boolean(touched.tbcChezParent && errors.tbcChezParent) && '1px solid red'
                    }`,
                    borderRadius: `${
                      Boolean(touched.tbcChezParent && errors.tbcChezParent) && '10px'
                    }`
                  }}
                  spacing={1}
                >
                  <FormLabel component="label"> TBC chez les parents:</FormLabel>
                  <Stack
                    direction={{ xs: 'row', sm: 'row' }}
                    helperText={touched.tbcChezParent && errors.tbcChezParent}
                  >
                    <FormControlLabel
                      value="true"
                      // disabled={tbcDesabled}
                      control={<Radio checked={patientFormCause.tbcChezParent === 'true'} />}
                      label="Oui"
                    />
                    <FormControlLabel
                      value="false"
                      // disabled={tbcDesabled}
                      control={<Radio checked={patientFormCause.tbcChezParent === 'false'} />}
                      label="Non"
                    />
                  </Stack>
                </Stack>
              </RadioGroup>
              <Select
                native
                // fullWidth
                // {...getFieldProps('tbcLequel')}
                onChange={handleTbcLequel}
                error={Boolean(touched.tbcLequel && errors.tbcLequel)}
                disabled={tbcDesabled}
              >
                <option value="" selected disabled hidden>
                  Si TBC oui lequel
                </option>
                <option value="Père">Père</option>
                <option value="Mère">Mère</option>
                <option value="Les deux">Les deux</option>
              </Select>
              <RadioGroup
                // fullWidth
                // {...getFieldProps('tbcTraiter')}
                onChange={handleTbcTraiter}
                error={Boolean(touched.tbcTraiter && errors.tbcTraiter)}
              >
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  sx={{ display: 'flex', alignItems: 'center' }}
                  spacing={1}
                >
                  <FormLabel component="label">TBC traitée :</FormLabel>
                  <Stack direction={{ xs: 'row', sm: 'row' }}>
                    <FormControlLabel
                      value="true"
                      disabled={tbcDesabled}
                      control={<Radio checked={patientFormCause.tbcTraiter === 'true'} />}
                      label="Oui"
                    />
                    <FormControlLabel
                      value="false"
                      disabled={tbcDesabled}
                      control={<Radio checked={patientFormCause.tbcTraiter === 'false'} />}
                      label="Non"
                    />
                  </Stack>
                </Stack>
              </RadioGroup>
              <RadioGroup
                // fullWidth
                // {...getFieldProps('TbcGuerie')}
                onChange={handleTbcGuerie}
                error={Boolean(touched.TbcGuerie && errors.TbcGuerie)}
              >
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  sx={{ display: 'flex', alignItems: 'center' }}
                  spacing={1}
                >
                  <FormLabel component="label">TBC déclarée guérie:</FormLabel>
                  <Stack direction={{ xs: 'row', sm: 'row' }}>
                    <FormControlLabel
                      value="true"
                      disabled={tbcDesabled}
                      control={<Radio checked={patientFormCause.TbcGuerie === 'true'} />}
                      label="Oui"
                    />
                    <FormControlLabel
                      value="false"
                      disabled={tbcDesabled}
                      control={<Radio checked={patientFormCause.TbcGuerie === 'false'} />}
                      label="Non"
                    />
                  </Stack>
                </Stack>
              </RadioGroup>
              <TextField
                sx={{ padding: '2px' }}
                // fullWidth
                value={patientFormCause.dureeTraitementTbc}
                label="Durée de traitement TBC"
                disabled={tbcDesabled}
                onChange={handleDureeTraitementTbc}
                // {...getFieldProps('dureeTraitementTbc')}
                error={Boolean(touched.dureeTraitementTbc && errors.dureeTraitementTbc)}
              />
              <RadioGroup
                onChange={handleChangeHospitalisation}
                // {...getFieldProps('hospitalisationRecente')}
                helperText={touched.hospitalisationRecente && errors.hospitalisationRecente}
                error={Boolean(touched.hospitalisationRecente && errors.hospitalisationRecente)}
              >
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '10px',
                    border: `${
                      Boolean(touched.hospitalisationRecente && errors.hospitalisationRecente) &&
                      '1px solid red'
                    }`,
                    borderRadius: `${
                      Boolean(touched.hospitalisationRecente && errors.hospitalisationRecente) &&
                      '10px'
                    }`
                  }}
                  spacing={1}
                >
                  <FormLabel component="label">Hospitalisation récente:</FormLabel>
                  <Stack direction={{ xs: 'row', sm: 'row' }}>
                    <FormControlLabel
                      value="true"
                      control={
                        <Radio checked={patientFormCause.hospitalisationRecente === 'true'} />
                      }
                      label="Oui"
                    />
                    <FormControlLabel
                      value="false"
                      control={
                        <Radio checked={patientFormCause.hospitalisationRecente === 'false'} />
                      }
                      label="Non"
                    />
                  </Stack>
                </Stack>
              </RadioGroup>
              <TextField
                sx={{ padding: '2px' }}
                // fullWidth
                label="Diagnostic hopital"
                value={patientFormCause.diagnostiqueHospitalisation}
                disabled={hospitalisationDesabled}
                onChange={handleDiagnostiqueHospitalisation}
                // {...getFieldProps('diagnostiqueHospitalisation')}
                error={Boolean(
                  touched.diagnostiqueHospitalisation && errors.diagnostiqueHospitalisation
                )}
                helperText={
                  touched.diagnostiqueHospitalisation && errors.diagnostiqueHospitalisation
                }
              />
              <RadioGroup
                onChange={handleChangePriseProduitBasePlante}
                error={Boolean(touched.produitPlante && errors.produitPlante)}
                helperText={touched.produitPlante && errors.produitPlante}
              >
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '10px',
                    border: `${
                      Boolean(touched.produitPlante && errors.produitPlante) && '1px solid red'
                    }`,
                    borderRadius: `${
                      Boolean(touched.produitPlante && errors.produitPlante) && '10px'
                    }`
                  }}
                  spacing={1}
                >
                  <FormLabel component="label">Prise des produits à base des plantes:</FormLabel>
                  <Stack direction={{ xs: 'row', sm: 'row' }}>
                    <FormControlLabel
                      value="true"
                      control={<Radio checked={patientFormCause.produitPlante === 'true'} />}
                      label="Oui"
                    />
                    <FormControlLabel
                      value="false"
                      control={<Radio checked={patientFormCause.produitPlante === 'false'} />}
                      label="Non"
                    />
                  </Stack>
                </Stack>
              </RadioGroup>
              <TextField
                sx={{ padding: '2px' }}
                // fullWidth
                label="Si Oui veuillez précisez la durée"
                value={patientFormCause.dureeTraitementProduitPlante}
                disabled={priseProduitBasePlanteDesabled}
                onChange={handleDureeTraitementProduitPlante}
                // {...getFieldProps('dureeTraitementProduitPlante')}
                error={Boolean(
                  touched.dureeTraitementProduitPlante && errors.dureeTraitementProduitPlante
                )}
                helperText={
                  touched.dureeTraitementProduitPlante && errors.dureeTraitementProduitPlante
                }
              />
            </Stack>
          </Grid>
          <Grid item xs={10} sm={6} md={6}>
            <Stack spacing={3}>
              <Select
                native
                // {...getFieldProps('termeGrossesse')}
                onChange={handleDureeTermeGrossesse}
                error={Boolean(touched.termeGrossesse && errors.termeGrossesse)}
                helperText={touched.termeGrossesse && errors.termeGrossesse}
              >
                <option value="" selected disabled hidden>
                  Terme de la grossesse
                </option>
                <option value="Prématuré ">Prématuré</option>
                <option value="A terme">A terme</option>
              </Select>
              <Select
                native
                // {...getFieldProps('calendrierVaccin')}
                // required
                onChange={handleCalendrierVaccin}
                error={Boolean(touched.calendrierVaccin && errors.calendrierVaccin)}
                helperText={touched.calendrierVaccin && errors.calendrierVaccin}
              >
                <option value="" selected disabled hidden>
                  Calendrier vaccinal
                </option>
                <option value="Calendrier vaccinal à jour">Calendrier vaccinal à jour</option>
                <option value="Calendrier vaccinal non à jour">
                  Calendrier vaccinal non à jour
                </option>
              </Select>
              <TextField
                sx={{ padding: '2px' }}
                value={patientFormCause.preciserCalendrierVaccinNonjour}
                label="Si Calendrier vaccinal non à jour veuillez préciser le vaccin non recu ..."
                disabled={calendrierVaccinDesabled}
                onChange={handlePreciserCalendrierVaccinNonjour}
                // {...getFieldProps('preciserCalendrierVaccinNonjour')}
                error={Boolean(
                  touched.preciserCalendrierVaccinNonjour && errors.preciserCalendrierVaccinNonjour
                )}
                helperText={
                  touched.preciserCalendrierVaccinNonjour && errors.preciserCalendrierVaccinNonjour
                }
              />
              <RadioGroup
                required
                // {...getFieldProps('atcdMas')}
                onChange={handleAtcdMas}
                error={Boolean(touched.atcdMas && errors.atcdMas)}
                // helperText={touched.atcdMas && errors.atcdMas}
              >
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '10px',
                    border: `${Boolean(touched.atcdMas && errors.atcdMas) && '1px solid red'}`,
                    borderRadius: `${Boolean(touched.atcdMas && errors.atcdMas) && '10px'}`
                  }}
                  spacing={1}
                >
                  <FormLabel component="label">ATCD de MAS:</FormLabel>
                  <FormControlLabel
                    value="true"
                    control={<Radio checked={patientFormCause.atcdMas === 'true'} />}
                    label="Oui"
                  />
                  <FormControlLabel
                    value="false"
                    control={<Radio checked={patientFormCause.atcdMas === 'false'} />}
                    label="Non"
                  />
                </Stack>
              </RadioGroup>
              <Select
                native
                // {...getFieldProps('dpm')}
                onChange={handleDpm}
                helperText={touched.dpm && errors.dpm}
                error={Boolean(touched.dpm && errors.dpm)}
              >
                <option value="" selected disabled hidden>
                  DPM
                </option>
                <option value="Normal">Normal</option>
                <option value="Anormal">Anormal</option>
              </Select>
              <TextField
                sx={{ padding: '2px' }}
                disabled={dpmDesabled}
                value={patientFormCause.dpmAnormalPrecision}
                label="Si DPM est anormal veuillez préciser"
                onChange={handleDpmAnormalPrecision}
                // {...getFieldProps('dpmAnormalPrecision')}
                helperText={touched.dpmAnormalPrecision && errors.dpmAnormalPrecision}
                error={Boolean(touched.dpmAnormalPrecision && errors.dpmAnormalPrecision)}
              />
              <RadioGroup
                sx={{ padding: '2px' }}
                // {...getFieldProps('atcdRougeole')}
                onChange={handleAtcdRougeole}
                helperText={touched.atcdRougeole && errors.atcdRougeole}
                error={Boolean(touched.atcdRougeole && errors.atcdRougeole)}
              >
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '10px',
                    border: `${
                      Boolean(touched.atcdRougeole && errors.atcdRougeole) && '1px solid red'
                    }`,
                    borderRadius: `${
                      Boolean(touched.atcdRougeole && errors.atcdRougeole) && '10px'
                    }`
                  }}
                  spacing={1}
                >
                  <FormLabel component="label">ATCD de Rougeole dans la fratrie:</FormLabel>
                  <Stack direction={{ xs: 'row', sm: 'row' }}>
                    <FormControlLabel
                      value="true"
                      control={<Radio checked={patientFormCause.atcdRougeole === 'true'} />}
                      label="Oui"
                    />
                    <FormControlLabel
                      value="false"
                      control={<Radio checked={patientFormCause.atcdRougeole === 'false'} />}
                      label="Non"
                    />
                  </Stack>
                </Stack>
              </RadioGroup>
              <RadioGroup
                sx={{ padding: '2px' }}
                onChange={handleTerrainVih}
                // {...getFieldProps('terrainVih')}
                helperText={touched.terrainVih && errors.terrainVih}
                error={Boolean(touched.terrainVih && errors.terrainVih)}
              >
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '10px',
                    border: `${
                      Boolean(touched.terrainVih && errors.terrainVih) && '1px solid red'
                    }`,
                    borderRadius: `${Boolean(touched.terrainVih && errors.terrainVih) && '10px'}`
                  }}
                  spacing={1}
                >
                  <FormLabel component="label">Terrain VIH connu:</FormLabel>
                  <Stack direction={{ xs: 'row', sm: 'row' }}>
                    <FormControlLabel
                      value="true"
                      control={<Radio checked={patientFormCause.terrainVih === 'true'} />}
                      label="Oui"
                    />
                    <FormControlLabel
                      value="false"
                      control={<Radio checked={patientFormCause.terrainVih === 'false'} />}
                      label="Non"
                    />
                  </Stack>
                </Stack>
              </RadioGroup>
              <TextField
                sx={{ padding: '2px' }}
                autoComplete="nbr"
                type="text"
                value={patientFormCause.nombreChute}
                label="Nombre de chute"
                onChange={handleNombreChute}
                // {...getFieldProps('nombreChute')}
                helperText={touched.nombreChute && errors.nombreChute}
                error={Boolean(touched.nombreChute && errors.nombreChute)}
              />
              <RadioGroup
                sx={{ padding: '2px' }}
                // fullWidth
                onChange={handleVaccinationRougeole}
                helperText={touched.vaccinationRougeole && errors.vaccinationRougeole}
                // {...getFieldProps('vaccinationRougeole')}
                error={Boolean(touched.vaccinationRougeole && errors.vaccinationRougeole)}
              >
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '10px',
                    border: `${
                      Boolean(touched.vaccinationRougeole && errors.vaccinationRougeole) &&
                      '1px solid red'
                    }`,
                    borderRadius: `${
                      Boolean(touched.vaccinationRougeole && errors.vaccinationRougeole) && '10px'
                    }`
                  }}
                  spacing={1}
                >
                  <FormLabel component="label">Vaccination rougeole:</FormLabel>
                  <Stack direction={{ xs: 'row', sm: 'row' }}>
                    <FormControlLabel
                      value="true"
                      control={<Radio checked={patientFormCause.vaccinationRougeole === 'true'} />}
                      label="Oui"
                    />
                    <FormControlLabel
                      value="false"
                      control={<Radio checked={patientFormCause.vaccinationRougeole === 'false'} />}
                      label="Non"
                    />
                  </Stack>
                </Stack>
              </RadioGroup>
              <Select
                native
                // fullWidth
                onChange={handleAsphyxiePrerinatale}
                helperText={touched.asphyxiePrerinatale && errors.asphyxiePrerinatale}
                // {...getFieldProps('asphyxiePrerinatale')}
                error={Boolean(touched.asphyxiePrerinatale && errors.asphyxiePrerinatale)}
              >
                <option value="" selected disabled hidden>
                  Asphyxie périnatale
                </option>
                <option value="pas de cri">pas de cri</option>
                <option value="a crié spontanément oui">a crié spontanément</option>
                <option value="cri après réanimation">cri après réanimation</option>
              </Select>
              <RadioGroup
                sx={{ padding: '2px' }}
                // fullWidth
                // {...getFieldProps('cocktailAtb')}
                onChange={handlecocktailAtb}
                error={Boolean(touched.cocktailAtb && errors.cocktailAtb)}
                helperText={touched.cocktailAtb && errors.cocktailAtb}
              >
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '10px',
                    border: `${
                      Boolean(touched.cocktailAtb && errors.cocktailAtb) && '1px solid red'
                    }`,
                    borderRadius: `${Boolean(touched.cocktailAtb && errors.cocktailAtb) && '10px'}`
                  }}
                  spacing={1}
                >
                  <FormLabel component="label">Notion de prise de cocktail d’ATB</FormLabel>
                  <Stack direction={{ xs: 'row', sm: 'row' }}>
                    <FormControlLabel
                      value="true"
                      control={<Radio checked={patientFormCause.cocktailAtb === 'true'} />}
                      label="Oui"
                    />
                    <FormControlLabel
                      value="false"
                      control={<Radio checked={patientFormCause.cocktailAtb === 'false'} />}
                      label="Non"
                    />
                  </Stack>
                </Stack>
              </RadioGroup>
              <TextField
                sx={{ padding: '2px' }}
                // fullWidth
                type="text"
                value={patientFormCause.cocktailAtbDuree}
                disabled={cocktailAtbDesabled}
                label="Si notion de prise de cocktail est Oui, veuillez préciser la durée"
                onChange={handleCocktailAtbDuree}
                // {...getFieldProps('cocktailAtbDuree')}
                helperText={touched.cocktailAtbDuree && errors.cocktailAtbDuree}
                error={Boolean(touched.cocktailAtbDuree && errors.cocktailAtbDuree)}
              />
              <RadioGroup
                onChange={handleAtcdDuTbcDansFratrie}
                // {...getFieldProps('atcdDuTbcDansFratrie')}
                // helperText={touched.atcdDuTbcDansFratrie && errors.atcdDuTbcDansFratrie}
                // error={Boolean(touched.atcdDuTbcDansFratrie && errors.atcdDuTbcDansFratrie)}
              >
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '10px',
                    border: `${
                      Boolean(touched.atcdDuTbcDansFratrie && errors.atcdDuTbcDansFratrie) &&
                      '1px solid red'
                    }`,
                    borderRadius: `${
                      Boolean(touched.atcdDuTbcDansFratrie && errors.atcdDuTbcDansFratrie) && '10px'
                    }`
                  }}
                  spacing={1}
                >
                  <FormLabel component="label">ATCD de TBC dans la fratrie:</FormLabel>
                  <Stack direction={{ xs: 'row', sm: 'row' }}>
                    <FormControlLabel
                      value="true"
                      control={<Radio checked={patientFormCause.atcdDuTbcDansFratrie === 'true'} />}
                      label="Oui"
                    />
                    <FormControlLabel
                      value="false"
                      control={
                        <Radio checked={patientFormCause.atcdDuTbcDansFratrie === 'false'} />
                      }
                      label="Non"
                    />
                  </Stack>
                </Stack>
              </RadioGroup>
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
            size="large"
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
