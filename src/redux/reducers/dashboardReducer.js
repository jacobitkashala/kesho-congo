import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getReports = createAsyncThunk('dashoard/getdashboard', async () => {
  const response = await fetch('https://kesho-congo-api.herokuapp.com/reporting', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `bearer ${localStorage.getItem('token')}`
    }
  });
  if (response.ok) {
    const reportData = await response.json();
    return { reportData };
  }
});

// export const addPatientAsync = createAsyncThunk('patient/addPatient', async (payload) => {
//   try {
//     console.log(`dans la fonction add patient ${payload}`);
//     const response = await fetch('https://kesho-congo-api.herokuapp.com/patient', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `bearer ${localStorage.getItem('token')}`
//       },
//       body: JSON.stringify(payload)
//     });
//     if (response.ok) {
//       const message = await response.json();
//       // console.log(message);
//       return { message };
//     }
//   } catch (error) {
//     console.log('error', error);
//   }
// });

// export const deletePatientAsync = createAsyncThunk(
//   'patient/deletePatientAsync',
//   async (payload) => {
//     //  console.log(payload);
//     const response = await fetch(
//       `https://kesho-congo-api.herokuapp.com/patient?id_patient=${payload.id}`,
//       {
//         method: 'DELETE',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `bearer ${localStorage.getItem('token')}`
//         }
//       }
//     );
//     if (response.ok) {
//       return { id: payload.id };
//     }
//   }
// );

const dashboardReducer = createSlice({
  name: 'dashboard',
  initialState: [],
  reducers: {},
  extraReducers: {
    [getReports.fulfilled]: (state, action) => action.payload.reportData

    // [addPatientAsync.fulfilled]: (state, action) => {
    //   console.log('add ok');
    //   state.push(action.payload);
    // },
    // [deletePatientAsync.fulfilled]: (state, action) =>
    //   // console.log('id', action.payload.id);
    //   state.filter((patient) => patient.id !== action.payload.id)
  }
});
export default dashboardReducer.reducer;
