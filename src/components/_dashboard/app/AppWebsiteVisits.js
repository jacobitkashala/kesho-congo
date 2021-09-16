import { useEffect, useState } from 'react';
import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
import Axios from 'axios';
// material
import { Card, CardHeader, Box } from '@material-ui/core';
//
import { BaseOptionChart } from '../../charts';

// ----------------------------------------------------------------------

export default function AppWebsiteVisits() {
  const [macData, setMacData] = useState([]);
  const [mamData, setMamData] = useState([]);
  const [masData, setMasData] = useState([]);
  const [repData, setRepData] = useState([]);
  const [reports, setReports] = useState([]);
  useEffect(async () => {
    try {
      const response = await Axios.get(`https://kesho-congo-api.herokuapp.com/reporting/annuel`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `bearer ${localStorage.getItem('token')}`
        }
      });
      const data = await response.data;
      setReports(await data);
      setRepData(await data.rapport_patient_year);
      setMasData(await data.rapport_mas_year);
      setMamData(await data.rapport_mam_year);
      setMacData(await data.rapport_mac_year);
      console.log('mes données:', data);

      // setLoader(false);
    } catch (err) {
      console.log(err);
    }
  }, []);
  const output = [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43, 40];
  const CHART_DATA = [
    {
      name: 'Nombre de patients',
      type: 'column',
      data: repData.map((i) => i[0].nombre_patient)
    },
    {
      name: 'MAS',
      type: 'area',
      data: masData.map((i) => i[0].sereve_nombre)
    },
    {
      name: 'MAM',
      type: 'line',
      data: mamData.map((i) => i[0].moderee_nombre)
    },
    {
      name: 'MAC',
      type: 'line',
      data: macData.map((i) => i[0].chronique_nombre)
    }
  ];
  const chartOptions = merge(BaseOptionChart(), {
    stroke: { width: [0, 3, 3, 3] },
    plotOptions: { bar: { columnWidth: '11%', borderRadius: 4 } },
    fill: { type: ['solid', 'gradient', 'solid', 'solid'] },
    labels: [
      'Janvier',
      'Février',
      'Mars',
      'Avril',
      'Mai',
      'Juin',
      'Juillet',
      'Août',
      'Septembre',
      'Octobre',
      'Novembre',
      'Decembre'
    ],
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: (y) => {
          if (typeof y !== 'undefined') {
            return `${y.toFixed(0)} patients`;
          }
          return y;
        }
      }
    }
  });

  return (
    <Card>
      <CardHeader title="Visualisation annuelle" subheader="Kesho Congo" />
      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
        <ReactApexChart type="line" series={CHART_DATA} options={chartOptions} height={364} />
      </Box>
    </Card>
  );
}
