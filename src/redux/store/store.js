import { configureStore } from '@reduxjs/toolkit';
import dashboardReducer from '../reducers/dashboardReducer';
// import patientReducer from '../reducers/patientSlice';

export default configureStore({
  reducer: {
    dashboard: dashboardReducer
  }
});
