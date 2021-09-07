// import { Icon } from '@iconify/react';
import { useRef, useState } from 'react';
import Axios from 'axios';
import { useNavigate, Navigate, useLocation } from 'react-router-dom';
// import { Link as RouterLink } from 'react-router-dom';
// material  Typography
// -------------------MODAL
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import { LoadingButton } from '@material-ui/lab';
import { useFormik, Form, FormikProvider } from 'formik';

// ----------------------------------------------------------------------
import Delete from '@material-ui/icons/Delete';
import { MenuItem, ListItemIcon } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { deleteUserAsync } from '../../../redux/reducers/userSlice';
import { fakeAuth } from '../../../fakeAuth';
// ----------------------------------------------------------------------

export default function PersonnelListToolbar({ value }) {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);

  const location = useLocation();
  const { from } = location.state || { from: { pathname: '/dashboard/app' } };
  // ---------------------------------LOgic redux-------------------------------------
  // const dispatch = useDispatch();
  // const handleDeleteClick = () => {
  //   dispatch(deleteUserAsync({ id_user: value }));
  //   // console.log(value);
  // };
  // ---------------------------------LOgic redux-------------------------------------

  // ---------------------------------LOgic state-------------------------------------
  const handleDeleteClick = () => {
    setLoader(true);
    Axios.delete(`https://kesho-congo-api.herokuapp.com/user?id_user=${value}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `bearer ${localStorage.getItem('token')}`
      }
    })
      .then((response) => {
        const message = response.data;
        console.log('Yves', message);
        fakeAuth.login(() => {
          navigate(from);
          navigate('/dashboard/personnel', { replace: true });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // ---------------------------------LOgic state------------------------------------
  // const formik = useFormik({
  //   onSubmit: () => {
  //     Axios.delete(`https://kesho-congo-api.herokuapp.com/user?id_user=${value}`, {
  //       headers: {
  //         'Content-Type': 'application/json',
  //         Authorization: `bearer ${localStorage.getItem('token')}`
  //       }
  //     })
  //       .then((response) => {
  //         fakeAuth.login(() => {
  //           navigate(from);
  //           navigate('/dashboard/personnel', { replace: true });
  //         });
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }
  // });
  // const { isSubmitting, handleSubmit } = formik;
  // -----------------MODAL ACTIONS

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // -----------------------------
  return (
    <>
      <MenuItem>
        <ListItemIcon sx={{ color: 'red' }}>
          <Delete width={35} height={35} onClick={handleClickOpen} />
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">"Supprimer un utilisateur?"</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Cette action est irreversible, si vous supprimez un utilisateur vous ne serrez plus
                en mésure de recuperer ses informations.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Annuler
              </Button>
              {/* <Button onClick={handleDeleteClick} color="primary" autoFocus>
                Accepter
              </Button> */}
              <LoadingButton
                onClick={handleDeleteClick}
                size="medium"
                type="submit"
                variant="contained"
                loading={loader}
              >
                Accepter
              </LoadingButton>
            </DialogActions>
          </Dialog>
        </ListItemIcon>
      </MenuItem>
    </>
  );
}
