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

  newPatient.atcd_mas = CauseMalnutrition.atcdMas;
  newPatient.nbre_chute = CauseMalnutrition.nombreChute;
  newPatient.mas_fratrie = CauseMalnutrition.masFratrie;
  newPatient.terme_grossesse = CauseMalnutrition.termeGrossesse;
  newPatient.sejour_neonat = CauseMalnutrition.sejourNeo;
  newPatient.eig = CauseMalnutrition.eig;
  newPatient.lieu_accouchement = CauseMalnutrition.lieuAccouchement;
  newPatient.asphyxie_perinatal = CauseMalnutrition.asphyxiePrerinatale;
  newPatient.cause_dpm =
    CauseMalnutrition.dpmAnormalPrecision === '' ? 'rien' : CauseMalnutrition.dpmAnormalPrecision;
  newPatient.dpm = CauseMalnutrition.dpm;
  newPatient.calendrier_vaccinal =
    CauseMalnutrition.calendrierVaccin !== 'Calendrier vaccinal non à jour'
      ? CauseMalnutrition.calendrierVaccin
      : CauseMalnutrition.preciserCalendrierVaccinNonjour;
  newPatient.vaccin_non_recu = 'rougeole';
  newPatient.produit_plante = CauseMalnutrition.produitPlante;
  newPatient.duree_produit_plante = CauseMalnutrition.dureeProduitPlante;
  newPatient.rang_fratrie = CauseMalnutrition.rangFratrie;
  newPatient.taille_fratrie = CauseMalnutrition.tailleFratrie;
  newPatient.atcd_rougeole_fratrie = CauseMalnutrition.atcdRougeole;
  newPatient.vaccination_rougeole = CauseMalnutrition.vaccinationRougeole;
  newPatient.terrain_vih = CauseMalnutrition.terrainVih;
  newPatient.tbc = CauseMalnutrition.tbc;
  newPatient.atcd_du_tbc_dans_fratrie = CauseMalnutrition.atcdDuTbcDansFratrie;
  newPatient.hospitalisation_recente = CauseMalnutrition.hospitalisationRecente;
  newPatient.diagnostique_hospitalisation =
    CauseMalnutrition.diagnostiqueHospitalisation === ''
      ? 'rien'
      : CauseMalnutrition.diagnostiqueHospitalisation;
  newPatient.traitement_nutri =
    CauseMalnutrition.tbcTraiter === '' ? 'pas de tbc' : CauseMalnutrition.tbcTraiter;
  newPatient.age_fin_allaitement =
    indentity.ageFinAllaitement === '' ? 6 : indentity.ageFinAllaitement;
  newPatient.allaitement_6mois = indentity.allaitementExclisifSixMois;
  newPatient.cocktail_atb = '1'; // CauseMalnutrition.cocktailAtb;  // bool
  newPatient.duree_prise_atb = '23'; // CauseMalnutrition.cocktail_atb_preci; // varchar
  newPatient.peri_cranien = indentity.perimetreCranien;
  newPatient.peri_brachial = indentity.perimetreBrachail;
  newPatient.poids = indentity.poidsActuel;
  newPatient.taille = indentity.taille;
  newPatient.type_malnutrition = indentity.typeMalnutrition;
  // newPatient.date_examen = '2020-01-23';
  newPatient.nom_patient = indentity.NomPatient;
  newPatient.postnom_patient = indentity.postNomPatient;
  newPatient.prenom_patient = indentity.fistNamePatient;
  newPatient.sexe_patient = indentity.sexePatient;
  newPatient.adresse_patient = indentity.adressePatient;
  newPatient.date_naissance_patient = indentity.dataNaissancePatient;
  newPatient.provenance_patient =
    indentity.provenancePatient === 'Autres'
      ? indentity.ExplicationProvenance
      : indentity.provenancePatient;
  newPatient.mode_arrive =
    indentity.modeArrive === 'Autres' ? indentity.ExplicationAutre : indentity.modeArriver;
  newPatient.poids_naissance = indentity.poidsNaissance;
  // newPatient.fin_allaitement = '4';
  // newPatient.mois_fin_allaitement = '10';
  newPatient.diversification_aliment = '4'; // indentity.diversification_aliment;// aquel age (mois)
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
  newPatient.contraception_mere = FamalyData.contraceptionMere;
  newPatient.type_contraception =
    FamalyData.contraceptionType === '' ? 'pas de contraception' : FamalyData.contraceptionType;
  newPatient.contraception_naturelle =
    FamalyData.typeContraceptionNaturel === ''
      ? 'pas de contraception'
      : FamalyData.typeContraceptionNaturel;
  newPatient.contraception_moderne = 'null_'; // var chart
  newPatient.niveau_socioeconomique = FamalyData.NiveauSocioEconomique;
  newPatient.statut_marital = FamalyData.statutMarital === '' ? 'rien' : FamalyData.statutMarital;
  newPatient.nbre_femme_pere = FamalyData.nbrFemme;
  newPatient.tribu = FamalyData.Tribut;
  newPatient.religion = FamalyData.Religion;
  newPatient.posseder_radio_tele = FamalyData.PossederTeleRadio;
  newPatient.nbre_repas = FamalyData.NbrRepasJour;
  newPatient.consommation_poisson = FamalyData.consommationPoisson;
  newPatient.atb = '1'; // bool
  newPatient.liste_atb = 'oui'; // parent text
  newPatient.tbc_parents =
    CauseMalnutrition.tbcChezParent === '' ? false : CauseMalnutrition.tbcChezParent;
  newPatient.tbc_chez =
    CauseMalnutrition.tbcChezParent === '' ? 'rien' : CauseMalnutrition.tbcChezParent;
  newPatient.tbc_gueris = CauseMalnutrition.TbcGuerie === '' ? false : CauseMalnutrition.TbcGuerie;
  newPatient.duree_traitement_tbc =
    CauseMalnutrition.dureeTraitementTbc === '' ? '0' : CauseMalnutrition.dureeTraitementTbc;
  newPatient.tbc_declarer_finie =
    CauseMalnutrition.TbcGuerie === '' ? false : CauseMalnutrition.TbcGuerie;
  newPatient.nom_tuteur = FamalyData.nomTuteur;
  newPatient.date_naissance_tuteur = FamalyData.dateNaissanceChefMenage;
  // newPatient.image_patient = 'https://www.moimoi.monimage.cd';
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
                width: '100px',
                height: '120px'
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
                CauseMalnutrition.atcdRougeole ? 'Oui' : 'Nom'
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
              <span style={{ color: 'black' }}> {CauseMalnutrition.eig}</span>
            </InputLabel>
            <InputLabel>
              MasFratrie:
              <span style={{ color: 'black' }}>{`${
                CauseMalnutrition.MasFratrie ? 'Oui' : 'Non'
              }`}</span>
            </InputLabel>
            <InputLabel>
              Rang fratrie:
              <span style={{ color: 'black' }}> {CauseMalnutrition.rangFratrie}</span>
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
              <span style={{ color: 'black' }}> {CauseMalnutrition.tailleFratrie}</span>
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
              marginTop: '-70%',
              padding: 5
            }}
          >
            <Typography>Synthome</Typography>
            <InputLabel>
              Terme grossesse:
              <span style={{ color: 'black' }}> {CauseMalnutrition.termeGrossesse} </span>
            </InputLabel>
            <InputLabel>
              Dpm Anormal par ce que:
              <span style={{ color: 'black' }}>
                {' '}
                {CauseMalnutrition.dpmAnormalPrecision === ''
                  ? 'rien'
                  : CauseMalnutrition.dpmAnormalPrecision}{' '}
              </span>
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
            <InputLabel>
              Sejour neo :<span style={{ color: 'black' }}>{CauseMalnutrition.sejourNeo}</span>
            </InputLabel>
            <InputLabel>
              Nombre de chute :
              <span style={{ color: 'black' }}>{CauseMalnutrition.nombreChute}</span>
            </InputLabel>
            <InputLabel>
              Vaccination rougeole:
              <span style={{ color: 'black' }}>{CauseMalnutrition.vaccinationRougeole}</span>
            </InputLabel>
            <InputLabel>
              Terrain vih:
              <span style={{ color: 'black' }}>{CauseMalnutrition.terrainVih}</span>
            </InputLabel>
            <InputLabel>
              Tbc:
              <span style={{ color: 'black' }}>{CauseMalnutrition.tbc}</span>
            </InputLabel>
            <InputLabel>
              Atbc du tbc dans fratrie:
              <span style={{ color: 'black' }}>{CauseMalnutrition.atcdDuTbcDansFratrie}</span>
            </InputLabel>
            <InputLabel>
              Hospitalisation recente:
              <span style={{ color: 'black' }}>{CauseMalnutrition.hospitalisationRecente}</span>
            </InputLabel>
            <InputLabel>
              Diagnostique hopital:
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
