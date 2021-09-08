import { Icon } from '@iconify/react';
import propTypes from 'prop-types';
import { useRef, useState } from 'react';
import editFill from '@iconify/icons-eva/edit-fill';
import eyeFill from '@iconify/icons-eva/eye-fill';
import deleteFill from '@iconify/icons-eva/person-delete-fill';
import { Link as RouterLink } from 'react-router-dom';
import moreVerticalFill from '@iconify/icons-eva/more-vertical-fill';
// material
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
import { Menu, MenuItem, IconButton, ListItemIcon, Typography } from '@material-ui/core';
import Delete from '@material-ui/icons/Delete';
import { useDispatch } from 'react-redux';
import { deletePatientAsync } from '../../../redux/reducers/patientSlice';

// ----------------------------------------------------------------------

PatientMoreMenu.propTypes = {
  id_patient: propTypes.string
};

export default function PatientMoreMenu({ id_patient }) {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [loader, setLoader] = useState(false);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const dispatch = useDispatch();
  const handleDeleteClick = () => {
    setLoader(true);
    dispatch(deletePatientAsync({ id: id_patient }));
  };
  return (
    <>
      <IconButton ref={ref} onClick={() => setIsOpen(true)}>
        <Icon icon={moreVerticalFill} width={20} height={20} />
      </IconButton>

      <Menu
        open={isOpen}
        anchorEl={ref.current}
        onClose={() => setIsOpen(false)}
        PaperProps={{
          sx: { width: 189, maxWidth: '100%', py: 3 }
        }}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <MenuItem
          component={RouterLink}
          to={`detail_patient/${id_patient}`}
          sx={{ color: 'text.secondary' }}
        >
          <ListItemIcon>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                paddingLeft: '8px'
              }}
            >
              <Icon icon={eyeFill} width={40} height={25} />
              <Typography variant="h6">voir</Typography>
            </div>
          </ListItemIcon>
        </MenuItem>
        <MenuItem component={RouterLink} to="#" sx={{ color: 'text.secondary' }}>
          <ListItemIcon>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                paddingLeft: '8px'
              }}
            >
              <Icon icon={editFill} width={40} height={25} />
              <Typography variant="h6">éditer</Typography>
            </div>
          </ListItemIcon>
        </MenuItem>
        <MenuItem>
          <ListItemIcon
            sx={{ textAlign: 'center', color: 'text.secondary' }}
            onClick={handleClickOpen}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                paddingLeft: '8px'
              }}
            >
              <Icon icon={deleteFill} width={40} height={25} />
              <Typography variant="h6">supprimer</Typography>
            </div>
          </ListItemIcon>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">"Supprimer un patient?"</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Cette action est irreversible, si vous supprimez un patient vous ne serrez plus en
                mésure de recuperer ses informations.
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
        </MenuItem>
      </Menu>
    </>
  );
}
