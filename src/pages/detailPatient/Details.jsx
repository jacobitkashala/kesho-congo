import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import './Details.css';
import Chart from '../../components/charts/chart/Chart';
import { productData } from '../../_mocks_/dummyData';
import PatientCard from '../../components/patientCard/PatientCard';
import AddAnthro from '../../components/addAnthro/AddAnthro';
import { fakeAuth } from '../../fakeAuth';

export default function Details() {
  const location = useLocation();
  return fakeAuth.isAuthenticated ? (
    <div className="product">
      <div className="productLeft">
        <PatientCard />
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
  ) : (
    <Navigate to="/" state={{ from: location }} />
  );
}
