// import { Icon } from '@iconify/react';
import { useRef, useState } from 'react';
// import { Link as RouterLink } from 'react-router-dom';
// material  Typography
// -------------------MODAL
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

// ----------------------------------------------------------------------
import Delete from '@material-ui/icons/Delete';
import { MenuItem, ListItemIcon } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { deleteUserAsync } from '../../../redux/reducers/userSlice';
// ----------------------------------------------------------------------

export default function PersonnelListToolbar({ value }) {
  const dispatch = useDispatch();
  const handleDeleteClick = () => {
    dispatch(deleteUserAsync({ id_user: value }));
    // console.log(value);
  };

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
              <Button onClick={handleDeleteClick} color="primary" autoFocus>
                Accepter
              </Button>
            </DialogActions>
          </Dialog>
        </ListItemIcon>
        {/* <ListItemText primary="Delete" primaryTypographyProps={{ variant: 'body2' }} /> */}
      </MenuItem>
    </>
  );
}
