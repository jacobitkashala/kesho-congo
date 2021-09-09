import React, { useState, useEffect } from 'react';

import { Navigate, useLocation } from 'react-router-dom';
import './Details.css';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/styles';
import Chart from '../../components/charts/chart/Chart';
import { productData } from '../../_mocks_/dummyData';
import PatientCard from '../../components/patientCard/PatientCard';
import AddAnthro from '../../components/addAnthro/AddAnthro';
// import { fakeAuth } from '../../fakeAuth';

export default function Details() {
  const location = useLocation();
  const [loader, setLoader] = useState(true);
  const [onePatient, setOnePatient] = useState([]);
  const [isAuth, setIsAuth] = useState(localStorage.getItem('token'));
  const myId = location.pathname.split('/')[4];
  const getOnePatient = `https://kesho-congo-api.herokuapp.com/patient?id_patient=${myId}`;

  const options = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: `bearer ${localStorage.getItem('token')}`
    }
  };

  useEffect(() => {
    fetch(getOnePatient, options)
      .then((response) => response.json())
      .then((data) => {
        setLoader(false);
        setOnePatient(data);
        console.log('myData=', data.Patient.nom_patient);
        // console.log('un Patient', onePatient.Patient.id);
        // setUsersList(data);
        // // formik.setValues(data);
        // formik.setFieldValue('firstName', data.prenom_user);
        // formik.setFieldValue('lastName', data.nom_user);
        // formik.setFieldValue('middleName', data.postnom_user);
      })
      .catch((error) => {
        console.error('Error:', error);
        // fakeAuth.login(() => {
        //   navigate(from);
        //   navigate('/dashboard/app', { replace: true });
        // });
      });
  }, []);

  console.log('un Patient', onePatient.Patient);
  useEffect(() => {
    setIsAuth(isAuth);
  }, []);
  const useStyles = makeStyles((theme) => ({
    root: {
      position: 'absolute',
      left: '60%',
      top: '40%'
      // transform: 'translate(-50%)'
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
        <div className="product">
          <div className="productLeft">
            <PatientCard name="" sex="" age="" birthdate="" number="" tutor="" location="" />
            <br />
            <br />
            <AddAnthro />
          </div>
          <div className="productRight">
            <div className="productRightCard">
              <Chart data={productData} dataKey="Sales" title="Périmètre brachial" />
            </div>
            <div className="productRightCard">
              <Chart data={productData} dataKey="Sales" title="Périmètre cranien" />
            </div>
            <div className="productRightCard">
              <Chart data={productData} dataKey="Sales" title="Poids" />
            </div>
            <div className="productRightCard">
              <Chart data={productData} dataKey="Sales" title="Taille" />
            </div>
          </div>
        </div>
      )}
    </>
  ) : (
    <Navigate to="/" state={{ from: location }} />
  );
}
