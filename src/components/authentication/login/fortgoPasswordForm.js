import { useState } from 'react';
import * as Yup from 'yup';
import { useFormik, Form, FormikProvider } from 'formik';
import { Stack, TextField, Button } from '@material-ui/core';
import { LoadingButton } from '@material-ui/lab';
import { Link as RouterLink } from 'react-router-dom';
import { styled } from '@material-ui/core/styles';
import Axios from 'axios';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const Div = styled('div')(() => ({
  // textAlign: 'center',
  width: '100%',
  // border: '1px solid black',
  position: 'relative',
  left: '50%',
  transform: 'translate(-50%,0)',
  paddingLeft: '60%'
}));
export default function FortgoPasswordForm() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  const LoginSchema = Yup.object().shape({
    myEmail: Yup.string().email('Votre mail doit être valide').required('Email requis'),
    firstName: Yup.string().required('Prénom requis'),
    lastName: Yup.string().required('Nom requis')
  });
  const formik = useFormik({
    initialValues: {
      myEmail: '',
      firstName: '',
      lastName: ''
    },
    validationSchema: LoginSchema,
    onSubmit: ({ myEmail, firstName, lastName }) => {
      setLoading(true);

      console.log('clicked');
      Axios.post(
        `https://kesho-congo-api.herokuapp.com/user/reset`,
        {
          nom_user: lastName,
          prenom_user: firstName,
          email: myEmail
        }
        // {
        //   headers: {
        //     'Content-Type': 'application/json',
        //     Authorization: `bearer ${localStorage.getItem('token')}`
        //   }
        // }
      )
        .then((response) => {
          setLoading(false);
          console.log('Ma reponse:', response.data.email);
          setOpen(true);
          setUserEmail(response.data.email);
        })
        .catch((err) => {
          setLoading(false);
        });
    }
  });
  const { errors, touched, getFieldProps, values, handleSubmit, handleChange } = formik;
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <FormikProvider value={formik}>
        <Form onSubmit={handleSubmit}>
          <Stack spacing={3}>
            <TextField
              fullWidth
              label="Prénom"
              value={values.firstName}
              onChange={handleChange}
              {...getFieldProps('firstName')}
              error={Boolean(touched.firstName && errors.firstName)}
              helperText={touched.firstName && errors.firstName}
            />
            <TextField
              fullWidth
              label="Nom"
              value={values.lastName}
              onChange={handleChange}
              {...getFieldProps('lastName')}
              error={Boolean(touched.lastName && errors.lastName)}
              helperText={touched.lastName && errors.lastName}
            />
            <TextField
              fullWidth
              autoComplete="username"
              label="Adresse mail"
              value={values.myEmail}
              onChange={handleChange}
              {...getFieldProps('myEmail')}
              error={Boolean(touched.myEmail && errors.myEmail)}
              helperText={touched.myEmail && errors.myEmail}
            />
          </Stack>
          <Div>
            <LoadingButton size="large" component={RouterLink} to="/" sx={{ marginTop: 5 }}>
              Annuler
            </LoadingButton>
            <LoadingButton
              size="large"
              type="submit"
              variant="contained"
              loading={loading}
              sx={{ marginTop: 5 }}
            >
              Réinitialiser
            </LoadingButton>
          </Div>
        </Form>
      </FormikProvider>
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Réinitialisation du mot de passe</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Un mail vous a été envoyé avec votre nouveau mot de passe à "{userEmail}".,
            Connectez-vous avec votre nouveau mot de passe
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" component={RouterLink} to="/">
            ok
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
