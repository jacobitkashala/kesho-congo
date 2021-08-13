import React from 'react';
import './Details.css';
import Chart from '../../components/charts/chart/Chart';
import { productData } from '../../_mocks_/dummyData';
import PatientCard from '../../components/patientCard/PatientCard';
import AddAnthro from '../../components/addAnthro/AddAnthro';

const Details = () => (
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
);

export default Details;
