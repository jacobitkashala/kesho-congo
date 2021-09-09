// import { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import propTypes from 'prop-types';
import { styled, InputLabel, Stack, Avatar, Grid, Typography } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

import { LoadingButton } from '@material-ui/lab';
// import { addPatientAsync } from '../../../../redux/reducers/patientSlice';
import newPatientData from '../../../../_mocks_/patient';

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
  // const classes = useStyles();
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  // const message = useSelector((state) => state);
  // const [error, setError] = useState(false);
  // const [loader, setLoader] = useState(false);
  const { indentity, CauseMalnutrition, FamalyData } = DataPatient;
  console.log(FamalyData);
  const newPatient = {};
  // newPatient.atcd_mas = '1';
  // newPatient.nbre_chute = CauseMalnutrition.NombreChute;
  // newPatient.date_naissance_tuteur = '2020-10-10';
  // newPatient.terme_grossesse = CauseMalnutrition.Termegrossesse;
  // newPatient.sejour_neonat = CauseMalnutrition.SejourNeo;

  // newPatient.rang_fratrie = CauseMalnutrition.RangFratrie;

  // newPatient.date_examen = '2020-01-23';
  // newPatient.type_contraception = 'moderne';
  // newPatient.contraception_naturelle = 'arti';
  // // newPatient.age_patient = indentity.age_patient;
  // newPatient.nom_patient = ;
  // newPatient.age_patient = indentity.age_patient;
  // newPatient.provenance_patient = indentity.provenance_patient;
  // newPatient.poids_naissance = indentity.poids_naissance;
  // newPatient.mois_fin_allaitement = indentity.ageFinAlletement;

  // famill;
  // FamalyData.NbreRepasJour: ""
  // FamalyData.NiveauSocioEconomique: "Primaire"
  // FamalyData.PossederTeleRadio: "Oui"
  // FamalyData.ProffessionChefMenage: "Travail à temps partiel (maçon, menuisier)"
  // FamalyData.Religion: "Norrmal"
  // FamalyData.Tribut: "Rega"
  // FamalyData.consommationPoisson: "Oui"
  // FamalyData.contraceptionMere: "Oui"
  // FamalyData.contraceptionNaturel: "contraceptif injectable à progestatifs seuls"
  // FamalyData.contraceptionType: "Naturel"
  // FamalyData.dateNaissanceChefMenage: "2021-09-10"
  // FamalyData.dateNaissanceMere: "2021-09-09"
  // FamalyData.mereEnceinte: "Oui"
  // FamalyData.nbrEnfant: "2"
  // FamalyData.nbrFemme: ""
  // FamalyData.pereMariage: "Norrmal"
  // FamalyData.professionMere: "Salariée formelle,infirmier,Ong,enseignante"
  // FamalyData.scolariteMere: "Analphabète"
  // FamalyData.statutMarital: "Mariée"
  // FamalyData.typeContraceptionNaturel: "Abstinence"

  // newPatient.date_naissance_patient = indentity.dataNaissancePatient;

  newPatient.atcd_mas = '1';
  newPatient.nbre_chute = CauseMalnutrition.NombreChute;
  newPatient.mas_fratrie = CauseMalnutrition.MasFratrie;
  newPatient.terme_grossesse = CauseMalnutrition.Termegrossesse;
  newPatient.sejour_neonat = CauseMalnutrition.SejourNeo;
  newPatient.eig = CauseMalnutrition.Eig;
  newPatient.lieu_accouchement = CauseMalnutrition.LieuAccouchement;
  newPatient.asphyxie_perinatal = CauseMalnutrition.AsphyxiePrerinatale;
  newPatient.cause_dpm = 'malaria';
  newPatient.dpm = CauseMalnutrition.Dpm;
  newPatient.calendrier_vaccinal = '1';
  newPatient.vaccin_non_recu = 'rougeole';
  newPatient.produit_plante = 'true';
  newPatient.duree_produit_plante = '10';
  newPatient.rang_fratrie = CauseMalnutrition.RangFratrie;
  newPatient.taille_fratrie = CauseMalnutrition.TailleFratrie;
  newPatient.atcd_rougeole_fratrie = CauseMalnutrition.AtcdRougeole;
  newPatient.vaccination_rougeole = '1';
  newPatient.terrain_vih = CauseMalnutrition.TerrainVih;
  newPatient.tbc = CauseMalnutrition.Tdc;
  newPatient.atcd_du_tbc_dans_fratrie = '1';
  newPatient.hospitalisation_recente = 'true';
  newPatient.diagnostique_hospitalisation = 'frf';
  newPatient.traitement_nutri = indentity.traitementNutritionnel;
  newPatient.age_fin_allaitement = indentity.ageFinAllaitement;
  newPatient.allaitement_6mois = 'oui';
  newPatient.cocktail_atb = '1';
  newPatient.duree_prise_atb = '234';
  newPatient.peri_cranien = indentity.peri_cranien;
  newPatient.peri_brachial = indentity.peri_brachail;
  newPatient.poids = indentity.poidsActuel;
  newPatient.taille = indentity.taille;
  newPatient.type_malnutrition = indentity.typeMalnutrition;
  newPatient.date_examen = '2020-01-23';
  newPatient.nom_patient = indentity.nom_patient;
  newPatient.postnom_patient = indentity.postnom_patient;
  newPatient.prenom_patient = indentity.prenom_patient;
  newPatient.sexe_patient = indentity.sexe_patient;
  newPatient.age_patient = '25';
  newPatient.adresse_patient = indentity.adresse_patient;
  newPatient.date_naissance_patient = indentity.dataNaissancePatient;
  newPatient.provenance_patient = indentity.provenance_patient;
  newPatient.mode_arrive = indentity.mode_arrive;
  newPatient.poids_naissance = indentity.poids_naissance;
  newPatient.fin_allaitement = '4';
  newPatient.mois_fin_allaitement = '10';
  newPatient.diversification_aliment = indentity.diversification_aliment;
  newPatient.constitution_aliment = indentity.constitutionAliment;
  newPatient.telephone = indentity.telephone;
  newPatient.type_statut_marital = 'accrue';
  newPatient.id_famille = '1';
  newPatient.type_status_marital = FamalyData.statutMarital;
  newPatient.taille_menage = FamalyData.tailleMenage;
  newPatient.vivre_deux_parents = FamalyData.vivreAvecParent;
  newPatient.mere_enceinte = 'oui';
  newPatient.mere_en_vie = FamalyData.mereEnVie;
  newPatient.pere_en_vie = FamalyData.pereEnvie;
  newPatient.profession_mere = 'commercante';
  newPatient.profession_chef_menage = 'commercant';
  newPatient.age_mere = '45';
  newPatient.scolarite_mere = FamalyData.professionMere;
  newPatient.type_contraception = 'moderne';
  newPatient.contraception_mere = 'true';
  newPatient.contraception_naturelle = FamalyData.typeContraceptionNaturel;
  newPatient.contraception_moderne = 'null_';
  newPatient.niveau_socioeconomique = 'bien';
  newPatient.statut_marital = 'celib';
  newPatient.nbre_femme_pere = FamalyData.nbrFemme;
  newPatient.tribu = 'mongo';
  newPatient.religion = 'chretien';
  newPatient.posseder_radio_tele = '1';
  newPatient.nbre_repas = '3';
  newPatient.consommation_poisson = '1';
  newPatient.atb = '1';
  newPatient.liste_atb = 'oui';
  newPatient.tbc_parents = CauseMalnutrition.TbcChezParent;
  newPatient.tbc_chez = CauseMalnutrition.TbcLequel;
  newPatient.tbc_gueris = CauseMalnutrition.TbcGuerie;
  newPatient.duree_traitement_tbc = CauseMalnutrition.duree_traitement_tbc;
  newPatient.tbc_declarer_finie = '1';
  newPatient.nom_tuteur = FamalyData.nomTuteur;
  newPatient.date_naissance_tuteur = '2007-03-04';
  newPatient.image_patient = 'https =//www.moimoi.monimage.cd';
  // console.log(newPatientData);

  const handleSubmit = () => {
    Axios.request({
      method: 'POST',
      url: `https://kesho-congo-api.herokuapp.com/patient`,
      data: newPatient,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `bearer ${localStorage.getItem('token')}`
      }
    })
      .then((response) => {
        // setLoader(false);
        const message = response.data;
        console.log(message);
        // navigate('/dashboard/personnel', { replace: true });
      })
      .catch((Error) => {
        console.log(Error);
      });
    // navigate('/dashboard/user', { replace: true });
  };
  return (
    <div>
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
          <div />
        </Grid>
        <Grid item xs={12} md={5}>
          <Typography variant="h3">Cause Malnutrition</Typography>
          <InputLabel>AsphyxiePrerinatale: </InputLabel>
          <InputLabel>ATC Rougeole:{CauseMalnutrition.AtcdRougeole} </InputLabel>
          <InputLabel>CalendrierVaccin: </InputLabel>
          <InputLabel>Dpm: {CauseMalnutrition.Dpm}</InputLabel>
          <InputLabel>Dpm AnormalPrecision: {CauseMalnutrition.DpmAnormalPrecision}</InputLabel>
          <InputLabel>Eig: {CauseMalnutrition.Eig}</InputLabel>
          <InputLabel>Lieu d'accouchement: {CauseMalnutrition.LieuAccouchement}</InputLabel>
          <InputLabel>MasFratrie: {CauseMalnutrition.MasFratrie}</InputLabel>
          <InputLabel>MatcdMas: {CauseMalnutrition.MatcdMas}</InputLabel>
          <InputLabel>Nombre de Chute: {CauseMalnutrition.NombreChute}</InputLabel>
          <InputLabel>Poids de naissance: </InputLabel>
          <InputLabel>Rang Fratrie: {CauseMalnutrition.RangFratrie}</InputLabel>
          <InputLabel>SejourNeo: {CauseMalnutrition.SejourNeo}</InputLabel>
          <InputLabel>Taille Fratrie: {CauseMalnutrition.TailleFratrie}</InputLabel>
          <InputLabel>Tbc Chez Parent: {CauseMalnutrition.TbcChezParent}</InputLabel>
          <InputLabel>Tbc Chez TbcGuerie: {CauseMalnutrition.TbcGuerie}</InputLabel>
          <InputLabel>Terme grossesse:{CauseMalnutrition.Termegrossesse}</InputLabel>
          <InputLabel>Terrain Vih: {CauseMalnutrition.TerrainVih}</InputLabel>
          <InputLabel>Vaccinatio Rougeole:</InputLabel>
          <div />
        </Grid>
        <Grid item xs={12} md={5}>
          <Typography variant="h3">Famille</Typography>
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
          <div />
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
          Enregistrer
        </LoadingButton>
      </Stack>
    </div>
  );
}
