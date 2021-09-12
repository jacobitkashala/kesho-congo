import { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';, Typography
import propTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import { InputLabel, Stack, Avatar, Grid, Typography } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

import { LoadingButton } from '@material-ui/lab';
import Label from '../../../Label';
import './styledPatientData.css';

PatientData.propTypes = {
  DataPatient: propTypes.object,
  PrevStep: propTypes.func
};
export default function PatientData({ DataPatient, PrevStep }) {
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();

  const { indentity, CauseMalnutrition, FamalyData } = DataPatient;
  console.log(DataPatient);

  const newPatient = {};
  // FamalyData.Tribut: "Autre ethnie du sud-kivu"

  // FamalyData.contraceptionNaturel: ""
  // : ""
  // dateNaissanceChefMenage
  // FamalyData.nbrEnfant: "23"
  // FamalyData.pereMariage: "Anormal"

  newPatient.atcd_mas = CauseMalnutrition.atcdMas;
  newPatient.nbre_chute = CauseMalnutrition.NombreChute;
  newPatient.mas_fratrie = CauseMalnutrition.MasFratrie;
  newPatient.terme_grossesse = CauseMalnutrition.Termegrossesse;
  newPatient.sejour_neonat = CauseMalnutrition.SejourNeo;
  newPatient.eig = CauseMalnutrition.Eig;
  newPatient.lieu_accouchement = CauseMalnutrition.lieu_accouchement;
  newPatient.asphyxie_perinatal = CauseMalnutrition.AsphyxiePrerinatale;
  newPatient.cause_dpm = CauseMalnutrition.DpmAnormalPrecision;
  newPatient.dpm = CauseMalnutrition.Dpm;
  newPatient.calendrier_vaccinal =
    CauseMalnutrition.CalendrierVaccin !== 'Calendrier vaccinal a jour'
      ? CauseMalnutrition.PreciserCalendrierVaccinNonJour
      : CauseMalnutrition.CalendrierVaccin;
  newPatient.vaccin_non_recu = 'rougeole';
  newPatient.produit_plante = CauseMalnutrition.produitPlante;
  newPatient.duree_produit_plante = '24'; // CauseMalnutrition.dureeProduitPlante;
  newPatient.rang_fratrie = CauseMalnutrition.RangFratrie;
  newPatient.taille_fratrie = CauseMalnutrition.TailleFratrie;
  newPatient.atcd_rougeole_fratrie = CauseMalnutrition.AtcdRougeole;
  newPatient.vaccination_rougeole = CauseMalnutrition.VaccinatioRougeole;
  newPatient.terrain_vih = CauseMalnutrition.TerrainVih;
  newPatient.tbc = CauseMalnutrition.Tdc;
  newPatient.atcd_du_tbc_dans_fratrie = CauseMalnutrition.atcd_du_tbc_dans_fratrie;
  newPatient.hospitalisation_recente = CauseMalnutrition.hospitalisation_recente;
  newPatient.diagnostique_hospitalisation =
    CauseMalnutrition.diagnostique_hospitalisation === ''
      ? 'rien'
      : CauseMalnutrition.diagnostique_hospitalisation;
  newPatient.traitement_nutri = CauseMalnutrition.TbcTraiter;
  newPatient.age_fin_allaitement =
    indentity.ageFinAllaitement === '' ? 4 : indentity.ageFinAllaitement;
  newPatient.allaitement_6mois = indentity.allaitementExclisifSixMois;
  newPatient.cocktail_atb = CauseMalnutrition.cocktail_atb;
  newPatient.duree_prise_atb = '23'; // CauseMalnutrition.cocktail_atb_preci;
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
  newPatient.adresse_patient = indentity.adresse_patient;
  newPatient.date_naissance_patient = indentity.dataNaissancePatient;
  newPatient.provenance_patient =
    indentity.provenance_patient === 'Autres'
      ? indentity.ExplicationProvenance
      : indentity.provenance_patient;
  newPatient.mode_arrive =
    indentity.mode_arrive === 'Autres' ? indentity.ExplicationAutre : indentity.mode_arrive;
  newPatient.poids_naissance = indentity.poids_naissance;
  newPatient.fin_allaitement = '4';
  newPatient.mois_fin_allaitement = '10';
  newPatient.diversification_aliment = indentity.diversification_aliment;
  newPatient.constitution_aliment = indentity.constitutionAliment;
  newPatient.telephone = indentity.telephone;
  newPatient.type_statut_marital =
    FamalyData.pereMariage === '' ? 'non marié' : FamalyData.pereMariage;
  newPatient.taille_menage = FamalyData.tailleMenage;
  newPatient.vivre_deux_parents = FamalyData.vivreAvecParent;
  newPatient.mere_enceinte = FamalyData.mereEnceinte;
  newPatient.mere_en_vie = FamalyData.mereEnVie;
  newPatient.pere_en_vie = FamalyData.pereEnvie;
  newPatient.profession_mere = FamalyData.professionMere;
  newPatient.profession_chef_menage = FamalyData.ProffessionChefMenage;
  newPatient.age_mere = FamalyData.dateNaissanceMere;
  newPatient.scolarite_mere = FamalyData.scolariteMere;
  newPatient.type_contraception = FamalyData.contraceptionType;
  newPatient.contraception_mere = FamalyData.contraceptionMere;
  newPatient.contraception_naturelle = FamalyData.typeContraceptionNaturel;
  newPatient.contraception_moderne = 'null_';
  newPatient.niveau_socioeconomique = FamalyData.NiveauSocioEconomique;
  newPatient.statut_marital = FamalyData.statutMarital;
  newPatient.nbre_femme_pere = FamalyData.nbrFemme;
  newPatient.tribu = FamalyData.Tribut;
  newPatient.religion = FamalyData.Religion;
  newPatient.posseder_radio_tele = FamalyData.PossederTeleRadio;
  newPatient.nbre_repas = FamalyData.NbrRepasJour;
  newPatient.consommation_poisson = FamalyData.consommationPoisson;
  newPatient.atb = '1';
  newPatient.liste_atb = 'oui';
  newPatient.tbc_parents = CauseMalnutrition.TbcChezParent;
  newPatient.tbc_chez = CauseMalnutrition.TbcLequel;
  newPatient.tbc_gueris = CauseMalnutrition.TbcGuerie;
  newPatient.duree_traitement_tbc = CauseMalnutrition.duree_traitement_tbc;
  newPatient.tbc_declarer_finie = '1';
  newPatient.nom_tuteur = FamalyData.nomTuteur;
  newPatient.date_naissance_tuteur = FamalyData.dateNaissanceChefMenage;
  newPatient.image_patient = 'https://www.moimoi.monimage.cd';
  const handleSubmit = () => {
    setLoader((prevState) => !prevState);
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
        const resp = response.data;
        if (resp.message === 'Enregistrement effectuer avec succès') {
          setLoader((prevState) => !prevState);
          navigate('/dashboard/user', { replace: true });
        } else {
          setLoader((prevState) => !prevState);
        }
      })
      .catch((Error) => {
        console.log(Error);
      });
  };

  return (
    <div className="root">
      {loader && (
        <div className="loading">
          <CircularProgress />
        </div>
      )}
      <Grid container spacing={2}>
        <Grid item xs={10} md={5} className="presentation">
          <Avatar
            variant="square"
            sx={{
              width: '40%',
              height: '32%'
            }}
            alt={indentity.prenom_patient}
            src={`/static/mock-images/avatars/avatar_${indentity.prenom_patient}.jpg`}
          />
          <Label
            variant="filled"
            color={`${indentity.typeMalnutrition === 'MAC' ? 'error' : 'warning'}`}
          >
            {indentity.typeMalnutrition}
          </Label>
          <InputLabel>{indentity.prenom_patient}</InputLabel>
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
        <Grid item xs={12} md={6}>
          <Typography variant="h3"> Cause Malnutrition</Typography>
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
        {/* <Grid item xs={12} md={5}>
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
        </Grid> */}
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
