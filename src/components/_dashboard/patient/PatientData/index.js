import React from 'react';
import propTypes from 'prop-types';
import { styled, InputLabel, Stack, Avatar, Grid, Typography } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';

import { LoadingButton } from '@material-ui/lab';

const useStyles = styled((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752
  },
  demo: {
    backgroundColor: theme.palette.background.paper
  },
  title: {
    margin: theme.spacing(4, 0, 2)
  }
}));
PatientData.propTypes = {
  DataPatient: propTypes.object,
  PrevStep: propTypes.func
};
export default function PatientData({ DataPatient, PrevStep }) {
  const classes = useStyles();
  const navigate = useNavigate();
  const { indentity, CauseMalnutrition, FamalyData } = DataPatient;
  console.log(DataPatient.FamalyData);
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          md={5}
          sx={{ raduis: '16px', boxShadow: '0 0 2px 0 rgb(145 158 171 / 24%)' }}
        >
          {/* <Typography variant="h3" className={classes.title}>
            Identité Patient
          </Typography> */}
          <Avatar
            variant="square"
            width="100"
            height="100"
            sx={{
              width: '40%',
              height: '32%'
            }}
            alt={indentity.Name}
            src={`/static/mock-images/avatars/avatar_${1}.jpg`}
          />
          <InputLabel>Nom: {indentity.Name}</InputLabel>
          <InputLabel>Prénom: {indentity.FirstName}</InputLabel>
          <InputLabel>Postnom: {indentity.LastName}</InputLabel>
          <InputLabel>Adresse: {indentity.Adresse}</InputLabel>
          <InputLabel>Téléphone: {indentity.Telephone}</InputLabel>
          <InputLabel>Sexe: {indentity.Sexe}</InputLabel>
          <InputLabel>Age en (mois): {indentity.Age}</InputLabel>
          <InputLabel>Poids: {indentity.Weight} gr</InputLabel>
          <InputLabel>Perimetre cranien:{indentity.Pc}</InputLabel>
          <InputLabel>Taille: </InputLabel>
          <InputLabel>Périmètre brachial: {indentity.Pb}</InputLabel>
          <InputLabel>Provenance: {indentity.Provenance}</InputLabel>
          <div className={classes.demo} />
        </Grid>
        <Grid item xs={12} md={5}>
          <Typography variant="h3" className={classes.title}>
            Cause Malnutrition
          </Typography>
          <InputLabel>AsphyxiePrerinatale: {CauseMalnutrition.AsphyxiePrerinatale}</InputLabel>
          <InputLabel>ATC Rougeole: {CauseMalnutrition.AtcdRougeole}</InputLabel>
          <InputLabel>CalendrierVaccin:{CauseMalnutrition.CalendrierVaccin}</InputLabel>
          <InputLabel>Dpm: {CauseMalnutrition.Dpm}</InputLabel>
          <InputLabel>Dpm AnormalPrecision:{CauseMalnutrition.DpmAnormalPrecision}</InputLabel>
          <InputLabel>Eig:{CauseMalnutrition.Eig}</InputLabel>
          <InputLabel>Lieu d'accouchement:{CauseMalnutrition.LieuAccouchement}</InputLabel>
          <InputLabel>MasFratrie:{CauseMalnutrition.MasFratriet}</InputLabel>
          <InputLabel>MatcdMas:{CauseMalnutrition.MatcdMas}</InputLabel>
          <InputLabel>Nombre de Chute:{CauseMalnutrition.NombreChute}</InputLabel>
          <InputLabel>Poids de naissance:{CauseMalnutrition.PoidsNaissance}</InputLabel>
          <InputLabel>Rang Fratrie:{CauseMalnutrition.RangFratrie}</InputLabel>
          <InputLabel>SejourNeo:{CauseMalnutrition.SejourNeo}</InputLabel>
          <InputLabel>Taille Fratrie:{CauseMalnutrition.TailleFratrie}</InputLabel>
          <InputLabel>Tbc Chez Parent:{CauseMalnutrition.TbcChezParent}</InputLabel>
          <InputLabel>Tbc Chez TbcGuerie:{CauseMalnutrition.TbcGuerie}</InputLabel>
          <InputLabel>Terme grossesse:{CauseMalnutrition.Termegrossesse}</InputLabel>
          <InputLabel>Terrain Vih:{CauseMalnutrition.TerrainVih}</InputLabel>
          <InputLabel>Vaccinatio Rougeole:{CauseMalnutrition.VaccinatioRougeole}</InputLabel>
          <div className={classes.demo} />
        </Grid>
        <Grid item xs={12} md={5}>
          <Typography variant="h3" className={classes.title}>
            Famille
          </Typography>
          <InputLabel>Nom tuteur: {FamalyData.NomTuteure}</InputLabel>
          <InputLabel>Date Naissance Tutuer:{FamalyData.DateNaissanceTutuer}</InputLabel>
          <InputLabel>Date de naissance mère: {FamalyData.DateNaissanceMere}</InputLabel>
          <InputLabel>Mère enceinte: {FamalyData.MereEnceinte}</InputLabel>
          <InputLabel>Mère en vie:{FamalyData.MereEnvie}</InputLabel>
          <InputLabel>Repas par jour:{FamalyData.NbrRepasJour}</InputLabel>
          <InputLabel>Nombre d'enfant:{FamalyData.NbreEnfant}</InputLabel>
          <InputLabel>Posseder une radio ou télévision:{FamalyData.PossederTeleRadio}</InputLabel>
          <InputLabel>Religion:{FamalyData.Religion}</InputLabel>
          <InputLabel>Scolarité mère:{FamalyData.ScolariteMere}</InputLabel>
          <InputLabel>Statut mariage:{FamalyData.StatutMarital}</InputLabel>
          <InputLabel>Taille menage:{FamalyData.TailleMenage}</InputLabel>
          <div className={classes.demo} />
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
          type="button"
          variant="contained"
          onClick={() => {
            navigate('/dashboard/user', { replace: true });
          }}
          onSubmit={() => {
            navigate('/dashboard/user', { replace: true });
          }}
          size="large"
          sx={{ width: 200, marginLeft: '20px', marginTop: '20px' }}
        >
          Submit
        </LoadingButton>
      </Stack>
    </div>
  );
}
