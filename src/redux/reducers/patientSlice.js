import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getPatientsAsync = createAsyncThunk('patient/getPatientAsync', async () => {
  const response = await fetch('https://kesho-congo-api.herokuapp.com/patient/all', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `bearer ${localStorage.getItem('token')}`
    }
  });
  if (response.ok) {
    const patients = await response.json();
    return { patients };
  }
  return [];
});

export const addPatientAsync = createAsyncThunk('patient/addPatient', async (payload) => {
  const response = await fetch('https://kesho-congo-api.herokuapp.com/patient/all', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `bearer ${localStorage.getItem('token')}`
    },
    body: JSON.stringify(payload)
  });
  if (response.ok) {
    const patients = await response.json();
    return { patients };
  }
});

export const deletePatientAsync = createAsyncThunk(
  'patient/deletePatientAsync',
  async (payload) => {
    console.log(payload);
    const response = await fetch(
      `https://kesho-congo-api.herokuapp.com/patient?id_patient=${payload.id}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `bearer ${localStorage.getItem('token')}`
        }
      }
    );
    if (response.ok) {
      return { id: payload.id };
    }
  }
);

const patientSlice = createSlice({
  name: 'patient',
  initialState: [],
  reducers: {},
  extraReducers: {
    [getPatientsAsync.fulfilled]: (state, action) =>
      // console.log('get patients successfully');
      action.payload.patients.Patients,
    [addPatientAsync.fulfilled]: (state, action) => state.push(action.payload.patients),
    [deletePatientAsync.fulfilled]: (state, action) => {
      console.log('id', action.payload.id);
      return state.filter((patient) => patient.id !== action.payload.id);
    }
  }
});

export default patientSlice.reducer;
