import React, { useState, useEffect } from 'react';

import { Link as Navigate, useLocation } from 'react-router-dom';
import './Details.css';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/styles';
// import { styled } from '@material-ui/core/styles';
import Axios from 'axios';
import moment from 'moment';
import Chart from '../../components/charts/chart/Chart';
import PatientCard from '../../components/patientCard/PatientCard';
import AddAnthro from '../../components/addAnthro/AddAnthro';
import MoreDetails from './MoreDetails';

export default function Details() {
  console.log('hobed', moment().toDate('MM/DD/YYYY'));
  const location = useLocation();
  const [loader, setLoader] = useState(true);
  const [onePatient, setOnePatient] = useState([]);
  const [anthro, setAnthro] = useState([]);
  const [isAuth, setIsAuth] = useState(localStorage.getItem('token'));
  const myId = location.pathname.split('/')[4];
  useEffect(async () => {
    try {
      const response = await Axios.get(
        `https://kesho-congo-api.herokuapp.com/patient?id_patient=${myId}`,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `bearer ${localStorage.getItem('token')}`
          }
        }
      );
      const data = await response.data;
      const Patient = await data;
      const PatientBrachial = Patient.Anthropometrique;
      setAnthro(PatientBrachial);
      setOnePatient(Patient);
      setLoader(false);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const brachialPerim = [];
  const cranianPerim = [];
  const height = [];
  const weight = [];
  const putInPB = (arr) => {
    anthro.map((item) => arr.push({ name: item.date_examen, Valeur: item.peri_brachial }));
  };
  const putInPC = (arr) => {
    anthro.map((item) => arr.push({ name: item.date_examen, Valeur: item.peri_cranien }));
  };
  const putInT = (arr) => {
    anthro.map((item) => arr.push({ name: item.date_examen, Valeur: item.taille }));
  };
  const putInP = (arr) => {
    anthro.map((item) => arr.push({ name: item.date_examen, Valeur: item.poids }));
  };

  putInPB(brachialPerim);
  putInPC(cranianPerim);
  putInT(height);
  putInP(weight);

  useEffect(() => {
    setIsAuth(isAuth);
  }, []);
  const useStyles = makeStyles(() => ({
    root: {
      display: 'flex',
      position: 'relative',
      justifyContent: 'center',
      top: '50%'
    },
    labelRoot: {
      '&&': {
        color: 'red'
      }
    }
  }));
  const classes = useStyles();
  return isAuth ? (
    <>
      {loader ? (
        <div className={classes.root}>
          <CircularProgress />
        </div>
      ) : (
        <>
          <div className="product">
            <div className="productLeft">
              <PatientCard
                name={`${onePatient.Patient.nom_patient} ${onePatient.Patient.postnom_patient}`}
                sex={onePatient.Patient.sexe_patient}
                age={
                  onePatient.PatientAge[0].ageEnMois <= 59
                    ? `${onePatient.PatientAge[0].ageEnMois} mois`
                    : `${Math.round(onePatient.PatientAge[0].ageEnAnnee)} ans`
                }
                birthdate={onePatient.Patient.date_naissance_patient}
                number={onePatient.Patient.telephone}
                tutor={onePatient.Famille.nom_tuteur}
                location={onePatient.Patient.provenance_patient}
                malnutrition={onePatient.Anthropometrique[0].type_malnutrition}
              />
              <br />
              <br />
              <AddAnthro id={myId} />
            </div>
            <div className="productRight">
              <div className="productRightCard">
                <Chart
                  data={brachialPerim}
                  dataKey="Valeur"
                  title={`Périmètre brachial: ${
                    brachialPerim.reverse()[brachialPerim.length - 1].Valeur
                  } cm`}
                />
              </div>
              <div className="productRightCard">
                <Chart
                  data={cranianPerim}
                  dataKey="Valeur"
                  title={`Périmètre cranien: ${
                    cranianPerim.reverse()[cranianPerim.length - 1].Valeur
                  } cm`}
                />
              </div>
              <div className="productRightCard">
                <Chart
                  data={weight}
                  dataKey="Valeur"
                  title={`Poids: ${weight.reverse()[weight.length - 1].Valeur} kg`}
                />
              </div>
              <div className="productRightCard">
                <Chart
                  data={height}
                  dataKey="Valeur"
                  title={`Taille: ${height.reverse()[height.length - 1].Valeur} cm`}
                />
              </div>
            </div>
          </div>
          <br />
          <br />
          <MoreDetails id={myId} />
        </>
      )}
    </>
  ) : (
    <Navigate to="/" state={{ from: location }} />
  );
}
