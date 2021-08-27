import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
import Login from './pages/Login';
import Patient from './pages/Patient';
import NotFound from './pages/Page404';
import Personnel from './pages/Personnel';
import NewPatient from './pages/NewPatient';
import Settings from './components/_dashboard/personnel/Setting';
import DashboardApp from './pages/DashboardApp';
import NewPersonnel from './pages/NewPersonnel';
import PageDetail from './pages/detailPatient/Details';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <Login />
    },
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        // { path: '/', element: <Navigate to="/dashboard/app" replace /> },
        { path: 'setting', element: <Settings /> },
        { path: 'user', element: <Patient /> },
        { path: 'app', element: <DashboardApp /> },
        { path: 'personnel', element: <Personnel /> },
        { path: 'detail_patient', element: <PageDetail /> },
        { path: 'user/add_Patient', element: <NewPatient /> },
        { path: 'personnel/add_Personnel', element: <NewPersonnel /> }
      ]
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: 'login', element: <Login /> },
        { path: '404', element: <NotFound /> },
        { path: '/', element: <Navigate to="/dashboard" /> },
        { path: '*', element: <Navigate to="/404" /> }
      ]
    },

    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}
