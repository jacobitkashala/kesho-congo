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
  const newPatient = {};
  newPatient.atcd_mas = '';
  newPatient.nbre_chute = '';
  newPatient.date_naissance_tuteur = '';
  newPatient.terme_grossesse = '';
  newPatient.sejour_neonat = '';
  newPatient.eig = '';
  newPatient.lieu_accouchement = '';
  newPatient.asphyxie_perinatal = '';
  newPatient.dpm = '';
  newPatient.rang_fratrie = '';
  newPatient.taille_fratrie = '';
  newPatient.atcd_rougeole_fratrie = '';
  newPatient.vaccination_rougeole = '';
  newPatient.terrain_vih = '';
  newPatient.tbc = '';
  newPatient.atcd_du_tbc_dans_fratrie = '';
  newPatient.hospitalisation_recente = '';
  newPatient.diagnostique_hospitalisation = '';
  newPatient.cocktail_atb = '';
  newPatient.duree_prise_atb = '';
  newPatient.peri_cranien = '';
  newPatient.peri_brachial = '';
  newPatient.poids = '';
  newPatient.taille = '';
  newPatient.type_malnutrition = '';
  newPatient.date_examen = '';
  newPatient.type_contraception = '';
  newPatient.contraception_naturelle = '';
  newPatient.nom_patient = '';
  newPatient.postnom_patient = '';
  newPatient.prenom_patient = '';
  newPatient.sexe_patient = '';
  newPatient.age_patient = '';
  newPatient.provenance_patient = '';
  newPatient.mode_arrive = '';
  newPatient.poids_naissance = '';
  newPatient.fin_allaitement = '';
  newPatient.mois_fin_allaitement = '';
  newPatient.diversification_aliment = '';
  newPatient.telephone = indentity.telephone;
  newPatient.taille_famille = '';
  newPatient.vivre_deux_parents = '';
  newPatient.mere_enceinte = '';
  newPatient.mere_en_vie = '';
  newPatient.pere_en_vie = '';
  newPatient.profession_mere = '';
  newPatient.profession_chef_menage = '';
  newPatient.age_mere = '';
  newPatient.scolarite_mere = '';
  newPatient.contraception_mere = '';
  newPatient.contraception_moderne = '';
  newPatient.niveau_socioeconomique = '';
  newPatient.statut_marital = '';
  newPatient.tribu = '';
  newPatient.religion = '';
  newPatient.posseder_radio_tele = '';
  newPatient.nbre_repas = '';
  newPatient.consommation_poisson = '';
  newPatient.atb = '';
  newPatient.liste_atb = '';
  newPatient.tbc_parents = '';
  newPatient.tbc_chez = '';
  newPatient.tbc_gueris = '';
  newPatient.duree_traitement_tbc = '';
  newPatient.tbc_declarer_finie = '';
  newPatient.type_statut_marital = '';
  newPatient.nom_tuteur = '';
  newPatient.nbre_femme_pere = '';
  newPatient.taille_menage = '';
  newPatient.adresse_patient = '';
  newPatient.date_naissance_patient = '';
  newPatient.mas_fratrie = '';
  newPatient.cause_dpm = '';
  newPatient.calendrier_vaccinal = '';
  newPatient.vaccin_non_recu = '';
  newPatient.produit_plante = '';
  newPatient.duree_produit_plante = '';
  newPatient.id_user = '';
  newPatient.image_patient = 'not image';
  newPatient.traitement_nutri = '';
  newPatient.constitution_aliment = '';
  newPatient.age_fin_allaitement = '';
  newPatient.allaitement_6mois = '';

  newPatient.sexe_patient = indentity.sexe_patient;
  const handleSubmit = () => {
    navigate('/dashboard/user', { replace: true });
  };
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
          <InputLabel>Téléphone: {indentity.telephone}</InputLabel>
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
          onClick={handleSubmit}
          onSubmit={handleSubmit}
          size="large"
          sx={{ width: 200, marginLeft: '20px', marginTop: '20px' }}
        >
          Submit
        </LoadingButton>
      </Stack>
    </div>
  );
}
