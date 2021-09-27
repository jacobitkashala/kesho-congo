import * as Yup from 'yup';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import RefreshIcon from '@material-ui/icons/Refresh';
import { useFormik, Form, FormikProvider } from 'formik';
import { useNavigate, useLocation } from 'react-router-dom';
import { fakeAuth } from '../fakeAuth';

export default function RefreshButton() {
  const location = useLocation();
  const navigate = useNavigate();
  const { from } = location.state || { from: { pathname: '/dashboard/app' } };
  const RegisterSchema = Yup.object().shape();
  const formik = useFormik({
    initialValues: {},
    validationSchema: RegisterSchema,
    onSubmit: () => {
      fakeAuth.login(() => {
        navigate(from);
        navigate(`/dashboard/patient`, { replace: true });
      });
    }
  });
  const { handleSubmit } = formik;
  return (
    <FormikProvider value={formik}>
      <Form onSubmit={handleSubmit}>
        <Tooltip title="Rafraîchir" color="primary" type="submit">
          <IconButton>
            <RefreshIcon />
          </IconButton>
        </Tooltip>
      </Form>
    </FormikProvider>
  );
}
