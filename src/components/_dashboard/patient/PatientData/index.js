/* eslint-disable no-nested-ternary */
import { useState } from 'react';
import propTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import { InputLabel, Stack, Avatar, Grid, Card, Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

import { LoadingButton } from '@material-ui/lab';
import Label from '../../../Label';

const useStyles = makeStyles(() => ({
  root: {
    position: 'absolute',
    left: '60%',
    top: '45%',
    zIndex: '100'
    // transform: 'translate(-50%)'
  },
  labelRoot: {
    '&&': {
      color: 'red'
    }
  }
}));

PatientData.propTypes = {
  DataPatient: propTypes.object,
  PrevStep: propTypes.func
};
export default function PatientData({ DataPatient, PrevStep }) {
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  const classes = useStyles();
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
  newPatient.terme_grossesse = CauseMalnutrition.termeGrossesse;
  newPatient.sejour_neonat = CauseMalnutrition.SejourNeo;
  newPatient.eig = CauseMalnutrition.Eig;
  newPatient.lieu_accouchement = CauseMalnutrition.lieuAccouchement;
  newPatient.asphyxie_perinatal = CauseMalnutrition.asphyxiePrerinatale;
  newPatient.cause_dpm = CauseMalnutrition.DpmAnormalPrecision;
  newPatient.dpm = CauseMalnutrition.dpm;
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
  newPatient.peri_cranien = indentity.perimetreCranien;
  newPatient.peri_brachial = indentity.perimetreBrachail;
  newPatient.poids = indentity.poidsActuel;
  newPatient.taille = indentity.taille;
  newPatient.type_malnutrition = indentity.typeMalnutrition;
  newPatient.date_examen = '2020-01-23';
  newPatient.nom_patient = indentity.NomPatient;
  newPatient.postnom_patient = indentity.postnom_patient;
  newPatient.prenom_patient = indentity.fistNamePatient;
  newPatient.sexe_patient = indentity.sexePatient;
  newPatient.adresse_patient = indentity.adressePatient;
  newPatient.date_naissance_patient = indentity.dataNaissancePatient;
  newPatient.provenance_patient =
    indentity.provenance_patient === 'Autres'
      ? indentity.ExplicationProvenance
      : indentity.provenance_patient;
  newPatient.mode_arrive =
    indentity.modeArrive === 'Autres' ? indentity.ExplicationAutre : indentity.modeArriver;
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
          navigate('/dashboard/patient', { replace: true });
        } else {
          setLoader((prevState) => !prevState);
        }
      })
      .catch((Error) => {
        console.log(Error);
      });
  };

  return (
    <Container>
      {loader && (
        <div className={classes.root}>
          <CircularProgress />
        </div>
      )}
      <Grid container spacing={2}>
        <Grid item xs={11} sm={6} md={5}>
          <Card
            sx={{
              margin: 2,
              padding: 5
            }}
          >
            <Avatar
              variant="square"
              sx={{
                width: '160px',
                height: '180px'
              }}
              alt={indentity.fistNamePatient}
              src={`/static/mock-images/avatars/avatar_${indentity.fistNamePatient}.jpg`}
            />
            <Typography>{`${indentity.fistNamePatient}  ${indentity.NomPatient}`}</Typography>
            <Label
              variant="filled"
              color={`${
                indentity.typeMalnutrition === 'MAC'
                  ? 'error'
                  : indentity.typeMalnutrition === 'MAM'
                  ? 'secondary'
                  : 'primary'
              }`}
            >
              {indentity.typeMalnutrition}
            </Label>
            <InputLabel>
              Sex : <span style={{ color: 'black' }}>{indentity.sexePatient}</span>
            </InputLabel>
            <InputLabel>
              Taille :<span style={{ color: 'black' }}> {indentity.taille} Cm</span>
            </InputLabel>
            <InputLabel>
              Périmètre brachial :
              <span style={{ color: 'black' }}> {indentity.perimetreBrachail} Cm</span>
            </InputLabel>
            <InputLabel>
              Périmètre Cranien :
              <span style={{ color: 'black' }}> {indentity.perimetreCranien} Cm</span>
            </InputLabel>
            <InputLabel>
              Poids Actuel :<span style={{ color: 'black' }}> {indentity.poidsActuel}Kg</span>
            </InputLabel>
            <InputLabel>
              Poids naissance :<span style={{ color: 'black' }}> {indentity.poids_naissance}g</span>
            </InputLabel>
            <InputLabel>
              Provenance :<span style={{ color: 'black' }}> {indentity.provenancePatient}</span>
            </InputLabel>
            <InputLabel>
              Adresse :<span style={{ color: 'black' }}> {indentity.adressePatient}</span>
            </InputLabel>
            <InputLabel>
              Date de naissance :
              <span style={{ color: 'black' }}> {indentity.dataNaissancePatient}</span>
            </InputLabel>
            <InputLabel>
              Mode arriver:
              <span style={{ color: 'black' }}> {indentity.modeArriver}</span>
            </InputLabel>
            <InputLabel>
              Allaitement Exclisif:
              <span style={{ color: 'black' }}> {indentity.allaitementExclisifSixMois}</span>
            </InputLabel>
            <InputLabel>
              Téléphone:
              <span style={{ color: 'black' }}> {indentity.telephone}</span>
            </InputLabel>
            <InputLabel>
              Traitement Nutritionnel:
              <span style={{ color: 'black' }}> {indentity.traitementNutritionnel}</span>
            </InputLabel>
            <InputLabel>
              Consommer le poisson:
              <span style={{ color: 'black' }}> {FamalyData.consommationPoisson}</span>
            </InputLabel>
          </Card>
        </Grid>
        <Grid item xs={11} sm={6} md={5}>
          <Card
            sx={{
              margin: 2,
              padding: 5
            }}
          >
            <Typography>Famille</Typography>
            <InputLabel>
              Pere en vie :<span style={{ color: 'black' }}> {FamalyData.pereEnvie}</span>
            </InputLabel>
            <InputLabel>
              Nombre de repas /jr :
              <span style={{ color: 'black' }}> {FamalyData.NbrRepasJour}</span>
            </InputLabel>
            <InputLabel>
              Niveau socio :
              <span style={{ color: 'black' }}> {FamalyData.NiveauSocioEconomique}</span>
            </InputLabel>
            <InputLabel>
              Nom chef Menage :<span style={{ color: 'black' }}> {FamalyData.nomTuteur}</span>
            </InputLabel>
            <InputLabel>
              Date de Père :
              <span style={{ color: 'black' }}> {FamalyData.dateNaissanceChefMenage}</span>
            </InputLabel>
            <InputLabel>
              Posseder une radio ou télé :
              <span style={{ color: 'black' }}>
                {`${FamalyData.PossederTeleRadio ? 'Oui' : 'Non'}`}
              </span>
            </InputLabel>
            <InputLabel>
              ATC Rougeole:
              <span style={{ color: 'black' }}>{`${
                CauseMalnutrition.AtcdRougeole ? 'Oui' : 'Nom'
              }`}</span>
            </InputLabel>
            <InputLabel>
              Profession:
              <span style={{ color: 'black' }}> {FamalyData.ProffessionChefMenage}</span>
            </InputLabel>
            <InputLabel>
              Dpm :<span style={{ color: 'black' }}> {CauseMalnutrition.dpm}</span>
            </InputLabel>
            <InputLabel>
              Dpm AnormalPrecision :
              <span style={{ color: 'black' }}> {CauseMalnutrition.DpmAnormalPrecision}</span>
            </InputLabel>
            <InputLabel>
              Taille ménage :<span style={{ color: 'black' }}> {FamalyData.tailleMenage}</span>
            </InputLabel>
            <InputLabel>
              Eig:
              <span style={{ color: 'black' }}> {CauseMalnutrition.Eig}</span>
            </InputLabel>
            <InputLabel>
              MasFratrie:
              <span style={{ color: 'black' }}>{`${
                CauseMalnutrition.MasFratrie ? 'Oui' : 'Non'
              }`}</span>
            </InputLabel>
            <InputLabel>
              Réligion:
              <span style={{ color: 'black' }}> {FamalyData.Religion}</span>
            </InputLabel>
            <InputLabel>
              MatcdMasn:
              <span style={{ color: 'black' }}> {CauseMalnutrition.MatcdMas}</span>
            </InputLabel>
            <InputLabel>
              Nombre de chute:
              <span style={{ color: 'black' }}> {CauseMalnutrition.NombreChute}</span>
            </InputLabel>
            <InputLabel>
              Rang Fratrie :<span style={{ color: 'black' }}> {CauseMalnutrition.RangFratrie}</span>
            </InputLabel>
            <InputLabel>
              Se jour Neo :
              <span style={{ color: 'black' }}>
                {`${CauseMalnutrition.SejourNeo ? 'Oui' : 'Non'}`}
              </span>
            </InputLabel>
            <InputLabel>
              Taille Fratrie:
              <span style={{ color: 'black' }}> {CauseMalnutrition.TailleFratrie}</span>
            </InputLabel>
            <InputLabel>
              Tbc Chez Parent :
              <span style={{ color: 'black' }}>{`${
                CauseMalnutrition.TbcChezParent ? 'Oui' : 'Non'
              }`}</span>
            </InputLabel>
            <InputLabel>
              Tbc traiter :
              <span style={{ color: 'black' }}>{`${
                CauseMalnutrition.TbcTraiter ? 'Oui' : 'Non'
              }`}</span>
            </InputLabel>
            <InputLabel>
              Tbc Chez TbcGuerie :
              <span style={{ color: 'black' }}>
                {`${CauseMalnutrition.TbcGuerie ? 'Oui' : 'Non'}`}
              </span>
            </InputLabel>
            <InputLabel>
              Terrain Vih :
              <span style={{ color: 'black' }}>
                {`${CauseMalnutrition.TerrainVih ? 'Oui' : 'Non'}`}
              </span>
            </InputLabel>
            <Typography>Mère</Typography>
            <InputLabel>
              Mère en vie :
              <span style={{ color: 'black' }}>{`${FamalyData.mereEnVie ? 'Oui' : 'Non'}`}</span>
            </InputLabel>
            <InputLabel>
              Date naisance mère:
              <span style={{ color: 'black' }}> {FamalyData.dateNaissanceMere}</span>
            </InputLabel>
            <InputLabel>
              Mère enceint:
              <span style={{ color: 'black' }}> {FamalyData.mereEnceinte}</span>
            </InputLabel>
            <InputLabel>
              Contraception mère:
              <span style={{ color: 'black' }}> {FamalyData.contraceptionMere}</span>
            </InputLabel>
            <InputLabel>
              Type contraception:
              <span style={{ color: 'black' }}> {FamalyData.contraceptionType}</span>
            </InputLabel>
            <InputLabel>
              Scolarité mère:
              <span style={{ color: 'black' }}> {FamalyData.scolariteMere}</span>
            </InputLabel>
            <InputLabel>
              Profession:<span style={{ color: 'black' }}> {FamalyData.professionMere}</span>
            </InputLabel>
          </Card>
        </Grid>
        <Grid item xs={11} sm={6} md={5}>
          <Card
            sx={{
              margin: 2,
              marginTop: '-50%',
              padding: 5
            }}
          >
            <Typography>Synthome</Typography>
            <InputLabel>
              Terme grossesse:
              <span style={{ color: 'black' }}> {CauseMalnutrition.termeGrossesse} </span>
            </InputLabel>
            <InputLabel>
              Lieu d'accouchement :
              <span style={{ color: 'black' }}> {CauseMalnutrition.lieuAccouchement}</span>
            </InputLabel>
            <InputLabel>
              ATC Rougeole:
              <span style={{ color: 'black' }}> {CauseMalnutrition.AtcdRougeole} </span>
            </InputLabel>
            <InputLabel>
              Nombre de chute:
              <span style={{ color: 'black' }}> {CauseMalnutrition.nombreChute} </span>
            </InputLabel>
            <InputLabel>
              Asphyxie prerinatale:
              <span style={{ color: 'black' }}> {CauseMalnutrition.asphyxiePrerinatale} </span>
            </InputLabel>
            <InputLabel>
              Hospitalisation :
              <span style={{ color: 'black' }}>
                {CauseMalnutrition.diagnostiqueHospitalisation}
              </span>
            </InputLabel>
          </Card>
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
    </Container>
  );
}
