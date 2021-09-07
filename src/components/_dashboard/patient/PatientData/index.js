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
  console.log(indentity);
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          md={5}
          sx={{ raduis: '16px', boxShadow: '0 0 2px 0 rgb(145 158 171 / 24%)' }}
        >
          <Avatar
            variant="square"
            width="100"
            height="100"
            sx={{
              width: '40%',
              height: '32%'
            }}
            alt="N"
            src={`/static/mock-images/avatars/avatar_${indentity.prenom_patient}.jpg`}
          />
          <InputLabel>Nom: {indentity.prenom_patient}</InputLabel>
          <InputLabel>Prénom: {indentity.prenom_patient}</InputLabel>
          <InputLabel>Postnom: {indentity.postnom_patient}</InputLabel>
          <InputLabel>Taille: {indentity.taille} Cm </InputLabel>
          <InputLabel>Périmètre brachial: {indentity.peri_brachail}</InputLabel>
          <InputLabel>Périmètre Cranien: {indentity.peri_cranien}</InputLabel>
          <InputLabel>Provenance: {indentity.provenance_patient}</InputLabel>
          <InputLabel>Poids Actuel: {indentity.poidsActuel}</InputLabel>
          <InputLabel>Adresse: {indentity.adresse_patient}</InputLabel>
          <InputLabel>Téléphone: 0815824640</InputLabel>
          <InputLabel>Sexe: {indentity.sexe_patient}</InputLabel>
          <InputLabel>Age : {indentity.age_patient} mois</InputLabel>
          <InputLabel>Poids naissance: {indentity.poids_naissance} g</InputLabel>
          <InputLabel>Mode arriver:{indentity.mode_arrive} </InputLabel>
          <InputLabel>Diversification aliment :{indentity.diversification_aliment}</InputLabel>
          <div className={classes.demo} />
        </Grid>
        <Grid item xs={12} md={5}>
          <Typography variant="h3" className={classes.title}>
            Cause Malnutrition
          </Typography>
          <InputLabel>AsphyxiePrerinatale: </InputLabel>
          <InputLabel>ATC Rougeole: </InputLabel>
          <InputLabel>CalendrierVaccin: </InputLabel>
          <InputLabel>Dpm: </InputLabel>
          <InputLabel>Dpm AnormalPrecision:</InputLabel>
          <InputLabel>Eig: </InputLabel>
          <InputLabel>Lieu d'accouchement: </InputLabel>
          <InputLabel>MasFratrie: </InputLabel>
          <InputLabel>MatcdMas: </InputLabel>
          <InputLabel>Nombre de Chute: </InputLabel>
          <InputLabel>Poids de naissance: </InputLabel>
          <InputLabel>Rang Fratrie: </InputLabel>
          <InputLabel>SejourNeo: </InputLabel>
          <InputLabel>Taille Fratrie: </InputLabel>
          <InputLabel>Tbc Chez Parent: </InputLabel>
          <InputLabel>Tbc Chez TbcGuerie: </InputLabel>
          <InputLabel>Terme grossesse: </InputLabel>
          <InputLabel>Terrain Vih: </InputLabel>
          <InputLabel>Vaccinatio Rougeole:</InputLabel>
          <div className={classes.demo} />
        </Grid>
        <Grid item xs={12} md={5}>
          <Typography variant="h3" className={classes.title}>
            Famille
          </Typography>
          <InputLabel>Nom tuteur: </InputLabel>
          <InputLabel>Date Naissance Tutuer: </InputLabel>
          <InputLabel>Date de naissance mère: </InputLabel>
          <InputLabel>Mère enceinte: </InputLabel>
          <InputLabel>Mère en vie: </InputLabel>
          <InputLabel>Repas par jour: </InputLabel>
          <InputLabel>Nombre d'enfant: </InputLabel>
          <InputLabel>Posseder une radio ou télévision: </InputLabel>
          <InputLabel>Religion: </InputLabel>
          <InputLabel>Scolarité mère: </InputLabel>
          <InputLabel>Statut mariage: </InputLabel>
          <InputLabel>Taille menage: </InputLabel>
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
